'use client';
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 top-0 backdrop-blur-sm transition-all ${
        scrolled ? "shadow bg-white/80" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Fancy Logo */}
        <div className="text-2xl font-extrabold text-orange-600 relative">
          <span className="relative inline-block">
            Lovely
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-400 rounded animate-pulse" />
          </span>
          <span className="ml-1 relative inline-block text-gray-800">
            Bhatt
            <span className="absolute -bottom-1 left-1 w-3/4 h-1 bg-orange-200 rounded animate-pulse delay-150" />
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth
              spy
              offset={-70}
              duration={500}
              onSetActive={() => setActive(item.id)}
              className="relative cursor-pointer text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              {item.label}
              {/* Animated underline */}
              <motion.span
                layoutId="underline"
                className={`absolute left-0 -bottom-1 h-1 bg-orange-600 rounded`}
                style={{
                  width: active === item.id ? "100%" : "0%",
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-orange-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-orange-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {NAV_ITEMS.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  smooth
                  spy
                  offset={-70}
                  duration={500}
                  className="cursor-pointer text-gray-700 text-lg hover:text-orange-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
