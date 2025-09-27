'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaFilePdf } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="section min-h-screen flex items-center bg-gradient-to-b from-orange-50 to-white pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        
        {/* ✅ Right Chef Image - goes on top in mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative w-64 h-64 md:w-90 md:h-90 rounded-full overflow-hidden shadow-2xl border-4 border-orange-500">
            <Image
              src="/mypic.jpg"
              alt="Chef cooking"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* ✅ Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Hello, I'm{" "}
            <span className="text-orange-600">Chef Lovely Bhatt</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0 text-lg">
            A passionate culinary artist crafting flavorful dishes with love 🍲.  
            I bring creativity and tradition together — from gourmet plates to homestyle comfort food.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <ScrollLink to="experience" smooth offset={-70} duration={500}>
              <button className="px-8 py-4 bg-white text-yellow-600 border border-yellow-300 rounded-full hover:bg-yellow-50 transition flex items-center justify-center gap-2 font-medium shadow-lg">
                My Culinary Journey
              </button>
            </ScrollLink>
 <motion.a
      href="/mycv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-4 bg-white text-yellow-600 border border-yellow-300 rounded-full hover:bg-yellow-50 transition flex items-center justify-center gap-2 font-medium shadow-lg"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaFilePdf />
      Download CV
    </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
