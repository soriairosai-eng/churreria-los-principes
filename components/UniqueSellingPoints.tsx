import React from 'react';
import { motion } from 'framer-motion';

const USPSection: React.FC = () => {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Firmado al Momento",
            description: "Masa fresca elaborada cada mañana. Sin congelados, sin atajos."
        },
        {
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "AOVE Premium",
            description: "Fritura perfecta en Aceite de Oliva Virgen Extra de la Subbética."
        },
        {
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 9.5C4.5 9.5 7.5 4.5 12 4.5C16.5 4.5 19.5 9.5 19.5 9.5C19.5 9.5 16.5 14.5 12 14.5C7.5 14.5 4.5 9.5 4.5 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 12C13.3807 12 14.5 10.8807 14.5 9.5C14.5 8.11929 13.3807 7 12 7C10.6193 7 9.5 8.11929 9.5 9.5C9.5 10.8807 10.6193 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 21V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 16H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 16H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "OrguIlo Cordobés",
            description: "Embajadores de la tradición jeringuera del Barrio de Fátima."
        }
    ];

    return (
        <section className="py-24 bg-brand-dark text-brand-cream border-t border-brand-gold/10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] font-bold block mb-4">
                        Nuestra Promesa
                    </span>
                    <h3 className="text-4xl font-serif text-white">Por qué somos <span className="italic text-brand-gold">únicos</span></h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-500">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-serif text-white mb-4">{feature.title}</h4>
                            <p className="text-brand-cream/60 font-light text-sm leading-relaxed px-8">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default USPSection;
