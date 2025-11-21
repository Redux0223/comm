
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="relative py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif mb-4"
          >
            Our Story
          </motion.h1>
          <p className="text-gray-500 uppercase tracking-widest text-sm">Est. 2010</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1605218427368-35b0f996d816?q=80&w=800&auto=format&fit=crop" 
              alt="Atelier" 
              className="w-full h-[600px] object-cover"
            />
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-6"
          >
            <h2 className="text-3xl font-serif text-gray-900">Craftsmanship & Heritage</h2>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              Madoleko was founded on a simple premise: luxury should be effortless. Born in a small atelier in Milan, our journey began with a single tote bag, stitched by hand and designed to last a lifetime.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              Today, we collaborate with master artisans across Europe who share our dedication to detail. We shun trends in favor of timelessness, creating pieces that transcend seasons and become cherished heirlooms.
            </p>
            <div className="pt-8">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" 
                alt="Signature" 
                className="h-12 opacity-50"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl">Sustainable Sourcing</h3>
              <p className="text-gray-400 font-light">We trace every material back to its source, ensuring ethical practices and minimal environmental impact.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl">Artisan Made</h3>
              <p className="text-gray-400 font-light">Every piece is touched by human hands, celebrating the imperfections that make true craft unique.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl">Lifetime Promise</h3>
              <p className="text-gray-400 font-light">We stand behind our quality with repairs and restoration services for the life of your product.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
