
import React from 'react';
import { CartItem, formatCartItemUnit } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string, selectedUnitType?: string) => void;
  onUpdateQuantity: (id: string, q: number, selectedUnitType?: string) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>
      
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md transform transition-transform duration-500 ease-in-out">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-bold text-gray-900">Shopping Cart</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Close panel</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-8">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <p className="mt-4 text-gray-500">Your cart is empty.</p>
                  </div>
                ) : (
                  <ul className="-my-6 divide-y divide-gray-200">
                    {items.map((item) => (
                      <li key={item.id} className="py-6 flex">
                        <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                          <img src={item.image} alt={item.name} className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="ml-4 flex-1 flex flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{item.name}</h3>
                              <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{item.category} · {formatCartItemUnit(item)}</p>
                          </div>
                          <div className="flex-1 flex items-end justify-between text-sm">
                            <div className="flex items-center space-x-2 border border-gray-200 rounded-lg px-2 py-1">
                              <button 
                                onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1), item.selectedUnitType ?? item.unitType)}
                                className="text-gray-500 hover:text-indigo-600 px-1"
                              >-</button>
                              <span className="text-gray-700 font-medium">{item.quantity}</span>
                              <button 
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1, item.selectedUnitType ?? item.unitType)}
                                className="text-gray-500 hover:text-indigo-600 px-1"
                              >+</button>
                            </div>
                            <button 
                              onClick={() => onRemove(item.id, item.selectedUnitType ?? item.unitType)}
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >Remove</button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-bold text-gray-900">
                <p>Subtotal</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <button 
                  disabled={items.length === 0}
                  className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-xl shadow-sm text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 transition-colors"
                >
                  Checkout
                </button>
              </div>
              <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                <p>
                  or <button onClick={onClose} className="text-indigo-600 font-medium hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
