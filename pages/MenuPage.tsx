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

                {/* Liquid Glass Summary Table */}
                <div className="relative max-w-5xl mx-auto animate-fadeInUp delay-300">
                    {/* Glass Effect Layer */}
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl shadow-chocolate/5 border border-white/50 -z-10"></div>

                    <div className="p-8 md:p-12 text-left">
                        <div className="flex items-center justify-center mb-10">
                            <div className="h-[1px] w-12 bg-gold/30"></div>
                            <h3 className="mx-6 text-3xl font-serif text-chocolate italic">Precios Generales</h3>
                            <div className="h-[1px] w-12 bg-gold/30"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                            {/* Column 1 */}
                            <div className="space-y-10">
                                <div>
                                    <h4 className="flex items-center text-gold font-bold uppercase text-xs tracking-[0.25em] mb-6">
                                        <span className="w-2 h-2 rounded-full bg-gold mr-3"></span>
                                        Bebidas
                                    </h4>
                                    <table className="w-full text-sm">
                                        <tbody className="divide-y divide-chocolate/5">
                                            {[
                                                { name: 'Café', price: '1,10 €' },
                                                { name: 'Café bombón', price: '1,50 €' },
                                                { name: 'Chocolate a la taza', price: '1,30 €' },
                                                { name: 'Cola Cao / Infusiones', price: '1,10 €' },
                                                { name: 'Zumos / Batidos / Refrescos', price: '1,50 €' },
                                                { name: 'Zumo natural', price: '1,80 €' },
                                                { name: 'Botella agua', price: '1,00 €' },
                                            ].map((item, idx) => (
                                                <tr key={idx} className="group transition-colors hover:bg-gold/5">
                                                    <td className="py-3 text-stone font-medium group-hover:text-chocolate transition-colors">{item.name}</td>
                                                    <td className="py-3 text-right font-serif font-bold text-lg text-chocolate">{item.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div>
                                    <h4 className="flex items-center text-gold font-bold uppercase text-xs tracking-[0.25em] mb-6">
                                        <span className="w-2 h-2 rounded-full bg-gold mr-3"></span>
                                        Churros y Jeringos
                                    </h4>
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="text-[10px] uppercase tracking-widest text-stone/50 border-b border-chocolate/5">
                                                <th className="text-left font-normal pb-3 pl-2">Producto</th>
                                                <th className="text-right font-normal pb-3">Media</th>
                                                <th className="text-right font-normal pb-3 pr-2">Entera</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-chocolate/5">
                                            {[
                                                { name: 'Churros', half: '0,80 €', full: '1,20 €' },
                                                { name: 'Jeringos', half: '0,80 €', full: '1,20 €' },
                                            ].map((item, idx) => (
                                                <tr key={idx} className="group transition-colors hover:bg-gold/5">
                                                    <td className="py-4 pl-2 text-stone font-medium group-hover:text-chocolate transition-colors">{item.name}</td>
                                                    <td className="py-4 text-right font-serif text-lg text-stone/80">{item.half}</td>
                                                    <td className="py-4 pr-2 text-right font-serif font-bold text-xl text-chocolate">{item.full}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-10">
                                <div>
                                    <h4 className="flex items-center text-gold font-bold uppercase text-xs tracking-[0.25em] mb-6">
                                        <span className="w-2 h-2 rounded-full bg-gold mr-3"></span>
                                        Tostadas
                                    </h4>
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="text-[10px] uppercase tracking-widest text-stone/50 border-b border-chocolate/5">
                                                <th className="text-left font-normal pb-3 pl-2">Ingrediente</th>
                                                <th className="text-right font-normal pb-3">Media</th>
                                                <th className="text-right font-normal pb-3 pr-2">Entera</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-chocolate/5">
                                            {[
                                                { name: 'Aceite / Mantequilla', half: '0,60 €', full: '1,20 €' },
                                                { name: 'Paté / Sobrasada / Mermelada', half: '0,70 €', full: '1,40 €' },
                                                { name: 'Jamón York', half: '1,10 €', full: '1,90 €' },
                                                { name: 'York y queso / Jamón', half: '1,40 €', full: '2,40 €' },
                                            ].map((item, idx) => (
                                                <tr key={idx} className="group transition-colors hover:bg-gold/5">
                                                    <td className="py-3 pl-2 text-stone font-medium group-hover:text-chocolate transition-colors">{item.name}</td>
                                                    <td className="py-3 text-right font-serif text-lg text-stone/80">{item.half}</td>
                                                    <td className="py-3 pr-2 text-right font-serif font-bold text-xl text-chocolate">{item.full}</td>
                                                </tr>
                                            ))}
                                            <tr><td colSpan={3} className="pt-3 text-[10px] uppercase tracking-widest text-gold text-right pr-2">* Extra pan especial +0,10€</td></tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div>
                                    <h4 className="flex items-center text-gold font-bold uppercase text-xs tracking-[0.25em] mb-6">
                                        <span className="w-2 h-2 rounded-full bg-gold mr-3"></span>
                                        Dulces
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center group p-3 -mx-3 rounded-lg hover:bg-gold/5 transition-colors border-b border-chocolate/5 border-dashed">
                                            <span className="text-stone group-hover:text-chocolate font-medium transition-colors">Gofres (2 ingredientes)</span>
                                            <span className="font-serif font-bold text-xl text-chocolate">2,20 €</span>
                                        </div>
                                        <div className="flex justify-between items-center group p-3 -mx-3 rounded-lg hover:bg-gold/5 transition-colors border-b border-chocolate/5 border-dashed">
                                            <span className="text-stone group-hover:text-chocolate font-medium transition-colors">Tortitas (2 ingredientes)</span>
                                            <span className="font-serif font-bold text-xl text-chocolate">1,00 €</span>
                                        </div>
                                        <div className="p-4 bg-chocolate/5 rounded-xl border border-chocolate/5 mt-4">
                                            <p className="text-xs text-stone italic text-center leading-relaxed">
                                                <span className="font-bold not-italic uppercase text-[10px] tracking-widest text-chocolate block mb-2">Sabores Disponibles</span>
                                                Chocolate, Blanco, Caramelo, Fresa, Vainilla, Dulce de Leche, Nata.
                                            </p>
                                            <div className="mt-3 pt-3 border-t border-chocolate/10 text-[10px] uppercase tracking-widest text-center text-gold font-bold">
                                                Extra ingr.: 0,20€ <span className="mx-2">•</span> Helado: 0,50€
                                            </div>
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
