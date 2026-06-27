import Navbar from '../components/Navbar';
import CartDrawer from '../components/CartDrawer';
import Footer from '../components/Footer';
import SectionDivider from '../components/SectionDivider';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Leaf, Drop, Spark, Hourglass, Sprout, Seed, SerenaMark } from '../components/SeranaIcons';
import type { ComponentType, SVGProps } from 'react';

const today = new Date();
const editionNumber = String(((today.getMonth() + 1) % 12) + 1).padStart(2, '0');

type IconCmp = ComponentType<SVGProps<SVGSVGElement>>;

const VALUES: Array<{ number: string; title: string; italic: string; body: string; tag: string; Icon: IconCmp }> = [
  {
    number: '01',
    title: 'Consciencia',
    italic: '',
    body: 'Elegimos con intención: lo que ofrecemos, cómo lo hacemos y el impacto que dejamos en cada paso.',
    tag: 'Elegir Serana es elegir consciencia',
    Icon: Leaf,
  },
  {
    number: '02',
    title: 'Bienestar Integral',
    italic: '',
    body: 'Creemos en una alimentación que no solo nutre el cuerpo, sino que también aporta una mejor forma de vivir el día.',
    tag: 'Comer bien también es sentirse bien',
    Icon: Drop,
  },
  {
    number: '03',
    title: 'Cuidado en cada detalle',
    italic: '',
    body: 'Desde la preparación hasta la entrega, cuidamos cada punto de contacto para que la experiencia se sienta tan bien como el producto.',
    tag: 'El cuidado se nota',
    Icon: Spark,
  },
];

