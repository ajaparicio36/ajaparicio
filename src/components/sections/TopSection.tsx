"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
// Removed the StaticBackground import as it's now handled at the page level

export default function TopSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position for background opacity calculation
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate background opacity - fade out as user scrolls down
  const backgroundOpacity = Math.max(0, 1 - scrollY / 500);

  const roles = [
    "Software Engineer",
    "Web Developer",
    "Mobile App Developer",
    "Software Architect",
    "UI/UX Designer",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Removed duplicate StaticBackground component */}

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-orbitron font-bold mb-6"
            animate={{
              textShadow: [
                "0 0 10px rgba(255,255,255,0.2)",
                "0 0 20px rgba(255,255,255,0.4)",
                "0 0 10px rgba(255,255,255,0.2)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Anthony John Aparicio
          </motion.h1>

          <div className="flex flex-col gap-3 items-center">
            {roles.map((role, index) => (
              <motion.p
                key={index}
                className="text-xl md:text-2xl font-calsans"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              >
                {role}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="border-2 border-white/20 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
