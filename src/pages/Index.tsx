"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedDishes from '@/components/FeaturedDishes';
import Services from '@/components/Services';
import PlayArea from '@/components/PlayArea';
import MenuPack from '@/components/MenuPack';
import InstagramFeed from '@/components/InstagramFeed';
import Reservation from '@/components/Reservation';
import Reviews from '@/components/Reviews';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Footer from '@/components/Footer';


const Index = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-[#6A0DAD] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedDishes />
        <Services />
        <PlayArea />
        <Gallery />
        <MenuPack />
        <InstagramFeed />
        <Reservation />
        <Reviews />
        <Location />
      </main>
      <Footer />

    </div>
  );
};

export default Index;