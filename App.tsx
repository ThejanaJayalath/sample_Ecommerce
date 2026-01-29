
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MOCK_PRODUCTS, HERO_IMAGE } from './constants';
import { CartItem, Product, Category, CATEGORY_UNITS, UNIT_SUBCATEGORY_LABELS, productMatchesUnitSubcategory } from './types';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'shop' | 'admin'>('shop');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  /** Unit subcategory within selected category (e.g. 'pcs', 'sets', 'pairs'). Null = show all units in category. */
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const filteredProducts =
    selectedCategory === 'All'
      ? MOCK_PRODUCTS
      : MOCK_PRODUCTS.filter((p) => {
          if (p.category !== selectedCategory) return false;
          if (selectedSubcategory == null) return true;
          return productMatchesUnitSubcategory(p, selectedSubcategory);
        });

  const subcategories =
    selectedCategory !== 'All' ? CATEGORY_UNITS[selectedCategory] : [];

  const addToCart = useCallback((product: Product, selectedUnitType: string) => {
    setCart(prev => {
      const existing = prev.find(
        item => item.id === product.id && (item.selectedUnitType ?? item.unitType) === selectedUnitType
      );
      if (existing) {
        return prev.map(item =>
          item.id === product.id && (item.selectedUnitType ?? item.unitType) === selectedUnitType
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedUnitType }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((id: string, selectedUnitType?: string) => {
    setCart(prev => prev.filter(item =>
      !(item.id === id && (selectedUnitType == null || (item.selectedUnitType ?? item.unitType) === selectedUnitType))
    ));
  }, []);

  const updateQuantity = useCallback((id: string, q: number, selectedUnitType?: string) => {
    setCart(prev => prev.map(item =>
      item.id === id && (selectedUnitType == null || (item.selectedUnitType ?? item.unitType) === selectedUnitType)
        ? { ...item, quantity: q }
        : item
    ));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col scroll-smooth">
      <Navbar
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onAdminClick={() => setCurrentPage('admin')}
        onHomeClick={() => setCurrentPage('shop')}
      />

      <main className="flex-grow">
        {currentPage === 'shop' ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero — premium look with real image & parallax-style */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden bg-slate-900 mb-20 h-[520px] shadow-2xl"
            >
              <div className="absolute inset-0">
                <img
                  src={HERO_IMAGE}
                  alt="Lumina Luxe"
                  className="absolute inset-0 w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/60 to-slate-900/80" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-5xl md:text-7xl font-bold mb-6 tracking-tight max-w-2xl leading-tight"
                >
                  Elevate Your Every Day.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="text-xl text-slate-200 mb-10 max-w-xl"
                >
                  Fashion, Grocery, Electronics, Beauty & Toys — all with the units you need. Premium, simple, yours.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl">
                    Shop Now
                  </button>
                  <button className="px-8 py-4 bg-white/10 border-2 border-white/40 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/20 transition-all">
                    Explore Collections
                  </button>
                </motion.div>
              </div>
            </motion.section>

            {/* Category Filter — scroll-in */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="mb-14"
            >
              <div className="flex flex-wrap items-center gap-3">
                {['All', ...Object.values(Category)].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat as Category | 'All');
                      setSelectedSubcategory(null);
                    }}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      selectedCategory === cat
                        ? 'bg-slate-900 text-white shadow-lg scale-105'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 shadow-sm'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Unit subcategories — e.g. Pcs | Sets | Pairs (only when a main category is selected) */}
              {subcategories.length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    By unit
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => setSelectedSubcategory(null)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedSubcategory === null
                          ? 'bg-slate-800 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      All
                    </button>
                    {subcategories.map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedSubcategory(key)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedSubcategory === key
                            ? 'bg-slate-800 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {UNIT_SUBCATEGORY_LABELS[key] ?? key}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Product Grid — cards animate in via ProductCard */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                    index={index}
                  />
                ))}
            </div>
          </div>
        ) : (
          <Dashboard />
        )}
      </main>

      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center mb-6">
            <span className="text-xl font-bold tracking-tighter text-indigo-600">LUMINA</span>
            <span className="text-xl font-light tracking-widest text-gray-500 ml-1 italic">LUXE</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Lumina Luxe. Crafted with precision for the modern individual.
          </p>
          <div className="mt-6 flex justify-center space-x-8 text-gray-400">
            <a href="#" className="hover:text-indigo-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Pinterest</a>
          </div>
        </div>
      </footer>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onRemove={removeFromCart} 
        onUpdateQuantity={updateQuantity} 
      />

    </div>
  );
};

export default App;
