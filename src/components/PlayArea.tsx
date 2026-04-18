"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Baby, Gamepad2, Target, Trophy } from 'lucide-react';

const activities = [
  { icon: <Baby size={24} />, title: "Safe Play Zone", desc: "Soft flooring and child-safe equipment for toddlers." },
  { icon: <Gamepad2 size={24} />, title: "Gaming Hub", desc: "Modern indoor games and interactive play stations." },
  { icon: <Target size={24} />, title: "Archery", desc: "Fun and safe archery setup for older kids." },
  { icon: <Trophy size={24} />, title: "Indoor Cricket", desc: "Dedicated space for mini-cricket matches." },
];

const PlayArea = () => {
  return (
    <section id="play-area" className="py-16 md:py-24 bg-[#FDFCF6]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white">
              <img 
                src="/images/kids-play-area.jpg" 
                alt="K Square Kids Play Area" 
                className="w-full h-56 sm:h-64 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-yellow-400 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl rotate-3">
              <p className="font-black text-white text-sm md:text-xl uppercase">Safe & Fun</p>
            </div>
          </motion.div>

          <div>
            <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] mb-6 leading-tight">
              Fun for the <span className="text-purple-600">Little Ones</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              While you enjoy our premium dining, let your kids explore our dedicated play zone. From soft play areas to indoor cricket and archery, we have something for every child.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activities.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayArea;