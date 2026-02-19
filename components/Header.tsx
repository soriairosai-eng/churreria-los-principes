
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#2D1B14]/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className={`text-2xl font-serif font-bold tracking-tighter ${isScrolled ? 'text-[#C5A059]' : 'text-white'}`}>
            LOS PRÍNCIPES
          </span>
        </div>

        <nav className="hidden md:flex space-x-8 text-sm font-semibold tracking-widest uppercase">
          {['Inicio', 'Menú', 'Artesanía', 'Contacto'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`hover:text-[#C5A059] transition-colors ${isScrolled ? 'text-white/80' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <a href="#contacto" className="bg-[#C5A059] text-[#2D1B14] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#b38e4a] transition-all shadow-lg transform hover:-translate-y-1 inline-block">
            Reservar Mesa
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
