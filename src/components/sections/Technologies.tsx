"use client";

import React from "react";
import { motion } from "motion/react";
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
    <section className="py-20 bg-gradient-to-b from-transparent to-black/70">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-orbitron text-center mb-4">
            Technologies
          </h2>
          <p className="font-calsans text-xl text-center text-muted-foreground mb-12">
            My technical toolkit
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <TechCard
                key={tech.name}
                name={tech.name}
                icon={tech.icon}
                description={tech.description}
                frameworks={tech.frameworks}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
