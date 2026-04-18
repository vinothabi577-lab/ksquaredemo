"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Zap, Baby, Map } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="text-yellow-400" size={32} />,
    title: "Premium Ambiance",
    desc: "Modern interiors designed for a luxurious dining experience."
  },
  {
    icon: <Users className="text-purple-400" size={32} />,
    title: "Family Friendly",
    desc: "Spacious seating arrangements perfect for large families."
  },
  {
    icon: <Zap className="text-yellow-400" size={32} />,
    title: "Fast Service",
    desc: "Quick turnaround time without compromising on quality."
  },
  {
    icon: <Baby className="text-purple-400" size={32} />,
    title: "Play Area",
    desc: "Dedicated safe zone for kids to enjoy while you dine."
  },
  {
    icon: <Map className="text-yellow-400" size={32} />,
    title: "Highway Access",
    desc: "Conveniently located on the main road for travelers."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why <span className="text-yellow-400">K Square</span> is Special
          </motion.h2>
          <p className="text-gray-400 text-lg">
            We don't just serve food; we create experiences that stay with you. 
            Here's why we are Puliyangudi's favorite spot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-purple-600/10 transition-colors group"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;