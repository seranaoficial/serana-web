import type { ComboSelectionPayload, Product } from '../store/useCartStore';

export const COMBO_PAYLOAD_MARKER = '::serana_combo_payload::';

type ComboOptionSource = {
  categories?: string[];
  slugs?: string[];
};

export type ComboGroupDefinition = {
  id: string;
  label: string;
  shortLabel: string;
  helper: string;
  max: number;
  min?: number;
  unitLabel?: string;
  maxPerOption?: number;
  source: ComboOptionSource;
};

export type ComboDefinition = {
  slug: string;
  groups: ComboGroupDefinition[];
  fixedItems?: string[];
};

export type ResolvedComboOption = {
  slug: string;
  name: string;
  image: string;
  description: string;
  category: string;
};

export type ResolvedComboGroup = ComboGroupDefinition & {
  options: ResolvedComboOption[];
  min: number;
  maxPerOption: number;
};

const SOUP_GROUP: ComboGroupDefinition = {
  id: 'soups',
  label: 'Sopas y cremas',
  shortLabel: 'Sopas',
  helper: 'Opciones prelistas',
  max: 3,
  unitLabel: 'opciones',
  source: { categories: ['sopas'] },
};

const FRUIT_GROUP: ComboGroupDefinition = {
  id: 'chopped_fruits',
  label: 'Frutas picadas',
  shortLabel: 'Frutas',
  helper: 'Baby bowls o libras de fruta',
  max: 3,
  unitLabel: 'lb',
  source: { categories: ['frutas-picadas'] },
};

const VEGETABLE_GROUP: ComboGroupDefinition = {
  id: 'chopped_vegetables',
  label: 'Verduras picadas',
  shortLabel: 'Verduras',
  helper: 'Verduras listas para cocinar o servir',
  max: 3,
  unitLabel: 'opciones',
  source: {
    categories: ['verduras-picadas'],
    slugs: [
      'zanahoria',
      'pepino',
      'apio',
      'brocoli',
      'coliflor',
      'habichuela',
      'repollo',
      'remolacha',
      'tomate-aliño',
      'tomate-cherry',
      'tomate-uvalina',
      'cebolla-puerro',
      'cebolla-larga',
      'cebolla-morada',
      'cebolla-chalota',
      'aji-dulce',
      'champinon',
      'espinaca',
      'kale',
      'acelga',
      'col-china',
      'hinojo',
      'esparragos',
    ],
  },
};

const GOURMET_SALAD_GROUP: ComboGroupDefinition = {
  id: 'gourmet_salads',
  label: 'Ensalada gourmet',
  shortLabel: 'Gourmet',
  helper: 'Bowls gourmet disponibles',
  max: 1,
  maxPerOption: 1,
  source: { categories: ['ensaladas-gourmet'] },
};

const TRADITIONAL_SALAD_GROUP: ComboGroupDefinition = {
  id: 'traditional_salads',
  label: 'Ensalada tradicional',
  shortLabel: 'Tradicional',
  helper: 'Bowls tradicionales disponibles',
  max: 1,
  maxPerOption: 1,
  source: { categories: ['ensaladas-tradicionales'] },
};

const HAND_FRUIT_GROUP: ComboGroupDefinition = {
  id: 'hand_fruits',
  label: 'Frutas de mano',
  shortLabel: 'Frutas de mano',
  helper: 'Frutas enteras por unidad para lonchera o consumo diario',
  max: 6,
  unitLabel: 'und',
  source: {
    slugs: [
      'manzana-libra',
      'pera-libra',
      'granadilla',
      'mandarina',
      'durazno',
      'banano-libra',
      'kiwi-libra',
      'mangostino',
      'rambutan',
    ],
  },
};

const DRINK_GROUP: ComboGroupDefinition = {
  id: 'drinks',
  label: 'Bebida saludable',
  shortLabel: 'Bebida',
  helper: 'Jugos funcionales o naranja',
  max: 1,
  maxPerOption: 1,
  source: {
    slugs: ['jugo-verde', 'batido-circulacion', 'batido-detox', 'jugo-naranja'],
  },
};

const JUICE_FRUIT_GROUP: ComboGroupDefinition = {
  id: 'juice_fruits',
  label: 'Jugos de fruta',
  shortLabel: 'Jugos',
  helper: 'Sabores para el kit',
  max: 3,
  source: {
    slugs: [
      'mango-libra',
      'pina-picada',
      'melon-libra',
      'sandia-baby-libra',
      'maracuya',
      'mora',
      'fresa-libra',
      'tomate-arbol',
      'papaya-maradol',
    ],
  },
};

function withLimit(group: ComboGroupDefinition, max: number): ComboGroupDefinition {
  return {
    ...group,
    max,
    min: max,
    maxPerOption: group.maxPerOption ?? max,
  };
}

function oneEach(group: ComboGroupDefinition, max = 1): ComboGroupDefinition {
  return {
    ...group,
    max,
    min: max,
    maxPerOption: 1,
  };
}

