import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, X, Gift, Tag, ArrowRight, Check, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Cart = () => {
    // Mock Data simulating the reference image structure but with fashion items to match the store theme
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Urban Elegant Trench Coat",
            specs: "Size M • Beige • Express delivery in 3 days",
            price: 210.00,
            image: "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=2574&auto=format&fit=crop",
            quantity: 1,
            selected: true
        },
        {
            id: 2,
            name: "Velvet Evening Dress",
            specs: "Size S • Black • Express delivery in 3 days",
            price: 180.50,
            image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=2670&auto=format&fit=crop",
            quantity: 1,
            selected: false
        },
        {
            id: 3,
            name: "Leather Signature Bag",
            specs: "One Size • Brown • Express delivery in 3 days",
            price: 350.00,
            image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?q=80&w=2574&auto=format&fit=crop",
            quantity: 1,
            selected: false
        },
        {
            id: 4,
            name: "Classic Summer Shades",
            specs: "UV Protection • Gold • Express delivery in 3 days",
            price: 120.00,
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2680&auto=format&fit=crop",
            quantity: 1,
            selected: false
        }
    ]);

    const handleQuantity = (id, type) => {
        setCartItems(cartItems.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: type === 'plus' ? item.quantity + 1 : Math.max(1, item.quantity - 1)
                };
            }
            return item;
        }));
    };

    const toggleSelect = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, selected: !item.selected } : item
        ));
    };

    const toggleSelectAll = () => {
        const allSelected = cartItems.every(item => item.selected);
        setCartItems(cartItems.map(item => ({ ...item, selected: !allSelected })));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Derived state
    const selectedItemsCount = cartItems.filter(i => i.selected).length;
    const subtotal = cartItems.filter(i => i.selected).reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const discount = subtotal > 0 ? 25.00 : 0; // Fixed dummy discount
    const total = Math.max(0, subtotal - discount);

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Step Indicator */}
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                    {/* Vertical Side Stepper */}
                    <div className="hidden lg:flex flex-col items-center gap-1 pt-2 mr-4 sticky top-24">
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold shadow-lg shadow-slate-200 z-10">1</div>
                            <span className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">Cart</span>
                        </div>
                        <div className="w-[1px] h-16 bg-gradient-to-b from-slate-900 to-gray-200"></div>

                        <div className="flex flex-col items-center gap-1 opacity-50">
                            <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-bold border border-gray-200 z-10">2</div>
                            <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Address</span>
                        </div>
                        <div className="w-[1px] h-16 bg-gray-200"></div>

                        <div className="flex flex-col items-center gap-1 opacity-50">
                            <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-bold border border-gray-200 z-10">3</div>
                            <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Payment</span>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 text-slate-800 flex-1 w-full">

                        {/* Left Column: Cart Items */}
                        <div className="flex-1">
                            {/* List Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div
                                        onClick={toggleSelectAll}
                                        className={`w-5 h-5 rounded border cursor-pointer flex items-center justify-center transition-colors ${selectedItemsCount === cartItems.length && cartItems.length > 0 ? 'bg-slate-900 border-slate-900' : 'border-gray-300'}`}
                                    >
                                        {selectedItemsCount === cartItems.length && cartItems.length > 0 && <Check className="w-3.5 h-3.5 text-white" />}
                                    </div>
                                    <span className="font-bold text-lg">{selectedItemsCount}/{cartItems.length} items selected</span>
                                </div>
                                <div className="text-sm font-medium text-slate-500 space-x-4">
                                    <button className="hover:text-slate-900 transition-colors">Move to wishlist</button>
                                    <button className="hover:text-rose-500 transition-colors">Remove</button>
                                </div>
                            </div>

                            {/* Items List */}
                            <div className="space-y-6">
                                {cartItems.map((item) => (
                                    <motion.div
                                        layout
                                        key={item.id}
                                        className="p-3 rounded-3xl border border-gray-100 bg-white shadow-sm flex gap-4 relative"
                                    >
                                        {/* Selection Checkbox */}
                                        <div className="pt-2">
                                            <div
                                                onClick={() => toggleSelect(item.id)}
                                                className={`w-5 h-5 rounded border cursor-pointer flex items-center justify-center transition-colors ${item.selected ? 'bg-slate-900 border-slate-900' : 'border-gray-300'}`}
                                            >
                                                {item.selected && <Check className="w-3.5 h-3.5 text-white" />}
                                            </div>
                                        </div>

                                        {/* Image */}
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                                        </div>

                                        {/* Details */}
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <h3 className="font-bold text-lg text-slate-900">{item.name}</h3>
                                                    <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-slate-900 transition-colors">
                                                        <X className="w-5 h-5" />
                                                    </button>
                                                </div>
                                                <p className="text-sm text-gray-500 mt-1">{item.specs}</p>
                                            </div>

                                            <div className="flex justify-between items-end mt-4">
                                                <span className="text-xl font-bold text-slate-900">₹{item.price.toFixed(2)}</span>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                                                    <button
                                                        onClick={() => handleQuantity(item.id, 'minus')}
                                                        className="w-8 h-8 flex items-center justify-center bg-white rounded-md text-gray-500 hover:text-slate-900 shadow-sm border border-gray-100 disabled:opacity-50"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="w-4 text-center text-sm font-semibold">{item.quantity}</span>
                                                    <button
                                                        onClick={() => handleQuantity(item.id, 'plus')}
                                                        className="w-8 h-8 flex items-center justify-center bg-white rounded-md text-gray-500 hover:text-slate-900 shadow-sm border border-gray-100"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:w-80 space-y-6">
                            <h3 className="font-bold text-lg">Coupons</h3>

                            {/* Coupon Section */}
                            <div className="border border-gray-200 rounded-2xl p-3 flex justify-between items-center bg-white cursor-pointer hover:border-teal-500 transition-colors">
                                <div className="flex items-center gap-3">
                                    <Tag className="w-5 h-5 text-slate-400" />
                                    <span className="font-semibold text-slate-700">Apply Coupons</span>
                                </div>
                                <span className="text-teal-500 text-sm font-bold uppercase">MAX500</span>
                            </div>

                            {/* Gifting Section */}
                            <h3 className="font-bold text-lg pt-2">Gifting</h3>
                            <div className="bg-indigo-50 rounded-2xl p-5 flex gap-4">
                                <div className="flex-1">
                                    <h4 className="font-bold text-slate-800 text-sm mb-1">Buying for a loved one?</h4>
                                    <p className="text-slate-500 text-xs mb-2">Send personalized message at ₹20</p>
                                    <button className="text-indigo-600 text-xs font-bold font-sans uppercase tracking-wide hover:underline cursor-pointer">Add gift wrap</button>
                                </div>
                                <Gift className="w-12 h-12 text-indigo-400" strokeWidth={1.5} />
                            </div>

                            {/* Price Details */}
                            <h3 className="font-bold text-lg pt-2">Price Details</h3>
                            <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                                <div className="flex justify-between text-sm text-slate-600">
                                    <span>{itemsCountLabel(selectedItemsCount)}</span>
                                    <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-teal-600">
                                    <span>Coupon discount</span>
                                    <span className="font-medium">-₹{discount.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-slate-600 border-b border-gray-200 pb-4">
                                    <span>Delivery Charges</span>
                                    <span className="font-medium text-slate-900">Free Delivery</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold text-slate-900 pt-2">
                                    <span>Total Amount</span>
                                    <span>₹{total.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Place Order Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-slate-900 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all"
                            >
                                <span>Place order</span>
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

// Helper for pluralization
const itemsCountLabel = (count) => {
    return `${count} item${count !== 1 ? 's' : ''}`;
};

export default Cart;
