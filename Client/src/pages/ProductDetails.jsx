import React, { useState, useEffect } from 'react';
import { Star, Minus, Plus, Heart, Share2, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('gray');
    const [selectedImage, setSelectedImage] = useState(0);

    // Get product data from navigation state
    const location = useLocation();
    const passedProduct = location.state?.product;

    // Default static product to fall back on
    const defaultProduct = {
        title: "Bang & Olufsen BeoPlay A1 2nd Gen Portable Speaker",
        price: 210.00,
        description: "Powerful portable speaker with rich sound and long battery life.",
        colors: [
            { name: 'gray', class: 'bg-slate-500' },
            { name: 'teal', class: 'bg-teal-600' },
            { name: 'silver', class: 'bg-gray-200' },
            { name: 'rose', class: 'bg-rose-200' },
            { name: 'olive', class: 'bg-olive-500' },
            { name: 'beige', class: 'bg-amber-100' },
        ],
        images: [
            "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?q=80&w=2574&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=2574&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1520186994231-6ea0218304a2?q=80&w=2626&auto=format&fit=crop",
        ]
    };

    // Construct the display product
    const product = passedProduct ? {
        ...defaultProduct,
        title: passedProduct.name,
        // Ensure price is a number for formatting or string if preferred, passing as number from NewArrivals
        price: passedProduct.price,
        // Put the passed image first so it shows up as main
        images: [passedProduct.image, ...defaultProduct.images.slice(1)]
    } : defaultProduct;

    // Format price for display
    const displayPrice = typeof product.price === 'number'
        ? `₹${product.price.toFixed(2)}`
        : `₹${product.price}`; // fallback if already string or static default was string (I changed static to number above for consistency, but protecting)

    // Reset selected image index when product changes
    useEffect(() => {
        setSelectedImage(0);
    }, [product.title]);

    const handleQuantityChange = (type) => {
        if (type === 'minus' && quantity > 1) setQuantity(quantity - 1);
        if (type === 'plus') setQuantity(quantity + 1);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center text-xs text-slate-500 mb-8 uppercase tracking-wide font-medium relative z-10">
                    <a href="/" className="hover:text-teal-600 transition-colors">Main</a>
                    <ChevronRight className="w-3 h-3 mx-2" />
                    <span>Shop</span>
                    <ChevronRight className="w-3 h-3 mx-2" />
                    <span>New Arrivals</span>
                    <ChevronRight className="w-3 h-3 mx-2" />
                    <span className="text-slate-900 font-bold truncate max-w-[200px]">{product.title}</span>
                </nav>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left: Gallery */}
                    <div className="space-y-6">
                        <div className="aspect-square bg-gray-50 rounded-3xl overflow-hidden relative group">
                            <motion.img
                                key={selectedImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                src={product.images[selectedImage]}
                                alt="Product Main"
                                className="w-full h-full object-cover object-center mix-blend-multiply"
                            />
                            {/* Hover Tag */}
                            <div className="absolute top-6 left-6">
                                <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 border border-gray-100">
                                    New Arrival
                                </span>
                            </div>
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    // Fixed template literal below
                                    className={`aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${selectedImage === idx ? 'border-teal-500 ring-2 ring-teal-100' : 'border-transparent hover:border-gray-200'}`}
                                >
                                    {/* Fixed template literal below */}
                                    <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover mix-blend-multiply bg-gray-50" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                            {product.title}
                        </h1>

                        {/* Color Selector */}
                        <div className="flex items-center gap-3 mb-8">
                            {product.colors.map((color) => (
                                <div
                                    key={color.name}
                                    onClick={() => setSelectedColor(color.name)}
                                    // Fixed template literal below
                                    className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center transition-all ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-slate-900 scale-110' : 'hover:scale-105'} ${color.class}`}
                                >
                                    {selectedColor === color.name && <div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm" />}
                                </div>
                            ))}
                        </div>

                        <div className="text-2xl font-bold text-slate-900 mb-8">
                            {displayPrice}
                        </div>

                        {/* Dropdowns */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="relative">
                                <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 cursor-pointer">
                                    <option>Size</option>
                                    <option>Standard</option>
                                    <option>Large</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                            <div className="relative">
                                <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 cursor-pointer">
                                    <option>Color</option>
                                    <option>Gray</option>
                                    <option>Teal</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Shipping Accordion (Visual only) */}
                        <div className="border-t border-gray-100 py-4 mb-8 cursor-pointer group">
                            <div className="flex justify-between items-center text-sm font-medium text-slate-900">
                                <span>Shipping information</span>
                                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-teal-500 transition-colors" />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4 mb-4">
                            {/* Quantity */}
                            <div className="flex items-center border border-gray-200 rounded-xl">
                                <button
                                    onClick={() => handleQuantityChange('minus')}
                                    className="p-3 text-gray-400 hover:text-slate-900 transition-colors"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-12 text-center text-slate-900 font-semibold">{quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange('plus')}
                                    className="p-3 text-gray-400 hover:text-slate-900 transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Add to Cart */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex-1 bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
                            >
                                Add to cart
                            </motion.button>
                        </div>

                        <div className="flex items-center gap-2 mt-4">
                            <div className="flex gap-2">
                                <button className="p-3 border border-gray-200 rounded-xl text-slate-400 hover:text-rose-500 hover:border-rose-200 hover:bg-rose-50 transition-all">
                                    <Heart className="w-5 h-5" />
                                </button>
                                <button className="p-3 border border-gray-200 rounded-xl text-slate-400 hover:text-teal-500 hover:border-teal-200 hover:bg-teal-50 transition-all">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-xs text-gray-400 ml-auto">Free shipping on all orders over ₹100</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetails;
