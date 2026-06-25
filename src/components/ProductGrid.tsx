import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, CheckCircle2, Scissors, Search, LayoutGrid, List as ListIcon } from 'lucide-react';
import { type Product } from '../store/useCartStore';
import { Spark } from './SeranaIcons';
import QuantityControl from './QuantityControl';
import { normalizeSearch } from '../lib/search';

const COP = (n: number) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);

export type ProductGridViewMode = 'gallery' | 'list';
type ProductVariant = NonNullable<Product['variants']>[number];

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
}: Props) {
  const [internalSearch, setInternalSearch] = useState('');
  const [internalView, setInternalView] = useState<ProductGridViewMode>('gallery');
  const [visibleCount, setVisibleCount] = useState(pageSize);

  const search = externalSearch ? (searchTerm ?? '') : internalSearch;
  const view = viewMode ?? internalView;
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
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-7"
          >
            {visible.map((product, i) => (
              <GalleryCard key={product.id} product={product} index={i} />
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
              <ListRow key={product.id} product={product} index={i} />
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

function GalleryCard({ product, index }: { product: Product; index: number }) {
  const cutOptions = getCutOptions(product);
  const { selectedVariant, setSelectedVariantLabel, productForCart } = useSelectedVariant(product);
  const summary = getProductSummary(product);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: Math.min(index, 8) * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="relative rounded-[1.4rem] overflow-hidden bg-white border border-serana-forest/8 shadow-[0_15px_40px_-25px_rgba(39,54,23,0.25)] hover:shadow-[0_25px_60px_-25px_rgba(39,54,23,0.35)] transition-shadow duration-500">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2 py-0.5 bg-serana-cream/90 rounded text-[9px] font-black uppercase tracking-widest text-serana-forest">
              {formatCategory(product.category)}
            </span>
          </div>
          {product.isSubscription && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-serana-terracotta text-white text-[9px] font-black uppercase tracking-widest">
                <Spark className="w-2.5 h-2.5" /> Sub
              </span>
            </div>
          )}
        </div>

        <div className="p-3 md:p-4 flex flex-col gap-3">
          <div className="min-w-0">
            <h3 className="font-serif text-base md:text-lg text-serana-forest leading-tight tracking-tight">
              {product.name}
            </h3>
            <p className="mt-1 text-[11px] md:text-xs text-serana-forest/62 leading-snug">{summary}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {product.benefits.slice(0, 2).map((benefit) => (
                <span key={benefit} className="inline-flex items-center gap-1 rounded-full bg-serana-olive/10 px-2 py-1 text-[8px] uppercase tracking-[0.15em] font-bold text-serana-forest/70">
                  <CheckCircle2 className="w-2.5 h-2.5 text-serana-olive" />
                  {benefit}
                </span>
              ))}
            </div>
            {cutOptions.length > 0 && (
              <ProductCutOptions options={cutOptions} compact />
            )}
            {product.variants && (
              <ProductVariantSelector
                variants={product.variants}
                selected={selectedVariant}
                onSelect={setSelectedVariantLabel}
                compact
              />
            )}
            <ProductDetails product={product} compact />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="font-bold text-serana-terracotta text-sm md:text-base">{COP(productForCart.price)}</span>
            <QuantityControl product={productForCart} variant="dark" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ListRow({ product, index }: { product: Product; index: number }) {
  const cutOptions = getCutOptions(product);
  const { selectedVariant, setSelectedVariantLabel, productForCart } = useSelectedVariant(product);
  const summary = getProductSummary(product);

  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.3, delay: Math.min(index, 8) * 0.02 }}
      className="group flex items-start gap-3 px-4 py-3 rounded-2xl bg-white border border-serana-forest/8 hover:border-serana-olive/30 hover:shadow transition-all"
    >
      <img
        src={product.image}
        alt={product.name}
        referrerPolicy="no-referrer"
        loading="lazy"
        className="w-12 h-12 rounded-xl object-cover shrink-0 border border-serana-forest/10"
      />
      <div className="flex-1 min-w-0">
        <p className="font-serif text-base text-serana-forest leading-tight">{product.name}</p>
        <p className="text-[11px] text-serana-forest/62 leading-snug">{summary}</p>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {product.benefits.slice(0, 2).map((benefit) => (
            <span key={benefit} className="text-[8px] uppercase tracking-[0.16em] font-bold text-serana-forest/50">
              {benefit}
            </span>
          ))}
        </div>
        {cutOptions.length > 0 && <ProductCutOptions options={cutOptions} />}
        {product.variants && (
          <ProductVariantSelector
            variants={product.variants}
            selected={selectedVariant}
            onSelect={setSelectedVariantLabel}
          />
        )}
        <ProductDetails product={product} />
      </div>
      <div className="flex shrink-0 flex-col items-end gap-2">
        <span className="font-bold text-serana-terracotta tabular-nums whitespace-nowrap">{COP(productForCart.price)}</span>
        <QuantityControl product={productForCart} variant="soft" />
      </div>
    </motion.li>
  );
}

function ProductNotice({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`mt-2 flex items-start gap-1.5 text-serana-forest/48 ${compact ? 'text-[8px]' : 'text-[9px]'}`}>
      <AlertTriangle className="w-3 h-3 text-serana-terracotta shrink-0 mt-0.5" />
      <span className="leading-snug">Revisa alérgenos y conservación antes de ordenar.</span>
    </div>
  );
}

