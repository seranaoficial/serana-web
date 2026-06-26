import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, Loader2, Lock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../components/AuthProvider';

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const { user, loading, updatePassword, authError } = useAuth();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    setLocalError(null);
  }, [password, confirmPassword]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (password.length < 6) {
      setLocalError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    if (password !== confirmPassword) {
      setLocalError('Las contraseñas no coinciden.');
      return;
    }

    setBusy(true);
    try {
      await updatePassword(password);
      navigate('/cuenta', {
        replace: true,
        state: { welcomeToast: 'Contraseña actualizada. Ya puedes seguir en Serana.' },
      });
    } catch {
      // AuthProvider keeps the readable error.
    } finally {
      setBusy(false);
    }
  };

  const unavailable = !loading && !user;

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
            to="/login"
            className="inline-flex items-center gap-2 text-serana-terracotta font-bold tracking-widest uppercase text-xs hover:text-serana-ochre transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Volver a entrar
          </Link>
          <p className="text-serana-terracotta font-bold tracking-[0.3em] uppercase text-[10px] mb-4">
            Acceso Serana
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-serana-forest leading-tight mb-6">
            Crea una
            <span className="block italic text-serana-olive">nueva contraseña.</span>
          </h1>
          <p className="text-lg text-serana-forest/70 font-light leading-relaxed max-w-xl">
            Usa una contraseña que recuerdes y que no compartas con otros servicios.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="bg-white/75 backdrop-blur-md border border-serana-forest/5 rounded-[1.75rem] shadow-sm p-6 md:p-8"
        >
          {loading ? (
            <div className="flex items-center justify-center py-16 text-serana-olive">
              <Loader2 className="w-7 h-7 animate-spin" />
            </div>
          ) : unavailable ? (
            <div className="space-y-5">
              <div className="rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 p-4 text-sm leading-relaxed">
                El enlace expiró o no pudimos abrir la sesión de recuperación. Solicita un nuevo enlace desde la pantalla de entrada.
              </div>
              <Link
                to="/login"
                className="w-full inline-flex items-center justify-center gap-2 bg-serana-forest text-serana-cream px-8 py-4 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-serana-olive transition"
              >
                Solicitar nuevo enlace
              </Link>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div className="rounded-2xl bg-serana-olive/10 border border-serana-olive/20 p-4 flex gap-3">
                <CheckCircle className="w-5 h-5 text-serana-olive shrink-0 mt-0.5" />
                <p className="text-sm text-serana-forest/70 leading-relaxed">
                  Enlace validado. Escribe tu nueva contraseña para terminar el proceso.
                </p>
              </div>

              <FieldIcon>
                <input
                  required
                  minLength={6}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nueva contraseña"
                  className="w-full bg-transparent outline-none"
                />
              </FieldIcon>
              <FieldIcon>
                <input
                  required
                  minLength={6}
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirmar contraseña"
                  className="w-full bg-transparent outline-none"
                />
              </FieldIcon>

              {(localError || authError) && (
                <p className="text-sm leading-relaxed text-rose-600">
                  {localError ?? authError}
                </p>
              )}

              <button
                type="submit"
                disabled={busy}
                className="w-full inline-flex items-center justify-center gap-2 bg-serana-forest text-serana-cream px-8 py-4 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-serana-olive transition disabled:opacity-60"
              >
                {busy && <Loader2 className="w-4 h-4 animate-spin" />}
                Guardar contraseña
              </button>
            </form>
          )}
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}

function FieldIcon({ children }: { children: ReactNode }) {
  return (
    <label className="flex items-center gap-3 px-4 py-4 rounded-2xl border border-serana-forest/10 bg-serana-cream/35 focus-within:bg-white focus-within:border-serana-forest/30 transition">
      <Lock className="w-4 h-4 text-serana-olive shrink-0" />
      {children}
    </label>
  );
}
