"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Preethi Kumar",
    text: "My friend referred this food court. I went with my family members. All dishes are very tasty. I've seen few reviews regarding poor service. I don't agree with that becaz they prepare freshly which take around few mts . Ambience was great . Newly opened heritage dining can't be explained in words just felt as if in different world. My advise is to visit this place & enjoy .",
    rating: 5,
    color: "bg-pink-100 text-pink-600"
  },
  {
    name: "Jegadev Roshan A.R.",
    text: "Had a great dining experience at K Square Food Court. The food was tasty, fresh, and well prepared, but what really stood out was the service. The server was polite, attentive, and made sure everything was taken care of without us having to ask twice. The atmosphere was pleasant and the overall experience felt comfortable and welcoming.",
    rating: 5,
    color: "bg-purple-100 text-purple-600"
  },
  {
    name: "Vishal",
    text: "Excellent service by the whole team. The manager helped me out to charge my EV by providing a junction box while we had our dinner. Food tastes amazing and great atmosphere. Highly recommended 👌",
    rating: 5,
    color: "bg-orange-100 text-orange-600"
  },
  {
    name: "Prabhakaran.S",
    text: "Amazing dine out in a serene environment near puliangdui. Excellent place to hangout with friends and family. It has an amazing play area for kids with all the fun games including archery, indoor cricket etc.",
    rating: 5,
    color: "bg-green-100 text-green-600"
  },
  {
    name: "Prakash Kanna",
    text: "Plenty of Dining options available - Heritage Dining, Arab Dining, Garden Dining & Skyview Dining. You never get bored. Food was delicious. Quality of food was excellent. Indoor & outdoor play area for kids. Good music system. Best place to relax your mind & fill your stomach.",
    rating: 5,
    color: "bg-blue-100 text-blue-600"
  }
];

// Duplicate reviews for seamless infinite scroll
const infiniteReviews = [...reviews, ...reviews];

const Reviews = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-4xl font-black text-[#1A1A1A] mb-2">What Our Guests Say</h2>
          <p className="text-gray-500 font-medium">Real experiences from our valued customers</p>
        </div>
      </div>

      <div 
        className="relative flex"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-8"
          animate={{
            x: isPaused ? undefined : ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {infiniteReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-purple-50 flex flex-col w-[350px] md:w-[450px] shrink-0"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-[#F5A623] fill-[#F5A623]" />
                ))}
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-8 italic flex-grow">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg ${review.color}`}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <span className="block font-black text-sm text-[#1A1A1A]">{review.name}</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Verified Customer</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;