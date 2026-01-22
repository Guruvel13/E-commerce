import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
        alt: "Hero Fashion 1"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
        alt: "Hero Fashion 2"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
        alt: "Hero Fashion 3"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
        alt: "Hero Fashion 4"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 10000); // 10 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[85vh] bg-gray-100 overflow-hidden flex items-center justify-center">
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
                        className="w-full h-full object-cover object-center opacity-90 absolute inset-0"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-transparent mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <h1 className="text-7xl md:text-9xl font-light text-white tracking-tighter mb-4 drop-shadow-sm mix-blend-overlay">
                        Simple <br />
                        <span className="font-semibold block mt-[-20px]">is More</span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-8 pl-2 border-l-4 border-white/50"
                    >
                        <p className="text-white text-xl md:text-2xl font-light tracking-widest uppercase">
                            Designed to <br /> Stand Out
                        </p>
                    </motion.div>
                </motion.div>

                {/* Bottom Elements */}
                <div className="absolute bottom-10 left-0 w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-end">
                    {/* Left Text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-white relative z-20 mb-4 md:mb-0"
                    >
                        <p className="text-lg font-medium tracking-widest">LIMITED-EDITIONS</p>
                        <p className="text-sm opacity-80">STYLES</p>
                    </motion.div>

                    {/* Center Arrow */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 hidden md:block"
                    >
                        <div className="h-12 w-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors">
                            <ArrowDown className="text-white h-6 w-6" />
                        </div>
                    </motion.div>

                    {/* Dots */}
                    <div className="flex gap-2">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${index === currentSlide ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