export const COMBO_DEFINITIONS: ComboDefinition[] = [
  {
    slug: 'combo-1-2',
    groups: [
      withLimit(SOUP_GROUP, 3),
      withLimit(FRUIT_GROUP, 3),
      withLimit(VEGETABLE_GROUP, 3),
      oneEach(GOURMET_SALAD_GROUP),
      oneEach(TRADITIONAL_SALAD_GROUP),
      withLimit(HAND_FRUIT_GROUP, 6),
      oneEach(DRINK_GROUP),
    ],
    fixedItems: [
      'Aguacate hass',
      'Cilantro',
      'Papa capira',
      'Papa criolla',
      'Platano',
      'Banano',
      'Ajo',
      'Limon tahiti',
      'Mix de frutos secos',
      'Queso saludable',
    ],
  },
  {
    slug: 'combo-familiar',
    groups: [
      withLimit(SOUP_GROUP, 5),
      withLimit(FRUIT_GROUP, 6),
      withLimit(VEGETABLE_GROUP, 6),
      oneEach(GOURMET_SALAD_GROUP, 2),
      oneEach(TRADITIONAL_SALAD_GROUP, 2),
      withLimit(HAND_FRUIT_GROUP, 8),
      oneEach(DRINK_GROUP),
    ],
    fixedItems: [
      'Aguacate hass',
      'Cilantro',
      'Papa capira',
      'Papa criolla',
      'Platano',
      'Banano',
      'Ajo',
      'Limon tahiti',
      'Mix de frutos secos',
      'Queso saludable',
    ],
  },
  {
    slug: 'combo-tardes',
    groups: [withLimit(FRUIT_GROUP, 1)],
    fixedItems: [
      'Yogurt griego',
      'Berry mix',
      'Banano',
      'Frutos secos mix',
      'Almendra',
      'Frutos amarillos',
      'Miel de abejas',
      'Mantequilla de mani',
      'Avena en hojuelas',
      'Semillas de calabaza',
    ],
  },
  {
    slug: 'combo-lonchera',
    groups: [
      withLimit(FRUIT_GROUP, 2),
      oneEach(TRADITIONAL_SALAD_GROUP),
      oneEach(GOURMET_SALAD_GROUP),
      withLimit(HAND_FRUIT_GROUP, 5),
    ],
    fixedItems: [
      'Berry mix',
      'Frutos amarillos',
      'Frutos secos mix',
      'Galletas de avena',
      'Barritas de granola',
    ],
  },
  {
    slug: 'combo-oficina',
    groups: [
      withLimit(FRUIT_GROUP, 2),
      oneEach(TRADITIONAL_SALAD_GROUP),
      oneEach(GOURMET_SALAD_GROUP),
      withLimit(HAND_FRUIT_GROUP, 6),
    ],
    fixedItems: [
      'Berry mix',
      'Frutos amarillos',
      'Frutos secos mix',
      'Galletas de avena',
      'Barritas de granola',
    ],
  },
  {
    slug: 'kit-jugos',
    groups: [withLimit(JUICE_FRUIT_GROUP, 3)],
    fixedItems: ['Jugo de naranja x 3'],
  },
  {
    slug: 'kit-ensaladas',
    groups: [oneEach(TRADITIONAL_SALAD_GROUP, 5)],
  },
];

const COMBO_BY_SLUG = new Map(COMBO_DEFINITIONS.map((definition) => [definition.slug, definition]));

export function getComboDefinition(product: Pick<Product, 'id' | 'productSlug'>) {
  return COMBO_BY_SLUG.get(product.productSlug ?? product.id) ?? null;
}

export function resolveComboGroups(definition: ComboDefinition, products: Product[]): ResolvedComboGroup[] {
  const bySlug = new Map(products.map((product) => [product.id, product]));

  return definition.groups.map((group) => {
    const optionMap = new Map<string, Product>();

    for (const category of group.source.categories ?? []) {
      for (const product of products) {
        if (product.category === category) optionMap.set(product.id, product);
      }
    }

    for (const slug of group.source.slugs ?? []) {
      const product = bySlug.get(slug);
      if (product) optionMap.set(product.id, product);
    }

    const slugOrder = new Map((group.source.slugs ?? []).map((slug, index) => [slug, index]));
    const options = Array.from(optionMap.values())
      .sort((a, b) => {
        const aOrder = slugOrder.get(a.id);
        const bOrder = slugOrder.get(b.id);
        if (aOrder !== undefined || bOrder !== undefined) {
          return (aOrder ?? 9999) - (bOrder ?? 9999);
        }
        return a.name.localeCompare(b.name, 'es');
      })
      .map((product) => ({
        slug: product.id,
        name: formatComboOptionName(group, product.name),
        image: product.image,
        description: product.description,
        category: product.category,
      }));

    return {
      ...group,
      min: group.min ?? group.max,
      maxPerOption: group.maxPerOption ?? group.max,
      options,
    };
  });
}

function formatComboOptionName(group: ComboGroupDefinition, name: string) {
  if (group.id !== HAND_FRUIT_GROUP.id) return name;
  return name.replace(/\s*\([^)]*\)$/, ' (Unidad)');
}

export function buildComboCustomizationText(payload: ComboSelectionPayload) {
  const lines = getComboSummaryLines(payload);
  const json = JSON.stringify(payload);
  return [`Combo personalizado: ${payload.comboName}`, ...lines, `${COMBO_PAYLOAD_MARKER}${json}`].join('\n');
}

export function getComboSummaryLines(payload: ComboSelectionPayload) {
  return payload.groups.map((group) => {
    const selected = group.selections
      .map((selection) => `${selection.quantity} x ${selection.name}`)
      .join(', ');
    return `${group.label}: ${selected}`;
  });
}

export function stripComboPayloadMarker(customizations?: string | null) {
  if (!customizations) return '';
  return customizations.split(COMBO_PAYLOAD_MARKER)[0].trim();
}

export function makeComboCartId(payload: ComboSelectionPayload) {
  const key = payload.groups
    .map((group) =>
      `${group.id}:${group.selections
        .map((selection) => `${selection.slug}x${selection.quantity}`)
        .sort()
        .join(',')}`,
    )
    .join('|');
  return `${payload.comboSlug}--combo-${hashString(key)}`;
}

function hashString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}
