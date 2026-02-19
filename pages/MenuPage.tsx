import React, { useEffect } from 'react';
import MenuSection from '../components/MenuSection';

const MenuPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 bg-[#F9F7F2] min-h-screen">
            <div className="container mx-auto px-6 mb-12 text-center">
                <p className="text-[#C5A059] font-bold tracking-widest uppercase text-xs mb-4">Nuestra Propuesta</p>
                <h1 className="text-5xl md:text-6xl font-serif text-[#2D1B14] mb-8">Carta de Especialidades</h1>
                <p className="text-gray-600 font-light leading-relaxed max-w-2xl mx-auto text-lg mb-12">
                    Disfruta de nuestros churros artesanales, chocolates de origen y cafés de especialidad.
                    Todo preparado al momento para ti.
                </p>

                {/* Summary Table */}
                <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl border border-[#2D1B14]/5 rounded-none text-left mb-16">
                    <h3 className="text-2xl font-serif text-[#2D1B14] mb-6 text-center border-b border-[#C5A059]/30 pb-4">Precios Generales</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Column 1 */}
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-[#C5A059] font-bold uppercase text-xs tracking-widest mb-3">☕ Bebidas</h4>
                                <table className="w-full text-sm">
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="group"><td className="py-2 text-gray-600">Café</td><td className="py-2 text-right font-bold text-[#2D1B14]">1,10 €</td></tr>
                                        <tr className="group"><td className="py-2 text-gray-600">Café bombón</td><td className="py-2 text-right font-bold text-[#2D1B14]">1,50 €</td></tr>
                                        <tr className="group"><td className="py-2 text-gray-600">Chocolate</td><td className="py-2 text-right font-bold text-[#2D1B14]">1,30 €</td></tr>
                                        <tr className="group"><td className="py-2 text-gray-600">Cola Cao / Infusiones</td><td className="py-2 text-right font-bold text-[#2D1B14]">1,10 €</td></tr>
                                        <tr className="group"><td className="py-2 text-gray-600">Zumos / Batidos / Refrescos</td><td className="py-2 text-right font-bold text-[#2D1B14]">1,50 €</td></tr>
                                        <tr className="group"><td className="py-2 text-gray-600">Zumo natural</td><td className="py-2 text-right font-bold text-[#2D1B14]">1,80 €</td></tr>
                                        <tr className="group"><td className="py-2 text-gray-600">Botella agua</td><td className="py-2 text-right font-bold text-[#2D1B14]">1,00 €</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <div>
                                <h4 className="text-[#C5A059] font-bold uppercase text-xs tracking-widest mb-3">🥨 Churros y Jeringos</h4>
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="text-xs text-gray-400 border-b border-gray-100">
                                            <th className="text-left font-normal pb-2">Producto</th>
                                            <th className="text-right font-normal pb-2">Media</th>
                                            <th className="text-right font-normal pb-2">Entera</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="group"><td className="py-2 text-gray-600">Churros</td><td className="py-2 text-right">0,80 €</td><td className="py-2 text-right font-bold text-[#2D1B14]">1,20 €</td></tr>
                                        <tr className="group"><td className="py-2 text-gray-600">Jeringos</td><td className="py-2 text-right">0,80 €</td><td className="py-2 text-right font-bold text-[#2D1B14]">1,20 €</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-[#C5A059] font-bold uppercase text-xs tracking-widest mb-3">🥖 Tostadas</h4>
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="text-xs text-gray-400 border-b border-gray-100">
                                            <th className="text-left font-normal pb-2">Ingrediente</th>
                                            <th className="text-right font-normal pb-2">Media</th>
                                            <th className="text-right font-normal pb-2">Entera</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr><td className="py-2 text-gray-600">Aceite / Mantequilla</td><td className="py-2 text-right">0,60 €</td><td className="py-2 text-right font-bold text-[#2D1B14]">1,20 €</td></tr>
                                        <tr><td className="py-2 text-gray-600">Paté / Sobrasada / Mermelada</td><td className="py-2 text-right">0,70 €</td><td className="py-2 text-right font-bold text-[#2D1B14]">1,40 €</td></tr>
                                        <tr><td className="py-2 text-gray-600">Jamón York</td><td className="py-2 text-right">1,10 €</td><td className="py-2 text-right font-bold text-[#2D1B14]">1,90 €</td></tr>
                                        <tr><td className="py-2 text-gray-600">York y queso / Jamón</td><td className="py-2 text-right">1,40 €</td><td className="py-2 text-right font-bold text-[#2D1B14]">2,40 €</td></tr>
                                        <tr><td colspan="3" className="py-2 text-xs text-[#C5A059] italic text-right">* Extra pan especial +0,10€</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <div>
                                <h4 className="text-[#C5A059] font-bold uppercase text-xs tracking-widest mb-3">🧇 Gofres y Tortitas</h4>
                                <div className="text-sm text-gray-600 space-y-2">
                                    <div className="flex justify-between border-b border-gray-100 py-2">
                                        <span>Gofres (2 ingredientes)</span>
                                        <span className="font-bold text-[#2D1B14]">2,20 €</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-100 py-2">
                                        <span>Tortitas (2 ingredientes)</span>
                                        <span className="font-bold text-[#2D1B14]">1,00 €</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2 italic">
                                        Sabores: Chocolate, Blanco, Caramelo, Fresa, Vainilla, Dulce de Leche, Nata.
                                        <br />
                                        <span className="text-[#C5A059]">Extra ingr.: 0,20€ | Helado: 0,50€</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reusing the MenuSection which already contains the full list and filters */}
            <MenuSection />
        </div>
    );
};

export default MenuPage;
