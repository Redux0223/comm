import React from 'react';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import { useStore } from '../services/store';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const { cart, toggleCart } = useStore();
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu */}
          <div className="flex items-center md:hidden">
            <button className="p-2 text-gray-600 hover:text-black transition-colors">
              <Menu size={24} />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none md:justify-start">
            <Link to="/" className="font-serif text-2xl tracking-widest font-bold text-black uppercase">
              Madoleko
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center justify-center flex-1">
            <Link to="/" className="text-gray-500 hover:text-gold-600 uppercase text-xs tracking-[0.2em] transition-colors">Home</Link>
            <Link to="/shop" className="text-gray-500 hover:text-gold-600 uppercase text-xs tracking-[0.2em] transition-colors">Collection</Link>
            <Link to="/about" className="text-gray-500 hover:text-gold-600 uppercase text-xs tracking-[0.2em] transition-colors">Our Story</Link>
            <Link to="/journal" className="text-gray-500 hover:text-gold-600 uppercase text-xs tracking-[0.2em] transition-colors">Journal</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="hidden md:block text-gray-400 hover:text-black transition-colors">
              <Search size={20} />
            </button>
            <Link to="/admin/dashboard" className="hidden md:block text-gray-400 hover:text-black transition-colors" title="Admin Panel">
              <User size={20} />
            </Link>
            <button 
              className="relative text-gray-800 hover:text-gold-600 transition-colors"
              onClick={toggleCart}
            >
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;