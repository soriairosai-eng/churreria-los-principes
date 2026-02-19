import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LegacySection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <section id="story" className="py-32 bg-brand-cream relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply pointer-events-none"></div>

            <div ref={containerRef} className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <div className="relative">
                        <motion.div style={{ y: y2 }} className="relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=2536&auto=format&fit=crop"
                                alt="Aceite de Oliva Virgen Extra"
                                className="w-[85%] rounded-none shadow-2xl aspect-[3/4] object-cover grayscale-[20%] sepia-[10%]"
                            />
                            <div className="absolute -bottom-8 -right-4 bg-brand-dark p-6 shadow-xl max-w-[200px]">
                                <p className="text-brand-gold font-serif text-3xl font-bold mb-1">100%</p>
                                <p className="text-white text-xs uppercase tracking-widest font-light">Aceite de Oliva Virgen Extra</p>
                            </div>
                        </motion.div>

                        {/* Decorative Detail */}
                        <motion.div style={{ y: y1 }} className="absolute top-12 right-0 w-1/2 h-full border border-brand-dark/10 -z-10"></motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="pl-0 md:pl-12">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-brand-gold/80 font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
                                Barrio de Fátima, Córdoba
                            </span>
                            <h2 className="text-5xl md:text-6xl font-serif text-brand-dark mb-8 leading-tight">
                                Artesanía que <br />
                                <span className="italic text-brand-terra">perdura.</span>
                            </h2>
                            <p className="text-brand-dark/70 text-lg font-light leading-relaxed mb-8">
                                No es solo agua, harina y sal. Es el **tiempo**. Es la paciencia de dejar reposar la masa exactamente lo necesario.
                                Es el arte de freír a la temperatura perfecta en el mejor AOVE de nuestra tierra.
                            </p>
                            <p className="text-brand-dark/70 text-lg font-light leading-relaxed mb-10">
                                En Churrería Los Príncipes, no servimos desayuno. Servimos un recuerdo. Una tradición que se siente en cada mordisco,
                                crujiente por fuera, tierno por dentro.
                            </p>

                            <div className="flex items-center space-x-4">
                                <div className="h-[1px] w-12 bg-brand-dark/20"></div>
                                <span className="font-serif text-brand-dark text-xl italic">La Familia</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LegacySection;
