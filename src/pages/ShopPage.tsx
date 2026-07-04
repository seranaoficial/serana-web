import { useEffect, useMemo, useRef, useState } from 'react';
import { useProducts } from '../lib/useProducts';
import ProductGrid, { type ProductGridViewMode } from '../components/ProductGrid';
import FeaturedStrip from '../components/FeaturedStrip';
import Navbar from '../components/Navbar';
import CartDrawer from '../components/CartDrawer';
import Footer from '../components/Footer';
import SectionDivider from '../components/SectionDivider';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { AlertTriangle, ArrowRight, Clock, LayoutGrid, List as ListIcon, Scissors, Search, SlidersHorizontal } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { SerenaIcons, SerenaMark, type SerenaIconName } from '../components/SeranaIcons';
import { normalizeSearch } from '../lib/search';
import { buildWhatsAppUrl } from '../lib/contact';

type Category =
  | 'all'
  | 'ensaladas-gourmet'
  | 'ensaladas-tradicionales'
  | 'salsas'
  | 'sopas'
  | 'bebidas'
  | 'frutas-picadas'
  | 'verduras-picadas'
  | 'mercado-fresco'
  | 'combos';

const CATEGORIES: Array<{ id: Category; label: string; icon: SerenaIconName }> = [
  { id: 'ensaladas-gourmet', label: 'Ensaladas gourmet', icon: 'Bowl' },
  { id: 'frutas-picadas', label: 'Frutas picadas', icon: 'Seed' },
  { id: 'ensaladas-tradicionales', label: 'Ensaladas tradicionales', icon: 'Leaf' },
  { id: 'verduras-picadas', label: 'Verduras picadas', icon: 'Sprout' },
  { id: 'salsas', label: 'Salsas y complementos', icon: 'Citrus' },
  { id: 'bebidas', label: 'Bebidas y shots', icon: 'Drop' },
  { id: 'sopas', label: 'Sopas y cremas', icon: 'Pot' },
  { id: 'combos', label: 'Combos', icon: 'Spark' },
  { id: 'mercado-fresco', label: 'Mercado fresco', icon: 'Seed' },
  { id: 'all', label: 'Todos', icon: 'SerenaMark' },
];

function parseCategoryParam(value: string | null): Category {
  return CATEGORIES.some((category) => category.id === value) ? (value as Category) : 'all';
}

type SuggestionId = 'lighter' | 'energy' | 'quick' | 'house';

const SUGGESTIONS: Array<{
  id: SuggestionId;
  number: string;
  kicker: string;
  title: string;
  italic: string;
  filter: Category;
  icon: SerenaIconName;
}> = [
  { id: 'lighter', number: '01', kicker: 'Si buscas algo ligero', title: 'Frescas y', italic: 'crujientes', filter: 'ensaladas-gourmet', icon: 'Leaf' },
  { id: 'energy', number: '02', kicker: 'Si quieres más energía', title: 'Shots con', italic: 'propósito', filter: 'bebidas', icon: 'Spark' },
  { id: 'quick', number: '03', kicker: 'Si quieres algo práctico', title: 'Combos para', italic: 'la semana', filter: 'combos', icon: 'Hourglass' },
  { id: 'house', number: '04', kicker: 'Favoritos de la casa', title: 'Lo que más', italic: 'pedimos', filter: 'all', icon: 'SerenaMark' },
];

const COMPLEMENTS: Array<{
  title: string;
  italic: string;
  desc: string;
  action: Category;
  icon: SerenaIconName;
}> = [
  { title: 'Agrégale una', italic: 'bebida', desc: 'Un shot funcional o jugo que potencia tu energía, digestión o enfoque.', action: 'bebidas', icon: 'Drop' },
  { title: 'Combínalo con una', italic: 'salsa', desc: 'Pesto, hummus, chimichurri o cualquier vinagreta para elevar tu plato.', action: 'salsas', icon: 'Citrus' },
  { title: 'Prueba un', italic: 'shot funcional', desc: 'Metabólico, serenidad, concentración, muscular o piel perfecta. Tu cuerpo te lo agradece.', action: 'bebidas', icon: 'Spark' },
  { title: 'Completa tu', italic: 'elección', desc: 'Acompaña tu ensalada con una crema o sopa para una comida completa.', action: 'sopas', icon: 'Pot' },
  { title: 'Arma tu', italic: 'ritual', desc: 'Ensalada + bebida + salsa + shot. Crea tu combinación perfecta de bienestar.', action: 'combos', icon: 'SerenaMark' },
  { title: 'Acompáñalo con', italic: 'frutas frescas', desc: 'Completa tu pedido con frutas de temporada seleccionadas para ti.', action: 'mercado-fresco', icon: 'Seed' },
];

