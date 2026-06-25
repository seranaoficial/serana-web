import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Loader2, Lock, Mail, Phone, UserRound } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../components/AuthProvider';

type Mode = 'login' | 'register';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, loading, signIn, signUp, authError, configured } = useAuth();
  const [mode, setMode] = useState<Mode>('login');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const redirectTo = (location.state as { from?: string } | null)?.from ?? '/cuenta';

  useEffect(() => {
    if (!loading && user) navigate(redirectTo, { replace: true });
  }, [loading, navigate, redirectTo, user]);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setNotice(null);
    try {
      if (mode === 'login') {
        await signIn(email, password);
        navigate(redirectTo, { replace: true });
      } else {
        const res = await signUp({ email, password, fullName, phone });
        if (res.needsEmailConfirmation) {
          setNotice('Te enviamos un correo de confirmación. Después de confirmarlo, vuelve a iniciar sesión.');
        } else {
          navigate('/cuenta', { replace: true });
        }
      }
    } catch {
      // AuthProvider stores the readable error.
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen pt-32">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pb-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-8"
        >
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-serana-terracotta font-bold tracking-widest uppercase text-xs hover:text-serana-ochre transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Volver al menú
          </Link>
          <p className="text-serana-terracotta font-bold tracking-[0.3em] uppercase text-[10px] mb-4">
            Club Serana
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-serana-forest leading-tight mb-6">
            Tu cuenta
            <span className="block">guarda lo que</span>
            <span className="block italic text-serana-olive">sí importa.</span>
          </h1>
          <p className="text-lg text-serana-forest/70 font-light leading-relaxed max-w-xl">
            Inicia sesión para dejar tus compras, datos de entrega y membresía conectados a tu perfil.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 mt-10">
            {[
              ['Compras', 'Historial real de pedidos.'],
              ['Membresía', 'Días restantes visibles.'],
              ['Datos', 'Contacto y dirección listos.'],
            ].map(([title, text]) => (
              <div key={title} className="bg-white/60 border border-serana-forest/5 rounded-2xl p-4">
                <p className="text-serana-forest font-bold text-sm">{title}</p>
                <p className="text-serana-forest/55 text-xs leading-relaxed mt-1">{text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="bg-white/75 backdrop-blur-md border border-serana-forest/5 rounded-[1.75rem] shadow-sm p-6 md:p-8"
        >
          <div className="flex p-1 rounded-full bg-serana-forest/5 mb-8">
            {([
              ['login', 'Entrar'],
              ['register', 'Crear cuenta'],
            ] as Array<[Mode, string]>).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => { setMode(value); setNotice(null); }}
                className={`flex-1 rounded-full py-3 text-xs font-bold uppercase tracking-widest transition ${
                  mode === value
                    ? 'bg-serana-forest text-serana-cream shadow-sm'
                    : 'text-serana-forest/55 hover:text-serana-forest'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {!configured ? (
            <div className="rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 p-4 text-sm">
              Supabase no está configurado en este entorno.
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              {mode === 'register' && (
                <>
                  <FieldIcon Icon={UserRound}>
                    <input
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Nombre completo"
                      className="w-full bg-transparent outline-none"
                    />
                  </FieldIcon>
                  <FieldIcon Icon={Phone}>
                    <input
                      required
                      type="tel"
                      inputMode="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Celular con WhatsApp"
                      className="w-full bg-transparent outline-none"
                    />
                  </FieldIcon>
                </>
              )}
              <FieldIcon Icon={Mail}>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo"
                  className="w-full bg-transparent outline-none"
                />
              </FieldIcon>
              <FieldIcon Icon={Lock}>
                <input
                  required
                  minLength={6}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                  className="w-full bg-transparent outline-none"
                />
              </FieldIcon>

              {(authError || notice) && (
                <p className={`text-sm leading-relaxed ${notice ? 'text-serana-olive' : 'text-rose-600'}`}>
                  {notice ?? authError}
                </p>
              )}

              <button
                type="submit"
                disabled={busy}
                className="w-full inline-flex items-center justify-center gap-2 bg-serana-forest text-serana-cream px-8 py-4 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-serana-olive transition disabled:opacity-60"
              >
                {busy && <Loader2 className="w-4 h-4 animate-spin" />}
                {mode === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}
              </button>
            </form>
          )}
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}

function FieldIcon({
  Icon,
  children,
}: {
  Icon: typeof Mail;
  children: ReactNode;
}) {
  return (
    <label className="flex items-center gap-3 px-4 py-4 rounded-2xl border border-serana-forest/10 bg-serana-cream/35 focus-within:bg-white focus-within:border-serana-forest/30 transition">
      <Icon className="w-4 h-4 text-serana-olive shrink-0" />
      {children}
    </label>
  );
}
