"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Reservation = () => {
  return (
    <section className="py-16 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-purple-50 rounded-full blur-[120px] -z-10 opacity-60" />
      
      <div className="container mx-auto px-6">
        <div className="glass rounded-[2rem] md:rounded-[4rem] p-8 md:p-24 shadow-premium flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative overflow-hidden border border-white/50">
          <div className="flex-1 z-10 text-center lg:text-left">
            <h4 className="text-[#6A0DAD] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">Reservations</h4>
            <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] mb-8 leading-[1.1] tracking-tighter">
              Planning Your <br />
              Next <span className="text-[#F5A623]">Celebration?</span>
            </h2>
            <p className="text-gray-500 mb-10 max-w-lg mx-auto lg:mx-0 text-base md:text-lg leading-relaxed font-medium">
              Secure your table now and indulge in an unforgettable culinary experience paired with Puliyangudi's best ambiance.
            </p>
            <button className="bg-[#6A0DAD] text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-black text-base md:text-lg hover:bg-[#520a85] transition-all shadow-premium shadow-purple-100">
              Book Your Table
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="w-full aspect-square max-w-[500px] mx-auto bg-white rounded-full shadow-premium border-[20px] border-white overflow-hidden">
              <img 
                src="/images/reservation-hero.png" 
                alt="Premium Dining Experience" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-10x0/30 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;