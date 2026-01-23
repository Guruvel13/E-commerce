import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const RecentPosts = () => {
    const navigate = useNavigate();
    return (
        <section className="py-16 bg-white">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-10">Recent Post</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        onClick={() => navigate('/product')}
                        className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Active Lifestyle"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-10 left-10 text-white">
                            <span className="border border-white/50 rounded-full px-3 py-1 text-xs uppercase tracking-wider mb-4 inline-block backdrop-blur-sm">Outfit</span>
                            <h3 className="text-4xl font-light leading-tight">Trendy athletic <br /><span className="font-bold">outfits for active lifestyles</span></h3>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        onClick={() => navigate('/product')}
                        className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1485230405346-71acb9518d9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Contemporary Women"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-teal-500/80 mix-blend-multiply transition-colors duration-500 group-hover:bg-teal-500/60"></div>
                        <div className="absolute bottom-10 left-10 text-white">
                            <span className="border border-white/50 rounded-full px-3 py-1 text-xs uppercase tracking-wider mb-4 inline-block backdrop-blur-sm">Outfit</span>
                            <h3 className="text-4xl font-light leading-tight">Modern fashion for <br /><span className="font-bold">the contemporary woman</span></h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RecentPosts;
