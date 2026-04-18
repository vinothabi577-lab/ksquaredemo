"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const categories = ["Special Foods", "Mexican", "Italian", "Japanese", "Drinks", "Lunch"];

const menuItems = [
  { name: "Pasta", price: "$35.00", image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=400" },
  { name: "French Fries", price: "$55.00", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400" },
  { name: "Chicken Shawarma", price: "$35.00", image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=400" },
  { name: "Fish Curry", price: "$35.00", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80&w=400" },
  { name: "Pasta", price: "$35.00", image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=400" },
  { name: "French Fries", price: "$55.00", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400" },
  { name: "Chicken Shawarma", price: "$35.00", image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=400" },
  { name: "Fish Curry", price: "$35.00", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80&w=400" },
];

const MenuPack = () => {
  const [activeTab, setActiveTab] = useState("Italian");

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-8">Our Regular Menu Pack</h2>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all ${activeTab === cat ? 'bg-[#F5A623] text-white shadow-lg shadow-orange-200' : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-5 rounded-[2rem] shadow-soft hover:shadow-md transition-all border border-gray-50"
            >
              <div className="h-40 mb-4 overflow-hidden rounded-2xl">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">{item.name}</h3>
                <div className="flex justify-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-[#F5A623] fill-[#F5A623]" />)}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold">{item.price}</span>
                  <button className="bg-[#F5A623] text-white px-3 py-1.5 rounded-full text-[10px] font-bold">
                    Add To Cart
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

export default MenuPack;