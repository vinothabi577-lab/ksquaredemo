"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Find Us in <span className="text-purple-500">Puliyangudi</span></h2>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-purple-600/20 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-1">Address</h4>
                  <p className="text-gray-400 text-sm md:text-base">Sankarankovil Main Road, near Kanna International CBSE School, Puliyangudi, Tamil Nadu 627855</p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-yellow-400/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-yellow-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-1">Contact</h4>
                  <p className="text-gray-400 text-sm md:text-base">+91 98765 43210</p>
                  <p className="text-gray-400 text-sm md:text-base">ksquarefoodcourt@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-purple-600/20 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-1">Opening Hours</h4>
                  <p className="text-gray-400 text-sm md:text-base">Mon - Sun: 11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>

            <motion.a
              href="https://maps.app.goo.gl/VS6AbGQz12WCHSfWA"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 md:mt-12 bg-purple-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-purple-500/20 w-fit"
            >
              <Navigation size={20} />
              Get Directions on Maps
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="h-[300px] md:h-[450px] rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.7031341400244!2d77.4304621745423!3d9.181208990861191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06911dd7f5bbe9%3A0x5eb9acfca5fcd47a!2sK%20Square%20Food%20Court!5e0!3m2!1sen!2sin!4v1744910006328!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;