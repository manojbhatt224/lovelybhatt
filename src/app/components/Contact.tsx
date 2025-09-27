'use client';
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Instagram, Facebook } from "lucide-react";

const contacts = [
  {
    icon: <Phone size={28} className="text-orange-600" />,
    label: "Phone",
    value: "+918755256653",
    link: "tel:+918755256653",
  },
  {
    icon: <Mail size={28} className="text-orange-600" />,
    label: "Email",
    value: "loveebhatt91@gmail.com",
    link: "mailto:loveebhatt91@gmail.com",
  },
  {
    icon: <Linkedin size={28} className="text-orange-600" />,
    label: "LinkedIn",
    value: "Lovely Bhatt",
    link: "https://www.linkedin.com/in/lovely-bhatt-995660235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    icon: <Instagram size={28} className="text-orange-600" />,
    label: "Instagram",
    value: "@Loveebhatt91",
    link: "https://www.instagram.com/loveebhatt91?igsh=d2w2NmZ5eTY0Zm02",
  },
  {
    icon: <Facebook size={28} className="text-orange-600" />,
    label: "Facebook",
    value: "Lovely Bhatt",
    link: "https://www.facebook.com/share/1ADh1v6Bc8/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
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
          Get in <span className="text-orange-600">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
        >
          You can reach me through any of the following channels.  
          I love connecting with fellow food enthusiasts and potential clients!
        </motion.p>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {contacts.map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center p-6 bg-orange-50 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer border border-orange-100"
            >
              <div className="mb-3">{contact.icon}</div>
              <span className="text-gray-700 font-semibold">{contact.label}</span>
              <span className="text-gray-600 text-sm mt-1">{contact.value}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
