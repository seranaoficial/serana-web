// serana-web Express bootstrap
//
// In dev (NODE_ENV !== production) we mount Vite as middleware so HMR keeps
// working. In prod we serve the built dist/ folder. On top of either layer we
// expose the small server-only API surface the public site needs:
//
//   POST /api/checkout/mp/preference    Create a Mercado Pago Preference for
//                                        an order that is already in Supabase.
//   POST /api/webhooks/mercadopago      MP notification handler — fetches the
//                                        payment, validates it and calls the
//                                        Supabase RPC register_payment.
//   GET  /api/health                    Used by Dokploy.
//
// All Mercado Pago / Supabase service-role secrets stay in env vars and never
// reach the browser.

import express, { type Request, type Response, type NextFunction } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env from .env.local (matches Vite's convention) and .env (fallback) so
// `tsx server.ts` works both locally and in Dokploy (which already injects env
// vars at the process level).
dotenv.config({ path: path.join(__dirname, '.env.local') });
dotenv.config({ path: path.join(__dirname, '.env') });

const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';
const APP_URL = process.env.APP_URL ?? `http://localhost:${PORT}`;
const SUPABASE_URL = process.env.VITE_SUPABASE_URL ?? process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;
const MP_WEBHOOK_SECRET = process.env.MP_WEBHOOK_SECRET;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.warn(
    '[serana-web/server] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. ' +
      'Checkout endpoints will return 500 until these are configured.',
  );
}
if (!MP_ACCESS_TOKEN) {
  console.warn(
    '[serana-web/server] Missing MP_ACCESS_TOKEN. /api/checkout/mp/* endpoints will return 500.',
  );
}

const supabaseAdmin = SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
  ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    })
  : null;

type OrderRow = {
  id: string;
  order_number: number;
  total_amount: number | string;
  discount_amount: number | string | null;
  coupon_code: string | null;
  payment_method: string | null;
  payment_status: string;
  status: string;
  customer_id: string | null;
};

type CustomerRow = {
  id: string;
  full_name: string;
  phone: string;
  email: string | null;
};

type OrderItemSummary = {
  product_id: string;
  product_name: string;
  quantity: number;
  unit_price: number;
};

async function fetchOrderForCheckout(orderId: string) {
  if (!supabaseAdmin) throw new Error('supabase_admin_not_configured');
  const { data: order, error: oErr } = await supabaseAdmin
    .from('sales.orders'.replace('sales.', '')) // PostgREST exposes public schema; use views/RPC
    .select('id, order_number, total_amount, discount_amount, coupon_code, payment_method, payment_status, status, customer_id')
    .eq('id', orderId)
    .maybeSingle();
  if (oErr || !order) {
    // Fall back to the public order_board_view which always exists in public schema.
    const { data: viewRow, error: vErr } = await supabaseAdmin
      .from('order_board_view')
      .select(
        'order_id, order_number, total_amount, discount_amount, coupon_code, payment_method, payment_status, status, customer_id, customer_name, customer_phone, item_summary',
      )
      .eq('order_id', orderId)
      .maybeSingle();
    if (vErr || !viewRow) {
      throw new Error('order_not_found');
    }
    return {
      order: {
        id: viewRow.order_id as string,
        order_number: viewRow.order_number as number,
        total_amount: viewRow.total_amount as number,
        discount_amount: (viewRow as any).discount_amount ?? 0,
        coupon_code: (viewRow as any).coupon_code ?? null,
        payment_method: viewRow.payment_method as string | null,
        payment_status: viewRow.payment_status as string,
        status: viewRow.status as string,
        customer_id: viewRow.customer_id as string | null,
      } as OrderRow,
      customer: viewRow.customer_id
        ? ({
            id: viewRow.customer_id as string,
            full_name: (viewRow.customer_name as string) ?? '',
            phone: (viewRow.customer_phone as string) ?? '',
            email: null,
          } as CustomerRow)
        : null,
      items: (viewRow.item_summary as OrderItemSummary[] | null) ?? [],
    };
  }
  // direct path
  const customer = order.customer_id
    ? (await supabaseAdmin
        .from('customers_view')
        .select('id, full_name, phone, email')
        .eq('id', order.customer_id)
        .maybeSingle()).data as CustomerRow | null
    : null;
  // items via the public board view
  const { data: boardRow } = await supabaseAdmin
    .from('order_board_view')
    .select('item_summary')
    .eq('order_id', order.id)
    .maybeSingle();
  return {
    order: order as OrderRow,
    customer,
    items: (boardRow?.item_summary as OrderItemSummary[] | null) ?? [],
  };
}