const RITUAL_OPTIONS: Array<{
  title: string;
  desc: string;
  icon: SerenaIconName;
}> = [
  { title: 'Pedido semanal', desc: 'Recibe tu selección cada semana, sin pensarlo dos veces.', icon: 'Calendar' },
  { title: 'Compra recurrente', desc: 'Automatiza tus favoritos y nunca te quedes sin lo bueno.', icon: 'Hourglass' },
  { title: 'Club Serana', desc: 'Acumula semillas en cada compra y conviértelas en premios.', icon: 'Seed' },
];

function CategoryIcon({ name, className }: { name: SerenaIconName; className?: string }) {
  const Cmp = SerenaIcons[name];
  return <Cmp className={className} />;
}

function DispatchNotice() {
  return (
    <section className="mb-8 rounded-2xl border border-serana-forest/10 bg-white/70 p-4 md:p-5">
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex items-start gap-3">
          <span className="w-10 h-10 rounded-xl bg-serana-forest text-serana-ochre flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" strokeWidth={1.7} />
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-serana-terracotta font-bold mb-1">Despachos</p>
            <p className="text-sm text-serana-forest/70 leading-relaxed">
              Recibimos pedidos de martes a sábado. La disponibilidad y la franja de entrega se confirman por WhatsApp antes del despacho.
            </p>
          </div>
        </div>
        <a
          href={buildWhatsAppUrl('Hola, quiero resolver una duda sobre el mercado Serana.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-serana-forest text-serana-cream hover:bg-serana-olive transition-colors text-[10px] uppercase tracking-[0.25em] font-bold"
        >
          Contáctanos
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}

function MenuGuidance({ activeCategory }: { activeCategory: Category }) {
  const showCombos = activeCategory === 'all' || activeCategory === 'combos';
  const showFresh =
    activeCategory === 'all' ||
    activeCategory === 'frutas-picadas' ||
    activeCategory === 'verduras-picadas' ||
    activeCategory === 'mercado-fresco';

  if (!showCombos && !showFresh) return null;

  return (
    <section className="grid gap-4 md:grid-cols-2 mb-10">
      {showCombos && (
        <div className="rounded-2xl border border-serana-forest/10 bg-serana-forest text-serana-cream p-5">
          <div className="flex items-center gap-2 text-serana-ochre mb-3">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-[0.28em] font-bold">Combos y kits</span>
          </div>
          <h3 className="font-serif text-2xl leading-tight mb-3">Productos semipersonalizables</h3>
          <p className="text-sm text-serana-cream/72 leading-relaxed font-light">
            Algunos elementos vienen preseleccionados y otros se eligen según disponibilidad. Las restricciones de cantidad por línea gourmet, tradicional o repetidos se confirman al armar el pedido.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {['Base', 'Gourmet', 'Tradicional'].map((item) => (
              <span key={item} className="rounded-xl bg-white/10 px-3 py-2 text-center text-[9px] uppercase tracking-[0.18em] font-bold">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {showFresh && (
        <div className="rounded-2xl border border-serana-forest/10 bg-white/75 p-5">
          <div className="flex items-center gap-2 text-serana-olive mb-3">
            <Scissors className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-[0.28em] font-bold">Mercado fresco</span>
          </div>
          <h3 className="font-serif text-2xl text-serana-forest leading-tight mb-3">Fresco, picado o sin picar</h3>
          <p className="text-sm text-serana-forest/68 leading-relaxed font-light">
            Frutas picadas y verduras picadas tienen botones propios. Mercado fresco reúne el fruver sin picar, tal como lo pidieron.
          </p>
          <div className="mt-4 flex items-start gap-2 rounded-xl bg-serana-cream/80 p-3 text-serana-forest/62">
            <AlertTriangle className="w-4 h-4 text-serana-terracotta shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              Las presentaciones, porciones, ingredientes y observaciones aparecen dentro de cada ficha cuando vienen en la lista de precios.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<Category>(() =>
    parseCategoryParam(searchParams.get('category') ?? searchParams.get('filter')),
  );
  const [search, setSearch] = useState(() => searchParams.get('search') ?? '');
  const [viewMode, setViewMode] = useState<ProductGridViewMode>('gallery');
  const productSectionRef = useRef<HTMLElement | null>(null);
  const { products } = useProducts();

  useEffect(() => {
    const nextCategory = parseCategoryParam(searchParams.get('category') ?? searchParams.get('filter'));
    const nextSearch = searchParams.get('search') ?? '';
    setActiveCategory(nextCategory);
    setSearch(nextSearch);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    const base =
      activeCategory === 'all'
        ? [...products].sort((a, b) => {
            if (a.category === 'combos' && b.category !== 'combos') return -1;
            if (a.category !== 'combos' && b.category === 'combos') return 1;
            return 0;
          })
        : products.filter((p) => p.category === activeCategory);

    const term = normalizeSearch(search);
    if (!term) return base;
    return base.filter((p) =>
      normalizeSearch(
        [
          p.name,
          p.category,
          p.description,
          p.healthBenefit,
          p.observation,
          p.portions,
          p.benefits.join(' '),
          p.ingredients?.join(' '),
          p.variants?.map((variant) => variant.label).join(' '),
        ]
          .filter(Boolean)
          .join(' '),
      ).includes(term),
    );
  }, [products, activeCategory, search]);

  // Featured = top 6 priciest combos (or all combos when fewer than 6).
  const featured = useMemo(() => {
    if (activeCategory !== 'all' || search.trim().length > 0) return [];
    const combos = products.filter((p) => p.category === 'combos');
    return [...combos].sort((a, b) => b.price - a.price).slice(0, 6);
  }, [products, activeCategory, search]);

  const productCount = filteredProducts.length;
  const activeMeta = CATEGORIES.find((c) => c.id === activeCategory) ?? CATEGORIES[0];

  // Ingredient-heavy categories default to compact list; prepared dishes stay in gallery.
  useEffect(() => {
    if (activeCategory === 'mercado-fresco' || activeCategory === 'verduras-picadas' || activeCategory === 'frutas-picadas') {
      setViewMode('list');
    } else {
      setViewMode('gallery');
    }
  }, [activeCategory]);

  const scrollToProducts = () => {
    window.requestAnimationFrame(() => {
      productSectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  const selectCategory = (category: Category) => {
    setActiveCategory(category);
    setSearchParams((current) => {
      const next = new URLSearchParams(current);
      if (category === 'all') next.delete('category');
      else next.set('category', category);
      if (!search.trim()) next.delete('search');
      return next;
    });
    scrollToProducts();
  };

  return (
    <div className="min-h-screen pt-24 bg-serana-cream/40">
      <Navbar />
      <CartDrawer />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* ── Editorial header ───────────────────────────────────────────── */}
        <header className="pt-10 md:pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 text-serana-terracotta font-bold tracking-[0.4em] uppercase text-[10px] mb-5"
              >
                <span className="w-10 h-px bg-serana-terracotta/60" />
                El Mercado Serana
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-serana-forest text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.92] tracking-tight"
              >
                Elige tu forma
                <br />
                de <span className="italic text-serana-olive">nutrirte</span>
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="lg:col-span-4 lg:pt-12"
            >
              <p className="text-base text-serana-forest/70 font-light leading-relaxed max-w-sm border-l border-serana-forest/15 pl-5">
                Explora por categorías y encuentra opciones frescas, conscientes y deliciosas para tu alimentación diaria.
              </p>
              <div className="mt-5 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-serana-forest/50 font-bold">
                <span>{products.length} referencias</span>
                <span className="w-1 h-1 rounded-full bg-serana-forest/30" />
                <span>{CATEGORIES.length - 1} categorías</span>
              </div>
            </motion.div>
          </div>
        </header>

        <DispatchNotice />

        {/* ── Sticky category nav with icons ─────────────────────────────── */}
        <div className="sticky top-20 z-40 -mx-6 px-6 mb-12">
          <div className="bg-serana-cream/90 backdrop-blur-md border border-serana-forest/10 rounded-2xl shadow-[0_8px_30px_-15px_rgba(39,54,23,0.2)] py-2.5 px-2 sm:px-3 overflow-visible">
            <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap lg:justify-center lg:gap-2">
              {CATEGORIES.map((cat, i) => (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + i * 0.04 }}
                  onClick={() => selectCategory(cat.id)}
                  aria-pressed={activeCategory === cat.id}
                  className={clsx(
                    'group flex min-h-11 w-full min-w-0 items-center justify-start gap-2 rounded-xl border px-3 py-2 text-[9px] font-bold uppercase leading-tight tracking-[0.14em] transition-colors duration-300 sm:justify-center sm:text-[10px] lg:w-auto lg:px-3.5 lg:tracking-[0.16em]',
                    activeCategory === cat.id
                      ? 'bg-serana-forest text-serana-cream border-serana-forest shadow-md'
                      : 'bg-white/40 text-serana-forest border-transparent hover:border-serana-forest/15 hover:bg-white',
                  )}
                >
                  <CategoryIcon
                    name={cat.icon}
                    className={clsx(
                      'h-4 w-4 shrink-0 transition-colors',
                      activeCategory === cat.id ? 'text-serana-ochre' : 'text-serana-olive',
                    )}
                  />
                  <span className="min-w-0 text-left sm:text-center">{cat.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Active category context strip + search + view toggle ──────── */}
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl border border-serana-forest/15 bg-white/60 flex items-center justify-center text-serana-olive">
                <CategoryIcon name={activeMeta.icon} className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-serana-forest/50 font-bold mb-1">Mostrando</p>
                <h2 className="font-serif text-2xl md:text-3xl text-serana-forest leading-none">
                  <span className="italic text-serana-olive">{activeMeta.label}</span>
                </h2>
              </div>
            </div>
            <div className="flex items-baseline gap-2 text-serana-forest/55">
              <span className="font-serif italic text-3xl text-serana-forest">
                {String(productCount).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
                {search ? 'coincidencias' : 'referencias'}
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-serana-forest/40 pointer-events-none" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Busca un plato, ingrediente o categoría…"
                className="w-full pl-11 pr-24 py-3 rounded-full bg-white/80 border border-serana-forest/15 text-sm text-serana-forest placeholder-serana-forest/40 focus:bg-white focus:border-serana-forest/40 focus:outline-none transition shadow-sm"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-widest font-bold text-serana-forest/50 hover:text-serana-forest"
                >
                  limpiar
                </button>
              )}
            </div>
            <div className="flex items-center bg-white/80 border border-serana-forest/15 rounded-full p-0.5 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setViewMode('gallery')}
                className={clsx(
                  'relative flex items-center gap-2 px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold transition-colors',
                  viewMode === 'gallery'
                    ? 'text-serana-cream'
                    : 'text-serana-forest/55 hover:text-serana-forest',
                )}
              >
                {viewMode === 'gallery' && (
                  <motion.span
                    layoutId="shop-view-pill"
                    className="absolute inset-0 bg-serana-forest rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <LayoutGrid className="w-3.5 h-3.5" />
                Galería
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={clsx(
                  'relative flex items-center gap-2 px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold transition-colors',
                  viewMode === 'list'
                    ? 'text-serana-cream'
                    : 'text-serana-forest/55 hover:text-serana-forest',
                )}
              >
                {viewMode === 'list' && (
                  <motion.span
                    layoutId="shop-view-pill"
                    className="absolute inset-0 bg-serana-forest rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <ListIcon className="w-3.5 h-3.5" />
                Lista
              </button>
            </div>
          </div>
        </div>

        <MenuGuidance activeCategory={activeCategory} />

        {/* ── Featured strip (only when "Todos" + no search) ─────────────── */}
        {featured.length > 0 && <FeaturedStrip products={featured} allProducts={products} />}

        {/* ── Product grid ───────────────────────────────────────────────── */}
        <section ref={productSectionRef} className="scroll-mt-48">
          <ProductGrid
            products={filteredProducts}
            allProducts={products}
            externalSearch
            searchTerm={search}
            onSearchChange={setSearch}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            pageSize={24}
          />
        </section>

        <SectionDivider label="Cómo elegir" />

        {/* ── Suggestions: editorial cards with numbers ──────────────────── */}
        <section className="py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-end">
            <div className="lg:col-span-7">
              <span className="text-[10px] uppercase tracking-[0.4em] text-serana-olive font-bold mb-4 block">
                ¿No sabes por dónde empezar?
              </span>
              <h2 className="font-serif text-serana-forest text-3xl md:text-5xl leading-tight tracking-tight">
                Te ayudamos a <span className="italic text-serana-ochre">elegir</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-sm text-serana-forest/65 font-light leading-relaxed border-l border-serana-forest/15 pl-5 max-w-md">
              Elige según lo que necesitas hoy y filtra el menú al instante.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUGGESTIONS.map((sug, idx) => (
              <motion.button
                key={sug.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => selectCategory(sug.filter)}
                className="group relative bg-white border border-serana-forest/10 rounded-2xl p-6 text-left overflow-hidden transition-all duration-300 hover:border-serana-forest/30 hover:shadow-lg"
              >
                <span
                  aria-hidden
                  className="absolute -top-2 right-4 font-serif italic text-[5rem] leading-none text-serana-forest/5 group-hover:text-serana-forest/15 transition-colors select-none"
                >
                  {sug.number}
                </span>
                <div className="w-11 h-11 rounded-xl border border-serana-forest/15 flex items-center justify-center text-serana-olive mb-5">
                  <CategoryIcon name={sug.icon} className="w-5 h-5" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-serana-terracotta font-bold mb-2">{sug.kicker}</p>
                <h3 className="font-serif text-xl text-serana-forest leading-tight tracking-tight">
                  {sug.title} <span className="italic text-serana-olive">{sug.italic}</span>.
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-serana-forest/55 font-bold group-hover:text-serana-forest transition-colors">
                  Ver categoría <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            ))}
          </div>
        </section>

        <SectionDivider variant="brush" />

        {/* ── Complements / upsell ──────────────────────────────────────── */}
        <section className="py-12 md:py-16">
          <div className="text-center mb-12">
            <span className="inline-block text-serana-terracotta font-bold tracking-[0.4em] uppercase text-[10px] mb-4">
              Completa tu experiencia
            </span>
            <h2 className="font-serif text-serana-forest text-3xl md:text-5xl tracking-tight">
              Acompáñalo con
              <br />
              <span className="italic text-serana-ochre">algo más</span>.
            </h2>
            <p className="mt-4 text-sm text-serana-forest/60 font-light max-w-md mx-auto">
              Combínalo con una salsa, agrégale una bebida funcional o arma tu ritual de bienestar completo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMPLEMENTS.map((item, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => selectCategory(item.action)}
                className="group relative bg-white border border-serana-forest/10 hover:border-serana-olive/30 hover:shadow-lg rounded-[1.5rem] p-6 text-left transition-all overflow-hidden"
              >
                <span
                  aria-hidden
                  className="absolute top-3 right-4 font-serif italic text-[3.5rem] leading-none text-serana-forest/5 select-none"
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-12 rounded-xl bg-serana-cream border border-serana-forest/10 flex items-center justify-center text-serana-olive mb-5">
                  <CategoryIcon name={item.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-serana-forest leading-snug tracking-tight">
                  {item.title} <span className="italic text-serana-olive">{item.italic}</span>.
                </h3>
                <p className="mt-3 text-[13px] text-serana-forest/65 font-light leading-relaxed">{item.desc}</p>
              </motion.button>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* ── Routine / closing ──────────────────────────────────────────── */}
        <section className="py-12 md:py-20 mb-12">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-serana-forest text-serana-cream">
            <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
              <svg viewBox="0 0 600 400" preserveAspectRatio="none" className="w-full h-full text-serana-cream" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M-20 320 C 120 250, 240 360, 380 290 C 480 240, 560 320, 620 270" />
                <path d="M-20 360 C 100 320, 240 380, 380 340 C 500 310, 560 360, 620 330" opacity="0.65" />
                <path d="M-20 280 C 130 200, 260 320, 380 240 C 500 180, 560 280, 620 220" opacity="0.4" />
              </svg>
            </div>

            <div className="relative z-10 p-10 md:p-14 lg:p-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
                <div className="lg:col-span-7">
                  <span className="inline-flex items-center gap-3 text-serana-ochre font-bold tracking-[0.4em] uppercase text-[10px] mb-5">
                    <span className="w-10 h-px bg-serana-ochre/60" />
                    Haz de Serana tu rutina
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95]">
                    Nutrirse bien no
                    <br />
                    tiene que ser <span className="italic text-serana-ochre">complicado</span>.
                  </h2>
                </div>
                <p className="lg:col-span-5 text-base text-serana-cream/70 font-light leading-relaxed border-l border-serana-cream/20 pl-5 max-w-md">
                  Arma tu pedido semanal, activa tu suscripción o simplemente elige lo que te provoca hoy. Tú decides cómo hacer de Serana parte de tu rutina.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                {RITUAL_OPTIONS.map((opt, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm"
                  >
                    <div className="w-11 h-11 rounded-xl border border-serana-cream/20 flex items-center justify-center text-serana-ochre mb-4">
                      <CategoryIcon name={opt.icon} className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-xl text-serana-cream leading-tight tracking-tight">
                      {opt.title}
                    </h4>
                    <p className="mt-2 text-[12px] text-serana-cream/60 font-light leading-relaxed">{opt.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    selectCategory('all');
                  }}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-serana-ochre text-serana-forest rounded-full transition-all hover:shadow-xl hover:-translate-y-0.5 font-sans font-bold tracking-widest text-[11px] uppercase"
                >
                  Explorar todo el menú
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-serana-cream/30 text-serana-cream rounded-full font-sans font-medium tracking-widest text-[11px] uppercase hover:bg-serana-cream/10 transition-all"
                >
                  Volver al inicio
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-3 text-serana-cream/50">
                <SerenaMark className="w-6 h-6 text-serana-ochre" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold">
                  Club Serana
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
