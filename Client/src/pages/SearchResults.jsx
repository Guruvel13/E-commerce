import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, ArrowRight } from 'lucide-react';

const SearchResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search).get('q') || '';
    const [results, setResults] = useState([]);

    // Mock generic product pool
    const allProducts = [
        { id: 1, name: "Premium Wool Coat", price: 245.00, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=2574&auto=format&fit=crop" },
        { id: 2, name: "Urban Leather Jacket", price: 320.00, image: "https://images.unsplash.com/photo-1551028919-ac7d6d97526c?q=80&w=2574&auto=format&fit=crop" },
        { id: 3, name: "Minimalist Watch", price: 150.00, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=2599&auto=format&fit=crop" },
        { id: 4, name: "Designer Scarf", price: 85.00, image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4faae?q=80&w=2574&auto=format&fit=crop" },
        { id: 5, name: "Running Sneakers", price: 120.00, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop" },
        { id: 6, name: "Classic Blue Jeans", price: 95.00, image: "https://images.unsplash.com/photo-1542272454315-4c01d743a85e?q=80&w=2574&auto=format&fit=crop" },
    ];

    useEffect(() => {
        // Simple mock search filtering
        if (query) {
            const filtered = allProducts.filter(p =>
                p.name.toLowerCase().includes(query.toLowerCase())
            );
            // If no matches, just show everything for demo purposes so it's not empty
            setResults(filtered.length > 0 ? filtered : allProducts.slice(0, 3));
        } else {
            setResults([]);
        }
    }, [query]);

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="mb-12">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">
                        {results.length > 0 ? `Search results for "${query}"` : `No results found for "${query}"`}
                    </h1>
                    <p className="text-slate-500">Found {results.length} items</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {results.map((product) => (
                        <motion.div
                            layout
                            key={product.id}
                            className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-[4/5] overflow-hidden bg-gray-50 relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-slate-900 line-clamp-1">{product.name}</h3>
                                    <span className="font-bold text-teal-600">₹{product.price}</span>
                                </div>
                                <div className="flex gap-2 mt-4">
                                    <button
                                        onClick={() => navigate('/product', { state: { product } })}
                                        className="flex-1 bg-slate-100 text-slate-900 py-2 rounded-xl text-sm font-bold hover:bg-slate-900 hover:text-white transition-colors"
                                    >
                                        View
                                    </button>
                                    <button className="w-10 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center hover:bg-rose-100 transition-colors">
                                        <Heart className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SearchResults;
