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
    <section id="menu" className="py-24 bg-cream relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-chocolate mb-6 animate-fadeInUp">Galería de <span className="italic text-gold">Sabores</span></h2>
          <div className="w-16 h-[2px] bg-gold/50 mx-auto mb-10"></div>

          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fadeInUp delay-200">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${activeCategory === cat
                  ? 'bg-chocolate text-gold border-chocolate shadow-lg transform scale-105'
                  : 'bg-transparent text-stone border-stone/20 hover:border-gold hover:text-gold hover:bg-white/50'
                  }`}
              >
                {cat === 'todos' ? 'Ver Todo' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-chocolate/10 transition-all duration-500 ease-out flex flex-col h-full border border-stone/5 hover:border-gold/30">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                  loading="lazy"
                />

                {/* Price Tag - Liquid Glass Style */}
                <div className="absolute top-3 right-3">
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-md"></div>
                    <div className="relative px-3 py-1.5">
                      <span className="font-serif font-bold text-chocolate text-sm">{item.price.split(' ')[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6 flex-grow flex flex-col relative">
                <div className="mb-2">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gold inline-block py-0.5 px-2 border border-gold/20 rounded-sm bg-gold/5">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-serif mb-2 text-chocolate leading-tight group-hover:text-gold transition-colors duration-300">{item.name}</h3>
                <p className="text-stone/70 font-sans font-light text-xs leading-relaxed mb-4 line-clamp-3 flex-grow">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-stone/10 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] uppercase tracking-widest text-stone font-medium">Detalles</span>
                  <svg className="w-4 h-4 text-gold transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
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
