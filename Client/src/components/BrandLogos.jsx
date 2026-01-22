import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const brandsRow1 = [
    { name: 'Hermes', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Herm%C3%A8s_Logo.svg/2560px-Herm%C3%A8s_Logo.svg.png' },
    { name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png' },
    { name: 'New Balance', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/2560px-New_Balance_logo.svg.png' },
    { name: 'Puma', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Puma_AG.svg/1200px-Puma_AG.svg.png' },
    { name: 'Uniqlo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/2048px-UNIQLO_logo.svg.png' },
    { name: 'Zara', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1024px-Zara_Logo.svg.png' },
];

const brandsRow2 = [
    { name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png' },
    { name: 'Ralph Lauren', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Ralph_Lauren_Corporation_logo.svg/2560px-Ralph_Lauren_Corporation_logo.svg.png' },
    { name: 'H&M', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png' },
    { name: 'Gucci', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/1960s_Gucci_Logo.svg/2560px-1960s_Gucci_Logo.svg.png' },
    { name: 'Prada', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Prada-Logo.svg/2560px-Prada-Logo.svg.png' },
    { name: 'Calvin Klein', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Calvin_klein_logo.svg/2560px-Calvin_klein_logo.svg.png' },
];

const BrandCard = ({ brand, onClick }) => (
    <div
        onClick={onClick}
        className="flex-shrink-0 w-48 h-24 mx-4 border border-gray-100 rounded-2xl flex items-center justify-center hover:shadow-lg hover:border-teal-100 transition-all cursor-pointer bg-white group"
    >
        <img
            src={brand.logo}
            alt={brand.name}
            className="max-w-[70%] max-h-[50%] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        />
    </div>
);

const BrandLogos = () => {
    const navigate = useNavigate();

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                <div className="flex justify-between items-end">
                    <h2 className="text-xl font-bold text-slate-800">Shop by Brands</h2>
                    <span onClick={() => navigate('/product')} className="text-teal-500 text-sm font-medium hover:text-teal-700 transition-colors cursor-pointer">See All</span>
                </div>
            </div>

            {/* Row 1: Moves Left */}
            <div className="flex mb-8 relative">
                <motion.div
                    className="flex"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {[...brandsRow1, ...brandsRow1, ...brandsRow1, ...brandsRow1].map((brand, idx) => (
                        <BrandCard key={`r1-${brand.name}-${idx}`} brand={brand} onClick={() => navigate('/product')} />
                    ))}
                </motion.div>
            </div>

            {/* Row 2: Moves Right */}
            <div className="flex relative">
                <motion.div
                    className="flex"
                    initial={{ x: "-50%" }}
                    animate={{ x: "0%" }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {[...brandsRow2, ...brandsRow2, ...brandsRow2, ...brandsRow2].map((brand, idx) => (
                        <BrandCard key={`r2-${brand.name}-${idx}`} brand={brand} onClick={() => navigate('/product')} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BrandLogos;
