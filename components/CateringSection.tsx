import React from 'react';

const CateringSection: React.FC = () => {
    return (
        <section className="py-24 bg-brand-cream relative">
            <div className="container mx-auto px-6">
                <div className="bg-brand-dark rounded-3xl overflow-hidden shadow-2xl relative">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop"
                            alt="Catering Event"
                            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                        />
                    </div>

                    <div className="relative z-10 p-12 md:p-24 text-center">
                        <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold block mb-6">
                            Celebraciones y Eventos
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
                            Lleva el Ritual <br /> <span className="italic text-brand-gold">a tu evento.</span>
                        </h2>
                        <p className="text-white/80 font-light text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                            Desde bodas íntimas hasta eventos corporativos. Sorprende a tus invitados con la auténtica experiencia de una churrería tradicional en vivo.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                            <a
                                href="#contacto"
                                className="px-10 py-4 bg-white text-brand-dark rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 min-w-[200px]"
                            >
                                Solicitar Presupuesto
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CateringSection;
