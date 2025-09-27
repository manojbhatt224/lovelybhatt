'use client';
import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2022 - 2023",
    degree: "Advanced Diploma in Culinary Arts and Supervision",
    institute: "Ishtha Institute of Hospitality & Culinary Arts, Uttarakhand, India",
    desc: "Focused on classical cooking techniques, baking, and kitchen management.",
  },
  {
    year: "2017 - 2020",
    degree: "B.Com.",
    institute: "DSB Campus, Nainital, India",
    desc: "Completed bachelors in commerce with a focus on accounting",
  },
  {
    year: "2017",
    degree: "Intermediate",
    institute: "Shiksha Bharati Senior Secondary School, Uttarakhand, India",
    desc: "Completed my schooling with basic academic education.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="section min-h-screen bg-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
        >
          My <span className="text-orange-600">Education</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
        >
          Continuous learning is essential for a great chef. Here are the educational milestones that shaped my culinary journey.
        </motion.p>

        {/* Education Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-orange-50 p-6 rounded-2xl shadow-md border border-orange-100 hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="text-orange-600 font-bold mb-2">{edu.year}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{edu.degree}</h3>
              <p className="text-gray-700 font-medium mb-2">{edu.institute}</p>
              <p className="text-gray-600 text-sm">{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
