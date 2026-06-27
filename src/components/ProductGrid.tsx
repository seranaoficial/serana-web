import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Info, Search, LayoutGrid, List as ListIcon } from 'lucide-react';
import { type Product } from '../store/useCartStore';
import { Spark } from './SeranaIcons';
import { ComboCartControl } from './ComboConfigurator';
import ProductInfoDialog from './ProductInfoDialog';
import { normalizeSearch } from '../lib/search';

const COP = (n: number) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);

export type ProductGridViewMode = 'gallery' | 'list';

interface Props {
  products: Product[];
  /** Initial page size (number of cards before "Ver más"). */
  pageSize?: number;
  /** External search bar hides the built-in one when true. */
  externalSearch?: boolean;
  searchTerm?: string;
  onSearchChange?: (term: string) => void;
  viewMode?: ProductGridViewMode;
  onViewModeChange?: (mode: ProductGridViewMode) => void;
  allProducts?: Product[];
}

/**
 * Dynamic product browser:
 *   - Inline text search.
 *   - Toggle between a rich gallery grid and a compact list (good for the
 *     long ingredient categories like Verduras and Frutas).
 *   - Reveal-more pagination so the page never renders 100+ heavy cards
 *     up front.
 */
export default function ProductGrid({
  products,
  pageSize = 24,
  externalSearch = false,
  searchTerm,
  onSearchChange,
  viewMode,
  onViewModeChange,
  allProducts,
}: Props) {
  const [internalSearch, setInternalSearch] = useState('');
  const [internalView, setInternalView] = useState<ProductGridViewMode>('gallery');
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);

  const search = externalSearch ? (searchTerm ?? '') : internalSearch;
  const view = viewMode ?? internalView;
  const catalogProducts = allProducts ?? products;
  const setView = (v: ProductGridViewMode) => {
    if (onViewModeChange) onViewModeChange(v);
    else setInternalView(v);
  };
  const setSearch = (s: string) => {
    if (onSearchChange) onSearchChange(s);
    else setInternalSearch(s);
  };

  // Reset pagination whenever the source list or filters change.
  useEffect(() => {
    setVisibleCount(pageSize);
  }, [products, pageSize, search]);

  const filtered = useMemo(() => {
    const term = normalizeSearch(search);
    if (!term) return products;
    return products.filter((p) =>
      normalizeSearch(productSearchText(p)).includes(term),
    );
  }, [products, search]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  return (
    <div className="space-y-8">
      {/* Toolbar — hidden when the parent owns search & view */}
      {!externalSearch && (
        <Toolbar
          search={search}
          onSearch={setSearch}
          view={view}
          onView={setView}
          totalCount={products.length}
          filteredCount={filtered.length}
        />
      )}

      <AnimatePresence mode="wait">
        {view === 'gallery' ? (
          <motion.div
            key="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10"
          >
            {visible.map((product, i) => (
              <GalleryCard
                key={product.id}
                product={product}
                index={i}
                allProducts={catalogProducts}
                onOpen={() => setDetailProduct(product)}
              />
            ))}
          </motion.div>
        ) : (
          <motion.ul
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-2"
          >
            {visible.map((product, i) => (
              <ListRow
                key={product.id}
                product={product}
                index={i}
                allProducts={catalogProducts}
                onOpen={() => setDetailProduct(product)}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="text-center py-24 text-serana-forest/60">
          <p className="font-serif text-2xl italic mb-2">Sin resultados</p>
          <p className="text-sm font-light">
            Probemos otra categoría o un término más amplio.
          </p>
        </div>
      )}

      {hasMore && (
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() => setVisibleCount((v) => v + pageSize)}
            className="group inline-flex items-center gap-3 px-7 py-3 rounded-full border border-serana-forest/15 bg-white text-serana-forest hover:bg-serana-forest hover:text-serana-cream transition-colors text-[11px] font-bold tracking-[0.3em] uppercase"
          >
            Ver más
            <span className="text-serana-terracotta group-hover:text-serana-ochre">
              +{Math.min(pageSize, filtered.length - visibleCount)}
            </span>
          </button>
        </div>
      )}

      <ProductInfoDialog
        product={detailProduct}
        allProducts={catalogProducts}
        open={Boolean(detailProduct)}
        onClose={() => setDetailProduct(null)}
      />
    </div>
  );
}

function Toolbar({
  search,
  onSearch,
  view,
  onView,
  totalCount,
  filteredCount,
}: {
  search: string;
  onSearch: (s: string) => void;
  view: ProductGridViewMode;
  onView: (v: ProductGridViewMode) => void;
  totalCount: number;
  filteredCount: number;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="relative flex-1 max-w-md">
        <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-serana-forest/40" />
        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Busca por nombre o categoría…"
          className="w-full pl-11 pr-4 py-3 rounded-full bg-white/70 border border-serana-forest/15 text-sm text-serana-forest placeholder-serana-forest/40 focus:bg-white focus:border-serana-forest/40 focus:outline-none transition"
        />
        {search && (
          <button
            type="button"
            onClick={() => onSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-widest font-bold text-serana-forest/50 hover:text-serana-forest"
          >
            limpiar
          </button>
        )}
      </div>

      <div className="flex items-center gap-3 self-stretch md:self-auto">
        <span className="text-[10px] uppercase tracking-[0.3em] text-serana-forest/50 font-bold">
          {filteredCount === totalCount
            ? `${totalCount} referencias`
            : `${filteredCount} / ${totalCount}`}
        </span>
        <div className="flex items-center bg-white/70 border border-serana-forest/15 rounded-full p-0.5">
          <ToolbarToggle active={view === 'gallery'} onClick={() => onView('gallery')} icon={LayoutGrid} label="Galería" />
          <ToolbarToggle active={view === 'list'} onClick={() => onView('list')} icon={ListIcon} label="Lista" />
        </div>
      </div>
    </div>
  );
}

function ToolbarToggle({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof LayoutGrid;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold transition-colors ${
        active ? 'text-serana-cream' : 'text-serana-forest/55 hover:text-serana-forest'
      }`}
    >
      {active && (
        <motion.span
          layoutId="grid-toolbar-pill"
          className="absolute inset-0 bg-serana-forest rounded-full -z-10"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      <Icon className="w-3 h-3" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function GalleryCard({
  product,
  index,
  allProducts,
  onOpen,
}: {
  product: Product;
  index: number;
  allProducts: Product[];
  onOpen: () => void;
}) {
  const summary = getProductSummary(product);
  const requiresDetailChoice = Boolean(product.variants?.length);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: Math.min(index, 8) * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-serana-forest/8 bg-white shadow-[0_15px_40px_-25px_rgba(39,54,23,0.25)] transition-all duration-500 hover:-translate-y-0.5 hover:border-serana-olive/25 hover:shadow-[0_25px_60px_-25px_rgba(39,54,23,0.35)]">
        <button type="button" onClick={onOpen} className="block text-left">
          <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-serana-cream/30 to-serana-olive/10">
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={product.image.replace('-desktop.webp', '-hero.webp')}
              />
              <source
                media="(min-width: 640px)"
                srcSet={product.image.replace('-desktop.webp', '-desktop.webp')}
              />
              <img
                src={product.image.replace('-desktop.webp', '-mobile.webp')}
                srcSet={`${product.image.replace('-desktop.webp', '-mobile.webp')} 600w, ${product.image} 900w, ${product.image.replace('-desktop.webp', '-hero.webp')} 1600w`}
                sizes="(max-width: 640px) 600px, (max-width: 1280px) 900px, 1600px"
                alt={product.name}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </picture>
            <div className="absolute top-3 left-3">
              <span className="rounded bg-serana-cream/90 px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-serana-forest">
                {formatCategory(product.category)}
              </span>
            </div>
            {product.isSubscription && (
              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-serana-terracotta px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-white">
                  <Spark className="h-2.5 w-2.5" /> Sub
                </span>
              </div>
            )}
            <span className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-serana-forest shadow-sm transition group-hover:bg-serana-forest group-hover:text-serana-cream">
              <Info className="h-4 w-4" />
            </span>
          </div>

          <div className="px-3 pb-2 pt-3 md:px-4">
            <h3 className="font-serif text-base leading-tight tracking-tight text-serana-forest md:text-lg">
              {product.name}
            </h3>
            <p className="mt-1 text-[11px] leading-snug text-serana-forest/62 md:text-xs">
              {summary}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {product.benefits.slice(0, 2).map((benefit) => (
                <span
                  key={benefit}
                  className="inline-flex items-center gap-1 rounded-full bg-serana-olive/10 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.15em] text-serana-forest/70"
                >
                  <CheckCircle2 className="h-2.5 w-2.5 shrink-0 text-serana-olive" />
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </button>

        <div className="mt-auto border-t border-serana-forest/8 px-3 py-3 md:px-4">
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="text-sm font-black text-serana-terracotta md:text-base">{COP(product.price)}</span>
            <button
              type="button"
              onClick={onOpen}
              className="inline-flex h-8 items-center gap-1.5 rounded-full bg-serana-forest/6 px-3 text-[9px] font-black uppercase tracking-[0.16em] text-serana-forest/68 transition hover:bg-serana-forest hover:text-serana-cream"
            >
              <Info className="h-3.5 w-3.5" />
              Detalle
            </button>
          </div>
          {requiresDetailChoice ? (
            <button
              type="button"
              onClick={onOpen}
              className="inline-flex h-9 w-full items-center justify-center rounded-full bg-serana-forest text-[10px] font-black uppercase tracking-[0.14em] text-serana-cream transition hover:bg-serana-olive"
            >
              Ver opciones
            </button>
          ) : (
            <ComboCartControl product={product} allProducts={allProducts} variant="dark" fullWidth />
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ListRow({
  product,
  index,
  allProducts,
  onOpen,
}: {
  product: Product;
  index: number;
  allProducts: Product[];
  onOpen: () => void;
}) {
  const summary = getProductSummary(product);
  const requiresDetailChoice = Boolean(product.variants?.length);

  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.3, delay: Math.min(index, 8) * 0.02 }}
      className="group grid gap-3 rounded-2xl border border-serana-forest/8 bg-white px-4 py-3 transition-all hover:border-serana-olive/30 hover:shadow md:grid-cols-[1fr_auto]"
    >
      <button type="button" onClick={onOpen} className="grid grid-cols-[56px_1fr] gap-3 text-left">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="h-14 w-14 shrink-0 rounded-xl border border-serana-forest/10 object-cover"
        />
        <div className="min-w-0">
          <p className="font-serif text-base leading-tight text-serana-forest">{product.name}</p>
          <p className="mt-0.5 text-[11px] leading-snug text-serana-forest/62">{summary}</p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {product.benefits.slice(0, 2).map((benefit) => (
              <span key={benefit} className="text-[8px] font-bold uppercase tracking-[0.16em] text-serana-forest/50">
                {benefit}
              </span>
            ))}
          </div>
        </div>
      </button>
      <div className="flex items-center justify-between gap-3 border-t border-serana-forest/8 pt-3 md:flex-col md:items-end md:justify-center md:border-t-0 md:pt-0">
        <span className="whitespace-nowrap font-bold tabular-nums text-serana-terracotta">{COP(product.price)}</span>
        {requiresDetailChoice ? (
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-serana-forest/10 px-4 text-[10px] font-black uppercase tracking-[0.14em] text-serana-forest transition hover:bg-serana-forest hover:text-serana-cream"
          >
            <Info className="h-3.5 w-3.5" />
            Opciones
          </button>
        ) : (
          <ComboCartControl product={product} allProducts={allProducts} variant="soft" />
        )}
      </div>
    </motion.li>
  );
}

function getProductSummary(product: Product) {
  const source = product.description || product.healthBenefit || product.benefits.join(' y ');
  const normalized = cleanSentence(source);
  const firstSentence = normalized.match(/^[^.!?]+[.!?]/)?.[0] ?? normalized;
  const [firstClause, secondClause] = firstSentence.split(',').map((part) => part.trim());
  const combined = secondClause ? `${firstClause}, ${secondClause}` : firstClause;
  const shortClause = firstClause.length < 32 && combined.length <= 82 ? combined : firstClause;

  return ensureSentence(shortClause || normalized);
}

function cleanSentence(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function ensureSentence(value: string) {
  const clean = value.trim().replace(/\s*[.]+$/, '');
  if (!clean) return '';
  return /[!?]$/.test(clean) ? clean : `${clean}.`;
}

function productSearchText(product: Product) {
  return [
    product.name,
    product.category,
    product.description,
    product.healthBenefit,
    product.observation,
    product.portions,
    product.benefits.join(' '),
    product.ingredients?.join(' '),
    product.variants?.map((variant) => variant.label).join(' '),
  ]
    .filter(Boolean)
    .join(' ');
}

function formatCategory(category: string) {
  return category
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}
