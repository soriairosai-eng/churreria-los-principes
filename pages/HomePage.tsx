import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import LegacySection from '../components/LegacySection';
import USPSection from '../components/UniqueSellingPoints';
import InstagramFeed from '../components/InstagramFeed';

const HomePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-brand-cream">
            <Hero />
            <LegacySection />
            <USPSection />
            <InstagramFeed />
        </div>
    );
};

export default HomePage;
