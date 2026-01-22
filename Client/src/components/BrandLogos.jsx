import React from 'react';

const brands = [
    'Nike', 'Adidas', 'Puma', 'Zara', 'H&M', 'Hermes', 'Uniqlo', 'Gucci'
];

const BrandLogos = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-xl font-bold text-slate-800">Shop by Brands</h2>
                    <a href="#" className="text-teal-500 text-sm font-medium hover:text-teal-700 transition-colors">See All</a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {brands.map((brand) => (
                        <div key={brand} className="h-20 border border-gray-100 rounded-xl flex items-center justify-center hover:shadow-lg hover:border-transparent transition-all cursor-pointer bg-white">
                            <span className="font-bold text-slate-400 hover:text-slate-800 text-lg">{brand}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandLogos;
