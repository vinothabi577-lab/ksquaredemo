"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const chefs = [
  { name: "Savannah Nguyen", image: "https://images.unsplash.com/photo-1583394293214-28dea15ee548?auto=format&fit=crop&q=80&w=400" },
  { name: "Esther Howard", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400" },
  { name: "Marvin McKinney", image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&q=80&w=400" },
  { name: "Albert Flores", image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&q=80&w=400" },
];

const Chefs = () => {
  return (
    <section className="py-24 bg-[#FEF9F1]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-extrabold text-[#1A1A1A]">Meet Our Chefs</h2>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#F5A623] text-white flex items-center justify-center shadow-lg shadow-orange-200">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="aspect-[3/4] mb-4 overflow-hidden rounded-[2.5rem] shadow-soft">
                <img src={chef.image} alt={chef.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-gray-800">{chef.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;