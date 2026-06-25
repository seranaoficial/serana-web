import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import {
  getMyCustomerAccount,
  upsertMyCustomerProfile,
  type CustomerAccount,
  type CustomerProfileInput,
} from '../lib/api/customerAccount';

type AuthContextValue = {
  configured: boolean;
  session: Session | null;
  user: User | null;
  account: CustomerAccount | null;
  loading: boolean;
  accountLoading: boolean;
  authError: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (input: { email: string; password: string; fullName: string; phone: string }) => Promise<{ needsEmailConfirmation: boolean }>;
  signOut: () => Promise<void>;
  saveProfile: (input: CustomerProfileInput) => Promise<void>;
  refreshAccount: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const emptyAccount: CustomerAccount = { profile: null, membership: null, orders: [] };

function normalizeAuthError(message: string) {
  if (/invalid login credentials/i.test(message)) return 'Correo o contraseña incorrectos.';
  if (/email not confirmed/i.test(message)) return 'Confirma tu correo antes de entrar.';
  if (/password/i.test(message)) return 'La contraseña debe tener al menos 6 caracteres.';
  if (/already registered/i.test(message)) return 'Ese correo ya está registrado. Intenta iniciar sesión.';
  return message || 'No pudimos completar la acción.';
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [account, setAccount] = useState<CustomerAccount | null>(null);
  const [loading, setLoading] = useState(true);
  const [accountLoading, setAccountLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const refreshAccount = useCallback(async () => {
    if (!isSupabaseConfigured) {
      setAccount(emptyAccount);
      return;
    }
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      setAccount(null);
      return;
    }

    setAccountLoading(true);
    try {
      setAccount(await getMyCustomerAccount());
    } catch (err) {
      console.warn('[serana-web] customer account load failed', err);
      setAccount(emptyAccount);
    } finally {
      setAccountLoading(false);
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    if (!isSupabaseConfigured) {
      setLoading(false);
      setAccount(emptyAccount);
      return undefined;
    }

    void supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session);
      setLoading(false);
      if (data.session) void refreshAccount();
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setAuthError(null);
      if (nextSession) {
        void refreshAccount();
      } else {
        setAccount(null);
      }
    });

    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, [refreshAccount]);

  const signIn = useCallback(async (email: string, password: string) => {
    setAuthError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });
    if (error) {
      const msg = normalizeAuthError(error.message);
      setAuthError(msg);
      throw new Error(msg);
    }
  }, []);

  const signUp = useCallback(async (input: { email: string; password: string; fullName: string; phone: string }) => {
    setAuthError(null);
    const { data, error } = await supabase.auth.signUp({
      email: input.email.trim().toLowerCase(),
      password: input.password,
      options: {
        data: {
          full_name: input.fullName.trim(),
          phone: input.phone.replace(/\D/g, ''),
          role: 'CLIENTE',
        },
      },
    });

    if (error) {
      const msg = normalizeAuthError(error.message);
      setAuthError(msg);
      throw new Error(msg);
    }

    if (data.session) {
      await upsertMyCustomerProfile({
        full_name: input.fullName.trim(),
        phone: input.phone.replace(/\D/g, ''),
      });
      await refreshAccount();
    }

    return { needsEmailConfirmation: !data.session };
  }, [refreshAccount]);

  const signOut = useCallback(async () => {
    setAuthError(null);
    await supabase.auth.signOut();
    setSession(null);
    setAccount(null);
  }, []);

  const saveProfile = useCallback(async (input: CustomerProfileInput) => {
    setAuthError(null);
    try {
      setAccount(await upsertMyCustomerProfile(input));
    } catch (err: any) {
      const msg = err?.message === 'phone_required'
        ? 'Necesitamos un celular válido para guardar tu cuenta.'
        : normalizeAuthError(err?.message ?? '');
      setAuthError(msg);
      throw new Error(msg);
    }
  }, []);

  const value = useMemo<AuthContextValue>(() => ({
    configured: isSupabaseConfigured,
    session,
    user: session?.user ?? null,
    account,
    loading,
    accountLoading,
    authError,
    signIn,
    signUp,
    signOut,
    saveProfile,
    refreshAccount,
  }), [
    session,
    account,
    loading,
    accountLoading,
    authError,
    signIn,
    signUp,
    signOut,
    saveProfile,
    refreshAccount,
  ]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
