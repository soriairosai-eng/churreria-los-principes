import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle anchor links when not on home page
  const getLink = (item: string) => {
    const id = item.toLowerCase();
    if (item === 'Inicio') return '/';
    if (item === 'Carta') return '/carta';
    return isHomePage ? `#${id}` : `/#${id}`;
  };

  const navItems = ['Inicio', 'Carta', 'Artesanía', 'Contacto'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || !isHomePage ? 'bg-[#2D1B14]/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <img src="/images/logo.jpg" alt="Churrería Los Príncipes" className="h-16 w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex space-x-8 text-sm font-semibold tracking-widest uppercase">
          {navItems.map((item) => {
            const linkTarget = getLink(item);
            const isExternal = linkTarget.startsWith('#') || linkTarget.startsWith('/#');

            if (isExternal) {
              return (
                <a
                  key={item}
                  href={linkTarget}
                  className={`hover:text-[#C5A059] transition-colors ${isScrolled || !isHomePage ? 'text-white/80' : 'text-white'}`}
                >
                  {item}
                </a>
              )
            }

            return (
              <Link
                key={item}
                to={linkTarget}
                className={`hover:text-[#C5A059] transition-colors ${isScrolled || !isHomePage ? 'text-white/80' : 'text-white'}`}
              >
                {item}
              </Link>
            );
          })}
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
