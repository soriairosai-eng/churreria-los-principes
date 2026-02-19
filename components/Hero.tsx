
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Background Image - Boutique Atmosphere */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-105 animate-[slow-zoom_20s_infinite_alternate]"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop")',
        }}
      ></div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <p className="text-[#C5A059] font-semibold tracking-[0.3em] uppercase mb-4 animate-fadeIn">
          Desde Siempre en Córdoba
        </p>
        <h1 className="text-5xl md:text-8xl text-white font-serif mb-8 leading-tight animate-fadeInUp">
          El Ritual de la Mañana, <br /> 
          <span className="italic">Elevado</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-200">
          En el corazón del Barrio de Fátima, transformamos agua, harina y fuego en una experiencia de lujo artesanal.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#menu" className="bg-[#C5A059] text-[#2D1B14] px-10 py-4 rounded-none font-bold uppercase tracking-widest hover:bg-white transition-all w-full sm:w-auto text-center">
            Explorar Menú
          </a>
          <a href="#artesania" className="border border-white text-white px-10 py-4 rounded-none font-bold uppercase tracking-widest hover:bg-white hover:text-[#2D1B14] transition-all w-full sm:w-auto text-center">
            Nuestra Historia
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 1.5s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </section>
  );
};

export default Hero;
