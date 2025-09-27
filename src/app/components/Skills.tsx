'use client';
import React from "react";
import { motion } from "framer-motion";
import { Utensils, Flame, Coffee, Leaf, Sparkles, Soup } from "lucide-react";

const skills = [
  {
    icon: <Utensils size={40} className="text-orange-600" />,
    title: "Gourmet Cooking",
    desc: "Expert in preparing elegant, restaurant-quality dishes with precision and creativity.",
  },
  {
    icon: <Flame size={40} className="text-orange-600" />,
    title: "Grilling & Roasting",
    desc: "Mastering the art of flavor through perfectly grilled meats, seafood, and vegetables.",
  },
  {
    icon: <Soup size={40} className="text-orange-600" />,
    title: "Soup & Sauces",
    desc: "Crafting rich broths, sauces, and soups that elevate every dish to the next level.",
  },
  {
    icon: <Leaf size={40} className="text-orange-600" />,
    title: "Healthy Cuisine",
    desc: "Designing balanced meals with organic, fresh, and locally sourced ingredients.",
  },
  {
    icon: <Sparkles size={40} className="text-orange-600" />,
    title: "Plating & Presentation",
    desc: "Transforming dishes into visual masterpieces with elegant plating techniques.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section min-h-screen bg-gradient-to-b from-white to-orange-50 py-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
        >
          My <span className="text-orange-600">Culinary Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
        >
          Over the years, I've honed my craft in the kitchen — combining traditional techniques with creative flair to serve unforgettable meals.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 border border-orange-100"
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-600">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
