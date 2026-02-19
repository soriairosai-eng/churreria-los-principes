import React, { useEffect } from 'react';
import MenuSection from '../components/MenuSection';

const MenuPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-brand-cream min-h-screen font-sans selection:bg-brand-gold/20">
            {/* Cinematic Background Decoration - refined grain */}
            <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0"></div>

            {/* Menu Header Hero */}
            <div className="relative z-10 pt-20 pb-16 text-center">
                <div className="absolute inset-0 z-0 overflow-hidden h-[60vh] opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1629853347570-5290b05b6378?q=80&w=2670&auto=format&fit=crop"
                        alt="Menu Background"
                        className="w-full h-full object-cover object-center grayscale mix-blend-multiply"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/0 via-brand-cream/80 to-brand-cream"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6">
                    <span className="inline-block py-1.5 px-4 border border-brand-dark/30 rounded-full text-brand-dark font-medium tracking-[0.25em] uppercase text-[10px] mb-8 animate-fadeIn backdrop-blur-sm bg-white/30">
                        Nuestra Propuesta
                    </span>
                    <h1 className="text-7xl md:text-9xl font-serif text-brand-dark mb-6 leading-none tracking-tighter animate-fadeInUp">
                        Carta <span className="italic font-light text-brand-gold">Artisanal</span>
                    </h1>
                    <p className="max-w-xl mx-auto text-brand-dark/70 font-sans font-light italic text-lg leading-relaxed animate-fadeInUp delay-200">
                        Una selección cuidada de churros tradicionales, chocolates espesos y delicias artesanas para el ritual del desayuno.
                    </p>
                </div>
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
