export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: number;
  /** Display unit: e.g. "1 pc", "1 Kg", "50 ml" */
  unitValue: number;
  unitType: string;
}

export enum Category {
  FASHION = 'Fashion',
  GROCERY = 'Grocery',
  ELECTRONICS = 'Electronics',
  BEAUTY = 'Beauty & Personal Care',
  TOYS_GAMES = 'Toys & Games',
}

/** Allowed unit types per category — also used as subcategory keys */
export const CATEGORY_UNITS: Record<Category, string[]> = {
  [Category.FASHION]: ['pcs', 'sets', 'pairs'],
  [Category.GROCERY]: ['kg', 'g', 'L', 'ml', 'pcs'],
  [Category.ELECTRONICS]: ['pcs', 'unit'],
  [Category.BEAUTY]: ['pcs', 'ml', 'g'],
  [Category.TOYS_GAMES]: ['pcs', 'sets', 'unit'],
};

/** Display labels for unit subcategories (e.g. Pcs, Sets, Pairs) */
export const UNIT_SUBCATEGORY_LABELS: Record<string, string> = {
  pcs: 'Pcs',
  sets: 'Sets',
  set: 'Sets',
  pairs: 'Pairs',
  kg: 'Kg',
  g: 'g',
  L: 'L',
  ml: 'ml',
  unit: 'Units',
};

/** Product unitType may be singular (pc, pair, set); subcategory is plural (pcs, pairs, sets). Match both. */
export function productMatchesUnitSubcategory(product: Product, subcategoryKey: string): boolean {
  const u = product.unitType.toLowerCase();
  const s = subcategoryKey.toLowerCase();
  if (s === 'pcs') return u === 'pc' || u === 'pcs';
  if (s === 'pairs') return u === 'pair' || u === 'pairs';
  if (s === 'sets' || s === 'set') return u === 'set' || u === 'sets';
  return u === s;
}

export function formatProductUnit(product: Product, unitOverride?: string): string {
  const unit = unitOverride ?? product.unitType;
  return `${product.unitValue} ${unit}`;
}

export interface CartItem extends Product {
  quantity: number;
  /** Unit selected by user when adding to cart (e.g. pcs, pairs, set) */
  selectedUnitType?: string;
}

export function formatCartItemUnit(item: CartItem): string {
  const unit = item.selectedUnitType ?? item.unitType;
  return `${item.unitValue} ${unit}`;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
