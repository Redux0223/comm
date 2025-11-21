import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Truck, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useStore } from '../services/store';
import { CURRENCY_SYMBOL } from '../constants';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, addToCart } = useStore();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div className="p-20 text-center">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/shop" className="inline-flex items-center text-gray-500 hover:text-black mb-8">
        <ArrowLeft size={16} className="mr-2" />
        Back to Collection
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Images */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
               <img src={product.image} alt="Detail 1" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
             </div>
             <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
               <img src={product.image} alt="Detail 2" className="w-full h-full object-cover scale-150 origin-center" />
             </div>
          </div>
        </motion.div>

        {/* Details */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-2 text-gold-600 font-medium tracking-widest text-sm uppercase">{product.category}</div>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">{product.name}</h1>
          
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-3xl font-light text-gray-900">{CURRENCY_SYMBOL}{product.price.toLocaleString()}</span>
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} className={i < Math.floor(product.rating) ? "" : "text-gray-300"} />
              ))}
              <span className="text-gray-400 text-sm ml-2">({product.reviews} reviews)</span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
            {product.description}
          </p>

          {/* Selectors (Mock) */}
          <div className="mb-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">Color</label>
              <div className="flex space-x-2">
                <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-200 focus:ring-2 ring-offset-2 ring-black"></button>
                <button className="w-8 h-8 rounded-full bg-red-800 border-2 border-transparent hover:border-gray-300"></button>
                <button className="w-8 h-8 rounded-full bg-stone-200 border-2 border-transparent hover:border-gray-300"></button>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 mb-10">
            <button 
              onClick={() => addToCart(product)}
              className="flex-1 bg-black text-white py-4 px-8 uppercase tracking-widest hover:bg-gold-600 transition-colors shadow-lg"
            >
              Add to Cart
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 border-t border-gray-100 pt-8">
            <div className="flex items-center space-x-3">
              <Truck size={20} className="text-gold-600" />
              <span>Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center space-x-3">
              <ShieldCheck size={20} className="text-gold-600" />
              <span>2 Year Warranty</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;