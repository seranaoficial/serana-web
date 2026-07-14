import { supabase, isSupabaseConfigured } from '../supabase';

export type OrderType = 'domicilio' | 'recogida' | 'mesa';
export type PaymentMethod =
  | 'efectivo'
  | 'tarjeta'
  | 'transferencia'
  | 'link_pago'
  | 'wompi'
  | 'mercado_pago';

export type CreateOrderItem = {
  product_slug: string;
  quantity: number;
  customizations?: string;
};

export type CreateOrderPayload = {
  customer_phone: string;
  customer_name?: string;
  customer_email?: string;
  delivery_address?: string;
  delivery_fee?: number;
  total_amount?: number;
  type?: OrderType;
  payment_method?: PaymentMethod;
  payment_status?: 'pendiente' | 'parcial' | 'pagado';
  source_code?: 'web' | 'whatsapp_bot' | 'presencial' | 'telefono';
  station_code?: string;
  coupon_code?: string;
  items: CreateOrderItem[];
};

export type CreateOrderResult = {
  order_id: string;
  order_number: number;
  total_amount: number;
  subtotal?: number;
  discount_amount?: number;
  coupon_code?: string | null;
  customer_id: string;
};

export type CouponValidation = {
  valid: boolean;
  reason: 'ok' | 'empty' | 'not_found' | 'inactive' | 'expired' | 'not_yet_active' | 'usage_limit' | 'min_subtotal' | string;
  code: string | null;
  discount_kind: 'percent' | 'fixed' | null;
  discount_amount: number;
};

export async function validateCoupon(code: string, subtotal: number): Promise<CouponValidation> {
  if (!isSupabaseConfigured) {
    return { valid: false, reason: 'not_found', code, discount_kind: null, discount_amount: 0 };
  }
  const { data, error } = await supabase.rpc('validate_coupon', {
    p_code: code,
    p_subtotal: subtotal,
  });
  if (error) throw error;
  const row = data as any;
  return {
    valid: !!row.valid,
    reason: row.reason,
    code: row.code,
    discount_kind: row.discount_kind,
    discount_amount: Number(row.discount_amount ?? 0),
  };
}

export async function createOrderAnon(payload: CreateOrderPayload): Promise<CreateOrderResult> {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase no está configurado en este entorno.');
  }
  const { data, error } = await supabase.rpc('create_order_anon', { payload });
  if (error) throw error;
  return data as CreateOrderResult;
}

export type TrackedOrder = {
  order_number: number;
  status: string;
  type: OrderType;
  payment_status: string;
  total_amount: number;
  created_at: string;
  ready_at: string | null;
  delivered_at: string | null;
};

export async function trackOrder(orderNumber: number, phone: string): Promise<TrackedOrder> {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase no está configurado en este entorno.');
  }
  const { data, error } = await supabase.rpc('track_order', {
    p_order_number: orderNumber,
    p_phone: phone,
  });
  if (error) throw error;
  return data as TrackedOrder;
}
