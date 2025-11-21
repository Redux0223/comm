import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useStore } from '../services/store';
import { CURRENCY_SYMBOL, CATEGORIES } from '../constants';
import { Filter } from 'lucide-react';

const Shop: React.FC = () => {
  const { products } = useStore();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b border-gray-100 pb-6">
        <h1 className="text-4xl font-serif text-gray-900">The Collection</h1>
        
        <div className="flex items-center mt-4 md:mt-0 space-x-6 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-sm uppercase tracking-widest transition-colors whitespace-nowrap ${
                selectedCategory === cat ? 'text-black border-b border-black' : 'text-gray-400 hover:text-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
          <button className="text-gray-400 hover:text-black">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filteredProducts.map((product) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group cursor-pointer"
          >
            <Link to={`/product/${product.id}`}>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100 mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                  <span className="text-xs uppercase tracking-widest font-bold">Quick View</span>
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg font-serif text-gray-900 group-hover:text-gold-600 transition-colors">{product.name}</h3>
                <p className="text-gray-500 font-light">{CURRENCY_SYMBOL}{product.price.toLocaleString()}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Shop;