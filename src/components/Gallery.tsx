"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  "/images/gallery-1.png",
  "/images/gallery-2.png",
  "/images/gallery-3.png",
  "/images/gallery-4.png",
  "/images/ambience-exterior.png",
  "/images/kids-play-area.jpg"
];

const infiniteImages = [...images, ...images];

const Gallery = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <h4 className="text-[#6A0DAD] font-bold uppercase tracking-[0.2em] text-sm mb-3">Ambience</h4>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A]">Visual <span className="text-[#F5A623]">Treats</span></h2>
        </div>
      </div>

      <div 
        className="relative flex"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-6"
          animate={{
            x: isPaused ? undefined : ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {infiniteImages.map((img, index) => (
            <div
              key={index}
              className="relative w-[300px] md:w-[450px] aspect-[4/3] rounded-[2.5rem] overflow-hidden group shrink-0 shadow-premium"
            >
              <img 
                src={img} 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6A0DAD]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <span className="text-white font-extrabold text-xl">K Square Ambience</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;