async function startServer() {
  const app = express();
  app.disable('x-powered-by');
  app.set('trust proxy', 1); // Dokploy fronts the app with a reverse proxy.

  // gzip/br responses where it makes sense (HTML, JS, JSON).
  app.use(compression());

  // Security headers. The Mercado Pago Bricks SDK loads sub-bundles from
  // http2.mlstatic.com and renders anti-fraud iframes on
  // www.mercadolibre.com — both have to be allowlisted explicitly because
  // the SDK bootstraps inline. Without these, brick init fails silently
  // ("Bricks component initialization failed").
  app.use(
    helmet({
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          defaultSrc: ["'self'"],
          imgSrc: [
            "'self'",
            'data:',
            'blob:',
            'https:',
          ],
          connectSrc: [
            "'self'",
            'https://*.supabase.co',
            'wss://*.supabase.co',
            'https://api.mercadopago.com',
            'https://*.mercadopago.com',
            'https://*.mlstatic.com',
            'https://*.mercadolibre.com',
          ],
          scriptSrc: [
            "'self'",
            "'unsafe-inline'",
            "'unsafe-eval'", // Three.js / shaders compile WebGL programs.
            'https://*.mercadopago.com',
            'https://*.mlstatic.com',
          ],
          styleSrc: [
            "'self'",
            "'unsafe-inline'",
            'https://fonts.googleapis.com',
            'https://*.mlstatic.com',
          ],
          fontSrc: ["'self'", 'data:', 'https://fonts.gstatic.com', 'https://*.mlstatic.com'],
          frameSrc: [
            "'self'",
            'https://*.mercadopago.com',
            'https://*.mercadolibre.com',
          ],
          workerSrc: ["'self'", 'blob:', 'https://*.mlstatic.com'],
          objectSrc: ["'none'"],
          baseUri: ["'self'"],
          formAction: ["'self'", 'https://*.mercadopago.com', 'https://*.mercadolibre.com'],
          frameAncestors: ["'none'"],
          upgradeInsecureRequests: null,
        },
      },
      // We do redirect to MP and back. crossOriginEmbedderPolicy=require-corp
      // breaks 3rd-party images, so leave the default opener policy as-is.
      crossOriginEmbedderPolicy: false,
      // Tell the browser this isn't an HSTS-elligible site only when behind
      // HTTPS (Dokploy terminates TLS for us).
      strictTransportSecurity: APP_URL.startsWith('https://')
        ? { maxAge: 60 * 60 * 24 * 180, includeSubDomains: true, preload: false }
        : false,
    }),
  );

  app.use(express.json({ limit: '256kb' }));

  // Rate-limit the publicly callable checkout endpoints. Webhook is exempt
  // because Mercado Pago hits it with retries and we acknowledge fast.
  const checkoutLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 30,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'rate_limited' },
  });

  // ----- API routes ------------------------------------------------------

  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'ok',
      service: 'serana-web',
      mercadopago: Boolean(MP_ACCESS_TOKEN),
      supabase: Boolean(supabaseAdmin),
    });
  });

  // Build a Mercado Pago Preference for a Supabase order. Returns the
  // init_point we should redirect the user to.
  app.post('/api/checkout/mp/preference', checkoutLimiter, async (req, res) => {
    try {
      if (!MP_ACCESS_TOKEN) return res.status(500).json({ error: 'mp_not_configured' });
      if (!supabaseAdmin) return res.status(500).json({ error: 'supabase_not_configured' });

      const { order_id: orderId } = req.body ?? {};
      if (!orderId || typeof orderId !== 'string') {
        return res.status(400).json({ error: 'order_id is required' });
      }

      const { order, customer, items } = await fetchOrderForCheckout(orderId);

      if (order.payment_status === 'pagado') {
        return res.status(409).json({ error: 'order_already_paid' });
      }

      // If a coupon is applied, MP would otherwise charge the un-discounted
      // sum of items. Collapse into a single line whose price equals the
      // post-discount order total so the gateway charge always matches what
      // the user saw at checkout.
      const orderDiscount = Number(order.discount_amount ?? 0);
      const orderTotal = Number(order.total_amount ?? 0);

      const mpItems = orderDiscount > 0 || items.length === 0
        ? [
            {
              id: order.id,
              title: order.coupon_code
                ? `Pedido Serana #${order.order_number} (cupón ${order.coupon_code})`
                : `Pedido Serana #${order.order_number}`,
              quantity: 1,
              unit_price: orderTotal,
              currency_id: 'COP',
            },
          ]
        : items.map((it) => ({
            id: it.product_id,
            title: it.product_name,
            quantity: Number(it.quantity ?? 1),
            unit_price: Number(it.unit_price ?? 0),
            currency_id: 'COP',
          }));

      // Mercado Pago refuses both `auto_return` and `notification_url` on
      // non-HTTPS hosts, so we only enable them in production.
      const isPublicHttps = APP_URL.startsWith('https://');
      const preferencePayload: Record<string, unknown> = {
        items: mpItems,
        external_reference: order.id,
        metadata: { order_id: order.id, order_number: order.order_number },
        payer: customer
          ? {
              name: customer.full_name,
              email: customer.email ?? undefined,
              phone: customer.phone ? { number: customer.phone } : undefined,
            }
          : undefined,
        back_urls: {
          success: `${APP_URL}/checkout/success?order=${order.order_number}`,
          failure: `${APP_URL}/checkout/failure?order=${order.order_number}`,
          pending: `${APP_URL}/checkout/pending?order=${order.order_number}`,
        },
        statement_descriptor: 'SERANA',
      };
      if (isPublicHttps) {
        preferencePayload.auto_return = 'approved';
        preferencePayload.notification_url = `${APP_URL}/api/webhooks/mercadopago`;
      }

      const mpResp = await fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${MP_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(preferencePayload),
      });

      if (!mpResp.ok) {
        const text = await mpResp.text();
        console.error('[mp/preference] Mercado Pago rejected:', mpResp.status, text);
        return res.status(502).json({ error: 'mp_preference_failed', detail: text });
      }

      const mpData = (await mpResp.json()) as {
        id: string;
        init_point: string;
        sandbox_init_point?: string;
      };

      return res.json({
        preference_id: mpData.id,
        init_point: mpData.init_point,
        sandbox_init_point: mpData.sandbox_init_point,
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'unknown_error';
      console.error('[mp/preference] error:', msg);
      return res.status(500).json({ error: msg });
    }
  });

  // ─────────────────────────────────────────────────────────────────────
  // POST /api/checkout/mp/process — Bricks pay-in-place handler.
  //
  // The Mercado Pago Payment Brick renders the card form inside our page
  // and tokenizes the card client-side. Its onSubmit hands us the resulting
  // formData (token, payment_method_id, installments, payer, …). We forward
  // that to MP's /v1/payments to capture; the gateway response tells us
  // approved / in_process / rejected so the user gets feedback in-place.
  //
  // The webhook still runs on payment.created/updated so the order's
  // payment_status becomes the source of truth even if this call times out.
  app.post('/api/checkout/mp/process', checkoutLimiter, async (req, res) => {
    try {
      if (!MP_ACCESS_TOKEN) return res.status(500).json({ error: 'mp_not_configured' });
      if (!supabaseAdmin) return res.status(500).json({ error: 'supabase_not_configured' });

      const { order_id: orderId, formData, selectedPaymentMethod } = req.body ?? {};
      if (!orderId || typeof orderId !== 'string') {
        return res.status(400).json({ error: 'order_id is required' });
      }
      if (!formData || typeof formData !== 'object') {
        return res.status(400).json({ error: 'formData is required' });
      }

      const { order } = await fetchOrderForCheckout(orderId);
      if (order.payment_status === 'pagado') {
        return res.status(409).json({ error: 'order_already_paid' });
      }

      const idempotencyKey = `serana-${orderId}-${Date.now()}`;
      const paymentBody: Record<string, unknown> = {
        ...formData,
        // Force the amount + reference to match our order regardless of
        // what the brick sent — the client is untrusted.
        transaction_amount: Number(order.total_amount),
        external_reference: orderId,
        description: `Pedido Serana #${order.order_number}`,
        statement_descriptor: 'SERANA',
        notification_url: APP_URL.startsWith('https://')
          ? `${APP_URL}/api/webhooks/mercadopago`
          : undefined,
      };

      const mpResp = await fetch('https://api.mercadopago.com/v1/payments', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${MP_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
          'X-Idempotency-Key': idempotencyKey,
        },
        body: JSON.stringify(paymentBody),
      });

      const text = await mpResp.text();
      let mpData: any = {};
      try { mpData = JSON.parse(text); } catch { /* leave empty */ }

      if (!mpResp.ok) {
        console.error('[mp/process] payment rejected:', mpResp.status, text.slice(0, 400));
        return res.status(mpResp.status).json({
          error: 'mp_payment_failed',
          status: mpData?.status ?? 'rejected',
          status_detail: mpData?.status_detail ?? 'unknown',
          message: mpData?.message ?? 'No pudimos procesar el pago',
        });
      }

      // For approved card payments, register immediately so the dashboard
      // doesn't wait for the webhook. Idempotency in register_payment by
      // transaction_id ensures the webhook later is a no-op.
      if (mpData.status === 'approved' && selectedPaymentMethod !== 'pse') {
        const { error: rpcErr } = await supabaseAdmin.rpc('register_payment', {
          p_order_id: orderId,
          p_amount: Number(mpData.transaction_amount ?? order.total_amount),
          p_method: 'mercado_pago',
          p_reference: orderId,
          p_transaction_id: String(mpData.id),
        });
        if (rpcErr) console.warn('[mp/process] register_payment failed (will rely on webhook):', rpcErr.message);
      }

      return res.json({
        id: mpData.id,
        status: mpData.status,
        status_detail: mpData.status_detail,
        // For PSE / bank transfer, MP returns a redirect URL the brick handles
        ...(mpData.transaction_details?.external_resource_url && {
          redirect_url: mpData.transaction_details.external_resource_url,
        }),
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'unknown_error';
      console.error('[mp/process] error:', msg);
      return res.status(500).json({ error: msg });
    }
  });

  // Mercado Pago notification endpoint. MP retries on non-2xx, so we always
  // return 200 unless we explicitly want a retry.
  //
  // Signature validation (MP docs):
  //   Header `x-signature`  → "ts=<timestamp>,v1=<hmac>"
  //   Header `x-request-id` → request UUID
  //   manifest = "id:<data.id>;request-id:<x-request-id>;ts:<ts>;"
  //   v1 = HMAC-SHA256(manifest, MP_WEBHOOK_SECRET) hex
  // We only enforce when MP_WEBHOOK_SECRET is set so dev keeps working.
  app.post('/api/webhooks/mercadopago', async (req, res) => {
    try {
      if (!MP_ACCESS_TOKEN || !supabaseAdmin) {
        return res.status(200).send('ignored: not configured');
      }

      const body = req.body ?? {};
      const topic = req.query.topic ?? body.type;
      const paymentIdRaw =
        req.query['data.id'] ??
        body?.data?.id ??
        body?.id ??
        null;

      if (topic !== 'payment' && topic !== 'payment.created' && topic !== 'payment.updated') {
        return res.status(200).send('ignored: not a payment topic');
      }
      if (!paymentIdRaw) {
        return res.status(200).send('ignored: no payment id');
      }

      if (MP_WEBHOOK_SECRET) {
        const sigHeader = String(req.headers['x-signature'] ?? '');
        const requestId = String(req.headers['x-request-id'] ?? '');
        const parts = Object.fromEntries(
          sigHeader.split(',').map((kv) => {
            const [k, v] = kv.split('=').map((s) => s.trim());
            return [k, v];
          }),
        ) as { ts?: string; v1?: string };

        if (!parts.ts || !parts.v1 || !requestId) {
          console.warn('[mp/webhook] rejected: missing signature headers');
          return res.status(401).send('missing signature');
        }

        const manifest = `id:${paymentIdRaw};request-id:${requestId};ts:${parts.ts};`;
        const expected = crypto
          .createHmac('sha256', MP_WEBHOOK_SECRET)
          .update(manifest)
          .digest('hex');

        // Constant-time compare; both must be Buffers of equal length.
        const expectedBuf = Buffer.from(expected, 'hex');
        const givenBuf = Buffer.from(parts.v1, 'hex');
        const ok =
          expectedBuf.length === givenBuf.length &&
          crypto.timingSafeEqual(expectedBuf, givenBuf);
        if (!ok) {
          console.warn('[mp/webhook] rejected: bad signature for payment', paymentIdRaw);
          return res.status(401).send('bad signature');
        }
      }

      const paymentResp = await fetch(`https://api.mercadopago.com/v1/payments/${paymentIdRaw}`, {
        headers: { Authorization: `Bearer ${MP_ACCESS_TOKEN}` },
      });
      if (!paymentResp.ok) {
        console.warn('[mp/webhook] could not fetch payment', paymentIdRaw, paymentResp.status);
        return res.status(200).send('ack');
      }
      const payment = (await paymentResp.json()) as {
        id: number | string;
        status: string;
        transaction_amount: number;
        external_reference?: string;
        currency_id?: string;
        payer?: { email?: string };
      };

      // Only act on approved payments. pending/in_process/rejected we just log.
      if (payment.status !== 'approved') {
        console.log('[mp/webhook] payment', payment.id, 'status', payment.status, '— skipping register_payment');
        return res.status(200).send('ack');
      }

      const orderId = payment.external_reference;
      if (!orderId) {
        console.warn('[mp/webhook] payment', payment.id, 'has no external_reference');
        return res.status(200).send('ack: no external_reference');
      }

      const { error: rpcErr, data: paymentRowId } = await supabaseAdmin.rpc('register_payment', {
        p_order_id: orderId,
        p_amount: Number(payment.transaction_amount),
        p_method: 'mercado_pago',
        p_reference: payment.external_reference ?? null,
        p_transaction_id: String(payment.id),
      });
      if (rpcErr) {
        console.error('[mp/webhook] register_payment failed:', rpcErr.message);
      } else {
        console.log('[mp/webhook] booked payment', payment.id, '-> sales.payments', paymentRowId);
      }

      return res.status(200).send('ack');
    } catch (err) {
      console.error('[mp/webhook] handler error:', err);
      return res.status(200).send('ack');
    }
  });

  // ----- Vite (dev) or static (prod) ------------------------------------

  if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, { index: false, maxAge: '1d' }));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
      root: __dirname,
    });
    app.use(vite.middlewares);
  }

  // catch-all error handler so we never leak stack traces
  app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    console.error('[serana-web] unhandled error:', err);
    res.status(500).json({ error: 'internal_error' });
  });

  app.listen(PORT, HOST, () => {
    console.log(`[serana-web] listening on http://${HOST}:${PORT}  (APP_URL=${APP_URL})`);
  });
}

startServer().catch((err) => {
  console.error('[serana-web] startup failed:', err);
  process.exit(1);
});
