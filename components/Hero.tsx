import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center">
      {/* Cinematic Background - Placeholder for Video Loop */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-dark/40 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/20 z-10"></div>
        {/* 
                   Ideally, this would be a <video> tag. 
                   Using a high-quality placeholder image for now that implies "fried in olive oil" warmth.
                */}
        <img
          src="/images/hero-luxury.png"
          alt="Churros Artesanos y Chocolate"
          className="w-full h-full object-cover animate-slow-zoom"
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 flex justify-center items-center space-x-4"
        >
          <span className="h-[1px] w-12 bg-brand-gold/60"></span>
          <span className="text-brand-gold uppercase tracking-[0.3em] text-[11px] font-bold">Desde 1970</span>
          <span className="h-[1px] w-12 bg-brand-gold/60"></span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif mb-8 leading-[0.9] tracking-tight"
        >
          El Ritual <br />
          <span className="italic text-brand-gold">de la Mañana</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl font-light text-brand-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Jeringos y churros firmados al momento. <br />
          Fritos en Aceite de Oliva Virgen Extra.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <a
            href="/carta"
            className="px-10 py-4 bg-brand-gold text-brand-dark rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(212,175,55,0.5)]"
          >
            Ver Carta
          </a>
          <a
            href="#story"
            className="px-10 py-4 border border-white/20 text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
          >
            Nuestro Legado
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
