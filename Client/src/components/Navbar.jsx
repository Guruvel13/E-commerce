import React from 'react';
import { Search, ShoppingCart, Heart, Globe, User, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <span className="text-2xl font-bold tracking-tighter text-teal-500">
                            <span className="font-serif italic text-3xl">S</span>tella
                        </span>
                    </div>

                    {/* Search Bar - Hidden on mobile */}
                    <div className="hidden md:flex flex-1 max-w-lg mx-8">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition duration-200 sm:text-sm"
                                placeholder="What are you looking for?"
                            />
                        </div>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-6">
                        <motion.div whileHover={{ scale: 1.1 }} className="relative cursor-pointer group">
                            <ShoppingCart className="h-6 w-6 text-slate-600 group-hover:text-teal-600 transition-colors" />
                            <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                20
                            </span>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.1 }} className="relative cursor-pointer group">
                            <Heart className="h-6 w-6 text-slate-600 group-hover:text-rose-500 transition-colors" />
                            <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                3
                            </span>
                        </motion.div>

                        <div className="hidden lg:flex items-center space-x-1 cursor-pointer hover:text-teal-600 transition-colors">
                            <Globe className="h-5 w-5 text-slate-600" />
                            <span className="text-sm font-medium text-slate-700">English</span>
                        </div>

                        <div className="flex items-center gap-2 cursor-pointer pl-4 border-l border-gray-200">
                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                <span className="font-bold text-gray-500">AR</span>
                            </div>
                            <div className="hidden lg:block text-left">
                                <p className="text-xs text-gray-500">Welcome Back!</p>
                                <p className="text-sm font-semibold text-slate-800">Abdel Rahman</p>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                                <Menu className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
