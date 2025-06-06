"use client";

import React from "react";
import { motion } from "framer-motion";
import TechCard from "../shared/TechCard";

export default function Technologies() {
  const technologies = [
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      description:
        "Strongly typed programming language that builds on JavaScript",
      frameworks: [
        "Node.js",
        "Bun.js",
        "Next.js",
        "React",
        "Express",
        "Nest.js",
        "Vue",
      ],
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      description:
        "Versatile language for web development, data science, and AI",
      frameworks: ["Django", "Flask", "OpenCV", "YOLOv5", "TensorFlow"],
    },
    {
      name: "Flutter/Dart",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      description: "SDK for building natively compiled applications",
      frameworks: ["Dart"],
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      description:
        "Object-oriented programming language for enterprise applications",
      frameworks: ["Spring Boot", "Gradle", "Spigot/PaperMC"],
    },
    {
      name: "Golang",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      description: "Efficient programming language designed for performance",
      frameworks: ["Gin"],
    },
    {
      name: "Godot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg",
      description: "Open source game engine for 2D and 3D game development",
      frameworks: [],
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      description: "Collaborative UI/UX design tool for interface design",
      frameworks: [],
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Section background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-orbitron text-center mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Technologies
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full mx-auto mb-6" />
              <p className="font-calsans text-xl md:text-2xl text-center text-muted-foreground max-w-2xl mx-auto">
                Crafting solutions with cutting-edge tools and frameworks
              </p>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="flex justify-center gap-8 mt-8 mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Enhanced Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TechCard
                  name={tech.name}
                  icon={tech.icon}
                  description={tech.description}
                  frameworks={tech.frameworks}
                  delay={0} // We're handling the animation here
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom accent */}
          <motion.div
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-4" />
              <p className="font-roboto text-sm text-gray-400">
                Always exploring new technologies and frameworks
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
