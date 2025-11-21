
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ARTICLES = [
  {
    id: 1,
    title: "The Art of Leather Care",
    category: "Care Guide",
    image: "https://images.unsplash.com/photo-1485218126466-34e6392ec754?q=80&w=800&auto=format&fit=crop",
    excerpt: "Discover the essential steps to maintain the pristine condition of your Madoleko leather goods for generations."
  },
  {
    id: 2,
    title: "Spring Summer 2024: Behind the Scenes",
    category: "Campaign",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    excerpt: "A look into the inspiration and creative process behind our latest collection, shot on location in Amalfi."
  },
  {
    id: 3,
    title: "Interview with Head Designer",
    category: "People",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    excerpt: "Elena Rossi discusses her vision for the future of sustainable luxury and the role of tradition in modern design."
  }
];

const Journal: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">The Journal</h1>
        <p className="text-gray-500">Stories, interviews, and news from the world of Madoleko.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {ARTICLES.map((article, index) => (
          <motion.article 
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden aspect-[4/3] mb-6">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600">{article.category}</span>
              <h3 className="text-2xl font-serif group-hover:text-gold-600 transition-colors">{article.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{article.excerpt}</p>
              <div className="pt-2">
                <span className="inline-flex items-center text-sm uppercase tracking-widest border-b border-transparent group-hover:border-black transition-all">
                  Read Story <ArrowRight size={14} className="ml-2" />
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Journal;
