import React from 'react';
import { motion } from 'framer-motion';

const InstagramFeed: React.FC = () => {
    // Placeholder images for Instagram feed
    const images = [
        "https://images.unsplash.com/photo-1616031036573-c6b2b7193f4e?q=80&w=2670&auto=format&fit=crop", // Coffee & Churros
        "https://images.unsplash.com/photo-1549488344-c73885698b5f?q=80&w=2670&auto=format&fit=crop", // Chocolate pouring
        "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=2676&auto=format&fit=crop", // Dough preparation
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2574&auto=format&fit=crop"  // Happy customers (hands)
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
                <div>
                    <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] font-bold block mb-2">
                        @churrerialosprincipes
                    </span>
                    <h3 className="text-4xl font-serif text-brand-dark">Momentos Dulces</h3>
                </div>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-dark hover:text-brand-gold transition-colors">
                    <span>Síguenos en Instagram</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 h-96 md:h-[500px]">
                {images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        className="relative group overflow-hidden h-full"
                        whileHover={{ scale: 0.98 }}
                        transition={{ duration: 0.4 }}
                    >
                        <img
                            src={img}
                            alt={`Instagram moments ${idx}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.419.419-.818.679-1.381.896-.422.164-1.056.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.419-.679-.818-.896-1.381-.164-.422-.36-1.056-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.054-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.556-.791.306-1.459.717-2.126 1.384-.666.667-1.077 1.335-1.383 2.126-.297.763-.499 1.634-.556 2.911-.058 1.28-.071 1.688-.071 4.947s.013 3.667.071 4.947c.057 1.277.259 2.148.556 2.911.306.791.717 1.459 1.383 2.126.667.666 1.335 1.077 2.126 1.383.763.297 1.634.499 2.911.556 1.28.058 1.688.071 4.947.071s3.667-.013 4.947-.071c1.277-.057 2.148-.259 2.911-.556.791-.306 1.459-.717 2.126-1.383.667-.667 1.077-1.335 1.383-2.126.297-.763.499-1.634.556-2.911.058-1.28.071-1.688.071-4.947s-.013-3.667-.071-4.947c-.057-1.277-.259-2.148-.556-2.911-.306-.791-.717-1.459-1.383-2.126-.667-.666-1.335-1.077-2.126-1.383-.763-.297-1.634-.499-2.911-.556-1.28-.058-1.688-.071-4.947-.071z" /></svg>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default InstagramFeed;
