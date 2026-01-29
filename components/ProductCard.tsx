import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Product, formatProductUnit, CATEGORY_UNITS } from '../types';

const PLACEHOLDER_IMAGE = 'https://picsum.photos/seed/placeholder/600/400';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product, selectedUnitType: string) => void;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, index = 0 }) => {
  const units = CATEGORY_UNITS[product.category];
  const defaultUnit =
    units.includes(product.unitType) ? product.unitType
    : product.unitType === 'pc' ? 'pcs'
    : product.unitType === 'pair' ? 'pairs'
    : (product.unitType === 'set' || product.unitType === 'sets') ? 'sets'
    : units[0] ?? 'pcs';
  const [selectedUnit, setSelectedUnit] = useState(defaultUnit);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [product.image]);

  useEffect(() => {
    if (!units.includes(selectedUnit)) {
      const next = units.includes(product.unitType) ? product.unitType
        : product.unitType === 'pc' ? 'pcs'
        : product.unitType === 'pair' ? 'pairs'
        : (product.unitType === 'set' || product.unitType === 'sets') ? 'sets'
        : units[0] ?? 'pcs';
      setSelectedUnit(next);
    }
  }, [product.id, product.category]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <img
          src={imageError ? PLACEHOLDER_IMAGE : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-gray-800 shadow-sm">
          {product.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start gap-3 mb-2">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
            <p className="text-xs text-gray-500 font-medium mt-0.5">
              {formatProductUnit(product, selectedUnit)}
            </p>
          </div>
          <span className="text-indigo-600 font-bold whitespace-nowrap">${product.price.toFixed(2)}</span>
        </div>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2 min-h-[40px]">
          {product.description}
        </p>

        {/* Unit selector — user picks pcs, pairs, set, etc. per category */}
        {units.length > 1 && (
          <div className="mb-4">
            <p className="text-xs font-medium text-gray-500 mb-2">Unit</p>
            <div className="flex flex-wrap gap-2">
              {units.map((u) => (
                <button
                  key={u}
                  type="button"
                  onClick={() => setSelectedUnit(u)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedUnit === u
                      ? 'bg-gray-900 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm font-medium text-gray-600">{product.rating}</span>
          </div>
          <button
            onClick={() => onAddToCart(product, selectedUnit)}
            className="px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-indigo-600 transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm hover:shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
