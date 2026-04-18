"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Clock, ShieldCheck, Users, Calendar, ChefHat } from 'lucide-react';

const services = [
  { icon: <Smartphone size={22} />, title: "Digital Convenience", desc: "Easy online browsing and mobile-first experience." },
  { icon: <Calendar size={22} />, title: "Seamless Booking", desc: "Reserve your spot for special occasions instantly." },
  { icon: <Clock size={22} />, title: "Extended Hours", desc: "Late-night cravings satisfied with our flexible timing." },
  { icon: <ChefHat size={22} />, title: "Master Chefs", desc: "Culinary experts bringing global flavors to your plate." },
  { icon: <ShieldCheck size={22} />, title: "Hygiene First", desc: "Highest standards of cleanliness in our open kitchens." },
  { icon: <Users size={22} />, title: "Vibrant Community", desc: "A perfectly organized space for families and friends." },
];

const Services = () => {
  return (
    <section className="py-16 md:py-32 bg-[#FDFCF6]/50">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative w-full aspect-square max-w-[550px] mx-auto">
            <div className="absolute inset-0 bg-white rounded-[4rem] shadow-premium overflow-hidden border-[12px] md:border-[20px] border-white">
              <img 
                src="/images/culinary-team.png" 
                alt="Our Culinary Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6A0DAD]/20 to-transparent" />
            </div>
            
            {/* Visual Accents */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-50 -z-10" />
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <h4 className="text-[#6A0DAD] font-black uppercase tracking-[0.3em] text-xs mb-4">Why K Square</h4>
          <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] mb-6 leading-tight">
            Elevating Your <br />
            <span className="text-[#F5A623]">Dining Experience</span>
          </h2>
          <p className="text-gray-500 text-lg mb-12 leading-relaxed max-w-xl">
            We're more than just a food court; we're a lifestyle destination. From hand-crafted delicacies to a premium ambiance, every detail is designed for your comfort.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-soft flex items-center justify-center text-[#6A0DAD] border border-white group-hover:bg-[#6A0DAD] group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#1A1A1A] mb-1 group-hover:text-[#6A0DAD] transition-colors">{service.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="mt-16 bg-[#1A1A1A] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-[#6A0DAD] transition-all shadow-premium shadow-gray-200">
            Learn Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;