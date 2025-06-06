"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TopSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

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

  const roles = [
    "Software Engineer",
    "Web Developer",
    "Mobile App Developer",
    "Software Architect",
    "UI/UX Designer",
  ];

  // Slideshow effect for skills
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  // Calculate opacity based on scroll position
  const backgroundOpacity = Math.max(0, 1 - scrollY / 1000);

  // Abstract background shapes data
  const backgroundShapes = [
    {
      id: 1,
      color: "rgba(126, 34, 206, 0.4)",
      size: "70vw",
      x: "10%",
      y: "20%",
    },
    {
      id: 2,
      color: "rgba(29, 78, 216, 0.35)",
      size: "60vw",
      x: "70%",
      y: "10%",
    },
    {
      id: 3,
      color: "rgba(14, 116, 144, 0.3)",
      size: "50vw",
      x: "40%",
      y: "60%",
    },
    {
      id: 4,
      color: "rgba(147, 51, 234, 0.25)",
      size: "40vw",
      x: "80%",
      y: "70%",
    },
    {
      id: 5,
      color: "rgba(59, 130, 246, 0.3)",
      size: "35vw",
      x: "5%",
      y: "70%",
    },
  ];

  return (
    <>
      {/* Fixed Background that extends beyond TopSection */}
      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        style={{ opacity: backgroundOpacity }}
      >
        {/* Static blurred background blobs */}
        <div className="absolute w-[70vw] h-[70vh] rounded-full bg-purple-700/40 blur-[100px] left-[5%] top-[10%]" />
        <div className="absolute w-[60vw] h-[60vh] rounded-full bg-blue-700/40 blur-[90px] left-[20%] top-[15%]" />
        <div className="absolute w-[40vw] h-[40vh] rounded-full bg-cyan-700/40 blur-[70px] left-[55%] top-[25%]" />

        {/* Animated background shapes */}
        {backgroundShapes.map((shape, index) => (
          <motion.div
            key={shape.id}
            className="absolute rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${shape.color} 0%, transparent 70%)`,
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 60, 0],
              scale: [1, 1.2, 0.8, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + index * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 2,
            }}
          />
        ))}

        {/* Floating particles */}
        {Array.from({ length: 15 }).map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated lines */}
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={`line-${index}`}
            className="absolute bg-gradient-to-r from-transparent via-white/10 to-transparent"
            style={{
              width: "300px",
              height: "1px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [
                -300,
                typeof window !== "undefined" ? window.innerWidth + 300 : 1200,
              ],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          />
        ))}

        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
      </div>

      {/* TopSection Content */}
      <section
        ref={sectionRef}
        className="relative h-screen flex items-center justify-center overflow-hidden z-10"
      >
        {/* Content */}
        <div className="container mx-auto px-4 z-10 relative">
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

            {/* Skills Slideshow */}
            <div className="h-16 flex items-center justify-center mb-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentSkillIndex}
                  className="text-2xl md:text-3xl font-calsans absolute"
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {roles[currentSkillIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Skill indicators */}
            <div className="flex justify-center gap-2 mb-8">
              {roles.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentSkillIndex ? "bg-white" : "bg-white/30"
                  }`}
                  animate={{
                    scale: index === currentSkillIndex ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="border-2 border-white/20 rounded-full p-2 backdrop-blur-sm"
            whileHover={{
              scale: 1.1,
              borderColor: "rgba(255,255,255,0.5)",
            }}
          >
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
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
