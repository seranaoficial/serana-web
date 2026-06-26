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
  signUp: (input: { email: string; password: string; fullName: string; phone: string }) => Promise<{ needsEmailConfirmation: boolean; welcomeName: string }>;
  requestPasswordReset: (email: string) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
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
  if (/email_already_registered/i.test(message)) return 'Ese correo ya está registrado. Intenta iniciar sesión.';
  if (/supabase_not_configured/i.test(message)) return 'El registro automático no está configurado en el servidor.';
  if (/phone_required/i.test(message)) return 'Necesitamos un celular válido para crear tu cuenta.';
  if (/full_name_required/i.test(message)) return 'Escribe tu nombre completo para crear la cuenta.';
  if (/invalid_email/i.test(message)) return 'Escribe un correo válido.';
  if (/weak_password/i.test(message)) return 'La contraseña debe tener al menos 6 caracteres.';
  if (/rate_limited/i.test(message)) return 'Demasiados intentos. Intenta de nuevo en un minuto.';
  if (/not authenticated|auth session missing|session/i.test(message)) return 'El enlace expiró o no es válido. Solicita uno nuevo.';
  return message || 'No pudimos completar la acción.';
}

async function readApiError(resp: Response) {
  const body = await resp.json().catch(() => null) as { error?: string } | null;
  return body?.error ?? `HTTP ${resp.status}`;
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
    const email = input.email.trim().toLowerCase();
    const fullName = input.fullName.trim();
    const phone = input.phone.replace(/\D/g, '');

    try {
      const resp = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password: input.password,
          full_name: fullName,
          phone,
          source_url: typeof window !== 'undefined' ? window.location.href : undefined,
          user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
        }),
      });

      if (!resp.ok) {
        throw new Error(await readApiError(resp));
      }

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password: input.password,
      });
      if (signInError) throw signInError;

      const nextAccount = await upsertMyCustomerProfile({
        full_name: fullName,
        phone,
      });
      setAccount(nextAccount);

      return {
        needsEmailConfirmation: false,
        welcomeName: fullName,
      };
    } catch (err: any) {
      const msg = normalizeAuthError(err?.message ?? '');
      setAuthError(msg);
      throw new Error(msg);
    }
  }, []);

  const requestPasswordReset = useCallback(async (email: string) => {
    setAuthError(null);
    const redirectTo = typeof window !== 'undefined'
      ? `${window.location.origin}/reset-password`
      : undefined;

    const { error } = await supabase.auth.resetPasswordForEmail(
      email.trim().toLowerCase(),
      redirectTo ? { redirectTo } : undefined,
    );
    if (error) {
      const msg = normalizeAuthError(error.message);
      setAuthError(msg);
      throw new Error(msg);
    }
  }, []);

  const updatePassword = useCallback(async (password: string) => {
    setAuthError(null);
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      const msg = normalizeAuthError(error.message);
      setAuthError(msg);
      throw new Error(msg);
    }
  }, []);

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
    requestPasswordReset,
    updatePassword,
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
    requestPasswordReset,
    updatePassword,
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
