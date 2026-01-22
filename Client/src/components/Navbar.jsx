import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, Globe, Search as SearchIcon, Menu, X, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const [recentSearches, setRecentSearches] = useState(['Cotton T-Shirt', 'Summer Dress', 'Leather Jacket', 'Running Shoes']);

    const removeRecentSearch = (e, itemToRemove) => {
        e.stopPropagation();
        setRecentSearches(recentSearches.filter(item => item !== itemToRemove));
    };

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            setSearchQuery('');
            setIsSearchFocused(false);
        }
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <Link to="/" className="text-2xl font-bold tracking-tighter text-teal-500">
                            <span className="font-serif italic text-3xl">U</span>rbanWeave
                        </Link>
                    </div>

                    {/* Search Bar - Hidden on mobile */}
                    <div className="hidden md:flex flex-1 max-w-lg mx-8 relative">
                        <div className="w-full">
                            <div className="relative w-full z-50">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={handleSearch}
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                                    className="block w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition duration-200 sm:text-sm"
                                    placeholder="What are you looking for?"
                                />
                                <AnimatePresence>
                                    {searchQuery && (
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            onClick={() => setSearchQuery('')}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600"
                                        >
                                            <X className="h-4 w-4" />
                                        </motion.button>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Search Dropdown */}
                            <AnimatePresence>
                                {isSearchFocused && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden origin-top z-40"
                                    >
                                        {/* Dynamic Suggestion */}
                                        {searchQuery && (
                                            <div
                                                className="p-4 border-b border-gray-50 flex items-center gap-3 cursor-pointer hover:bg-gray-50 text-slate-600"
                                                onClick={() => {
                                                    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
                                                    setIsSearchFocused(false);
                                                }}
                                            >
                                                <Search className="h-4 w-4 text-gray-400" />
                                                <span className="text-sm truncate">
                                                    {searchQuery} - <span className="text-gray-400">Search for products, brands, and more</span>
                                                </span>
                                            </div>
                                        )}

                                        {/* Recent Searches */}
                                        <div className="p-4 bg-white">
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 pl-1">Recent Searches</p>
                                            <div className="space-y-1">
                                                {recentSearches.map((item, idx) => (
                                                    <div
                                                        key={idx}
                                                        onClick={() => {
                                                            setSearchQuery(item);
                                                            navigate(`/search?q=${encodeURIComponent(item)}`);
                                                            setIsSearchFocused(false);
                                                        }}
                                                        className="flex items-center justify-between p-2 rounded-xl text-slate-600 cursor-pointer hover:bg-teal-50 hover:text-teal-700 transition-colors group"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <Clock className="h-4 w-4 text-gray-400 group-hover:text-teal-500" />
                                                            <span className="text-sm font-medium">{item}</span>
                                                        </div>
                                                        <button
                                                            onClick={(e) => removeRecentSearch(e, item)}
                                                            className="p-1 rounded-full hover:bg-teal-100 text-gray-300 hover:text-teal-600 transition-colors"
                                                            title="Remove from history"
                                                        >
                                                            <X className="h-3 w-3" />
                                                        </button>
                                                    </div>
                                                ))}
                                                {recentSearches.length === 0 && (
                                                    <div className="p-4 text-center text-sm text-gray-400">
                                                        No recent searches
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-6">
                        <motion.div whileHover={{ scale: 1.1 }} className="relative cursor-pointer group">
                            <Link to="/cart">
                                <ShoppingCart className="h-6 w-6 text-slate-600 group-hover:text-teal-600 transition-colors" />
                                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    20
                                </span>
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.1 }} className="relative cursor-pointer group">
                            <Link to="/wishlist">
                                <Heart className="h-6 w-6 text-slate-600 group-hover:text-rose-500 transition-colors" />
                                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    3
                                </span>
                            </Link>
                        </motion.div>

                        <div className="hidden lg:flex items-center space-x-1 cursor-pointer hover:text-teal-600 transition-colors">
                            <Globe className="h-5 w-5 text-slate-600" />
                            <span className="text-sm font-medium text-slate-700">English</span>
                        </div>

                        <Link to="/profile" className="flex items-center gap-2 cursor-pointer pl-4 border-l border-gray-200 group">
                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-transparent group-hover:border-teal-500 transition-all">
                                <span className="font-bold text-gray-500">AR</span>
                            </div>
                            <div className="hidden lg:block text-left">
                                <p className="text-xs text-gray-500 group-hover:text-teal-600 transition-colors">Welcome Back!</p>
                                <p className="text-sm font-semibold text-slate-800">Abdel Rahman</p>
                            </div>
                        </Link>

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
