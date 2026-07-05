import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CreditCard, Lock, ShieldCheck, Phone, Send, Check, Loader2, Instagram, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { captureLead } from '../lib/api/leads';
import { buildWhatsAppUrl } from '../lib/contact';

const LOGO_URL =
  'https://qlgjqvgjuscquhspjqdp.supabase.co/storage/v1/object/public/AETHERA-DOCS/LOGO%20PRINCIPAL-07.png';
const EXPERIENCES_URL = 'https://serana-experiencias.vercel.app/#propuesta';

const today = new Date();

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending' || status === 'sent') return;
    const trimmed = email.trim();
    if (!/^.+@.+\..+$/.test(trimmed)) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    const id = await captureLead({
      channel: 'newsletter',
      email: trimmed,
      metadata: { source: 'footer' },
    });
    setStatus(id ? 'sent' : 'error');
  };

  return (
    <footer className="bg-serana-forest text-serana-cream pt-0 pb-8 px-6 overflow-hidden relative">
      {/* Decorative background — subtle botanical element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.07] pointer-events-none select-none flex items-center justify-center">
        <img
          src="https://qlgjqvgjuscquhspjqdp.supabase.co/storage/v1/object/public/AETHERA-DOCS/ELEMENTOS.png"
          alt=""
          className="w-[130%] max-w-none object-cover mix-blend-overlay rotate-180"
          aria-hidden
        />
      </div>

      {/* Top ochre rule — clean separator from page */}
      <div className="relative z-10 max-w-6xl mx-auto pt-3">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-serana-ochre/40 to-transparent" />
      </div>

      {/* ── Editorial signature band ───────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto pt-10 pb-9 border-b border-serana-cream/10">
        <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-5">
          {/* Left rule + kicker */}
          <div className="hidden md:flex items-center gap-4 justify-end">
            <span className="text-serana-ochre text-[11px] font-bold tracking-[0.5em] uppercase whitespace-nowrap">
              Serana
            </span>
            <span className="h-px w-20 bg-serana-ochre/40" />
          </div>

          {/* Center — logo + rotating seal */}
          <Link to="/" className="relative flex items-center justify-center group">
            <div className="relative w-36 h-36 md:w-40 md:h-40 flex items-center justify-center">
              {/* Rotating wordmark seal */}
              <svg
                className="absolute inset-0 w-full h-full animate-spin-slow text-serana-ochre/70"
                viewBox="0 0 100 100"
                aria-hidden
              >
                <defs>
                  <path
                    id="footerSealPath"
                    d="M 50, 50 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
                    fill="none"
                  />
                </defs>
                <text className="fill-current text-[7px] uppercase font-bold tracking-[0.28em]">
                  <textPath href="#footerSealPath" startOffset="0%">
                    Serana Wellness S.A.S. · Medellín, Colombia · contacto@serana.co ·
                  </textPath>
                </text>
              </svg>
              {/* Soft inner halo so the logo pops over the dark bg */}
              <span className="absolute inset-6 rounded-full bg-serana-ochre/[0.06] blur-xl" aria-hidden />
              {/* Logo in the middle */}
              <img
                src={LOGO_URL}
                alt="Serana"
                className="relative w-24 h-24 md:w-28 md:h-28 object-contain brightness-0 invert group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </Link>

          {/* Right rule + kicker */}
          <div className="hidden md:flex items-center gap-4">
            <span className="h-px w-20 bg-serana-ochre/40" />
            <span className="text-serana-ochre text-[11px] font-bold tracking-[0.5em] uppercase whitespace-nowrap">
              Alimentación Consciente
            </span>
          </div>
        </div>

        <p className="text-center font-serif italic text-lg md:text-xl text-serana-cream mt-6 max-w-2xl mx-auto leading-snug">
          “Hacer de Colombia un país que come mejor, con <span className="text-serana-ochre">consciencia</span> y satisfacción.”
        </p>
      </div>

      {/* ── Trust strip ─────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-7 border-b border-serana-cream/10">
          <TrustItem icon={Lock} title="Pago seguro" detail="SSL + Mercado Pago" />
          <TrustItem icon={ShieldCheck} title="Datos protegidos" detail="Ley 1581 / 2012" />
          <TrustItem icon={CreditCard} title="Múltiples métodos" detail="Tarjeta · PSE · Nequi" />
          <TrustItem icon={Phone} title="Soporte WhatsApp" detail="Lun a Sáb · 8am – 6pm" />
        </div>
      </div>

      {/* ── Main grid ───────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto py-9">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Brand block */}
          <div className="md:col-span-5">
            <h4 className="font-serif text-3xl md:text-[2rem] mb-4 text-serana-cream leading-[1.05]">
              Serana.
            </h4>
            <p className="opacity-80 font-light text-[15px] leading-relaxed max-w-sm mb-7">
              Hacer de Colombia un país que come mejor, con consciencia y satisfacción.
            </p>

            {/* Socials — visual icons, not text */}
            <div className="flex items-center gap-2 mb-8">
              <SocialIcon
                href="https://www.instagram.com/serana.ac?igsh=bXhwYnprcnR2M25r"
                label="Instagram"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </SocialIcon>
              <SocialIcon href={buildWhatsAppUrl('Hola, quiero hablar con un asesor de Serana.')} label="WhatsApp">
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              </SocialIcon>
              <SocialIcon href="mailto:contacto@serana.co" label="Email">
                <Mail className="w-4 h-4" strokeWidth={1.5} />
              </SocialIcon>
            </div>

            {/* Visit card — boutique signal */}
            <div className="rounded-2xl border border-serana-cream/10 bg-white/[0.03] p-5 max-w-sm">
              <p className="text-serana-ochre font-bold tracking-[0.4em] uppercase text-[9px] mb-3">
                Soporte WhatsApp
              </p>
              <div className="flex items-start gap-3 mb-2.5">
                <MapPin className="w-4 h-4 text-serana-cream/60 shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="font-serif text-base leading-tight text-serana-cream">
                  Medellín, Colombia
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-serana-cream/60 shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-[12px] opacity-75 leading-snug">
                  Lun a Sáb <span className="opacity-50">·</span> 8am – 6pm
                </p>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-3">
            <h4 className="font-bold uppercase tracking-[0.25em] text-[10px] mb-5 text-serana-ochre">
              Explorar
            </h4>
            <ul className="space-y-3 text-sm tracking-wide">
              <FooterLink to="/shop">Menú</FooterLink>
              <FooterLink to={EXPERIENCES_URL} external>Experiencias</FooterLink>
              <FooterLink to="/shop?filter=subscription">Suscripciones</FooterLink>
              <FooterLink to="/about">Nuestra Historia</FooterLink>
              <FooterLink to="/community">Comunidad</FooterLink>
            </ul>
          </div>

          {/* Newsletter — moved into the grid for tighter rhythm */}
          <div className="md:col-span-4">
            <h4 className="font-bold uppercase tracking-[0.25em] text-[10px] mb-3 text-serana-ochre">
              Recibe recetas + descuentos en tu correo
            </h4>
            <p className="text-[12px] text-serana-cream/65 leading-snug mb-4">
              Sin spam. Cancelas con un clic. Datos tratados según la Ley 1581/2012.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'sending' || status === 'sent'}
                  className="w-full bg-serana-cream/[0.06] border border-serana-cream/15 rounded-full pl-4 pr-12 py-3 text-sm text-serana-cream placeholder-serana-cream/35 focus:outline-none focus:border-serana-ochre transition"
                />
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  aria-label="Suscribir"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-serana-ochre text-serana-forest w-9 h-9 rounded-full flex items-center justify-center hover:bg-white transition-colors disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : status === 'sent' ? (
                    <Check className="w-4 h-4" strokeWidth={3} />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-[10px] text-serana-cream/45 leading-snug px-1">
                {status === 'error'
                  ? 'Revisa tu correo e intenta de nuevo.'
                  : status === 'sent'
                    ? '¡Listo! Te escribimos pronto.'
                    : 'Cancelas con un clic. Datos tratados según la Ley 1581/2012.'}
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* ── Bottom legal ────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto border-t border-serana-cream/10 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.18em] text-serana-cream/45">
          <p className="text-center md:text-left">
            © {today.getFullYear()} Serana Wellness S.A.S. — Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/privacidad" className="hover:text-serana-ochre transition-colors">
              Privacidad
            </Link>
            <Link to="/terminos" className="hover:text-serana-ochre transition-colors">
              Términos
            </Link>
            <Link to="/devoluciones" className="hover:text-serana-ochre transition-colors">
              Devoluciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TrustItem({
  icon: Icon,
  title,
  detail,
}: {
  icon: typeof Lock;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-center gap-3.5 group">
      <span className="w-11 h-11 rounded-full border border-serana-ochre/30 bg-serana-ochre/[0.08] flex items-center justify-center shrink-0 group-hover:bg-serana-ochre/20 transition-colors">
        <Icon className="w-[18px] h-[18px] text-serana-ochre" strokeWidth={1.6} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-serana-cream">
          {title}
        </span>
        <span className="text-[11px] opacity-70 mt-1">{detail}</span>
      </span>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className="w-11 h-11 rounded-full border border-serana-ochre/30 bg-serana-ochre/[0.08] flex items-center justify-center text-serana-cream hover:text-serana-forest hover:bg-serana-ochre hover:border-serana-ochre hover:scale-105 transition-all"
    >
      {children}
    </a>
  );
}

function FooterLink({
  to,
  external = false,
  children,
}: {
  to: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li>
      {external ? (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="text-serana-cream/85 hover:text-serana-ochre transition-colors inline-flex items-center gap-2 group"
        >
          <span className="w-3 h-px bg-serana-cream/20 group-hover:bg-serana-ochre group-hover:w-5 transition-all" />
          {children}
        </a>
      ) : (
        <Link
          to={to}
          className="text-serana-cream/85 hover:text-serana-ochre transition-colors inline-flex items-center gap-2 group"
        >
          <span className="w-3 h-px bg-serana-cream/20 group-hover:bg-serana-ochre group-hover:w-5 transition-all" />
          {children}
        </Link>
      )}
    </li>
  );
}