const CULTURE: Array<{ title: string; italic: string; body: string; Icon: IconCmp }> = [
  {
    title: 'Practicidad Premium',
    italic: '',
    body: 'Creamos soluciones que simplifican tu rutina sin sacrificar calidad, frescura ni experiencia.',
    Icon: Hourglass,
  },
  {
    title: 'Innovación Consciente',
    italic: '',
    body: 'Exploramos nuevas formas de nutrir, combinando funcionalidad, sabor y una mirada más inteligente sobre el bienestar.',
    Icon: Sprout,
  },
  {
    title: 'Sostenibilidad',
    italic: '',
    body: 'Buscamos decisiones más responsables en lo que elegimos, en cómo operamos y en el impacto que dejamos.',
    Icon: Seed,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 bg-[#F9F7F2]">
      <Navbar />
      <CartDrawer />

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
                Nuestra Esencia
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-serana-forest text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.92] tracking-tight"
              >
                Bienestar con
                <br />
                <span className="italic text-serana-olive">consciencia y cariño</span>
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4 lg:pt-12"
            >
              <p className="text-base text-serana-forest/70 font-light leading-relaxed border-l border-serana-forest/15 pl-5 max-w-sm">
                Serana nace para hacer del bienestar una experiencia más simple, deliciosa y consciente, con alimentos frescos y un cuidado que se siente.
              </p>
              <div className="mt-5 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-serana-forest/50 font-bold">
                <span>Medellín</span>
              </div>
            </motion.div>
          </div>
        </header>

        <SectionDivider variant="brush" />

        {/* ── Mission / Vision dual block ───────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 my-12 md:my-20">
          {[
            {
              kicker: 'Lo que hacemos',
              title: 'Hacemos que comer bien se sienta',
              italic: 'fácil, fresco y consciente',
              body: 'Creamos opciones prácticas y deliciosas que simplifican tu día sin desconectarte de lo que te hace bien.',
              accent: 'olive',
              number: 'I',
            },
            {
              kicker: 'Hacia dónde vamos',
              title: 'Queremos inspirar una forma más',
              italic: 'sana, práctica y sostenible de alimentarse',
              body: 'Soñamos con una cultura donde nutrirse bien sea parte natural de la rutina y no un esfuerzo extraordinario.',
              accent: 'terracotta',
              number: 'II',
            },
          ].map((block, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white border border-serana-forest/8 rounded-[1.8rem] p-8 md:p-10 shadow-[0_20px_50px_-30px_rgba(39,54,23,0.18)] overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute top-2 right-5 font-serif italic text-[7rem] leading-none text-serana-forest/5 select-none pointer-events-none"
              >
                {block.number}
              </span>
              <p
                className={`text-[10px] uppercase tracking-[0.4em] font-bold mb-4 ${
                  block.accent === 'olive' ? 'text-serana-olive' : 'text-serana-terracotta'
                }`}
              >
                {block.kicker}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-serana-forest leading-tight tracking-tight">
                {block.title} <span className="italic text-serana-olive">{block.italic}</span>.
              </h2>
              <p className="mt-5 text-serana-forest/70 font-light leading-relaxed text-[15px] max-w-xl">
                {block.body}
              </p>
            </motion.article>
          ))}
        </section>

        <SectionDivider label="Valores Insignia" />

        {/* ── Values ───────────────────────────────────────────────────── */}
        <section className="my-12 md:my-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-serana-forest text-3xl md:text-5xl tracking-tight leading-tight">
                Valores <span className="italic text-serana-ochre">Insignia</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-sm text-serana-forest/65 font-light leading-relaxed border-l border-serana-forest/15 pl-5 max-w-md">
              Los principios que dan forma a cada experiencia Serana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {VALUES.map((val, i) => {
              const Icon = val.Icon;
              return (
                <motion.article
                  key={val.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative bg-white border border-serana-forest/8 rounded-[1.6rem] p-7 overflow-hidden hover:border-serana-forest/20 transition-colors"
                >
                  <span
                    aria-hidden
                    className="absolute -top-3 right-5 font-serif italic text-[5.5rem] leading-none text-serana-forest/5 group-hover:text-serana-forest/12 transition-colors select-none"
                  >
                    {val.number}
                  </span>
                  <div className="flex items-start gap-3 mb-6 relative z-10">
                    <div className="w-11 h-11 rounded-xl border border-serana-forest/15 flex items-center justify-center text-serana-olive">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-serana-olive/70 mt-1.5">
                      / {val.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-serana-forest leading-tight tracking-tight relative z-10">
                    {val.title}
                    {val.italic && (
                      <>
                        <br />
                        <span className="italic text-serana-olive">{val.italic}</span>.
                      </>
                    )}
                  </h3>
                  <p className="mt-5 text-serana-forest/70 font-light leading-relaxed text-[14px] relative z-10">
                    {val.body}
                  </p>
                  <div className="mt-7 pt-5 border-t border-serana-forest/10 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-serana-forest/50 font-bold relative z-10">
                    <SerenaMark className="w-4 h-4 text-serana-ochre" />
                    {val.tag}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <SectionDivider />

        {/* ── Culture / image + 3 principles ────────────────────────────── */}
        <section className="my-12 md:my-20">
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
                  alt="Manos preparando alimentos frescos"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-serana-forest/30 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden md:flex items-center gap-3 bg-serana-forest text-serana-cream rounded-full px-4 py-2 shadow-xl">
                <SerenaMark className="w-5 h-5 text-serana-ochre" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                  Cultura · Serana
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
                Cultura Serana
              </span>
              <h2 className="font-serif text-serana-forest text-4xl md:text-5xl leading-[0.95] tracking-tight">
                Cultura <span className="italic text-serana-ochre">Serana</span>
              </h2>
              <p className="mt-6 text-serana-forest/70 font-light leading-relaxed text-base max-w-md">
                Nuestra cultura nace del equilibrio entre practicidad, consciencia e innovación. Así convertimos el bienestar en una experiencia más simple, cuidada y contemporánea.
              </p>

              <div className="mt-10 space-y-6">
                {CULTURE.map((item, i) => {
                  const Icon = item.Icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex gap-5 items-start"
                    >
                      <div className="w-11 h-11 rounded-xl border border-serana-forest/15 flex items-center justify-center text-serana-olive shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif text-xl md:text-2xl text-serana-forest leading-tight tracking-tight">
                          {item.title}
                          {item.italic && <span className="italic text-serana-olive"> {item.italic}</span>}
                        </h4>
                        <p className="mt-2 text-serana-forest/70 font-light leading-relaxed text-sm max-w-md">
                          {item.body}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <SectionDivider variant="brush" />

        {/* ── Closing ───────────────────────────────────────────────────── */}
        <section className="my-12 md:my-24">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-serana-forest text-serana-cream">
            <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
              <svg viewBox="0 0 600 400" preserveAspectRatio="none" className="w-full h-full text-serana-cream" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M-20 320 C 120 250, 240 360, 380 290 C 480 240, 560 320, 620 270" />
                <path d="M-20 360 C 100 320, 240 380, 380 340 C 500 310, 560 360, 620 330" opacity="0.65" />
                <path d="M-20 280 C 130 200, 260 320, 380 240 C 500 180, 560 280, 620 220" opacity="0.4" />
              </svg>
            </div>

            <div className="relative z-10 p-10 md:p-14 lg:p-20 text-center">
              <SerenaMark className="w-10 h-10 text-serana-ochre mx-auto mb-6" />
              <span className="inline-flex items-center gap-3 text-serana-ochre font-bold tracking-[0.4em] uppercase text-[10px] mb-5">
                Nuestra esencia
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95] max-w-3xl mx-auto">
                Bienestar con
                <br />
                <span className="italic text-serana-ochre">consciencia y cariño</span>
              </h2>
              <p className="mt-6 text-base text-serana-cream/70 font-light leading-relaxed max-w-xl mx-auto">
                Serana nace para hacer del bienestar una experiencia más simple, deliciosa y consciente, con alimentos frescos y un cuidado que se siente.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/shop"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-serana-ochre text-serana-forest rounded-full transition-all hover:shadow-xl hover:-translate-y-0.5 font-sans font-bold tracking-widest text-[11px] uppercase"
                >
                  Ver el menú
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/community"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-serana-cream/30 text-serana-cream rounded-full font-sans font-medium tracking-widest text-[11px] uppercase hover:bg-serana-cream/10 transition-all"
                >
                  Únete a la comunidad
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
