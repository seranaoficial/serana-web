import { useEffect, useState, type FormEvent } from 'react';
import { Check, Loader2, Quote, Send, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { captureLead } from '../lib/api/leads';
import { listPublishedTestimonials, type PublishedTestimonial } from '../lib/api/testimonials';

const TESTIMONIALS = [
  {
    title: 'Más práctico para la semana',
    text: 'La experiencia está pensada para elegir rápido, recibir fresco y sostener una rutina más ordenada.',
  },
  {
    title: 'Sabor con intención',
    text: 'Las combinaciones se sienten frescas, cuidadas y fáciles de integrar a un día ocupado.',
  },
  {
    title: 'Una comunidad que participa',
    text: 'Las decisiones del menú se abren a la comunidad para que Serana evolucione con quienes la consumen.',
  },
];

export default function TestimonialsSection() {
  const [publishedTestimonials, setPublishedTestimonials] = useState<PublishedTestimonial[]>([]);
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    let active = true;
    void listPublishedTestimonials().then((items) => {
      if (active) setPublishedTestimonials(items);
    });
    return () => {
      active = false;
    };
  }, []);

  const testimonialCards = publishedTestimonials.length > 0
    ? publishedTestimonials.map((item) => ({
        title: item.full_name,
        text: item.message,
        rating: item.rating,
      }))
    : TESTIMONIALS.map((item) => ({ ...item, rating: 5 }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') return;

    const cleanComment = comment.trim();
    const cleanName = name.trim();
    if (cleanComment.length < 5) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    const id = await captureLead({
      channel: 'testimonial',
      full_name: cleanName || undefined,
      message: cleanComment,
      metadata: {
        rating,
        rating_scale: 5,
        section: 'home_testimonials',
        moderation_status: 'pending',
      },
    });

    if (!id) {
      setStatus('error');
      return;
    }

    setStatus('sent');
    setName('');
    setComment('');
    setRating(5);
  };

  return (
    <section className="py-14 md:py-20 px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-serana-terracotta font-bold tracking-[0.3em] uppercase text-[10px] mb-4">
              <Quote className="w-4 h-4" />
              Reseñas Serana
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-serana-forest leading-tight">
              Lo que se vive cuando comer bien se vuelve <span className="italic text-serana-olive">más fácil</span>.
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm text-serana-forest/65 font-light leading-relaxed border-l border-serana-forest/15 pl-5">
            Historias positivas de una experiencia que combina frescura, practicidad y bienestar cotidiano.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 items-start">
          <div className="lg:col-span-7 grid sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
            {testimonialCards.map((item, idx) => (
              <motion.article
                key={`${item.title}-${idx}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-2xl border border-serana-forest/10 bg-serana-cream/45 p-6"
              >
                <div className="flex items-center gap-1 text-serana-ochre mb-5" aria-label={`${item.rating} de 5 estrellas`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < item.rating ? 'fill-current' : ''}`} />
                  ))}
                </div>
                <h3 className="font-serif text-xl text-serana-forest leading-tight mb-3">{item.title}</h3>
                <p className="text-sm text-serana-forest/68 font-light leading-relaxed">{item.text}</p>
              </motion.article>
            ))}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="lg:col-span-5 rounded-2xl border border-serana-forest/10 bg-serana-forest text-serana-cream p-6 md:p-7 shadow-[0_20px_50px_-35px_rgba(39,54,23,0.45)]"
          >
            <div className="mb-5">
              <p className="text-[10px] uppercase tracking-[0.24em] text-serana-ochre font-bold mb-2">
                Deja tu reseña
              </p>
              <h3 className="font-serif text-2xl md:text-3xl leading-tight">
                Cuéntanos cómo fue tu experiencia.
              </h3>
            </div>

            <div className="mb-4">
              <span className="block text-[10px] uppercase tracking-widest text-serana-cream/55 mb-2">
                Nivel de satisfacción
              </span>
              <div className="flex items-center gap-1.5" aria-label={`${rating} de 5 estrellas`}>
                {Array.from({ length: 5 }).map((_, index) => {
                  const value = index + 1;
                  const selected = value <= rating;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setRating(value)}
                      aria-label={`${value} estrella${value > 1 ? 's' : ''}`}
                      aria-pressed={selected}
                      className="w-9 h-9 rounded-full border border-serana-cream/10 bg-white/5 text-serana-ochre flex items-center justify-center transition hover:bg-serana-ochre/15 focus:outline-none focus:ring-2 focus:ring-serana-ochre/50"
                    >
                      <Star className={`w-4 h-4 ${selected ? 'fill-current' : ''}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label htmlFor="testimonial-name" className="block text-[10px] uppercase tracking-widest text-serana-cream/55 mb-1.5">
                  Nombre
                </label>
                <input
                  id="testimonial-name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  disabled={status === 'sending' || status === 'sent'}
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-serana-cream/12 bg-white/6 px-4 py-3 text-sm text-serana-cream placeholder-serana-cream/35 outline-none transition focus:border-serana-ochre"
                />
              </div>

              <div>
                <label htmlFor="testimonial-comment" className="block text-[10px] uppercase tracking-widest text-serana-cream/55 mb-1.5">
                  Comentario
                </label>
                <textarea
                  id="testimonial-comment"
                  required
                  rows={4}
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  disabled={status === 'sending' || status === 'sent'}
                  placeholder="Escribe tu experiencia con Serana"
                  className="w-full resize-none rounded-xl border border-serana-cream/12 bg-white/6 px-4 py-3 text-sm leading-relaxed text-serana-cream placeholder-serana-cream/35 outline-none transition focus:border-serana-ochre"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="mt-4 w-full rounded-full bg-serana-ochre px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-serana-forest transition hover:bg-serana-cream disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Enviando</>
              ) : status === 'sent' ? (
                <><Check className="w-4 h-4" /> Reseña recibida</>
              ) : (
                <><Send className="w-4 h-4" /> Enviar reseña</>
              )}
            </button>

            <p className={`mt-3 text-[11px] leading-relaxed ${status === 'error' ? 'text-rose-200' : 'text-serana-cream/50'}`}>
              {status === 'error'
                ? 'No pudimos guardar la reseña. Revisa el comentario e intenta nuevamente.'
                : status === 'sent'
                  ? 'Gracias. Tu reseña queda en revisión antes de publicarse.'
                  : 'Tu opinión se guarda para mejorar la experiencia y el menú de Serana.'}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
