'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Coffee, Book, Music, Leaf, Sparkles } from "lucide-react";
import { BsAirplane } from "react-icons/bs";

const hobbies = [
   { icon: <Leaf size={28} className="text-orange-600" />, name: "Creative Cooking" },
  { icon: <Music size={28} className="text-orange-600" />, name: "Listening to Music" },
    { icon: <BsAirplane size={28} className="text-orange-600" />, name: "Solo Travelling" },
  
];

export default function About() {
  return (
    <section
      id="about"
      className="section min-h-screen bg-orange-50 py-20"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Cover Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/mypic2.jpg"
            alt="Chef at work"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Right: About Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            About <span className="text-orange-600">Me</span>
          </h2>
          <p className="text-gray-700 text-lg mb-4">
           I am Chef Lovely Bhatt, someone who turned a lifelong passion for cooking into a rewarding profession. From experimenting with flavors in my home kitchen to leading teams in professional kitchens, I strive to create dishes that delight both the palate and the eyes. Beyond the kitchen, I have an insatiable curiosity for exploring the world and discovering diverse cuisines, learning new techniques and traditions wherever I go. Music is my constant companion—it inspires creativity and sets the rhythm for my culinary adventures. Every dish I craft tells a story, blending my love for food, travel, and music into a unique culinary experience.
                  </p>
          <p className="text-gray-700 text-lg mb-6">
            Over the years, I have worked in top kitchens, experimented with flavors, and honed my skills in plating and presentation.  
            Beyond the kitchen, I love discovering new ingredients and culinary traditions.
          </p>

          {/* Hobbies / Interests */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            My <span className="text-orange-600">Hobbies</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {hobbies.map((hobby, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              >
                {hobby.icon}
                <span className="mt-2 text-gray-700 font-medium">{hobby.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
