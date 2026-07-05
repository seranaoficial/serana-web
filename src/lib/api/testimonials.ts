import { supabase, isSupabaseConfigured } from '../supabase';

export type PublishedTestimonial = {
  id: string;
  full_name: string;
  message: string;
  rating: number;
  created_at: string;
  published_at: string | null;
};

export async function listPublishedTestimonials(limit = 6): Promise<PublishedTestimonial[]> {
  if (!isSupabaseConfigured) return [];
  const { data, error } = await supabase
    .from('testimonials_public_view')
    .select('id, full_name, message, rating, created_at, published_at')
    .order('published_at', { ascending: false, nullsFirst: false })
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error) {
    console.warn('[serana-web] listPublishedTestimonials failed:', error.message);
    return [];
  }
  return (data ?? []) as PublishedTestimonial[];
}
