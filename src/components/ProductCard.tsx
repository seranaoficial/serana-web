import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useCartStore, type Product } from '../store/useCartStore';
import { Plus, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const COP = (n: number) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  // 3D tilt: track normalised mouse position [-1, 1] and convert to small
  // rotateX/rotateY values via springs so the motion feels weighted.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [8, -8]), { stiffness: 250, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-10, 10]), { stiffness: 250, damping: 22 });
  const glareX = useTransform(mouseX, [-1, 1], ['10%', '90%']);
  const glareY = useTransform(mouseY, [-1, 1], ['10%', '90%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x * 2 - 1);
    mouseY.set(y * 2 - 1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovering(false);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="group relative"
    >
      {/* Animated gradient halo that lights up on hover */}
      <div
        aria-hidden
        className="absolute -inset-[1.5px] rounded-[1.6rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'conic-gradient(from 120deg, transparent 0deg, rgba(220,161,93,0.55) 90deg, transparent 180deg, rgba(95,108,55,0.4) 270deg, transparent 360deg)',
          filter: 'blur(8px)',
        }}
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative rounded-[1.5rem] bg-white shadow-[0_20px_60px_-30px_rgba(39,54,23,0.25)] group-hover:shadow-[0_30px_80px_-30px_rgba(39,54,23,0.35)] transition-shadow duration-500 overflow-hidden"
      >
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
            <motion.img
              src={product.image.replace('-desktop.webp', '-mobile.webp')}
              srcSet={`${product.image.replace('-desktop.webp', '-mobile.webp')} 600w, ${product.image} 900w, ${product.image.replace('-desktop.webp', '-hero.webp')} 1600w`}
              sizes="(max-width: 640px) 600px, (max-width: 1280px) 900px, 1600px"
              alt={product.name}
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ transformStyle: 'preserve-3d' }}
            />
          </picture>

          {/* Cursor-following glare */}
          {hovering && (
            <motion.div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at var(--gx) var(--gy), rgba(255,255,255,0.32) 0%, rgba(255,255,255,0) 60%)',
                ['--gx' as any]: glareX,
                ['--gy' as any]: glareY,
                mixBlendMode: 'overlay',
              }}
            />
          )}

          {/* Decorative tape / category stamp */}
          <div className="absolute top-3 left-3 z-10">
            <div
              className="px-2.5 py-1 bg-serana-cream/90 backdrop-blur-sm rounded-md text-[9px] font-black uppercase tracking-widest text-serana-forest shadow-sm"
              style={{ transform: 'rotate(-4deg)' }}
            >
              {product.category}
            </div>
          </div>
          {product.isSubscription && (
            <div className="absolute top-3 right-3 z-10">
              <div className="flex items-center gap-1 px-2.5 py-1 bg-serana-terracotta/95 text-white rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm">
                <Sparkles size={10} /> Suscripción
              </div>
            </div>
          )}

          {/* Hover overlay with benefits */}
          <div className="absolute inset-0 bg-serana-forest/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex flex-col items-center justify-center p-6">
            <div className="text-center transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-100">
              <p className="text-serana-cream font-serif italic mb-5 text-xl">Beneficios</p>
              <ul className="space-y-2 mb-7">
                {product.benefits.slice(0, 3).map((benefit, index) => (
                  <li
                    key={index}
                    className="text-white/90 text-[10px] font-bold tracking-[0.2em] uppercase border-b border-white/20 pb-1 inline-block mx-2"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  addItem(product);
                }}
                className="bg-serana-ochre text-serana-forest px-7 py-2.5 rounded-full font-bold hover:bg-white transition-all shadow-lg active:scale-95 flex items-center gap-2 mx-auto uppercase tracking-widest text-xs"
              >
                <Plus size={14} /> Agregar
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 flex justify-between items-start gap-4 bg-white">
          <div className="min-w-0">
            <h3 className="font-serif text-xl text-serana-forest leading-tight group-hover:text-serana-olive transition-colors duration-300 truncate">
              {product.name}
            </h3>
            <p className="text-[10px] text-serana-forest/60 mt-1 uppercase tracking-wider font-medium">{product.category}</p>
          </div>
          <span className="font-bold text-serana-terracotta font-serif text-lg whitespace-nowrap">
            {COP(product.price)}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
