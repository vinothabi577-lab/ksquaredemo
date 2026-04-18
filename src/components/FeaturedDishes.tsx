"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const dishes = [
  {
    id: 1,
    name: "Classic Italian Pasta",
    price: "₹349",
    desc: "Al dente pasta tossed in our signature slow-cooked tomato basil sauce with premium olive oil.",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=400",
    rating: 5
  },
  {
    id: 2,
    name: "Crispy Golden Fries",
    price: "₹189",
    desc: "Hand-cut premium potatoes, double-fried for the perfect crunch, served with spicy mayo.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400",
    rating: 4
  },
  {
    id: 3,
    name: "Classic Chicken Shawarma",
    price: "₹219",
    desc: "Traditional wood-fired chicken wrap with authentic garlic sauce and pickled vegetables.",
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=400",
    rating: 5
  },
  {
    id: 4,
    name: "Malabar Fish Curry",
    price: "₹459",
    desc: "Authentic coastal spices simmered with fresh catch and coconut milk for a rich experience.",
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80&w=400",
    rating: 5
  }
];

const FeaturedDishes = () => {
  return (
    <section id="menu" className="py-16 md:py-32 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#FDFCF6] to-white" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
          <div>
            <h4 className="text-[#6A0DAD] font-bold uppercase tracking-[0.2em] text-sm mb-3">Our Favorites</h4>
            <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A]">Curated <span className="text-[#F5A623]">Popular</span> Dishes</h2>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full glass border border-gray-100 flex items-center justify-center hover:bg-white hover:shadow-soft transition-all text-gray-400 hover:text-[#6A0DAD]">
              <ChevronLeft size={24} />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#6A0DAD] text-white flex items-center justify-center shadow-premium shadow-purple-100 hover:scale-105 transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-6 rounded-[3rem] shadow-soft hover:shadow-premium transition-all group border border-gray-50/50"
            >
              <div className="relative h-48 md:h-60 mb-8 overflow-hidden rounded-[2.5rem] shadow-md">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star size={12} className="text-[#F5A623] fill-[#F5A623]" />
                  <span className="text-xs font-bold text-[#1A1A1A]">{dish.rating}.0</span>
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-xl md:text-2xl font-extrabold mb-3 text-[#1A1A1A]">{dish.name}</h3>
                <p className="text-gray-500 text-sm mb-8 line-clamp-2 leading-relaxed">
                  {dish.desc}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <span className="text-xl md:text-2xl font-black text-[#6A0DAD]">{dish.price}</span>
                  <button className="bg-[#1A1A1A] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#6A0DAD] transition-all shadow-md group-hover:scale-110">
                    <Star size={16} className="text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;