"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#location' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className={`container mx-auto px-6 transition-all duration-500 ${isScrolled ? 'max-w-6xl' : 'max-w-full'}`}>
        <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'glass px-8 py-3 rounded-[2.5rem] shadow-premium shadow-gray-200/20' : 'bg-transparent'}`}>
          <div className="flex items-center gap-5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6A0DAD] to-[#F5A623] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="/logo.png" 
                alt="K Square Logo" 
                className={`relative transition-all duration-500 ${isScrolled ? 'h-10 w-10' : 'h-14 w-14'} object-contain rounded-full shadow-sm bg-white p-0.5`}
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className={`font-black tracking-tight text-[#1A1A1A] leading-none transition-all duration-500 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>K SQUARE</span>
              <span className="text-[10px] font-black text-[#F5A623] tracking-[0.3em] uppercase mt-1 leading-none">FOOD COURT</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-500 hover:text-[#6A0DAD] transition-all font-extrabold text-sm uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6A0DAD] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a 
              href="https://www.instagram.com/k2foodcourt" 
              target="_blank" 
              className="w-10 h-10 bg-white glass flex items-center justify-center text-[#ee2a7b] rounded-full hover:scale-110 transition-transform shadow-sm border border-gray-100"
            >
              <Instagram size={18} />
            </a>
            <button className={`${isScrolled ? 'bg-[#1A1A1A] text-white' : 'bg-[#6A0DAD] text-white'} px-8 py-3 rounded-full font-black text-sm transition-all hover:scale-105 shadow-lg shadow-purple-100/20`}>
              Visit K2
            </button>
          </div>

          <button 
            className="md:hidden w-12 h-12 bg-white glass rounded-full flex items-center justify-center text-gray-800 shadow-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute top-24 left-6 right-6 glass p-10 md:hidden shadow-premium rounded-[3rem] border border-white/50"
        >
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black text-[#1A1A1A] hover:text-[#6A0DAD] transition-colors">
                {link.name}
              </a>
            ))}
            <div className="h-px bg-gray-100 my-4" />
            <button className="w-full bg-[#6A0DAD] text-white py-5 rounded-[2rem] font-black text-lg shadow-premium shadow-purple-100">
              Explore Our Space
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;