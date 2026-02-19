import React, { useEffect } from 'react';
import MenuSection from '../components/MenuSection';

const MenuPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-24 bg-brand-cream min-h-screen font-sans selection:bg-brand-gold/20">
            {/* Cinematic Background Decoration - optional subtle grain or gradient */}
            <div className="fixed inset-0 pointer-events-none opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light z-0"></div>

            <div className="relative z-10 container mx-auto px-6 mb-16 text-center">
                <span className="inline-block py-1 px-3 border border-brand-gold/30 rounded-full text-brand-gold font-medium tracking-[0.2em] uppercase text-[10px] mb-6 animate-fadeIn">
                    Nuestra Propuesta
                </span>
                <h1 className="text-6xl md:text-8xl font-serif text-brand-dark mb-4 leading-none tracking-tight animate-fadeInUp">
                    Carta de <span className="italic text-brand-gold/90">Especialidades</span>
                </h1>
            </div>

            {/* Reusing the MenuSection which already contains the full list and filters */}
            <div className="relative z-10">
                <MenuSection />
            </div>

            <style>{`
                .bg-brand-cream { background-color: #F5F0E8; }
                .text-brand-dark { color: #3C2F2F; }
                .text-brand-gold { color: #D4AF37; }
                .text-brand-terra { color: #C05D3C; }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fadeInUp { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
                .delay-200 { animation-delay: 0.2s; }
            `}</style>
        </div>
    );
};

export default MenuPage;
