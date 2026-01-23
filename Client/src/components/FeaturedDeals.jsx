import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FeaturedDeals = () => {
    const navigate = useNavigate();
    return (
        <section className="py-16 bg-white">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-10">Featured Deals</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Left Deal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="rounded-3xl bg-blue-500 overflow-hidden relative h-96 flex"
                    >
                        <div className="p-10 w-1/2 z-10 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="font-serif italic text-3xl">U</span>UrbanWeave
                            </h3>
                            <h2 className="text-3xl font-bold text-white mb-6">Indulge in exclusive deals</h2>
                            <p className="text-blue-100 mb-8 text-sm leading-relaxed">Shop now and enjoy our latest fashion finds.</p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                onClick={() => navigate('/product')}
                                className="w-fit px-6 py-3 bg-teal-400 text-white font-semibold rounded-lg hover:bg-teal-500 transition-colors"
                            >
                                Shop Now
                            </motion.button>
                        </div>
                        <div className="w-1/2 h-full absolute right-0 top-0">
                            <img
                                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Fashion Deal"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-transparent to-transparent"></div>
                        </div>
                    </motion.div>

                    {/* Right Deal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="rounded-3xl bg-cyan-400 overflow-hidden relative h-96 flex"
                    >
                        <div className="w-1/2 h-full relative z-0">
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <motion.img
                                    initial={{ y: 0 }}
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    src="https://cdn-icons-png.flaticon.com/512/4213/4213958.png" // Placeholder gift box icon
                                    alt="Gift Box"
                                    className="w-48 h-48 object-contain drop-shadow-2xl"
                                />
                            </div>
                        </div>
                        <div className="p-10 w-1/2 z-10 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-white mb-4">Welcome offer just for you</h2>
                            <p className="text-cyan-50 mb-8 text-sm leading-relaxed">Enjoy a special discount on your first purchase.</p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                onClick={() => navigate('/product')}
                                className="w-fit px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Get discount
                            </motion.button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedDeals;
