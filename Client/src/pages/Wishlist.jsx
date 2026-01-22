import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
    const navigate = useNavigate();

    // Mock Data for Wishlist
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: "Premium Wool Coat",
            price: 245.00,
            image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=2574&auto=format&fit=crop",
            inStock: true
        },
        {
            id: 2,
            name: "Urban Leather Jacket",
            price: 320.00,
            image: "https://images.unsplash.com/photo-1551028919-ac7d6d97526c?q=80&w=2574&auto=format&fit=crop",
            inStock: true
        },
        {
            id: 3,
            name: "Minimalist Watch",
            price: 150.00,
            image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=2599&auto=format&fit=crop",
            inStock: false
        },
        {
            id: 4,
            name: "Designer Scarf",
            price: 85.00,
            image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4faae?q=80&w=2574&auto=format&fit=crop",
            inStock: true
        }
    ]);

    const removeFromWishlist = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="mb-12 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">My Wishlist</h1>
                    <p className="text-slate-500">{wishlistItems.length} items saved for later</p>
                </header>

                {wishlistItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {wishlistItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300"
                            >
                                {/* Image Container */}
                                <div className="aspect-[4/5] overflow-hidden bg-gray-50 relative">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {!item.inStock && (
                                        <div className="absolute top-4 right-4 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            Out of Stock
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="font-bold text-slate-900 line-clamp-1">{item.name}</h3>
                                        <span className="font-bold text-teal-600">₹{item.price}</span>
                                    </div>

                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => navigate('/cart')}
                                            className="flex-1 bg-slate-900 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors shadow-md shadow-slate-100 flex items-center justify-center gap-2"
                                            disabled={!item.inStock}
                                        >
                                            <ShoppingCart className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => removeFromWishlist(item.id)}
                                            className="w-12 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center hover:bg-rose-100 transition-colors"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Your wishlist is empty</h2>
                        <p className="text-slate-500 mb-8 max-w-md mx-auto">Looks like you haven't added any items to your wishlist yet. Start exploring our collection!</p>
                        <button
                            onClick={() => navigate('/')}
                            className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors inline-block"
                        >
                            Start Shopping
                        </button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Wishlist;
