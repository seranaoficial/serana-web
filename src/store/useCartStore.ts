import { create } from 'zustand';

export interface Product {
  id: string;
  productSlug?: string;
  name: string;
  price: number;
  description: string;
  image: string;
  /** Additional product photos — used by the detail dialog's image gallery. */
  gallery?: string[];
  category: string;
  benefits: string[];
  healthBenefit?: string;
  observation?: string;
  portions?: string | number;
  ingredients?: string[];
  /** @deprecated Use `variantes` instead. Kept for backward compatibility — will be removed once all profiles migrate. */
  cortes?: string[];
  /** @deprecated Use `variantes` instead. Kept for backward compatibility — will be removed once all profiles migrate. */
  maduracion?: string[];
  /**
   * Multiple option groups shown in the product modal.
   * Each key renders a separate toggle block (e.g. { corte: [...], tipo: [...] }).
   * Replaces the legacy single-purpose `cortes` and `maduracion` fields.
   */
  variantes?: Record<string, string[]>;
  variants?: Array<{
    label: string;
    price: number;
  }>;
  variantLabel?: string;
  isSubscription?: boolean;
  customizations?: string;
  comboSelections?: ComboSelectionPayload;
}

export interface ComboSelectionPayload {
  version: 1;
  type: 'combo_configuration';
  comboSlug: string;
  comboName: string;
  groups: Array<{
    id: string;
    label: string;
    max: number;
    unitLabel?: string;
    selections: Array<{
      slug: string;
      name: string;
      quantity: number;
    }>;
  }>;
  selectedProducts: Array<{
    slug: string;
    name: string;
    quantity: number;
    groupId: string;
    groupLabel: string;
  }>;
  fixedItems?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

/**
 * `lastAdded` is bumped on every addItem call so subscribers can react to
 * "an item was added" without polling. We don't auto-open the drawer
 * anymore — that interrupted users adding several items in a row. Instead
 * the navbar pulses + a tiny toast shows the product name.
 */
export interface LastAdded {
  ping: number;
  productName: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  lastAdded: LastAdded | null;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  lastAdded: null,
  addItem: (product) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      const items = existingItem
        ? state.items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
          )
        : [...state.items, { ...product, quantity: 1 }];
      return {
        items,
        lastAdded: { ping: (state.lastAdded?.ping ?? 0) + 1, productName: product.name },
      };
    });
  },
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    }));
  },
  updateQuantity: (productId, quantity) => {
    set((state) => ({
      items:
        quantity === 0
          ? state.items.filter((item) => item.id !== productId)
          : state.items.map((item) =>
              item.id === productId ? { ...item, quantity } : item,
            ),
    }));
  },
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  clearCart: () => set({ items: [] }),
  total: () => {
    return get().items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  },
}));
