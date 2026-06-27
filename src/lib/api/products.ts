import { supabase, isSupabaseConfigured } from '../supabase';
import type { Product } from '../../store/useCartStore';
import { products as staticProducts } from '../../data/products';

type ProductRow = {
  id: string;
  slug: string | null;
  name: string;
  description: string | null;
  price: number | string | null;
  image_url: string | null;
  gallery_urls: string[] | null;
  active: boolean;
  category_code: string | null;
  category_name: string | null;
};

const FALLBACK_BENEFITS = ['Fresco', 'Natural', 'Sin conservantes'];
const STATIC_BY_ID = new Map(staticProducts.map((product) => [product.id, product]));

function normalizeUnitLabel(name: string) {
  return name
    .replace(/\s*\(Unidad\)/gi, ' (Libra)')
    .replace(/\s*\(3 unidades\)/gi, ' (Libra)');
}

function inferStorefrontCategory(row: ProductRow) {
  const code = row.category_code ?? 'otros';
  const text = `${row.slug ?? ''} ${row.name ?? ''} ${row.description ?? ''}`.toLowerCase();

  if (code === 'frutas') {
    return text.includes('picad') || text.includes('baby bowl') || text.includes('bowl')
      ? 'frutas-picadas'
      : 'mercado-fresco';
  }
  if (code === 'verduras') {
    return text.includes('picad') || text.includes('baby bowl') || text.includes('bowl')
      ? 'verduras-picadas'
      : 'mercado-fresco';
  }
  if (code === 'ensaladas') return 'ensaladas-tradicionales';
  if (code === 'bowls') return text.includes('frut') || text.includes('berry') ? 'frutas-picadas' : 'verduras-picadas';
  return code;
}

function rowToProduct(row: ProductRow): Product {
  // The cart store uses slug as id so cart entries survive when the UUID changes.
  // Falls back to UUID for catalogue rows that don't have a slug yet.
  const id = row.slug ?? row.id;
  const staticMatch = STATIC_BY_ID.get(id);
  if (staticMatch) {
    return {
      ...staticMatch,
      image: row.image_url || staticMatch.image,
      gallery: row.gallery_urls ?? staticMatch.gallery ?? [],
    };
  }
  return {
    id,
    name: normalizeUnitLabel(row.name || ''),
    price: Number(row.price ?? 0),
    description: row.description || '',
    image: row.image_url || staticMatch?.image || '',
    gallery: row.gallery_urls ?? [],
    category: inferStorefrontCategory(row),
    benefits: FALLBACK_BENEFITS,
  };
}

export async function listProducts(): Promise<Product[]> {
  if (!isSupabaseConfigured) return [];
  const { data, error } = await supabase
    .from('products_public_view')
    .select('id, slug, name, description, price, image_url, gallery_urls, active, category_code, category_name')
    .eq('active', true)
    .order('name', { ascending: true });
  if (error) {
    console.warn('[serana-web] listProducts failed:', error.message);
    return [];
  }
  return (data ?? []).map((row) => rowToProduct(row as ProductRow));
}
