"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FDFCF6]">
      {/* Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-100/50 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-100/50 rounded-full blur-[100px] animate-pulse" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white glass shadow-soft text-[#6A0DAD] font-bold text-sm mb-8 border border-purple-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
            </span>
            Puliyangudi's Premier Food Spot
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-[#1A1A1A] leading-[0.9] mb-8 tracking-tighter">
            Where Taste <br />
            Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A0DAD] to-[#F5A623]">Experience</span>
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-medium">
            Experience the perfect blend of premium ambiance and heart-warming flavors at K Square Food Court. A journey for your senses.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <button className="bg-[#6A0DAD] text-white px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-premium shadow-purple-200">
              Explore Our Menu
            </button>
            <a 
              href="https://www.instagram.com/k2foodcourt" 
              target="_blank"
              className="flex items-center gap-2 text-gray-700 font-bold px-8 py-5 hover:bg-white glass shadow-soft rounded-full transition-all border border-gray-100"
            >
              <Instagram size={20} className="text-[#ee2a7b]" />
              Follow Our Story
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
            {/* Main Circular Image Container */}
            <div className="absolute inset-0 bg-white rounded-full shadow-premium overflow-hidden border-[16px] border-white">
              <img 
                src="/images/hero-biryani.png" 
                alt="K2 Special Biryani" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Best Seller Badge (Right) */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -right-6 md:-right-16 top-[20%] bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-[2rem] md:rounded-[2.5rem] shadow-premium flex items-center gap-4 md:gap-5 z-20 border border-white"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center text-xl md:text-2xl font-black text-white">
                K2
              </div>
              <div>
                <p className="text-[10px] md:text-[12px] font-bold text-[#F5A623] uppercase tracking-[0.2em] mb-1">Authentic</p>
                <p className="font-extrabold text-sm md:text-xl text-[#1A1A1A]">Dum Biryani</p>
              </div>
            </motion.div>

            {/* Refreshing Badge (Left) */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute -left-6 md:-left-20 bottom-[15%] bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-[2rem] md:rounded-[2.5rem] shadow-premium flex items-center gap-4 md:gap-5 z-20 border border-white"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-xl md:text-2xl font-black text-white">
                K2
              </div>
              <div>
                <p className="text-[10px] md:text-[12px] font-bold text-purple-500 uppercase tracking-[0.2em] mb-1">Fusion</p>
                <p className="font-extrabold text-sm md:text-xl text-[#1A1A1A]">Cold Shakes</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;