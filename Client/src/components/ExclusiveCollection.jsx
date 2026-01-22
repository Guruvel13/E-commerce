import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ExclusiveCollection = () => {
    const navigate = useNavigate();
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[600px]">

                    {/* Main Left Banner */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden bg-teal-400 p-8 lg:p-12 flex flex-col justify-between h-full group"
                    >
                        <div className="relative z-10 max-w-sm">
                            <h3 className="text-2xl font-bold text-teal-100 mb-2">UrbanWeave</h3>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                                Your Style,<br />Delivered.<br />Exclusively<br />Online.
                            </h2>
                            <span className="text-teal-100 text-sm">www.UrbanWeave.com</span>
                        </div>
                    </motion.div>

                    {/* Right Column Grid */}
                    <div className="flex flex-col gap-8 h-full">
                        {/* Top Right Card */}
                        {/* Top Right Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative rounded-3xl overflow-hidden bg-gray-50 p-8 flex-1 flex items-center justify-between h-full gap-4"
                        >
                            <div className="w-1/2 flex justify-center order-1">
                                <img
                                    src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Watch"
                                    className="max-h-40 lg:max-h-56 object-contain drop-shadow-2xl"
                                />
                            </div>
                            <div className="w-1/2 z-10 order-2 pl-4">
                                <p className="text-sm text-gray-500 font-medium mb-1">Timeless elegance</p>
                                <h3 className="text-2xl font-bold text-slate-800 mb-6">Discover our accessories collection</h3>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate('/product')}
                                    className="px-6 py-2 bg-teal-400 text-white font-semibold rounded-lg hover:bg-teal-500 transition-colors shadow-lg shadow-teal-200"
                                >
                                    Shop Now
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Bottom Right Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="relative rounded-3xl overflow-hidden bg-gray-50 p-8 flex-1 flex items-center justify-between h-full"
                        >
                            <div className="w-1/2 z-10">
                                <p className="text-sm text-gray-500 font-medium mb-1">Find your perfect pair</p>
                                <h3 className="text-2xl font-bold text-slate-800 mb-6">Explore our shoes collection</h3>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate('/product')}
                                    className="px-6 py-2 bg-teal-400 text-white font-semibold rounded-lg hover:bg-teal-500 transition-colors shadow-lg shadow-teal-200"
                                >
                                    Shop Now
                                </motion.button>
                            </div>
                            <div className="w-1/2 flex justify-center">
                                <img
                                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Sneaker"
                                    className="max-h-40 lg:max-h-56 object-contain drop-shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExclusiveCollection;
