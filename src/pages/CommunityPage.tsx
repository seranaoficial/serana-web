import Navbar from '../components/Navbar';
import CartDrawer from '../components/CartDrawer';
import Footer from '../components/Footer';
import SectionDivider from '../components/SectionDivider';
import EventEnrollModal, { type EnrollEventInfo } from '../components/EventEnrollModal';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useEffect, useState, type FormEvent } from 'react';
import { ArrowRight, Check, Loader2, Send, Star } from 'lucide-react';
import { Calendar, Sprout, Drop, Spark, Sun, SerenaMark } from '../components/SeranaIcons';
import type { ComponentType, SVGProps } from 'react';
import { captureLead } from '../lib/api/leads';
import { listPublishedTestimonials, type PublishedTestimonial } from '../lib/api/testimonials';

const today = new Date();
const editionNumber = String(((today.getMonth() + 1) % 12) + 1).padStart(2, '0');

type IconCmp = ComponentType<SVGProps<SVGSVGElement>>;

type Event = {
  number: string;
  kicker: string;
  date: string;
  title: string;
  italic: string;
  body: string;
  cta: string;
  Icon: IconCmp;
  image: string;
};

const EVENTS: Event[] = [
  {
    number: '01',
    kicker: 'Reto · 7 días',
    date: '15 Oct',
    title: 'Reto Detox',
    italic: 'de 7 Días',
    body: 'Una semana para reiniciar tu sistema digestivo con guías diarias y apoyo grupal.',
    cta: 'Unirse al Evento',
    Icon: Sprout,
    image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=1000',
  },
  {
    number: '02',
    kicker: 'Webinar · En línea',
    date: '22 Oct',
    title: 'Webinar: Nutrición para el',
    italic: 'Flow',
    body: 'Aprende a combinar alimentos para mantener el enfoque durante tu jornada laboral.',
    cta: 'Unirse al Evento',
    Icon: Spark,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
  },
  {
    number: '03',
    kicker: 'Encuentro · Cada domingo',
    date: 'Cada Domingo',
    title: 'Círculo de',
    italic: 'Bienestar',
    body: 'Sesiones de meditación y mindfulness exclusivas para suscriptores.',
    cta: 'Unirse al Evento',
    Icon: Sun,
    image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80&w=1000',
  },
];

const STATS = [
  { number: '480', label: 'Suscriptoras activas' },
  { number: '24', label: 'Encuentros este año' },
  { number: '12', label: 'Productores aliados' },
];

const RITUALS: Array<{ Icon: IconCmp; title: string; italic: string; body: string }> = [
  {
    Icon: Calendar,
    title: 'Reto Detox',
    italic: 'de 7 Días',
    body: 'Una semana para reiniciar tu sistema digestivo con guías diarias y apoyo grupal.',
  },
  {
    Icon: Drop,
    title: 'Webinar: Nutrición para el',
    italic: 'Flow',
    body: 'Aprende a combinar alimentos para mantener el enfoque durante tu jornada laboral.',
  },
  {
    Icon: Spark,
    title: 'Círculo de',
    italic: 'Bienestar',
    body: 'Sesiones de meditación y mindfulness exclusivas para suscriptores.',
  },
];

const MEMBERSHIP_PATH = '/login';

const MEMBERSHIP_POINTS = [
  'Plan de transformación de 90 días para reconectar con tu cuerpo, tu energía y tu bienestar.',
  'Kit de bienvenida premium con productos Serana seleccionados, guía de inicio y herramientas de seguimiento.',
  'Una cuenta Serana para visualizar tu membresía, beneficios, compras y progreso del plan.',
];

