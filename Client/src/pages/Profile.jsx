import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Package, MapPin, CreditCard, LogOut, Settings, Camera, Mail, Phone, Calendar, Plus, Edit2, Trash2, Lock, Bell, Check, Shield, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isAddingAddress, setIsAddingAddress] = useState(false);
    const [editingAddressId, setEditingAddressId] = useState(null);
    const [isAddingCard, setIsAddingCard] = useState(false);

    // Mock User Data
    const user = {
        name: "Abdel Rahman",
        email: "abdel.rahman@example.com",
        phone: "+1 (555) 123-4567",
        joinDate: "September 2023",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop"
    };

    // Mock Orders
    const orders = [
        { id: "#ORD-7752", date: "Oct 24, 2024", status: "Delivered", total: 450.00, items: 3 },
        { id: "#ORD-7751", date: "Oct 10, 2024", status: "Processing", total: 120.50, items: 1 },
        { id: "#ORD-7750", date: "Sep 28, 2024", status: "Cancelled", total: 85.00, items: 2 },
    ];

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: User },
        { id: 'orders', label: 'My Orders', icon: Package },
        { id: 'addresses', label: 'Addresses', icon: MapPin },
        { id: 'payment', label: 'Payment Methods', icon: CreditCard },
        { id: 'settings', label: 'Account Settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12">

                    {/* Sidebar Navigation */}
                    <aside className="w-full md:w-64 lg:w-72 shrink-0 space-y-8">
                        {/* User Card - Mobile view often simplified, but keeping standard for now */}
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-gray-100">
                            <div className="relative">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute bottom-0 right-0 bg-teal-500 rounded-full p-1 border-2 border-white">
                                    <Camera className="w-3 h-3 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">{user.name}</h3>
                                <p className="text-xs text-slate-500">Gold Member</p>
                            </div>
                        </div>

                        {/* Menu */}
                        <nav className="space-y-1">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id
                                        ? 'bg-slate-900 text-white font-medium shadow-md shadow-slate-200'
                                        : 'text-slate-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                            <div className="pt-4 mt-4 border-t border-gray-100">
                                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-rose-500 hover:bg-rose-50 transition-all font-medium">
                                    <LogOut className="w-5 h-5" />
                                    <span>Sign Out</span>
                                </button>
                            </div>
                        </nav>
                    </aside>

                    {/* Main Content Area */}
                    <div className="flex-1">
                        {activeTab === 'dashboard' && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                                <div>
                                    <h1 className="text-2xl font-bold text-slate-900 mb-1">My Dashboard</h1>
                                    <p className="text-slate-500">Welcome back, {user.name}!</p>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-orange-500 mb-4 shadow-sm">
                                            <Package className="w-5 h-5" />
                                        </div>
                                        <div className="text-2xl font-bold text-slate-900">12</div>
                                        <div className="text-sm text-slate-500">Total Orders</div>
                                    </div>
                                    <div className="bg-teal-50 p-6 rounded-3xl border border-teal-100">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-500 mb-4 shadow-sm">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div className="text-2xl font-bold text-slate-900">3</div>
                                        <div className="text-sm text-slate-500">Saved Addresses</div>
                                    </div>
                                    <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-500 mb-4 shadow-sm">
                                            <CreditCard className="w-5 h-5" />
                                        </div>
                                        <div className="text-2xl font-bold text-slate-900">2</div>
                                        <div className="text-sm text-slate-500">Saved Cards</div>
                                    </div>
                                </div>

                                {/* Personal Information */}
                                <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-lg font-bold text-slate-900">Personal Information</h2>
                                        <button className="text-teal-600 text-sm font-bold hover:underline">Edit</button>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                                            <div className="font-medium text-slate-900 flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                                                    <User className="w-4 h-4 text-gray-400" />
                                                </div>
                                                {user.name}
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                                            <div className="font-medium text-slate-900 flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                                                    <Mail className="w-4 h-4 text-gray-400" />
                                                </div>
                                                {user.email}
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone Number</label>
                                            <div className="font-medium text-slate-900 flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                                                    <Phone className="w-4 h-4 text-gray-400" />
                                                </div>
                                                {user.phone}
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Join Date</label>
                                            <div className="font-medium text-slate-900 flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                                                    <Calendar className="w-4 h-4 text-gray-400" />
                                                </div>
                                                {user.joinDate}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'orders' && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                <h1 className="text-2xl font-bold text-slate-900 mb-6">Order History</h1>
                                <div className="space-y-4">
                                    {orders.map((order) => (
                                        <div key={order.id} className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col md:flex-row justify-between items-center gap-4 hover:shadow-md transition-shadow">
                                            <div className="flex items-center gap-6">
                                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-slate-900">
                                                    <Package className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900">{order.id}</p>
                                                    <p className="text-sm text-slate-500">{order.items} items • {order.date}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                                    order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                                                        'bg-red-100 text-red-700'
                                                    }`}>
                                                    {order.status}
                                                </span>
                                                <span className="font-bold text-slate-900 w-20 text-right">₹{order.total}</span>
                                                <button className="text-sm font-bold text-teal-600 hover:text-teal-700">View</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'addresses' && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h1 className="text-2xl font-bold text-slate-900">Saved Addresses</h1>
                                    <button
                                        onClick={() => setIsAddingAddress(!isAddingAddress)}
                                        className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
                                    >
                                        {isAddingAddress ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        {isAddingAddress ? "Cancel" : "Add New Address"}
                                    </button>
                                </div>

                                {isAddingAddress && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="bg-gray-50 p-6 rounded-3xl border border-gray-200 mb-6">
                                        <h3 className="font-bold text-lg text-slate-900 mb-4">Add New Address</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input type="text" placeholder="Full Name" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors" />
                                            <input type="text" placeholder="Phone Number" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors" />
                                            <input type="text" placeholder="Street Address" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors md:col-span-2" />
                                            <input type="text" placeholder="City" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors" />
                                            <div className="flex gap-4">
                                                <input type="text" placeholder="State" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors" />
                                                <input type="text" placeholder="PIN" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors" />
                                            </div>
                                        </div>
                                        <button className="mt-4 bg-teal-500 text-white font-bold py-3 px-8 rounded-xl hover:bg-teal-600 transition-colors shadow-lg shadow-teal-100">
                                            Save Address
                                        </button>
                                    </motion.div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[1, 2].map((addr, idx) => (
                                        <div key={idx} className={`border rounded-3xl p-6 relative transition-all group bg-white ${editingAddressId === idx ? 'border-teal-500 ring-2 ring-teal-500/10' : 'border-gray-200 hover:border-teal-500'}`}>
                                            {editingAddressId === idx ? (
                                                <div className="space-y-4">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <h3 className="font-bold text-slate-900">Edit Address</h3>
                                                        <button onClick={() => setEditingAddressId(null)} className="text-gray-400 hover:text-slate-900"><X className="w-5 h-5" /></button>
                                                    </div>
                                                    <input type="text" defaultValue="Abdel Rahman" className="w-full bg-gray-50 border border-transparent rounded-xl px-3 py-2 text-sm focus:bg-white focus:border-teal-500 transition-colors" />
                                                    <input type="text" defaultValue="123 Fashion Street, Urban District" className="w-full bg-gray-50 border border-transparent rounded-xl px-3 py-2 text-sm focus:bg-white focus:border-teal-500 transition-colors" />
                                                    <div className="grid grid-cols-2 gap-3">
                                                        <input type="text" defaultValue="New York" className="w-full bg-gray-50 border border-transparent rounded-xl px-3 py-2 text-sm focus:bg-white focus:border-teal-500 transition-colors" />
                                                        <input type="text" defaultValue="10001" className="w-full bg-gray-50 border border-transparent rounded-xl px-3 py-2 text-sm focus:bg-white focus:border-teal-500 transition-colors" />
                                                    </div>
                                                    <button
                                                        onClick={() => setEditingAddressId(null)}
                                                        className="w-full bg-slate-900 text-white font-bold py-2.5 rounded-xl text-sm hover:bg-slate-800 transition-colors"
                                                    >
                                                        Save Changes
                                                    </button>
                                                </div>
                                            ) : (
                                                <>
                                                    {idx === 0 && (
                                                        <span className="absolute top-6 right-6 bg-teal-50 text-teal-600 text-xs font-bold px-2 py-1 rounded-md">
                                                            Default
                                                        </span>
                                                    )}
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                                                            <MapPin className="w-5 h-5 text-slate-600" />
                                                        </div>
                                                        <h3 className="font-bold text-slate-900">{idx === 0 ? "Home" : "Office"}</h3>
                                                    </div>
                                                    <div className="text-sm text-slate-500 space-y-1 mb-6">
                                                        <p className="font-medium text-slate-900">Abdel Rahman</p>
                                                        <p>123 Fashion Street, Urban District</p>
                                                        <p>New York, NY 10001</p>
                                                        <p>United States</p>
                                                        <p className="mt-2 text-slate-400">+1 (555) 123-4567</p>
                                                    </div>
                                                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                                                        <button onClick={() => setEditingAddressId(idx)} className="flex-1 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-gray-50 rounded-lg transition-colors">Edit</button>
                                                        <button className="flex-1 py-2 text-sm font-bold text-rose-500 hover:bg-rose-50 rounded-lg transition-colors">Remove</button>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'payment' && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h1 className="text-2xl font-bold text-slate-900">Payment Methods</h1>
                                    <button
                                        onClick={() => setIsAddingCard(!isAddingCard)}
                                        className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
                                    >
                                        {isAddingCard ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        {isAddingCard ? "Cancel" : "Add New Card"}
                                    </button>
                                </div>

                                {isAddingCard && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="bg-gray-50 p-6 rounded-3xl border border-gray-200 mb-6">
                                        <h3 className="font-bold text-lg text-slate-900 mb-4">Add New Card</h3>
                                        <div className="flex flex-col gap-4">
                                            <div className="relative">
                                                <CreditCard className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                                <input type="text" placeholder="Card Number" className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-teal-500 transition-colors font-mono" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <input type="text" placeholder="MM/YY" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors" />
                                                <input type="text" placeholder="CVC" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors" />
                                            </div>
                                            <input type="text" placeholder="Card Holder Name" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors" />
                                        </div>
                                        <button className="mt-4 bg-teal-500 text-white font-bold py-3 px-8 rounded-xl hover:bg-teal-600 transition-colors shadow-lg shadow-teal-100">
                                            Save Card
                                        </button>
                                    </motion.div>
                                )}

                                <div className="space-y-4">
                                    <div className="bg-slate-900 text-white rounded-3xl p-8 max-w-md relative overflow-hidden shadow-xl shadow-slate-200 transform transition-transform hover:scale-[1.02]">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                        <div className="relative z-10">
                                            <div className="flex justify-between items-start mb-8">
                                                <CreditCard className="w-8 h-8 text-teal-400" />
                                                <span className="font-mono text-lg tracking-widest text-white/50">VISA</span>
                                            </div>
                                            <div className="font-mono text-2xl tracking-widest mb-8 text-shadow">
                                                •••• •••• •••• 4242
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Card Holder</p>
                                                    <p className="font-bold tracking-wide">ABDEL RAHMAN</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Expires</p>
                                                    <p className="font-bold tracking-wide">12/25</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-gray-200 rounded-2xl p-4 flex items-center justify-between bg-white max-w-md hover:border-teal-500 transition-colors group cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-8 bg-gray-100 rounded-md flex items-center justify-center">
                                                <div className="w-4 h-4 rounded-full bg-orange-500/80 -mr-2"></div>
                                                <div className="w-4 h-4 rounded-full bg-yellow-500/80"></div>
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 text-sm">Mastercard ending in 8899</p>
                                                <p className="text-xs text-slate-500">Expires 09/24</p>
                                            </div>
                                        </div>
                                        <button className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'settings' && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                                <div>
                                    <h1 className="text-2xl font-bold text-slate-900 mb-1">Account Settings</h1>
                                    <p className="text-slate-500">Manage your account preferences</p>
                                </div>

                                <div className="space-y-6">
                                    {/* Notifications */}
                                    <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                                                <Bell className="w-5 h-5" />
                                            </div>
                                            <h3 className="font-bold text-lg text-slate-900">Notifications</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between py-2">
                                                <div>
                                                    <p className="font-medium text-slate-900">Order Updates</p>
                                                    <p className="text-sm text-slate-500">Receive updates about your order status</p>
                                                </div>
                                                <div className="w-11 h-6 bg-slate-900 rounded-full relative cursor-pointer">
                                                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between py-2 border-t border-gray-50">
                                                <div>
                                                    <p className="font-medium text-slate-900">Promotions</p>
                                                    <p className="text-sm text-slate-500">Receive emails about new items and sales</p>
                                                </div>
                                                <div className="w-11 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Security */}
                                    <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-teal-50 text-teal-600 rounded-xl">
                                                <Shield className="w-5 h-5" />
                                            </div>
                                            <h3 className="font-bold text-lg text-slate-900">Security</h3>
                                        </div>
                                        <div className="space-y-4 max-w-md">
                                            <div>
                                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Current Password</label>
                                                <input type="password" value="********" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500" readOnly />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">New Password</label>
                                                    <input type="password" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500" placeholder="••••••••" />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Confirm</label>
                                                    <input type="password" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500" placeholder="••••••••" />
                                                </div>
                                            </div>
                                            <button className="mt-2 bg-slate-900 text-white font-bold py-3 px-6 rounded-xl text-sm hover:bg-slate-800 transition-colors">
                                                Update Password
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Profile;
