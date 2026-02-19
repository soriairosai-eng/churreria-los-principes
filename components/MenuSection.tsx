import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  // Explicitly typing category names for display mapping if needed
  const categories = ['todos', 'churros', 'chocolate', 'tostadas', 'gofres', 'bebidas'];

  const filteredItems = activeCategory === 'todos'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="pb-32 relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 px-4 stickers-nav sticky top-24 z-30 py-4 bg-brand-cream/90 backdrop-blur-md rounded-b-2xl transition-all duration-300">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 animate-fadeInUp delay-200">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-500 ease-out border ${activeCategory === cat
                  ? 'bg-brand-dark text-brand-gold border-brand-dark shadow-xl scale-105'
                  : 'bg-transparent text-brand-dark/60 border-brand-dark/10 hover:border-brand-gold hover:text-brand-dark hover:bg-white'
                  }`}
              >
                {cat === 'todos' ? 'Todo' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative bg-[#FBF9F4] rounded-sm overflow-hidden transition-all duration-700 hover:-translate-y-2">

              {/* Image Container with Parallax-like effect */}
              <div className="relative h-64 md:h-72 overflow-hidden bg-brand-dark/5">
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-500 z-10"></div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0"
                  loading="lazy"
                />

                {/* Floating Price Tag */}
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="bg-white/90 backdrop-blur-md border border-brand-dark/5 px-4 py-2 shadow-sm">
                    <span className="font-serif font-bold text-brand-dark text-base tracking-tight">{item.price.split(' ')[0]}</span>
                  </div>
                </div>
              </div>

              {/* Minimal Info */}
              <div className="pt-6 pb-2 px-1 flex flex-col relative">
                <div className="mb-3 flex justify-between items-start">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-gold/80 mb-1">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-brand-dark leading-none mb-3 group-hover:text-brand-terra transition-colors duration-300">
                  {item.name}
                </h3>

                <p className="text-brand-dark/60 font-sans font-light text-sm leading-relaxed line-clamp-2 border-l border-brand-gold/30 pl-3">
                  {item.description}
                </p>

                {/* View Details Hover Reveal */}
                <div className="mt-6 flex items-center space-x-2 text-brand-dark opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                  <span className="text-[9px] uppercase tracking-widest font-bold">Ver Detalles</span>
                  <span className="w-8 h-[1px] bg-brand-dark"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
