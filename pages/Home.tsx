
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000&auto=format&fit=crop" 
            alt="Luxury Fashion Model" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-light">Spring Summer 2024</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 tracking-tight">
              Timeless Elegance
            </h1>
            <Link 
              to="/shop" 
              className="inline-flex items-center space-x-2 border border-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              <span>Explore Collection</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-gray-900">Defined by Detail</h2>
          <p className="text-gray-500 leading-relaxed text-lg font-light">
            Madoleko represents the pinnacle of modern luxury. We believe that true elegance lies in the details, 
            crafting pieces that are not just worn, but experienced. From Italian leather to pure silk, 
            our materials are sourced with uncompromising standards.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-[80vh]">
        <Link to="/shop" className="relative group overflow-hidden cursor-pointer block">
          <div className="absolute inset-0 bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop" 
              alt="Handbags" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
            <h3 className="text-white text-4xl font-serif z-10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              Handbags
            </h3>
          </div>
        </Link>
        <Link to="/shop" className="relative group overflow-hidden cursor-pointer block">
          <div className="absolute inset-0 bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop" 
              alt="Ready to Wear" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
            <h3 className="text-white text-4xl font-serif z-10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              Ready-to-Wear
            </h3>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Home;
