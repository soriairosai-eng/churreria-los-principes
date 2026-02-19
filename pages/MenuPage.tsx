import React, { useEffect } from 'react';
import MenuSection from '../components/MenuSection';

const MenuPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-24 bg-cream min-h-screen font-sans selection:bg-gold/20">
            {/* Cinematic Background Decoration - optional subtle grain or gradient */}
            <div className="fixed inset-0 pointer-events-none opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light z-0"></div>

            <div className="relative z-10 container mx-auto px-6 mb-0 text-center">
                <span className="inline-block py-1 px-3 border border-gold/30 rounded-full text-gold font-medium tracking-[0.2em] uppercase text-[10px] mb-6 animate-fadeIn">
                    Nuestra Propuesta
                </span>
                <h1 className="text-6xl md:text-8xl font-serif text-chocolate mb-8 leading-none tracking-tight animate-fadeInUp">
                    Carta de <span className="italic text-gold/90">Especialidades</span>
                </h1>
            </div>

            {/* Reusing the MenuSection which already contains the full list and filters */}
            <div className="relative z-10">
                <MenuSection />
            </div>

            <style>{`
                .bg-cream { background-color: #FAFAF9; }
                .text-chocolate { color: #1C1917; }
                .text-gold { color: #CA8A04; }
                .text-stone { color: #44403C; }
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
