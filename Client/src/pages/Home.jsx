import React from 'react';
// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import NewArrivals from '../components/NewArrivals';
import ExclusiveCollection from '../components/ExclusiveCollection';
import FeaturedDeals from '../components/FeaturedDeals';
import BrandLogos from '../components/BrandLogos';
import RecentPosts from '../components/RecentPosts';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans selection:bg-teal-100 selection:text-teal-900">
           
            <Navbar />

            <main>
                <div className="space-y-0">
                    <Hero />
                    <Categories />
                    <NewArrivals />
                    <ExclusiveCollection />
                    <FeaturedDeals />
                    <BrandLogos />
                    <RecentPosts />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
