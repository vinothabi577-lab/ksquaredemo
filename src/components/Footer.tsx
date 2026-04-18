"use client";

import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 md:pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">
              <img 
                src="/logo.png" 
                alt="K Square Logo" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full bg-white p-1 shadow-sm"
              />
              <div className="flex flex-col justify-center text-left">
                <span className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">
                  K SQUARE
                </span>
                <span className="text-[10px] md:text-sm font-bold text-yellow-400 tracking-[0.2em] uppercase mt-2 leading-none">
                  FOOD COURT
                </span>
              </div>
            </div>
            <p className="text-gray-500 max-w-md leading-relaxed text-sm md:text-base">
              Puliyangudi's premier food destination offering a blend of traditional tastes and modern ambiance. Join us for an unforgettable culinary journey.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs md:text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-sm md:text-base">Home</a></li>
              <li><a href="#menu" className="text-gray-500 hover:text-purple-400 transition-colors text-sm md:text-base">Our Menu</a></li>
              <li><a href="#gallery" className="text-gray-500 hover:text-purple-400 transition-colors text-sm md:text-base">Gallery</a></li>
              <li><a href="#location" className="text-gray-500 hover:text-purple-400 transition-colors text-sm md:text-base">Location</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs md:text-sm">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.instagram.com/k2foodcourt" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-600 text-[10px] md:text-sm">© 2024 K Square Food Court. All rights reserved.</p>
          <p className="text-gray-600 text-[10px] md:text-sm">Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;