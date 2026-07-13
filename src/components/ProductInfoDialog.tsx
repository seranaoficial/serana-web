import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Apple, CheckCircle2, ChevronLeft, ChevronRight, Info, Leaf, PackageCheck, Scissors, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { type Product } from '../store/useCartStore';
import { normalizeSearch } from '../lib/search';
import { getComboDefinition } from '../data/comboCustomizations';
import { ComboCartControl } from './ComboConfigurator';

const COP = (n: number) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);

export default function ProductInfoDialog({
  product,
  allProducts,
  open,
  onClose,
}: {
  product: Product | null;
  allProducts: Product[];
  open: boolean;
  onClose: () => void;
}) {
  const { selectedVariant, setSelectedVariantLabel, selectedCut, setSelectedCut, selectedRipeness, setSelectedRipeness, productForCart } = useSelectedVariant(product);
  const isCombo = product ? Boolean(getComboDefinition(product)) : false;

  // Combine the primary photo + gallery (when present) into one ordered
  // list so the aside can carousel through every available image without
  // duplicating the hero shot.
  const photos: string[] = product
    ? [product.image, ...(product.gallery ?? [])].filter(Boolean)
    : [];
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') setActivePhoto((i) => Math.min(i + 1, photos.length - 1));
      if (event.key === 'ArrowLeft') setActivePhoto((i) => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, open, photos.length]);

  // Reset to first photo whenever a different product opens.
  useEffect(() => {
    setActivePhoto(0);
  }, [product?.id]);

  if (!product || typeof document === 'undefined') return null;

  const hasIngredients = Boolean(product.ingredients?.length);
  const hasProductNotes = product.healthBenefit || product.observation || product.portions;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[80] bg-serana-forest/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Información de ${product.name}`}
            className="fixed inset-x-0 bottom-0 z-[81] max-h-[92vh] overflow-hidden rounded-t-[1.5rem] bg-serana-cream shadow-2xl md:inset-x-auto md:left-1/2 md:top-1/2 md:bottom-auto md:w-[min(980px,calc(100vw-48px))] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-[1.5rem]"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid max-h-[92vh] grid-rows-[1fr_auto] md:grid-cols-[340px_1fr] md:grid-rows-[1fr_auto]">
              <aside className="relative hidden overflow-hidden md:row-span-2 md:block bg-serana-forest">
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={`${product.id}-${activePhoto}`}
                    src={photos[activePhoto] ?? product.image}
                    alt={`${product.name} — foto ${activePhoto + 1}`}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.28 }}
                    className="absolute inset-0 h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Carousel arrows */}
                {photos.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setActivePhoto((i) => Math.max(i - 1, 0))}
                      disabled={activePhoto === 0}
                      aria-label="Foto anterior"
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-serana-forest shadow-sm backdrop-blur-sm transition hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePhoto((i) => Math.min(i + 1, photos.length - 1))}
                      disabled={activePhoto === photos.length - 1}
                      aria-label="Foto siguiente"
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-serana-forest shadow-sm backdrop-blur-sm transition hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </>
                )}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-serana-forest/82 to-transparent p-6 pt-16 text-serana-cream">
                  <p className="mb-2 inline-flex rounded-full bg-serana-cream px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-serana-forest">
                    {formatCategory(product.category)}
                  </p>
                  <p className="text-sm leading-relaxed text-serana-cream/84">{product.description}</p>
                </div>

                {/* Photo counter pill */}
                {photos.length > 1 && (
                  <div className="absolute top-4 right-4 z-10 rounded-full bg-serana-forest/70 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-serana-cream backdrop-blur-sm">
                    {activePhoto + 1} / {photos.length}
                  </div>
                )}
              </aside>

              <section className="min-h-0 overflow-y-auto md:col-start-2 md:row-start-1">
                <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-serana-forest/10 bg-serana-cream px-5 py-4 md:px-7">
                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-serana-terracotta">
                      {formatCategory(product.category)}
                    </p>
                    <h2 className="mt-1 max-w-[20ch] font-serif text-2xl leading-tight text-serana-forest md:max-w-none md:text-3xl">
                      {product.name}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-serana-forest/56 transition hover:bg-serana-forest/8 hover:text-serana-forest"
                    aria-label="Cerrar"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-5 px-5 py-5 md:px-7">
                  <div className="relative md:hidden">
                    <AnimatePresence initial={false} mode="wait">
                      <motion.img
                        key={`mobile-${product.id}-${activePhoto}`}
                        src={photos[activePhoto] ?? product.image}
                        alt={`${product.name} — foto ${activePhoto + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="aspect-[16/9] w-full rounded-2xl object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </AnimatePresence>
                    {photos.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-serana-forest/70 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-serana-cream backdrop-blur-sm">
                        {activePhoto + 1} / {photos.length}
                      </div>
                    )}
                  </div>

                  {/* Thumbnail strip — desktop only, hidden on mobile to save space */}
                  {photos.length > 1 && (
                    <div className="hidden md:flex gap-2 overflow-x-auto pb-1">
                      {photos.map((src, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActivePhoto(idx)}
                          aria-label={`Ir a foto ${idx + 1}`}
                          className={`relative shrink-0 w-16 h-20 rounded-lg overflow-hidden border-2 transition ${
                            idx === activePhoto
                              ? 'border-serana-forest shadow-md scale-[1.03]'
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={src} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="rounded-2xl border border-serana-forest/10 bg-white/70 p-4">
                    <p className="text-sm leading-relaxed text-serana-forest/74">
                      {product.description || product.healthBenefit || 'Producto fresco seleccionado por Serana.'}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="inline-flex items-center gap-1.5 rounded-full bg-serana-olive/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-serana-forest/72"
                        >
                          <CheckCircle2 className="h-3 w-3 text-serana-olive" />
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {product.variants?.length ? (
                    <section className="rounded-2xl border border-serana-forest/10 bg-white/70 p-4">
                      <SectionTitle icon={PackageCheck} title="Presentación" />
                      <div className="mt-3 flex flex-wrap gap-2">
                        {product.variants.map((variant) => {
                          const active = selectedVariant?.label === variant.label;
                          return (
                            <button
                              key={variant.label}
                              type="button"
                              onClick={() => setSelectedVariantLabel(variant.label)}
                              className={`rounded-full border px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] transition-colors ${
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
                    </section>
                  ) : null}

                  {!isCombo && product.cortes && product.cortes.length > 0 && (
                    <section className="rounded-2xl border border-serana-forest/10 bg-white/70 p-4">
                      <SectionTitle icon={Scissors} title="Tipo de corte" />
                      <div className="mt-3 flex flex-wrap gap-2">
                        {product.cortes.map((option) => {
                          const active = selectedCut === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setSelectedCut(option)}
                              className={`rounded-full border px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] transition-colors ${
                                active
                                  ? 'border-serana-forest bg-serana-forest text-serana-cream'
                                  : 'border-serana-forest/12 bg-serana-cream/70 text-serana-forest/68 hover:border-serana-forest/35'
                              }`}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    </section>
                  )}

                  {!isCombo && product.maduracion && product.maduracion.length > 0 && (
                    <section className="rounded-2xl border border-serana-forest/10 bg-white/70 p-4">
                      <SectionTitle icon={Apple} title="Maduración" />
                      <div className="mt-3 flex flex-wrap gap-2">
                        {product.maduracion.map((option) => {
                          const active = selectedRipeness === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setSelectedRipeness(option)}
                              className={`rounded-full border px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] transition-colors ${
                                active
                                  ? 'border-serana-forest bg-serana-forest text-serana-cream'
                                  : 'border-serana-forest/12 bg-serana-cream/70 text-serana-forest/68 hover:border-serana-forest/35'
                              }`}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    </section>
                  )}

                  {hasProductNotes && (
                    <section className="rounded-2xl border border-serana-forest/10 bg-white/70 p-4">
                      <SectionTitle icon={Info} title="Información" />
                      <div className="mt-3 space-y-3 text-sm leading-relaxed text-serana-forest/72">
                        {product.healthBenefit && product.healthBenefit !== product.description && (
                          <p><strong className="text-serana-forest">Beneficio:</strong> {product.healthBenefit}</p>
                        )}
                        {product.observation && (
                          <p><strong className="text-serana-forest">Nota:</strong> {product.observation}</p>
                        )}
                        {product.portions && (
                          <p><strong className="text-serana-forest">Porciones:</strong> {product.portions}</p>
                        )}
                      </div>
                    </section>
                  )}

                  <section className="rounded-2xl border border-serana-forest/10 bg-white/70 p-4">
                    <SectionTitle icon={Leaf} title={hasIngredients ? 'Ingredientes' : 'Ingredientes por confirmar'} />
                    {hasIngredients ? (
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {product.ingredients?.map((ingredient) => (
                          <li
                            key={ingredient}
                            className="rounded-full bg-serana-olive/10 px-3 py-1.5 text-[11px] font-medium text-serana-forest/76"
                          >
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 text-sm leading-relaxed text-serana-forest/62">
                        Este producto aún no tiene ingredientes detallados en el catálogo público.
                      </p>
                    )}
                  </section>
                </div>
              </section>

              <footer className="border-t border-serana-forest/10 bg-white/90 px-5 py-4 md:col-start-2 md:row-start-2 md:px-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-serana-forest/45">
                      {isCombo ? 'Combo' : selectedVariant ? 'Seleccionado' : 'Precio'}
                    </p>
                    <p className="text-xl font-black text-serana-terracotta">
                      {COP(productForCart.price)}
                    </p>
                  </div>
                  <div className="flex justify-start sm:justify-end">
                    <ComboCartControl product={productForCart} allProducts={allProducts} variant="dark" fullWidth />
                  </div>
                </div>
              </footer>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function SectionTitle({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="flex items-center gap-2 text-serana-forest">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-serana-olive/10 text-serana-olive">
        <Icon className="h-4 w-4" />
      </span>
      <h3 className="font-serif text-xl leading-tight">{title}</h3>
    </div>
  );
}

function useSelectedVariant(product: Product | null) {
  const [selectedVariantLabel, setSelectedVariantLabel] = useState(product?.variants?.[0]?.label ?? '');
  const [selectedCut, setSelectedCut] = useState<string | null>(null);
  const [selectedRipeness, setSelectedRipeness] = useState<string | null>(null);

  useEffect(() => {
    setSelectedVariantLabel(product?.variants?.[0]?.label ?? '');
    setSelectedCut(null);
    setSelectedRipeness(null);
  }, [product?.id, product?.variants]);

  if (!product) {
    return {
      selectedVariant: null,
      setSelectedVariantLabel,
      selectedCut,
      setSelectedCut,
      selectedRipeness,
      setSelectedRipeness,
      productForCart: {} as Product,
    };
  }

  const selectedVariant =
    product.variants?.find((variant) => variant.label === selectedVariantLabel) ?? product.variants?.[0] ?? null;

  // Build customizations text from selected cut + ripeness (if any).
  // Only emitted for non-combo individual products (mango, fresa picada, etc.)
  // — combo personalizations flow through comboSelections instead.
  const customizationsParts: string[] = [];
  if (selectedCut) customizationsParts.push(`Corte: ${selectedCut}`);
  if (selectedRipeness) customizationsParts.push(`Maduración: ${selectedRipeness}`);
  const customizationsText = customizationsParts.length > 0 ? customizationsParts.join('\n') : undefined;

  const productForCart = selectedVariant
    ? {
        ...product,
        id: `${product.id}-${slugifyVariant(selectedVariant.label)}`,
        productSlug: product.productSlug ?? product.id,
        name: `${product.name} - ${selectedVariant.label}`,
        price: selectedVariant.price,
        variantLabel: selectedVariant.label,
        customizations: customizationsText,
      }
    : { ...product, customizations: customizationsText };

  return {
    selectedVariant,
    setSelectedVariantLabel,
    selectedCut,
    setSelectedCut,
    selectedRipeness,
    setSelectedRipeness,
    productForCart,
  };
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
  // Data-driven: this helper is no longer used by the dialog UI (Cortes block
  // reads from product.cortes directly), but kept exported for any other
  // call-site that may still depend on the legacy inference rules.
  if (product.cortes && product.cortes.length > 0) return product.cortes;
  const text = normalizeSearch(product.name);
  if (text.includes('zanahoria')) return ['Rayada', 'Julianas', 'Bastones', 'Cubos', 'Rodajas'];
  if (text.includes('pepino')) return ['Cubos', 'Rodajas'];
  if (text.includes('fresa') && text.includes('picada')) return ['Rodajas', 'Cubos', 'Cuartos'];
  return [];
}
