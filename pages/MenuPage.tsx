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

            <div className="relative z-10 container mx-auto px-6 mb-20 text-center">
                <span className="inline-block py-1 px-3 border border-gold/30 rounded-full text-gold font-medium tracking-[0.2em] uppercase text-[10px] mb-6 animate-fadeIn">
                    Nuestra Propuesta
                </span>
                <h1 className="text-6xl md:text-8xl font-serif text-chocolate mb-8 leading-none tracking-tight animate-fadeInUp">
                    Carta de <span className="italic text-gold/90">Especialidades</span>
                </h1>
                <p className="text-stone font-light leading-relaxed max-w-2xl mx-auto text-lg md:text-xl mb-16 animate-fadeInUp delay-200">
                    Arte, tradición y materia prima de excelencia. <br />
                    <span className="italic font-serif text-2xl text-chocolate/80">Todo preparado al momento para ti.</span>
                </p>

                {/* Premium Paper Summary Table */}
                <div className="relative max-w-4xl mx-auto animate-fadeInUp delay-300">
                    <div className="bg-white p-8 md:p-16 shadow-2xl shadow-chocolate/10 text-left relative overflow-hidden h-full">
                        {/* Decorative Top Border */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>

                        <div className="flex items-center justify-center mb-12">
                            <span className="h-[1px] w-12 bg-chocolate/10"></span>
                            <h3 className="mx-6 text-3xl font-serif text-chocolate tracking-wide uppercase">Precios Generales</h3>
                            <span className="h-[1px] w-12 bg-chocolate/10"></span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                            {/* Column 1 */}
                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-gold font-bold uppercase text-[11px] tracking-[0.3em] mb-6 border-b border-gold/20 pb-2">
                                        Bebidas
                                    </h4>
                                    <table className="w-full text-sm">
                                        <tbody className="divide-y divide-dotted divide-stone/20">
                                            {[
                                                { name: 'Café', price: '1,10 €' },
                                                { name: 'Café bombón', price: '1,50 €' },
                                                { name: 'Chocolate a la taza', price: '1,30 €' },
                                                { name: 'Cola Cao / Infusiones', price: '1,10 €' },
                                                { name: 'Zumos / Batidos / Refrescos', price: '1,50 €' },
                                                { name: 'Zumo natural', price: '1,80 €' },
                                                { name: 'Botella agua', price: '1,00 €' },
                                            ].map((item, idx) => (
                                                <tr key={idx} className="group hover:bg-gold/5 transition-colors cursor-text">
                                                    <td className="py-3 text-stone group-hover:text-chocolate font-sans">{item.name}</td>
                                                    <td className="py-3 text-right font-serif font-bold text-lg text-chocolate">{item.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div>
                                    <h4 className="text-gold font-bold uppercase text-[11px] tracking-[0.3em] mb-6 border-b border-gold/20 pb-2">
                                        Churros y Jeringos
                                    </h4>
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="text-[10px] uppercase tracking-widest text-stone/40">
                                                <th className="text-left font-normal pb-3">Producto</th>
                                                <th className="text-right font-normal pb-3">Media</th>
                                                <th className="text-right font-normal pb-3">Entera</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-dotted divide-stone/20">
                                            {[
                                                { name: 'Churros', half: '0,80 €', full: '1,20 €' },
                                                { name: 'Jeringos', half: '0,80 €', full: '1,20 €' },
                                            ].map((item, idx) => (
                                                <tr key={idx} className="group hover:bg-gold/5 transition-colors cursor-text">
                                                    <td className="py-3 text-stone group-hover:text-chocolate font-sans">{item.name}</td>
                                                    <td className="py-3 text-right font-serif text-lg text-stone/70">{item.half}</td>
                                                    <td className="py-3 text-right font-serif font-bold text-xl text-chocolate">{item.full}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-gold font-bold uppercase text-[11px] tracking-[0.3em] mb-6 border-b border-gold/20 pb-2">
                                        Tostadas
                                    </h4>
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="text-[10px] uppercase tracking-widest text-stone/40">
                                                <th className="text-left font-normal pb-3">Ingrediente</th>
                                                <th className="text-right font-normal pb-3">Media</th>
                                                <th className="text-right font-normal pb-3">Entera</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-dotted divide-stone/20">
                                            {[
                                                { name: 'Aceite / Mantequilla', half: '0,60 €', full: '1,20 €' },
                                                { name: 'Paté / Sobrasada', half: '0,70 €', full: '1,40 €' },
                                                { name: 'Jamón York', half: '1,10 €', full: '1,90 €' },
                                                { name: 'York y queso / Jamón', half: '1,40 €', full: '2,40 €' },
                                            ].map((item, idx) => (
                                                <tr key={idx} className="group hover:bg-gold/5 transition-colors cursor-text">
                                                    <td className="py-3 text-stone group-hover:text-chocolate font-sans">{item.name}</td>
                                                    <td className="py-3 text-right font-serif text-lg text-stone/70">{item.half}</td>
                                                    <td className="py-3 text-right font-serif font-bold text-xl text-chocolate">{item.full}</td>
                                                </tr>
                                            ))}
                                            <tr><td colSpan={3} className="pt-4 text-[10px] uppercase tracking-widest text-gold text-right opacity-80">* Extra pan especial +0,10€</td></tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div>
                                    <h4 className="text-gold font-bold uppercase text-[11px] tracking-[0.3em] mb-6 border-b border-gold/20 pb-2">
                                        Dulces
                                    </h4>
                                    <div className="space-y-6">
                                        {[
                                            { name: 'Gofres (2 ingredientes)', price: '2,20 €' },
                                            { name: 'Tortitas (2 ingredientes)', price: '1,00 €' },
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex justify-between items-baseline group hover:bg-gold/5 p-2 -mx-2 rounded transition-colors cursor-text">
                                                <span className="text-stone group-hover:text-chocolate font-sans">{item.name}</span>
                                                <span className="flex-grow mx-4 border-b border-dotted border-stone/20 relative -top-1"></span>
                                                <span className="font-serif font-bold text-xl text-chocolate">{item.price}</span>
                                            </div>
                                        ))}

                                        <div className="bg-stone/5 p-4 rounded-none border-l-2 border-gold/50 mt-6 cursor-text">
                                            <p className="text-xs text-stone leading-relaxed mb-2 font-sans">
                                                <span className="font-bold uppercase text-[10px] tracking-widest text-chocolate block mb-1">Sabores</span>
                                                Chocolate, Blanco, Caramelo, Fresa, Vainilla, Dulce de Leche, Nata.
                                            </p>
                                            <p className="text-[10px] uppercase tracking-widest text-gold font-bold">
                                                Extra: 0,20€ &middot; Helado: 0,50€
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                .delay-300 { animation-delay: 0.3s; }
            `}</style>
        </div>
    );
};

export default MenuPage;
