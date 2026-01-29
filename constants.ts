import { Category, Product } from './types';

/** Unique image per product. Use img('seed') for placeholders, or paste a DIRECT image URL (see below). */
const img = (seed: string) => `https://picsum.photos/seed/${seed}/600/400`;

/** Pexels direct image (same style as your first 6). Replace ID if link breaks. */
const pexels = (id: string) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`;

/** Unsplash direct image. Replace ID if link breaks. */
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;

/** When using your own link: it must be a DIRECT image URL (the image file itself), not a product/page link. */

export const MOCK_PRODUCTS: Product[] = [
  // ========== FASHION — Pcs ==========
  {
    id: 'f1',
    name: 'Premium Cotton T-Shirt',
    price: 29.99,
    description: 'Soft organic cotton, relaxed fit. Essential everyday tee.',
    category: Category.FASHION,
    image: 'https://images.pexels.com/photos/34156907/pexels-photo-34156907.jpeg', // Use a DIRECT image URL (e.g. ends in .jpg/.png), not a product page link
    rating: 4.8,
    unitValue: 1,
    unitType: 'pc',
  },
  {
    id: 'f2',
    name: 'Classic Polo Shirt',
    price: 39.99,
    description: 'Pima cotton polo. Smart casual, breathable.',
    category: Category.FASHION,
    image: 'https://images.pexels.com/photos/12446409/pexels-photo-12446409.jpeg',
    rating: 4.7,
    unitValue: 1,
    unitType: 'pc',
  },
  {
    id: 'f3',
    name: 'Oversized Hoodie',
    price: 54.99,
    description: 'Heavyweight fleece, relaxed fit. Unisex.',
    category: Category.FASHION,
    image: 'https://images.pexels.com/photos/7479825/pexels-photo-7479825.jpeg',
    rating: 4.6,
    unitValue: 1,
    unitType: 'pc',
  },
  {
    id: 'f4',
    name: 'Linen Summer Dress',
    price: 69.99,
    description: 'Light linen midi dress. One piece.',
    category: Category.FASHION,
    image: 'https://images.pexels.com/photos/18444202/pexels-photo-18444202.jpeg',
    rating: 4.8,
    unitValue: 1,
    unitType: 'pc',
  },
  // ========== FASHION — Sets ==========
  {
    id: 'f5',
    name: 'Full Set Casual Outfit',
    price: 89.0,
    description: 'Coordinated top and bottom set. Ready to wear.',
    category: Category.FASHION,
    image: 'https://images.pexels.com/photos/6311075/pexels-photo-6311075.jpeg',
    rating: 4.7,
    unitValue: 1,
    unitType: 'set',
  },
  {
    id: 'f6',
    name: 'Dress Set (Top + Skirt)',
    price: 79.0,
    description: 'Matching blouse and skirt. Office or weekend.',
    category: Category.FASHION,
    image: 'https://images.pexels.com/photos/17071191/pexels-photo-17071191.jpeg',
    rating: 4.6,
    unitValue: 1,
    unitType: 'set',
  },
  {
    id: 'f7',
    name: 'Sport Set (Top + Shorts)',
    price: 49.99,
    description: 'Breathable athletic set. Gym or run.',
    category: Category.FASHION,
    image: pexels('863988'), // athletic wear — add your image if broken
    rating: 4.7,
    unitValue: 1,
    unitType: 'set',
  },
  // ========== FASHION — Pairs ==========
  {
    id: 'f8',
    name: 'Classic Wool Socks',
    price: 18.0,
    description: 'Merino wool blend, cushioned sole. Sold in pairs.',
    category: Category.FASHION,
    image: unsplash('1582735689369-4fe89db7114c'), // socks
    rating: 4.9,
    unitValue: 1,
    unitType: 'pair',
  },
  {
    id: 'f9',
    name: 'Leather Sneakers',
    price: 99.0,
    description: 'Minimal white leather sneakers. One pair.',
    category: Category.FASHION,
    image: 'https://images.pexels.com/photos/27204251/pexels-photo-27204251.jpeg', // sneakers
    rating: 4.7,
    unitValue: 1,
    unitType: 'pair',
  },
  {
    id: 'f10',
    name: 'Cotton Ankle Socks',
    price: 12.0,
    description: 'Pack of 3 pairs. Soft, breathable.',
    category: Category.FASHION,
    image: 'https://images.pexels.com/photos/6513973/pexels-photo-6513973.jpeg', // socks — add your image if broken
    rating: 4.5,
    unitValue: 1,
    unitType: 'pair',
  },

  // ========== GROCERY — Kg ==========
  {
    id: 'g1',
    name: 'Basmati Rice',
    price: 8.99,
    description: 'Long-grain aromatic rice. Perfect for daily cooking.',
    category: Category.GROCERY,
    image: unsplash('1586201375761-83865001e31c'), // rice
    rating: 4.6,
    unitValue: 1,
    unitType: 'kg',
  },
  {
    id: 'g2',
    name: 'Red Lentils',
    price: 6.49,
    description: 'Split red lentils. High protein, easy to cook.',
    category: Category.GROCERY,
    image: 'https://images.pexels.com/photos/8108209/pexels-photo-8108209.jpeg', // lentils — add your image if broken
    rating: 4.5,
    unitValue: 1,
    unitType: 'kg',
  },
  {
    id: 'g3',
    name: 'Organic Sugar',
    price: 5.99,
    description: '1 kg bag. Unrefined cane sugar.',
    category: Category.GROCERY,
    image: 'https://images.pexels.com/photos/19123122/pexels-photo-19123122.jpeg', // sugar — add your image if broken
    rating: 4.7,
    unitValue: 1,
    unitType: 'kg',
  },
  // ========== GROCERY — g ==========
  {
    id: 'g4',
    name: 'Dark Chocolate Bar',
    price: 4.49,
    description: '85% cocoa, 100 g bar.',
    category: Category.GROCERY,
    image: 'https://images.pexels.com/photos/4113305/pexels-photo-4113305.jpeg', // chocolate — add your image if broken
    rating: 4.8,
    unitValue: 100,
    unitType: 'g',
  },
  {
    id: 'g5',
    name: 'Mixed Nuts Pack',
    price: 7.99,
    description: '250 g. Almonds, cashews, walnuts.',
    category: Category.GROCERY,
    image: 'https://images.pexels.com/photos/5507691/pexels-photo-5507691.jpeg', // nuts — add your image if broken
    rating: 4.6,
    unitValue: 250,
    unitType: 'g',
  },
  // ========== GROCERY — L ==========
  {
    id: 'g6',
    name: 'Spring Water 2L',
    price: 1.99,
    description: 'Still mineral water. 2 litre bottle.',
    category: Category.GROCERY,
    image: 'https://images.pexels.com/photos/12478893/pexels-photo-12478893.jpeg', // water bottle — add your image if broken
    rating: 4.5,
    unitValue: 2,
    unitType: 'L',
  },
  {
    id: 'g7',
    name: 'Fresh Orange Juice',
    price: 4.99,
    description: '1 L carton. No added sugar.',
    category: Category.GROCERY,
    image: 'https://images.pexels.com/photos/8679601/pexels-photo-8679601.jpeg', // orange juice — add your image if broken
    rating: 4.7,
    unitValue: 1,
    unitType: 'L',
  },
  // ========== GROCERY — ml ==========
  {
    id: 'g8',
    name: 'Extra Virgin Olive Oil',
    price: 12.0,
    description: 'Cold-pressed, 500 ml bottle.',
    category: Category.GROCERY,
    image: unsplash('1474979266404-7eaacbcd87c5'), // olive oil
    rating: 4.8,
    unitValue: 500,
    unitType: 'ml',
  },
  {
    id: 'g9',
    name: 'Honey Jar',
    price: 9.99,
    description: 'Pure wildflower honey. 350 ml.',
    category: Category.GROCERY,
    image: pexels('3338497'), // honey — add your image if broken
    rating: 4.9,
    unitValue: 350,
    unitType: 'ml',
  },
  // ========== GROCERY — Pcs ==========
  {
    id: 'g10',
    name: 'Fresh Milk Packet',
    price: 2.49,
    description: 'Full cream UHT milk. Shelf-stable.',
    category: Category.GROCERY,
    image: unsplash('1563636619-e9143da7973b'), // milk
    rating: 4.5,
    unitValue: 1,
    unitType: 'pc',
  },
  {
    id: 'g11',
    name: 'Whole Wheat Bread',
    price: 3.49,
    description: 'Fresh baked loaf. 1 pc.',
    category: Category.GROCERY,
    image: 'https://images.pexels.com/photos/33866861/pexels-photo-33866861.jpeg', // bread — add your image if broken
    rating: 4.6,
    unitValue: 1,
    unitType: 'pc',
  },
  {
    id: 'g12',
    name: 'Free-Range Eggs (12)',
    price: 5.99,
    description: '12 eggs per carton. 1 pc.',
    category: Category.GROCERY,
    image: 'https://images.pexels.com/photos/31679608/pexels-photo-31679608.jpeg', // eggs — add your image if broken
    rating: 4.7,
    unitValue: 1,
    unitType: 'pc',
  },

  // ========== ELECTRONICS — Pcs ==========
  {
    id: 'e1',
    name: 'Smartphone Pro',
    price: 599.0,
    description: 'Latest model, 128GB. All-day battery.',
    category: Category.ELECTRONICS,
    image: unsplash('1511707171634-5f897ff02aa9'), // phone
    rating: 4.7,
    unitValue: 1,
    unitType: 'pc',
  },
  {
    id: 'e2',
    name: 'Wireless Earbuds',
    price: 79.99,
    description: 'Noise cancelling, 24h battery. Sold per piece.',
    category: Category.ELECTRONICS,
    image: unsplash('1590658268037-6bf12165a8df'), // earbuds
    rating: 4.5,
    unitValue: 1,
    unitType: 'pc',
  },
  {
    id: 'e3',
    name: 'USB-C Charger',
    price: 24.99,
    description: 'Fast charge 30W. 1 pc.',
    category: Category.ELECTRONICS,
    image: 'https://images.pexels.com/photos/4526406/pexels-photo-4526406.jpeg', // charger — add your image if broken
    rating: 4.6,
    unitValue: 1,
    unitType: 'pc',
  },
  {
    id: 'e4',
    name: 'Bluetooth Speaker',
    price: 59.99,
    description: 'Portable, waterproof. 1 pc.',
    category: Category.ELECTRONICS,
    image: 'https://images.pexels.com/photos/9072408/pexels-photo-9072408.jpeg', // speaker — add your image if broken
    rating: 4.5,
    unitValue: 1,
    unitType: 'pc',
  },
  // ========== ELECTRONICS — Unit ==========
  {
    id: 'e5',
    name: 'Ultrabook Laptop',
    price: 999.0,
    description: 'Thin and light, 16GB RAM. Ideal for work and study.',
    category: Category.ELECTRONICS,
    image: unsplash('1496181133206-80ce9b88a853'), // laptop
    rating: 4.6,
    unitValue: 1,
    unitType: 'unit',
  },
  {
    id: 'e6',
    name: 'Monitor 27"',
    price: 299.0,
    description: 'Full HD, IPS. 1 unit.',
    category: Category.ELECTRONICS,
    image: 'https://images.pexels.com/photos/6045232/pexels-photo-6045232.jpeg', // monitor — add your image if broken
    rating: 4.7,
    unitValue: 1,
    unitType: 'unit',
  },
  {
    id: 'e7',
    name: 'Mechanical Keyboard',
    price: 129.0,
    description: 'RGB, Cherry MX. 1 unit.',
    category: Category.ELECTRONICS,
    image: 'https://images.pexels.com/photos/13094372/pexels-photo-13094372.jpeg', // keyboard — add your image if broken
    rating: 4.8,
    unitValue: 1,
    unitType: 'unit',
  },

  // ========== BEAUTY — Pcs ==========
  {
    id: 'b1',
    name: 'Hydrating Face Cream',
    price: 34.0,
    description: 'Dermatologist-tested. Nourishing daily moisturizer.',
    category: Category.BEAUTY,
    image: 'https://images.pexels.com/photos/29611523/pexels-photo-29611523.jpeg', // face cream — add your image if broken
    rating: 4.8,
    unitValue: 1,
    unitType: 'pc',
  },
  {
    id: 'b2',
    name: 'Lip Balm Set (3)',
    price: 12.99,
    description: '3 pieces. Shea butter, SPF 15.',
    category: Category.BEAUTY,
    image: 'https://images.pexels.com/photos/26927323/pexels-photo-26927323.jpeg', // lip balm — add your image if broken
    rating: 4.6,
    unitValue: 1,
    unitType: 'pc',
  },
  {
    id: 'b3',
    name: 'Silicone Face Brush',
    price: 19.99,
    description: 'Cleansing brush. 1 pc.',
    category: Category.BEAUTY,
    image: pexels('1620916'), // face brush — add your image if broken
    rating: 4.5,
    unitValue: 1,
    unitType: 'pc',
  },
  // ========== BEAUTY — ml ==========
  {
    id: 'b4',
    name: 'Eau de Parfum',
    price: 65.0,
    description: 'Elegant floral scent. Long-lasting.',
    category: Category.BEAUTY,
    image: unsplash('1541643600914-78b084683601'), // perfume
    rating: 4.9,
    unitValue: 50,
    unitType: 'ml',
  },
  {
    id: 'b5',
    name: 'Micellar Water',
    price: 14.99,
    description: '400 ml. Gentle makeup remover.',
    category: Category.BEAUTY,
    image: 'https://images.pexels.com/photos/20895975/pexels-photo-20895975.jpeg', // micellar — add your image if broken
    rating: 4.7,
    unitValue: 400,
    unitType: 'ml',
  },
  {
    id: 'b6',
    name: 'Hyaluronic Serum',
    price: 32.0,
    description: '30 ml. Hydrating, plumping.',
    category: Category.BEAUTY,
    image: unsplash('1598440947619-2c35fc9aa908'), // serum
    rating: 4.8,
    unitValue: 30,
    unitType: 'ml',
  },
  // ========== BEAUTY — g ==========
  {
    id: 'b7',
    name: 'Vitamin C Serum',
    price: 28.0,
    description: 'Brightening serum, 30 g tube.',
    category: Category.BEAUTY,
    image: 'https://images.pexels.com/photos/4119559/pexels-photo-4119559.jpeg', // vitamin c serum — add your image if broken (different from b6)
    rating: 4.7,
    unitValue: 30,
    unitType: 'g',
  },
  {
    id: 'b8',
    name: 'Clay Face Mask',
    price: 22.0,
    description: 'Detoxifying. 100 g jar.',
    category: Category.BEAUTY,
    image: 'https://images.pexels.com/photos/7321301/pexels-photo-7321301.jpeg', // clay mask — add your image if broken
    rating: 4.6,
    unitValue: 100,
    unitType: 'g',
  },

  // ========== TOYS & GAMES — Pcs ==========
  {
    id: 't1',
    name: 'Play Car Model',
    price: 24.99,
    description: 'Durable toy car. Ages 3+. Sold per piece.',
    category: Category.TOYS_GAMES,
    image: unsplash('1558618666-fcd25c85cd64'), // toy car
    rating: 4.6,
    unitValue: 1,
    unitType: 'pc',
  },
  {
    id: 't2',
    name: 'Teddy Bear',
    price: 19.99,
    description: 'Soft plush. 1 pc. Ages 0+.',
    category: Category.TOYS_GAMES,
    image: 'https://images.pexels.com/photos/30531456/pexels-photo-30531456.jpeg', // teddy bear — add your image if broken
    rating: 4.8,
    unitValue: 1,
    unitType: 'pc',
  },
  {
    id: 't3',
    name: 'Action Figure',
    price: 29.99,
    description: 'Collectible. 1 pc.',
    category: Category.TOYS_GAMES,
    image: 'https://images.pexels.com/photos/5795428/pexels-photo-5795428.jpeg', // action figure / toys — add your image if broken
    rating: 4.5,
    unitValue: 1,
    unitType: 'pc',
  },
  // ========== TOYS & GAMES — Sets ==========
  {
    id: 't4',
    name: 'Board Game Set',
    price: 39.0,
    description: 'Family strategy game. 2–4 players. Complete set.',
    category: Category.TOYS_GAMES,
    image: 'https://images.pexels.com/photos/12520327/pexels-photo-12520327.jpeg', // board game — add your image if broken
    rating: 4.8,
    unitValue: 1,
    unitType: 'set',
  },
  {
    id: 't5',
    name: 'LEGO Building Set',
    price: 49.99,
    description: '200 pieces. One complete set.',
    category: Category.TOYS_GAMES,
    image: 'https://images.pexels.com/photos/13548803/pexels-photo-13548803.jpeg', // building blocks
    rating: 4.7,
    unitValue: 1,
    unitType: 'set',
  },
  {
    id: 't6',
    name: 'Jigsaw Puzzle Set',
    price: 18.99,
    description: '500 pieces. 1 set.',
    category: Category.TOYS_GAMES,
    image: 'https://images.pexels.com/photos/6255731/pexels-photo-6255731.jpeg', // puzzle — add your image if broken
    rating: 4.6,
    unitValue: 1,
    unitType: 'set',
  },
  // ========== TOYS & GAMES — Unit ==========
  {
    id: 't7',
    name: 'Building Blocks Unit',
    price: 45.0,
    description: '100-piece construction set. Creative play.',
    category: Category.TOYS_GAMES,
    image: unsplash('1587654780291-39c9404d746b'), // blocks (same as t5 — replace if you want different)
    rating: 4.7,
    unitValue: 1,
    unitType: 'unit',
  },
  {
    id: 't8',
    name: 'Electric Train Set',
    price: 89.0,
    description: 'Track + engine + carriages. 1 unit.',
    category: Category.TOYS_GAMES,
    image: 'https://images.pexels.com/photos/35662049/pexels-photo-35662049.jpeg', // train set — add your image if broken
    rating: 4.6,
    unitValue: 1,
    unitType: 'unit',
  },
];

/** Premium hero / lifestyle image for the main banner */
export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80';

export const SALES_DATA = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
];
