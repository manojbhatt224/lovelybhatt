'use client';
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025 - Present",
    role: "Commi 2 Chef",
    place: "Princess cruises, USA",
    desc: "Responsible for performing mise en place, assisting the Sous Chef and Chef de Partie, and ensuring efficient kitchen operations while maintaining high culinary standards and consistency across all dishes.",
  },
  {
    year: "2023 - 2024",
    role: "Commi 3 Chef",
    place: "Seazen , Kuwait",
    desc: "Assisted in basic kitchen preparations, handled ingredient organization, supported senior chefs with mise en place, and learned fundamental culinary techniques while maintaining cleanliness and efficiency in the kitchen.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section min-h-screen bg-orange-50 py-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
        >
          My <span className="text-orange-600">Experience</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
        >
          From humble beginnings to leading gourmet kitchens, here is my culinary journey.
        </motion.p>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical line only on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-orange-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row md:items-center justify-between ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="md:w-5/12 bg-white p-6 rounded-2xl shadow-md border border-orange-100 hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-orange-600 font-medium">{exp.place}</p>
                  <p className="text-gray-600 mt-2">{exp.desc}</p>
                </div>

                {/* Year Range Circle */}
                <div className="w-20 h-12 md:w-32 md:h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mt-4 md:mt-0 text-sm md:text-base mx-auto md:mx-0">
                  {exp.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
