import React from 'react';
import { Mail, Phone, HelpCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="mt-20">
            {/* Help Section */}
            <div className="bg-slate-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className="text-xl font-bold text-slate-800 mb-1">We're always here to help</h3>
                            <p className="text-slate-500 text-sm">You can get help by choosing from any of these options</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <HelpCircle className="w-6 h-6 text-teal-500 group-hover:scale-110 transition-transform" />
                                <div>
                                    <p className="text-xs text-slate-400">Help Center</p>
                                    <p className="text-sm font-bold text-slate-700 group-hover:text-teal-600 transition-colors">help.stella.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <Phone className="w-6 h-6 text-teal-500 group-hover:scale-110 transition-transform" />
                                <div>
                                    <p className="text-xs text-slate-400">Phone</p>
                                    <p className="text-sm font-bold text-slate-700 group-hover:text-teal-600 transition-colors">+966 597 014 780</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <Mail className="w-6 h-6 text-teal-500 group-hover:scale-110 transition-transform" />
                                <div>
                                    <p className="text-xs text-slate-400">Email Support</p>
                                    <p className="text-sm font-bold text-slate-700 group-hover:text-teal-600 transition-colors">online@stella.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Links */}
            <div className="bg-white pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                        {/* Brand & App Column */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-2 cursor-pointer mb-6">
                                <span className="text-2xl font-bold tracking-tighter text-teal-500">
                                    <span className="font-serif italic text-3xl">S</span>stella
                                </span>
                            </div>
                            <p className="text-slate-500 text-sm mb-8 leading-relaxed max-w-xs">
                                Your premium destination for fashion, style, and elegance. Shop the latest trends with ease.
                            </p>
                            <div className="flex gap-4">
                                {/* Placeholder App Store Buttons */}
                                <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.3414C17.523 11.9138 20.3705 10.2227 20.5055 10.1477C20.3015 9.42173 19.6455 8.1636 18.2505 8.1636C16.908 8.1636 16.4865 8.97673 15.5355 8.97673C14.5425 8.97673 13.9845 8.1186 12.8355 8.1411C11.391 8.1411 9.897 9.07198 9.0765 10.2782C7.3875 12.7832 8.655 16.5452 10.3245 18.9182C11.1345 20.0762 12.1155 21.4397 13.4355 21.3902C14.7075 21.3407 15.1965 20.5702 16.746 20.5702C18.2715 20.5702 18.6675 21.3902 20.046 21.3407C21.4995 21.2912 22.4205 19.9862 23.2395 18.7757C23.9595 17.7292 24.27 16.9312 24.285 16.8907C24.2385 16.8787 21.8415 15.9547 21.8415 13.1497L17.523 15.3414Z" /></svg>
                                    <div className="text-left">
                                        <p className="text-[10px] leading-3 uppercase text-gray-400">Download on the</p>
                                        <p className="text-sm font-bold leading-3">App Store</p>
                                    </div>
                                </button>
                                <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,25.88L21,17.25L16.81,15.12M21,17.25L6.05,-1.88L16.81,8.88L21,6.75C21.67,7.14 22,7.76 22,8.5V15.5C22,16.24 21.67,16.86 21,17.25M15.14,13.45L4.54,24.05L14.39,14.2L15.14,13.45M4.54,-0.05L15.14,10.55L14.39,9.8L4.54,-0.05Z" /></svg>
                                    <div className="text-left">
                                        <p className="text-[10px] leading-3 uppercase text-gray-400">Get it on</p>
                                        <p className="text-sm font-bold leading-3">Google Play</p>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Links Layout */}
                        <div>
                            <h4 className="font-bold text-slate-800 mb-6">Company</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-slate-500 hover:text-teal-500 text-sm">About Us</a></li>
                                <li><a href="#" className="text-slate-500 hover:text-teal-500 text-sm">Careers</a></li>
                                <li><a href="#" className="text-slate-500 hover:text-teal-500 text-sm">Store Locator</a></li>
                                <li><a href="#" className="text-slate-500 hover:text-teal-500 text-sm">Contact Us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-800 mb-6">Customer Care</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-slate-500 hover:text-teal-500 text-sm">Size Guide</a></li>
                                <li><a href="#" className="text-slate-500 hover:text-teal-500 text-sm">Help & FAQs</a></li>
                                <li><a href="#" className="text-slate-500 hover:text-teal-500 text-sm">Return My Order</a></li>
                                <li><a href="#" className="text-slate-500 hover:text-teal-500 text-sm">Refer a Friend</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-800 mb-6">Terms & Policies</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-slate-500 hover:text-teal-500 text-sm">Duties & Taxes</a></li>
                                <li><a href="#" className="text-slate-500 hover:text-teal-500 text-sm">Shipping Info</a></li>
                                <li><a href="#" className="text-slate-500 hover:text-teal-500 text-sm">Privacy Policy</a></li>
                                <li><a href="#" className="text-slate-500 hover:text-teal-500 text-sm">Terms Conditions</a></li>
                            </ul>
                        </div>

                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-4">
                            <span className="p-2 bg-gray-100 rounded-full hover:bg-teal-50 hover:text-teal-500 cursor-pointer transition-colors"><Facebook className="w-4 h-4" /></span>
                            <span className="p-2 bg-gray-100 rounded-full hover:bg-teal-50 hover:text-teal-500 cursor-pointer transition-colors"><Twitter className="w-4 h-4" /></span>
                            <span className="p-2 bg-gray-100 rounded-full hover:bg-teal-50 hover:text-teal-500 cursor-pointer transition-colors"><Instagram className="w-4 h-4" /></span>
                            <span className="p-2 bg-gray-100 rounded-full hover:bg-teal-50 hover:text-teal-500 cursor-pointer transition-colors"><Linkedin className="w-4 h-4" /></span>
                        </div>
                        <div className="text-slate-400 text-xs text-center md:text-right">
                            <p>&copy; 2026 Stella E-Commerce. All rights reserved.</p>
                        </div>
                        <div className="flex gap-6 text-xs text-slate-500">
                            <a href="#" className="hover:text-slate-800">Privacy Policy</a>
                            <a href="#" className="hover:text-slate-800">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
