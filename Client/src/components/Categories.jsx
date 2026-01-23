import React from 'react';
import { motion } from 'framer-motion';
import { Watch, Shirt, ShoppingBag, Footprints, Droplets, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const categories = [
    { name: 'Personal Care', icon: Droplets, color: 'text-teal-500', bg: 'bg-teal-50' },
    { name: 'Accessories', icon: Watch, color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: 'Coats', icon: Shirt, color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { name: 'Sweat Pants', icon: ShoppingBag, color: 'text-amber-500', bg: 'bg-amber-50' }, // using ShoppingBag as generic
    { name: 'Parfume', icon: Droplets, color: 'text-rose-500', bg: 'bg-rose-50' },
    { name: 'T-Shirt', icon: Shirt, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { name: 'Sneakers', icon: Footprints, color: 'text-cyan-500', bg: 'bg-cyan-50' },
    { name: 'Bags', icon: Briefcase, color: 'text-violet-500', bg: 'bg-violet-50' },
];

const Categories = () => {
    const navigate = useNavigate();
    return (
        <section className="py-16 bg-white">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Side: Header and Link */}
                    <div className="lg:w-1/5 flex flex-row lg:flex-col justify-between items-start mb-6 lg:mb-0">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-800 tracking-tight leading-tight">
                                Shop by <br className="hidden lg:block" /> Category
                            </h2>
                            <button onClick={() => navigate('/product')} className="mt-6 text-teal-500 font-medium hover:text-teal-700 transition-colors bg-transparent border-none cursor-pointer p-0 block">See all</button>
                        </div>
                    </div>

                    {/* Right Side: Grid */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="lg:w-4/5 grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {categories.map((category, index) => (
                            <motion.div
                                variants={item}
                                key={category.name}
                                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                                onClick={() => navigate('/product')}
                                className="flex items-center gap-4 p-3 rounded-[2rem] border border-gray-200 bg-white hover:border-teal-100 hover:shadow-md transition-all cursor-pointer group"
                            >
                                <div className={`p-3 rounded-2xl ${category.bg} ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                                    <category.icon className="w-5 h-5" />
                                </div>
                                <span className="font-semibold text-sm text-slate-700 group-hover:text-slate-900 whitespace-nowrap">{category.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Categories;
