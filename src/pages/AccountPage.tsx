import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle,
  Loader2,
  LogOut,
  PackageCheck,
  Phone,
  Sparkles,
  UserRound,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../components/AuthProvider';

const COP = (n: number) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);

export default function AccountPage() {
  const navigate = useNavigate();
  const {
    user,
    loading,
    account,
    accountLoading,
    saveProfile,
    signOut,
    authError,
  } = useAuth();
  const profile = account?.profile ?? null;
  const membership = account?.membership ?? null;
  const orders = account?.orders ?? [];
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login', { replace: true, state: { from: '/cuenta' } });
    }
  }, [loading, navigate, user]);

  useEffect(() => {
    if (!profile) return;
    setFullName(profile.full_name ?? '');
    setPhone(profile.phone ?? '');
    setAddress(profile.address ?? '');
  }, [profile]);

  const hasProfile = Boolean(profile);
  const membershipLabel = useMemo(() => {
    if (!membership) return 'Sin membresía activa';
    if (membership.days_remaining <= 0) return 'Membresía vencida';
    return `${membership.days_remaining} días restantes`;
  }, [membership]);

  const handleSave = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setSaved(false);
    try {
      await saveProfile({
        full_name: fullName,
        phone,
        default_address: address,
      });
      setSaved(true);
    } catch {
      // AuthProvider keeps the readable error.
    } finally {
      setSaving(false);
    }
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <Navbar />
        <Loader2 className="w-8 h-8 animate-spin text-serana-olive" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <p className="text-serana-terracotta font-bold tracking-[0.3em] uppercase text-[10px] mb-4">
              Mi cuenta
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-serana-forest leading-tight">
              Hola{profile?.full_name ? `, ${profile.full_name.split(' ')[0]}` : ''}.
            </h1>
            <p className="text-serana-forest/65 mt-4 max-w-2xl">
              Aquí quedan conectadas tus compras, tus datos de entrega y el estado de tu membresía.
            </p>
          </div>
          <button
            type="button"
            onClick={() => void signOut().then(() => navigate('/'))}
            className="inline-flex items-center gap-2 text-serana-forest/60 hover:text-serana-terracotta font-bold uppercase tracking-widest text-xs"
          >
            <LogOut className="w-4 h-4" /> Salir
          </button>
        </div>

        <div className="grid lg:grid-cols-[360px_1fr] gap-8">
          <section className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/75 border border-serana-forest/5 rounded-[1.5rem] p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-full bg-serana-forest text-serana-cream flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div>
                  <p className="font-serif text-xl text-serana-forest">Club Serana</p>
                  <p className="text-[11px] uppercase tracking-widest text-serana-forest/45 font-bold">
                    Estado actual
                  </p>
                </div>
              </div>

              <p className="text-3xl font-serif text-serana-forest leading-tight">
                {membershipLabel}
              </p>
              {membership ? (
                <div className="mt-4 space-y-2 text-sm text-serana-forest/65">
                  <p className="font-bold text-serana-olive">{membership.plan_name}</p>
                  <p className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    Hasta {membership.ends_on}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-serana-forest/60 mt-4 leading-relaxed">
                  Cuando el equipo active una membresía, aparecerán aquí los días restantes y el plan.
                </p>
              )}
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 }}
              onSubmit={handleSave}
              className="bg-white/75 border border-serana-forest/5 rounded-[1.5rem] p-6 space-y-4"
            >
              <div>
                <p className="font-serif text-xl text-serana-forest">Tus datos</p>
                <p className="text-sm text-serana-forest/55 mt-1">
                  {hasProfile ? 'Actualiza tu contacto para próximas compras.' : 'Completa tu perfil para guardar compras.'}
                </p>
              </div>
              <input
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Nombre completo"
                className="w-full p-4 rounded-xl border border-serana-forest/10 bg-serana-cream/35 focus:bg-white focus:border-serana-forest/30 outline-none transition"
              />
              <input
                required
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Celular con WhatsApp"
                className="w-full p-4 rounded-xl border border-serana-forest/10 bg-serana-cream/35 focus:bg-white focus:border-serana-forest/30 outline-none transition"
              />
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Dirección principal"
                className="w-full p-4 rounded-xl border border-serana-forest/10 bg-serana-cream/35 focus:bg-white focus:border-serana-forest/30 outline-none transition"
              />
              {(authError || saved) && (
                <p className={`text-sm ${saved ? 'text-serana-olive' : 'text-rose-600'}`}>
                  {saved ? 'Datos guardados.' : authError}
                </p>
              )}
              <button
                type="submit"
                disabled={saving}
                className="w-full inline-flex items-center justify-center gap-2 bg-serana-forest text-serana-cream px-6 py-4 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-serana-olive transition disabled:opacity-60"
              >
                {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                Guardar datos
              </button>
            </motion.form>
          </section>

          <section className="space-y-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <MetricCard Icon={PackageCheck} label="Compras" value={String(profile?.total_orders ?? orders.length)} />
              <MetricCard Icon={CheckCircle} label="Valor registrado" value={COP(Number(profile?.lifetime_value ?? 0))} />
              <MetricCard Icon={Phone} label="WhatsApp" value={profile?.phone ?? 'Pendiente'} />
            </div>

            <div className="bg-white/75 border border-serana-forest/5 rounded-[1.5rem] overflow-hidden">
              <div className="p-6 border-b border-serana-forest/5 flex items-center justify-between gap-4">
                <div>
                  <p className="font-serif text-2xl text-serana-forest">Compras recientes</p>
                  <p className="text-sm text-serana-forest/55 mt-1">Pedidos asociados a tu cuenta.</p>
                </div>
                <Link
                  to="/shop"
                  className="hidden sm:inline-flex items-center gap-2 text-serana-terracotta font-bold uppercase tracking-widest text-[10px]"
                >
                  Comprar <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {accountLoading ? (
                <div className="p-10 flex justify-center">
                  <Loader2 className="w-6 h-6 animate-spin text-serana-olive" />
                </div>
              ) : orders.length === 0 ? (
                <div className="p-10 text-center">
                  <UserRound className="w-10 h-10 text-serana-olive mx-auto mb-4" />
                  <p className="font-serif text-2xl text-serana-forest">Aún no hay compras guardadas</p>
                  <p className="text-serana-forest/55 mt-2">Tu próximo pedido quedará conectado a esta cuenta.</p>
                  <Link
                    to="/shop"
                    className="inline-flex items-center gap-2 bg-serana-forest text-serana-cream px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs mt-6"
                  >
                    Ir al menú
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-serana-forest/5">
                  {orders.map((order) => (
                    <article key={order.order_id} className="p-5 flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-serana-forest">Pedido #{order.order_number}</p>
                        <p className="text-xs text-serana-forest/50 uppercase tracking-widest mt-1">
                          {new Date(order.created_at).toLocaleDateString('es-CO')} · {order.item_count} producto{order.item_count === 1 ? '' : 's'}
                        </p>
                        {order.item_summary && order.item_summary.length > 0 && (
                          <p className="text-sm text-serana-forest/60 mt-2 truncate">
                            {order.item_summary.map((item) => `${item.quantity}x ${item.product_name}`).join(' · ')}
                          </p>
                        )}
                      </div>
                      <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-1 shrink-0">
                        <span className="font-serif text-xl text-serana-forest">{COP(Number(order.total_amount))}</span>
                        <span className="px-3 py-1 rounded-full bg-serana-olive/10 text-serana-olive text-[10px] font-bold uppercase tracking-widest">
                          {order.status}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function MetricCard({
  Icon,
  label,
  value,
}: {
  Icon: typeof PackageCheck;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white/75 border border-serana-forest/5 rounded-2xl p-5">
      <Icon className="w-5 h-5 text-serana-olive mb-4" />
      <p className="text-[10px] font-bold uppercase tracking-widest text-serana-forest/45">{label}</p>
      <p className="font-serif text-2xl text-serana-forest mt-1 truncate">{value}</p>
    </div>
  );
}
