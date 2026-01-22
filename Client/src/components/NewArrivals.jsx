import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Classic Striped Shirt',
        brand: 'Product',
        price: 40.00,
        image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        stock: true
    },
    {
        id: 2,
        name: 'Elegance White Dress',
        brand: 'Product',
        price: 40.00,
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        stock: true
    },
    {
        id: 3,
        name: '4 Button Blazer',
        brand: 'Product',
        price: 40.00,
        image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        stock: true
    },
    {
        id: 4,
        name: 'Varsity Jacket',
        brand: 'Product',
        price: 40.00,
        image: 'https://images.unsplash.com/photo-1550614000-4b9519e02a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        stock: true
    },
];

const NewArrivals = () => {
    const navigate = useNavigate();

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-3xl font-bold text-slate-800 tracking-tight">New Arrivals</h2>
                    <a href="#" className="text-teal-500 font-medium hover:text-teal-700 transition-colors">See All</a>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => navigate('/product')}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5] mb-4">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="bg-white p-2 rounded-full shadow-lg text-slate-800 hover:text-teal-500">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-xs text-rose-500 font-bold uppercase tracking-wider mb-1">{product.brand}</p>
                                    <h3 className="text-lg font-semibold text-slate-800 group-hover:text-teal-600 transition-colors">{product.name}</h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold text-slate-900">₹{product.price.toFixed(2)}</p>
                                    {product.stock && <p className="text-xs text-teal-600 font-medium">Stock Available</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default NewArrivals;
