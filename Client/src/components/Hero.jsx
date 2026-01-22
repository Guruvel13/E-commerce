import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
        alt: "Hero Fashion 1",
        titleLine1: "Simple",
        titleLine2: "is More",
        subtitle: ["Designed to", "Stand Out"]
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
        alt: "Hero Fashion 2",
        titleLine1: "Urban",
        titleLine2: "Elegance",
        subtitle: ["Redefine", "Your Style"]
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
        alt: "Hero Fashion 3",
        titleLine1: "Classic",
        titleLine2: "Timeless",
        subtitle: ["Fashion", "That Lasts"]
    },
    {
        id: 4,
        image: "https://plus.unsplash.com/premium_photo-1727942412161-a79dcfb966d1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Hero Fashion 4",
        titleLine1: "Bold",
        titleLine2: "Beauty",
        subtitle: ["Express", "Yourself"]
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 10000); // 10 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full bg-white pt-6 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative w-full h-[70vh] bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center">
                    {/* Background Image Slider */}
                    <div className="absolute inset-0 z-0">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentSlide}
                                src={slides[currentSlide].image}
                                alt={slides[currentSlide].alt}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.5 }}
                                onClick={() => navigate('/product')}
                                className="w-full h-full object-cover object-center opacity-90 absolute inset-0 cursor-pointer"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-transparent mix-blend-multiply pointer-events-none"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 w-full px-8 md:px-16 h-full flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="max-w-2xl"
                            >
                                <h1 className="text-7xl md:text-9xl font-light text-white tracking-tighter mb-4 drop-shadow-sm mix-blend-overlay">
                                    {slides[currentSlide].titleLine1} <br />
                                    <span className="font-semibold block mt-[-20px]">{slides[currentSlide].titleLine2}</span>
                                </h1>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="mt-8 pl-2 border-l-4 border-white/50"
                                >
                                    <p className="text-white text-xl md:text-2xl font-light tracking-widest uppercase">
                                        {slides[currentSlide].subtitle[0]} <br /> {slides[currentSlide].subtitle[1]}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Bottom Elements */}
                        <div className="absolute bottom-10 left-0 w-full px-8 md:px-16 flex flex-col md:flex-row justify-between items-end">
                            {/* Left Text & Dots Container */}
                            <div className="flex flex-col gap-6 relative z-20 mb-4 md:mb-0">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1, duration: 1 }}
                                    className="text-white"
                                >
                                    <p className="text-lg font-medium tracking-widest">LIMITED-EDITIONS</p>
                                    <p className="text-sm opacity-80">STYLES</p>
                                </motion.div>

                                {/* Dots - Bottom Left */}
                                <div className="flex items-center gap-2">
                                    {slides.map((_, index) => (
                                        <motion.div
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            initial={false}
                                            animate={{
                                                width: index === currentSlide ? 40 : 12,
                                                backgroundColor: index === currentSlide ? '#ffffff' : 'rgba(255, 255, 255, 0.4)',
                                            }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="h-2 rounded-full cursor-pointer"
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
