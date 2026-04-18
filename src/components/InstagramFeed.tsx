"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const posts = [
  { id: 1, img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=400", likes: "1.2k" },
  { id: 2, img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=400", likes: "850" },
  { id: 3, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400", likes: "2.1k" },
  { id: 4, img: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&q=80&w=400", likes: "940" },
];

const InstagramFeed = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-3xl flex items-center justify-center text-white shadow-xl">
              <Instagram size={32} />
            </div>
          </div>
          <h2 className="text-4xl font-black text-[#1A1A1A] mb-2">Join the K2 Community</h2>
          <p className="text-gray-500 font-bold">Follow us @k2foodcourt for daily updates & offers</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/k2foodcourt"
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-lg"
            >
              <img src={post.img} alt="Insta Post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold">
                <div className="flex items-center gap-1"><Heart size={20} fill="white" /> {post.likes}</div>
                <div className="flex items-center gap-1"><MessageCircle size={20} fill="white" /></div>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.instagram.com/k2foodcourt" 
            target="_blank"
            className="inline-block bg-black text-white px-8 py-4 rounded-2xl font-black hover:scale-105 transition-transform"
          >
            VIEW ALL POSTS
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;