export default function CommunityPage() {
  const [enrollEvent, setEnrollEvent] = useState<EnrollEventInfo | null>(null);
  const [publishedStories, setPublishedStories] = useState<PublishedTestimonial[]>([]);
  const [storyRating, setStoryRating] = useState(5);
  const [storyName, setStoryName] = useState('');
  const [storyMessage, setStoryMessage] = useState('');
  const [storyStatus, setStoryStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    let active = true;
    void listPublishedTestimonials(3).then((items) => {
      if (active) setPublishedStories(items);
    });
    return () => {
      active = false;
    };
  }, []);

  const openEnroll = (event: Event) => {
    setEnrollEvent({
      event_id: event.number,
      event_title: `${event.title} ${event.italic}`.trim(),
      event_kicker: event.kicker,
      event_date: event.date,
      event_cta: event.cta,
    });
  };

  const handleStorySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (storyStatus === 'sending') return;

    const cleanMessage = storyMessage.trim();
    const cleanName = storyName.trim();
    if (cleanMessage.length < 10) {
      setStoryStatus('error');
      return;
    }

    setStoryStatus('sending');
    const id = await captureLead({
      channel: 'testimonial',
      full_name: cleanName || undefined,
      message: cleanMessage,
      metadata: {
        rating: storyRating,
        rating_scale: 5,
        section: 'community_stories',
        submission_type: 'story_or_testimonial',
        moderation_status: 'pending',
      },
    });

    if (!id) {
      setStoryStatus('error');
      return;
    }

    setStoryStatus('sent');
    setStoryName('');
    setStoryMessage('');
    setStoryRating(5);
  };

  return (
    <div className="min-h-screen pt-24 bg-[#F9F7F2]">
      <Navbar />
      <CartDrawer />
      <EventEnrollModal
        open={enrollEvent !== null}
        event={enrollEvent}
        onClose={() => setEnrollEvent(null)}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* ── Editorial header ──────────────────────────────────────────── */}
        <header className="pt-12 md:pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 text-serana-terracotta font-bold tracking-[0.4em] uppercase text-[10px] mb-5"
              >
                <span className="w-10 h-px bg-serana-terracotta/60" />
                El Ecosistema
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-serana-forest text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.92] tracking-tight"
              >
                Comunidad <span className="italic text-serana-olive">Serana</span>
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4 lg:pt-12"
            >
              <p className="text-base text-serana-forest/70 font-light leading-relaxed border-l border-serana-forest/15 pl-5 max-w-sm">
                Más que una tienda, somos un movimiento. Únete a nuestros eventos del semestre, experiencias, charlas online, retos y círculos.
              </p>
              <div className="mt-5 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-serana-forest/50 font-bold">
                <span>Medellín</span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* ── Stats strip ───────────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 divide-x divide-serana-forest/10 bg-white border border-serana-forest/8 rounded-2xl overflow-hidden mb-16"
        >
          {STATS.map((s) => (
            <div key={s.label} className="px-5 sm:px-8 py-6 text-center">
              <p className="font-serif italic text-3xl md:text-4xl text-serana-forest tracking-tight">
                {s.number}
              </p>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-serana-forest/55 mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </motion.section>

        <SectionDivider variant="brush" />

        {/* ── Events / Rituales ─────────────────────────────────────────── */}
        <section className="my-12 md:my-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-serana-olive font-bold tracking-[0.4em] uppercase text-[10px] mb-4">
                <span className="w-10 h-px bg-serana-olive/60" />
                Próximos eventos
              </span>
              <h2 className="font-serif text-serana-forest text-3xl md:text-5xl tracking-tight leading-tight">
                Retos, eventos y <span className="italic text-serana-ochre">círculos</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-sm text-serana-forest/65 font-light leading-relaxed border-l border-serana-forest/15 pl-5 max-w-md">
              La agenda de comunidad reúne próximos eventos, experiencias del semestre, charlas online y retos para acompañar tu bienestar más allá del menú.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENTS.map((event, i) => {
              const Icon = event.Icon;
              return (
                <motion.article
                  key={event.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative bg-white border border-serana-forest/8 rounded-[1.6rem] overflow-hidden hover:border-serana-forest/20 transition-colors"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-serana-forest/40 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-2.5 py-1 bg-serana-cream/90 backdrop-blur-sm rounded text-[9px] font-black uppercase tracking-widest text-serana-forest">
                      {event.date}
                    </span>
                  </div>

                  <div className="p-7 relative">
                    <span
                      aria-hidden
                      className="absolute -top-3 right-5 font-serif italic text-[5rem] leading-none text-serana-forest/5 group-hover:text-serana-forest/12 transition-colors select-none pointer-events-none"
                    >
                      {event.number}
                    </span>

                    <div className="flex items-center gap-3 mb-4 relative z-10">
                      <div className="w-10 h-10 rounded-xl border border-serana-forest/15 flex items-center justify-center text-serana-olive">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-serana-terracotta">
                        {event.kicker}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-serana-forest leading-tight tracking-tight relative z-10">
                      {event.title} <span className="italic text-serana-olive">{event.italic}</span>.
                    </h3>
                    <p className="mt-4 text-sm text-serana-forest/70 font-light leading-relaxed relative z-10">
                      {event.body}
                    </p>

                    <button
                      type="button"
                      onClick={() => openEnroll(event)}
                      className="mt-6 inline-flex items-center gap-2 text-serana-forest font-bold text-[10px] uppercase tracking-[0.3em] hover:text-serana-terracotta transition-colors group/btn relative z-10"
                    >
                      {event.cta}
                      <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <SectionDivider label="Comunidad Serana" />

        {/* ── Rituales ──────────────────────────────────────────────────── */}
        <section className="my-12 md:my-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RITUALS.map((r, i) => {
              const Icon = r.Icon;
              const number = String(i + 1).padStart(2, '0');
              return (
                <motion.article
                  key={r.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative bg-white border border-serana-forest/8 rounded-[1.6rem] p-7 overflow-hidden hover:border-serana-forest/20 transition-colors"
                >
                  <span
                    aria-hidden
                    className="absolute -top-3 right-5 font-serif italic text-[5rem] leading-none text-serana-forest/5 group-hover:text-serana-forest/12 transition-colors select-none pointer-events-none"
                  >
                    {number}
                  </span>

                  <div className="w-11 h-11 rounded-xl border border-serana-forest/15 flex items-center justify-center text-serana-olive mb-5 relative z-10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl text-serana-forest leading-tight tracking-tight relative z-10">
                    {r.title} <span className="italic text-serana-olive">{r.italic}</span>.
                  </h3>
                  <p className="mt-4 text-sm text-serana-forest/70 font-light leading-relaxed relative z-10">
                    {r.body}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <SectionDivider />

        {/* ── Membresía ────────────────────────────────────────────────── */}
        <section className="my-12 md:my-24">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-7 rounded-[2rem] bg-serana-forest text-serana-cream p-8 md:p-10 lg:p-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
                <svg viewBox="0 0 600 360" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M-20 290 C 120 210, 250 330, 390 230 C 500 150, 570 240, 630 180" />
                  <path d="M-20 330 C 120 280, 250 350, 390 300 C 500 260, 570 320, 630 280" opacity="0.65" />
                </svg>
              </div>

              <div className="relative z-10">
                <span className="inline-flex items-center gap-3 text-serana-ochre font-bold tracking-[0.4em] uppercase text-[10px] mb-5">
                  <span className="w-10 h-px bg-serana-ochre/70" />
                  Membresía Serana
                </span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95]">
                  Transforma tu vida
                  <br />
                  <span className="italic text-serana-ochre">en 90 días</span>.
                </h2>
                <p className="mt-6 text-serana-cream/74 font-light leading-relaxed text-base max-w-xl">
                  Un plan para entender de qué trata la experiencia Serana, empezar tu proceso y conectar tu membresía con una cuenta donde puedas consultar beneficios, compras y seguimiento.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    to={MEMBERSHIP_PATH}
                    state={{ from: '/cuenta' }}
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-serana-ochre text-serana-forest rounded-full transition-all hover:bg-serana-cream hover:-translate-y-0.5 font-sans font-bold tracking-widest text-[11px] uppercase shadow-lg"
                  >
                    Adquirir membresía
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/cuenta"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-serana-cream/30 text-serana-cream rounded-full font-sans font-medium tracking-widest text-[11px] uppercase hover:bg-serana-cream/10 transition-all"
                  >
                    Ver mi cuenta
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="lg:col-span-5 rounded-[2rem] border border-serana-forest/8 bg-white p-7 md:p-8"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.32em] text-serana-terracotta mb-4">
                ¿Qué incluye?
              </p>
              <div className="space-y-4">
                {MEMBERSHIP_POINTS.map((point, i) => (
                  <div key={point} className="flex gap-4">
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-serana-cream text-serana-forest font-serif italic text-lg">
                      {i + 1}
                    </span>
                    <p className="text-sm text-serana-forest/70 font-light leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-2xl border border-serana-forest/10 bg-serana-cream/50 p-5">
                <p className="font-serif text-xl text-serana-forest leading-tight">
                  Al adquirirla, el cliente entra o crea su usuario.
                </p>
                <p className="mt-2 text-xs text-serana-forest/60 leading-relaxed">
                  Desde su cuenta puede visualizar los beneficios y la información de membresía que ya está conectada al perfil.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <SectionDivider variant="brush" />

        {/* ── Editorial story / "comparte tu historia" ──────────────────── */}
        <section id="historias-serana" className="my-12 md:my-24 scroll-mt-28">
          <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-5 relative"
            >
              <div
                className="relative aspect-[4/5] overflow-hidden border-[3px] border-white/60 shadow-2xl"
                style={{ borderRadius: '40% 60% 65% 35% / 40% 35% 65% 60%' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1000"
                  alt="Compartir comida en la casa"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-serana-forest/30 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden md:flex items-center gap-3 bg-serana-forest text-serana-cream rounded-full px-4 py-2 shadow-xl">
                <SerenaMark className="w-5 h-5 text-serana-ochre" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                  Comunidad · Serana
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-7"
            >
              <span className="inline-flex items-center gap-3 text-serana-olive font-bold tracking-[0.4em] uppercase text-[10px] mb-4">
                <span className="w-10 h-px bg-serana-olive/60" />
                Historias y testimonios Serana
              </span>
              <h2 className="font-serif text-serana-forest text-4xl md:text-5xl leading-[0.95] tracking-tight">
                ¿Tienes una historia de
                <br />
                <span className="italic text-serana-ochre">transformación?</span>
              </h2>
              <p className="mt-6 text-serana-forest/70 font-light leading-relaxed text-base max-w-md">
                Nos encanta escuchar cómo Serana ha impactado tu vida. Comparte tu historia, reseña o testimonio desde aquí y recibe un regalo especial en tu próxima caja.
              </p>
              <p className="mt-3 text-serana-forest/55 font-light text-sm max-w-md italic">
                Tu experiencia también puede inspirar a otros a empezar.
              </p>

              <div className="mt-8 grid lg:grid-cols-[minmax(0,1fr)_240px] gap-4 items-start">
                <form
                  onSubmit={handleStorySubmit}
                  className="rounded-[1.5rem] border border-serana-forest/10 bg-white/70 p-5 md:p-6 shadow-[0_18px_50px_-35px_rgba(39,54,23,0.45)]"
                >
                  <div className="mb-4">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-serana-terracotta font-bold mb-2">
                      Comparte tu historia
                    </p>
                    <div className="flex items-center gap-1.5" aria-label={`${storyRating} de 5 estrellas`}>
                      {Array.from({ length: 5 }).map((_, index) => {
                        const value = index + 1;
                        const selected = value <= storyRating;
                        return (
                          <button
                            key={value}
                            type="button"
                            onClick={() => setStoryRating(value)}
                            aria-label={`${value} estrella${value > 1 ? 's' : ''}`}
                            aria-pressed={selected}
                            className="w-8 h-8 rounded-full border border-serana-forest/10 bg-serana-cream/60 text-serana-ochre flex items-center justify-center transition hover:bg-serana-ochre/15 focus:outline-none focus:ring-2 focus:ring-serana-ochre/50"
                          >
                            <Star className={`w-4 h-4 ${selected ? 'fill-current' : ''}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label htmlFor="story-name" className="block text-[10px] uppercase tracking-widest text-serana-forest/45 mb-1.5">
                        Nombre
                      </label>
                      <input
                        id="story-name"
                        type="text"
                        value={storyName}
                        onChange={(event) => setStoryName(event.target.value)}
                        disabled={storyStatus === 'sending' || storyStatus === 'sent'}
                        placeholder="Tu nombre"
                        className="w-full rounded-xl border border-serana-forest/10 bg-white px-4 py-3 text-sm text-serana-forest placeholder-serana-forest/35 outline-none transition focus:border-serana-ochre"
                      />
                    </div>

                    <div>
                      <label htmlFor="story-message" className="block text-[10px] uppercase tracking-widest text-serana-forest/45 mb-1.5">
                        Historia, reseña o testimonio
                      </label>
                      <textarea
                        id="story-message"
                        required
                        rows={5}
                        value={storyMessage}
                        onChange={(event) => setStoryMessage(event.target.value)}
                        disabled={storyStatus === 'sending' || storyStatus === 'sent'}
                        placeholder="Escribe aquí cómo ha sido tu experiencia con Serana"
                        className="w-full resize-none rounded-xl border border-serana-forest/10 bg-white px-4 py-3 text-sm leading-relaxed text-serana-forest placeholder-serana-forest/35 outline-none transition focus:border-serana-ochre"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={storyStatus === 'sending' || storyStatus === 'sent'}
                    className="mt-4 w-full rounded-full bg-serana-forest px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-serana-cream transition hover:bg-serana-olive disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {storyStatus === 'sending' ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Enviando</>
                    ) : storyStatus === 'sent' ? (
                      <><Check className="w-4 h-4" /> Historia recibida</>
                    ) : (
                      <><Send className="w-4 h-4" /> Enviar historia</>
                    )}
                  </button>

                  <p className={`mt-3 text-[11px] leading-relaxed ${storyStatus === 'error' ? 'text-rose-700' : 'text-serana-forest/55'}`}>
                    {storyStatus === 'error'
                      ? 'No pudimos guardar tu historia. Revisa el texto e intenta de nuevo.'
                      : storyStatus === 'sent'
                        ? 'Gracias. Tu historia queda en revisión antes de publicarse.'
                        : 'La recibimos como historia o reseña para revisarla desde el equipo Serana.'}
                  </p>
                </form>

                <div className="space-y-3">
                  {publishedStories.slice(0, 2).map((story) => (
                    <article key={story.id} className="rounded-[1.25rem] border border-serana-forest/10 bg-serana-cream/65 p-4">
                      <div className="flex items-center gap-1 text-serana-ochre mb-3" aria-label={`${story.rating} de 5 estrellas`}>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className={`w-3 h-3 ${index < story.rating ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <p className="text-sm text-serana-forest/70 font-light leading-relaxed line-clamp-4">
                        {story.message}
                      </p>
                      <p className="mt-3 text-[10px] uppercase tracking-[0.18em] font-bold text-serana-forest/45">
                        {story.full_name}
                      </p>
                    </article>
                  ))}
                  <a
                    href="https://www.instagram.com/serana.ac"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 border border-serana-forest/20 text-serana-forest rounded-full font-sans font-medium tracking-widest text-[10px] uppercase hover:bg-serana-forest/5 transition-all"
                  >
                    Síguenos · @serana.ac
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <SectionDivider variant="brush" />

        {/* ── Closing CTA ───────────────────────────────────────────────── */}
        <section className="my-12 md:my-24">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-serana-forest text-serana-cream">
            <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
              <svg
                viewBox="0 0 600 400"
                preserveAspectRatio="none"
                className="w-full h-full text-serana-cream"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              >
                <path d="M-20 320 C 120 250, 240 360, 380 290 C 480 240, 560 320, 620 270" />
                <path d="M-20 360 C 100 320, 240 380, 380 340 C 500 310, 560 360, 620 330" opacity="0.65" />
                <path d="M-20 280 C 130 200, 260 320, 380 240 C 500 180, 560 280, 620 220" opacity="0.4" />
              </svg>
            </div>

            <div className="relative z-10 p-10 md:p-14 lg:p-20 text-center">
              <SerenaMark className="w-10 h-10 text-serana-ochre mx-auto mb-6" />
              <span className="inline-flex items-center gap-3 text-serana-ochre font-bold tracking-[0.4em] uppercase text-[10px] mb-5">
                Comunidad Serana
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95] max-w-3xl mx-auto">
                Más que una tienda,
                <br />
                <span className="italic text-serana-ochre">somos un movimiento</span>.
              </h2>
              <p className="mt-6 text-base text-serana-cream/70 font-light leading-relaxed max-w-xl mx-auto">
                Únete a nuestros retos, eventos y círculos. Comparte tu historia y haz parte de una comunidad que elige cuidarse mejor.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/shop"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-serana-ochre text-serana-forest rounded-full transition-all hover:shadow-xl hover:-translate-y-0.5 font-sans font-bold tracking-widest text-[11px] uppercase"
                >
                  Ver el menú
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#historias-serana"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-serana-cream/30 text-serana-cream rounded-full font-sans font-medium tracking-widest text-[11px] uppercase hover:bg-serana-cream/10 transition-all"
                >
                  Comparte tu historia
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
