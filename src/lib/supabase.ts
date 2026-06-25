import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!supabaseUrl || !supabaseAnonKey) {
  // Don't throw — the public site should still render the static fallback.
  // Modules that need supabase will fail their own way and surface a friendly
  // error to the user.
  console.warn(
    '[serana-web] VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY missing. ' +
      'DB-backed features (catalog, checkout, leads) will be disabled.',
  );
}

export const supabase = createClient(
  supabaseUrl ?? 'https://invalid.supabase.co',
  supabaseAnonKey ?? 'invalid',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  },
);

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