function ProductCutOptions({ options, compact = false }: { options: string[]; compact?: boolean }) {
  return (
    <div className="mt-2">
      <div className="flex items-center gap-1.5 text-serana-olive mb-1">
        <Scissors className="w-3 h-3" />
        <span className="text-[8px] uppercase tracking-[0.18em] font-bold">Personaliza corte</span>
      </div>
      <div className="flex flex-wrap gap-1">
        {options.map((option) => (
          <span
            key={option}
            className={`rounded-full border border-serana-forest/10 bg-serana-cream/70 text-serana-forest/70 font-bold uppercase tracking-[0.12em] ${
              compact ? 'px-1.5 py-0.5 text-[7px]' : 'px-2 py-0.5 text-[8px]'
            }`}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProductVariantSelector({
  variants,
  selected,
  onSelect,
  compact = false,
}: {
  variants: ProductVariant[];
  selected: ProductVariant | null;
  onSelect: (label: string) => void;
  compact?: boolean;
}) {
  return (
    <div className="mt-2">
      <p className="mb-1 text-[8px] uppercase tracking-[0.18em] font-bold text-serana-forest/45">
        Presentación
      </p>
      <div className="flex flex-wrap gap-1">
        {variants.map((variant) => {
          const active = selected?.label === variant.label;
          return (
            <button
              key={variant.label}
              type="button"
              onClick={() => onSelect(variant.label)}
              className={`rounded-full border font-bold uppercase transition-colors ${
                compact ? 'px-2 py-1 text-[7px] tracking-[0.1em]' : 'px-2.5 py-1 text-[8px] tracking-[0.12em]'
              } ${
                active
                  ? 'border-serana-forest bg-serana-forest text-serana-cream'
                  : 'border-serana-forest/12 bg-serana-cream/70 text-serana-forest/68 hover:border-serana-forest/35'
              }`}
            >
              {variant.label} · {COP(variant.price)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ProductDetails({ product, compact = false }: { product: Product; compact?: boolean }) {
  const showBenefit = shouldShowHealthBenefit(product);
  const hasDetails = showBenefit || product.observation || product.portions || product.ingredients?.length;
  if (!hasDetails) {
    return <ProductNotice compact={compact} />;
  }

  return (
    <details className="group mt-2 rounded-xl border border-serana-forest/8 bg-serana-cream/45 px-2.5 py-2">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-[8px] uppercase tracking-[0.18em] font-bold text-serana-forest/58 [&::-webkit-details-marker]:hidden">
        <span>Ver información</span>
        <span className="text-serana-olive transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="mt-2 space-y-2 text-serana-forest/62">
        {showBenefit && (
          <p className={`${compact ? 'text-[9px]' : 'text-[10px]'} leading-snug`}>
            <span className="font-bold text-serana-forest/70">Beneficio:</span> {product.healthBenefit}
          </p>
        )}
        {product.observation && (
          <p className={`${compact ? 'text-[9px]' : 'text-[10px]'} leading-snug`}>
            <span className="font-bold text-serana-forest/70">Nota:</span> {product.observation}
          </p>
        )}
        {product.portions && (
          <p className={`${compact ? 'text-[9px]' : 'text-[10px]'} leading-snug`}>
            <span className="font-bold text-serana-forest/70">Porciones:</span> {product.portions}
          </p>
        )}
        {product.ingredients?.length ? (
          <ul className={`${compact ? 'text-[9px]' : 'text-[10px]'} grid grid-cols-1 gap-0.5 leading-snug`}>
            {product.ingredients.map((ingredient) => (
              <li key={ingredient}>• {ingredient}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </details>
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

function shouldShowHealthBenefit(product: Product) {
  if (!product.healthBenefit) return false;
  if (!product.description) return true;
  return normalizeComparable(product.healthBenefit) !== normalizeComparable(product.description);
}

function cleanSentence(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function normalizeComparable(value: string) {
  return cleanSentence(value).toLowerCase().replace(/[.!?]+$/g, '');
}

function ensureSentence(value: string) {
  const clean = value.trim().replace(/\s*[.]+$/, '');
  if (!clean) return '';
  return /[!?]$/.test(clean) ? clean : `${clean}.`;
}

function useSelectedVariant(product: Product) {
  const [selectedVariantLabel, setSelectedVariantLabel] = useState(product.variants?.[0]?.label ?? '');

  useEffect(() => {
    setSelectedVariantLabel(product.variants?.[0]?.label ?? '');
  }, [product.id, product.variants]);

  const selectedVariant =
    product.variants?.find((variant) => variant.label === selectedVariantLabel) ?? product.variants?.[0] ?? null;

  const productForCart = selectedVariant
    ? {
        ...product,
        id: `${product.id}-${slugifyVariant(selectedVariant.label)}`,
        name: `${product.name} - ${selectedVariant.label}`,
        price: selectedVariant.price,
      }
    : product;

  return { selectedVariant, setSelectedVariantLabel, productForCart };
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

function slugifyVariant(label: string) {
  return normalizeSearch(label).replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function formatCategory(category: string) {
  return category
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function getCutOptions(product: Product) {
  const text = normalizeSearch(product.name);
  if (text.includes('zanahoria')) return ['Rayada', 'Julianas', 'Bastones', 'Cubos', 'Rodajas'];
  if (text.includes('pepino')) return ['Cubos', 'Rodajas'];
  if (text.includes('fresa') && text.includes('picada')) return ['Rodajas', 'Cubos', 'Cuartos'];
  return [];
}
