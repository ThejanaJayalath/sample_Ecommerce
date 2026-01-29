
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onAdminClick: () => void;
  onHomeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onAdminClick, onHomeClick }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-md border-slate-200' : 'bg-white/80 backdrop-blur-md border-b border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center cursor-pointer" onClick={onHomeClick}>
            <span className="text-2xl font-bold tracking-tighter text-slate-800">LUMINA</span>
            <span className="text-2xl font-light tracking-widest text-slate-500 ml-1 italic">LUXE</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={onHomeClick} className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Shop</button>
            <button onClick={onAdminClick} className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Dashboard</button>
            <button className="text-slate-600 hover:text-slate-900 transition-colors font-medium">About</button>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={onCartClick}
              className="relative p-2 text-slate-600 hover:text-slate-900 transition-colors focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-slate-900 rounded-full text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
