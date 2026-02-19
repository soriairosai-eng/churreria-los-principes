import React, { useEffect } from 'react';
import MenuSection from '../components/MenuSection';

const MenuPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 bg-[#F9F7F2] min-h-screen">
            <div className="container mx-auto px-6 mb-12 text-center">
                <p className="text-[#C5A059] font-bold tracking-widest uppercase text-xs mb-4">Nuestra Propuesta</p>
                <h1 className="text-5xl md:text-6xl font-serif text-[#2D1B14] mb-8">Carta de Especialidades</h1>
                <p className="text-gray-600 font-light leading-relaxed max-w-2xl mx-auto text-lg">
                    Disfruta de nuestros churros artesanales, chocolates de origen y cafés de especialidad.
                    Todo preparado al momento para ti.
                </p>
            </div>

            {/* Reusing the MenuSection which already contains the full list and filters */}
            <MenuSection />
        </div>
    );
};

export default MenuPage;
