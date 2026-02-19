
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = ['todos', 'churros', 'chocolate', 'tostadas', 'gofres', 'bebidas'];

  const filteredItems = activeCategory === 'todos'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#F9F7F2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2D1B14] mb-4">La Carta Real</h2>
          <div className="w-24 h-1 bg-[#C5A059] mx-auto mb-8"></div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === cat
                  ? 'bg-[#2D1B14] text-white shadow-lg'
                  : 'bg-white text-[#2D1B14] border border-[#2D1B14]/10 hover:border-[#C5A059]'
                  }`}
              >
                {cat === 'todos' ? 'Ver Todo' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-[#C5A059] text-[#2D1B14] px-3 py-1 text-xs font-bold shadow-lg">
                  {item.price}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B14]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-1 inline-block">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-serif mb-2 text-[#2D1B14] leading-tight">{item.name}</h3>
                <p className="text-gray-500 font-light text-xs leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <button className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.2em] flex items-center group/btn">
                    Ver más
                    <svg className="w-3 h-3 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
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
