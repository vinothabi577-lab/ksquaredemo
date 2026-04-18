"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const MobileCTA = () => {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-6 left-6 right-6 z-40 md:hidden"
    >
      <button className="w-full bg-purple-600 text-white py-4 rounded-2xl font-bold shadow-2xl shadow-purple-500/40 flex items-center justify-center gap-3 border border-purple-400/30">
        <MapPin size={20} className="text-yellow-400" />
        VISIT K SQUARE TODAY
      </button>
    </motion.div>
  );
};

export default MobileCTA;