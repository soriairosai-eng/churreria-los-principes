
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import { REVIEWS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      <Header />
      
      <main>
        <Hero />
        
        {/* Craft Section */}
        <section id="artesania" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C5A059]/10 rounded-full blur-3xl"></div>
              {/* Image showing artisan process - Hands on dough */}
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop" 
                alt="El arte del Jeringo - Proceso Artesano" 
                className="relative z-10 shadow-2xl rounded-none w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#2D1B14] p-8 text-white z-20 hidden md:block">
                <p className="text-4xl font-serif text-[#C5A059] mb-2">100%</p>
                <p className="text-xs uppercase tracking-widest">Artesano</p>
              </div>
            </div>
            <div>
              <p className="text-[#C5A059] font-bold tracking-widest uppercase text-xs mb-4">Nuestro Legado</p>
              <h2 className="text-4xl md:text-5xl font-serif text-[#2D1B14] mb-8">La Química de la Fritura Perfecta</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6 text-lg">
                No somos solo una churrería; somos guardianes de una tradición que en Córdoba toma forma de <span className="text-[#C5A059] font-semibold italic">Jeringo</span>. La masa, el punto exacto de ebullición del agua y el aceite de oliva de primera prensa son nuestros únicos ingredientes.
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                Cada pieza es amasada y frita al momento, garantizando esa textura crujiente exterior y un corazón aireado que solo la maestría del tiempo puede lograr.
              </p>
              <div className="grid grid-cols-2 gap-8 py-8 border-t border-gray-100">
                <div>
                  <h4 className="font-serif text-xl text-chocolate">Aceite Premium</h4>
                  <p className="text-xs text-gray-500 mt-2">Filtrado y renovado diariamente para una salud digestiva óptima.</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-chocolate">Receta Secreta</h4>
                  <p className="text-xs text-gray-500 mt-2">Equilibrio perfecto de amargor y dulzor en nuestro chocolate de autor.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MenuSection />

        {/* Reputation Section */}
        <section className="py-24 bg-[#2D1B14]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-16 italic">"Un rincón donde el tiempo se detiene ante una taza de chocolate."</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {REVIEWS.map((rev, idx) => (
                <div key={idx} className="bg-white/5 p-8 border border-white/10 hover:border-[#C5A059]/50 transition-all text-left group">
                  <div className="flex text-[#C5A059] mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/80 font-light text-sm italic mb-6 leading-relaxed group-hover:text-white transition-colors">"{rev.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A059] flex items-center justify-center font-bold text-[#2D1B14] text-xs">
                      {rev.author[0]}
                    </div>
                    <span className="text-white text-xs font-bold uppercase tracking-widest">{rev.author}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <a href="#" className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em] hover:text-white transition-colors flex items-center justify-center">
                Leer más reseñas en Google Maps
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Catering CTA */}
        <section className="py-24 bg-[#C5A059]">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-[#2D1B14]">
            <div className="mb-8 md:mb-0 max-w-xl">
              <h2 className="text-4xl font-serif mb-4">Llevamos la Realeza a tu Evento</h2>
              <p className="text-lg opacity-80 leading-relaxed">
                Desde bodas hasta eventos corporativos en Córdoba. Nuestro carrito artesano hará que tus invitados nunca olviden el crujido del primer bocado.
              </p>
            </div>
            <button className="bg-[#2D1B14] text-white px-10 py-5 font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl hover:bg-white hover:text-[#2D1B14]">
              Solicitar Catering
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <AIChatbot />
    </div>
  );
};

export default App;
