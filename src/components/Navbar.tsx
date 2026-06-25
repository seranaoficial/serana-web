import { Link } from 'react-router-dom';
import { Menu, X, Check, MessageCircle, UserRound } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useCartStore } from '../store/useCartStore';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';
import { MarketBasket } from './SeranaIcons';
import { useAuth } from './AuthProvider';

const WHATSAPP_URL = 'https://wa.me/573000000000';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const cartItems = useCartStore((state) => state.items);
  const lastAdded = useCartStore((state) => state.lastAdded);
  const { user, account } = useAuth();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const firstName = account?.profile?.full_name?.split(' ')[0] ?? 'Mi cuenta';

  // Pulse + toast whenever the cart store fires a new "added" ping.
  const [pulseKey, setPulseKey] = useState<number | null>(null);
  const [toast, setToast] = useState<{ id: number; name: string } | null>(null);
  const pingRef = useRef<number>(0);

  useEffect(() => {
    if (!lastAdded) return;
    if (lastAdded.ping === pingRef.current) return; // ignore initial mount
    pingRef.current = lastAdded.ping;
    setPulseKey(lastAdded.ping);
    setToast({ id: lastAdded.ping, name: lastAdded.productName });
    const t = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(t);
  }, [lastAdded]);
  
  // Simplified professional navbar state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Menú', path: '/shop' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Comunidad', path: '/community' },
  ];

  return (
    <motion.nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-500 border-b",
        isScrolled 
          ? "border-serana-forest/5 py-1 shadow-sm" 
          : "border-transparent py-2"
      )}
      style={{ backgroundColor: '#FEFADF' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="relative group block z-50">
          <img 
            src="https://qlgjqvgjuscquhspjqdp.supabase.co/storage/v1/object/public/AETHERA-DOCS/LOGO%20PRINCIPAL-07.png" 
            alt="Serana Logo" 
            className={clsx(
              "w-auto object-contain transition-all duration-500",
              isScrolled ? "h-18 md:h-22" : "h-28 md:h-32"
            )} 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-serana-forest font-medium text-xs tracking-[0.15em] uppercase hover:text-serana-olive transition-colors group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-serana-olive scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-serana-forest text-serana-cream hover:bg-serana-olive transition-colors text-[10px] font-bold tracking-[0.22em] uppercase"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Contáctanos
          </a>
          <Link
            to={user ? '/cuenta' : '/login'}
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-serana-forest/10 text-serana-forest hover:border-serana-olive hover:text-serana-olive transition-colors text-[10px] font-bold tracking-[0.22em] uppercase"
          >
            <UserRound className="w-3.5 h-3.5" />
            {user ? firstName : 'Ingresar'}
          </Link>
          {/* Hours chip — implies curated availability without screaming */}
          <div className="hidden lg:flex items-center gap-2 text-[#273617]/55 text-[9px] font-bold tracking-[0.4em] uppercase">
            <span>Mar — Sáb</span>
            <span className="w-1 h-1 rounded-full bg-[#273617]/30" />
            <span>10 — 18 h</span>
          </div>
          <div className="relative">
            <motion.button
              onClick={toggleCart}
              className="relative p-2 text-serana-forest hover:text-serana-olive transition-colors group"
              animate={pulseKey ? { rotate: [0, -10, 10, -6, 4, 0] } : {}}
              transition={{ duration: 0.55, ease: [0.25, 1, 0.4, 1] }}
              key={pulseKey ?? 'idle'}
              aria-label={cartCount > 0 ? `Cesta (${cartCount})` : 'Abrir cesta'}
            >
              <MarketBasket className="w-6 h-6" />
              <span className="absolute inset-0 bg-serana-forest/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 22 }}
                    className="absolute -top-1 -right-1 bg-serana-terracotta text-white text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Outward ripple on add */}
              <AnimatePresence>
                {pulseKey && (
                  <motion.span
                    key={`ripple-${pulseKey}`}
                    initial={{ scale: 0.6, opacity: 0.55 }}
                    animate={{ scale: 2.2, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="absolute inset-0 rounded-full bg-serana-terracotta/30 pointer-events-none"
                  />
                )}
              </AnimatePresence>
            </motion.button>

            {/* Floating "added" toast anchored to the cart icon */}
            <AnimatePresence>
              {toast && (
                <motion.div
                  key={toast.id}
                  initial={{ opacity: 0, y: -6, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.95, transition: { duration: 0.18 } }}
                  transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                  role="status"
                  className="absolute right-0 top-full mt-2 z-50 flex items-center gap-2 pl-2 pr-3 py-2 rounded-full bg-serana-forest text-serana-cream shadow-lg shadow-serana-forest/20 whitespace-nowrap pointer-events-none"
                >
                  <span className="w-5 h-5 rounded-full bg-serana-ochre text-serana-forest flex items-center justify-center">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  <span className="text-[11px] font-bold tracking-wide">
                    Agregaste <span className="text-serana-ochre">{toast.name}</span>
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className="md:hidden p-2 text-serana-forest"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col p-8 md:hidden"
            style={{ backgroundColor: '#FEFADF' }}
          >
            <div className="flex justify-between items-center mb-16">
              <img 
                src="https://qlgjqvgjuscquhspjqdp.supabase.co/storage/v1/object/public/AETHERA-DOCS/LOGO%20PRINCIPAL-07.png" 
                alt="Serana Logo" 
                className="h-12 w-auto object-contain" 
              />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X size={28} className="text-serana-forest" strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6 items-center justify-center flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif text-serana-forest hover:text-serana-olive transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-serana-forest text-serana-cream font-bold uppercase tracking-[0.22em] text-[11px]"
              >
                <MessageCircle className="w-4 h-4" />
                Contáctanos
              </motion.a>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to={user ? '/cuenta' : '/login'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-serana-forest/15 text-serana-forest font-bold uppercase tracking-[0.22em] text-[11px]"
                >
                  <UserRound className="w-4 h-4" />
                  {user ? 'Mi cuenta' : 'Ingresar'}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
