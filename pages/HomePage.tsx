import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import LegacySection from '../components/LegacySection';
import USPSection from '../components/UniqueSellingPoints';
import MenuSection from '../components/MenuSection';
import InstagramFeed from '../components/InstagramFeed';
import CateringSection from '../components/CateringSection';

const HomePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-brand-cream">
            <Hero />
            <LegacySection />
            <USPSection />
            <MenuSection />
            <InstagramFeed />
            <CateringSection />
        </div>
    );
};

export default HomePage;
