"use client";

import React from "react";
import { motion } from "motion/react";
import ProjectCard from "../shared/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "SnapScore",
      description:
        "An application with both a web version, and downloadable mobile version. It aims to help instructors correct the paper of their students by using Artificial Intelligence to scan and correct those papers.",
      image: "https://placehold.co/800x450/3a3a3a/FFFFFF?text=SnapScore",
      technologies: [
        "Flutter",
        "Next.js",
        "Nest.js",
        "OpenAI",
        "MongoDB",
        "Vercel",
      ],
    },
    {
      title: "POS with Back Office",
      description:
        "A completely customized POS application that comes with a back office to control what products to display, along with employee management for shifts, and sales, bills, and profit checking and management.",
      image: "https://placehold.co/800x450/3a3a3a/FFFFFF?text=POS+System",
      technologies: ["Flutter", "Next.js", "Nest.js", "PostgreSQL", "Vercel"],
    },
    {
      title: "Raspberry Pi Fire and Flood Detection System",
      description:
        "A natural disaster detection system that utilizes yolov5 and computer vision to detect fire, with water and rain sensors to detect flood, all deployed on a Raspberry Pi. It comes with a UI accessible to the local network.",
      image: "https://placehold.co/800x450/3a3a3a/FFFFFF?text=Detection+System",
      technologies: ["Python", "YOLOv5", "PiOS", "Vue.js"],
    },
    {
      title: "RawMats",
      description: "An online directory to display the products of MSMEs.",
      image: "https://placehold.co/800x450/3a3a3a/FFFFFF?text=RawMats",
      technologies: ["Next.js", "PostgreSQL", "Supabase"],
    },
    {
      title: "DevMatch",
      description:
        "A platform for clients to match with software developers for their online needs.",
      image: "https://placehold.co/800x450/3a3a3a/FFFFFF?text=DevMatch",
      technologies: ["Firebase", "Supabase Auth", "Next.js"],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-orbitron text-center mb-4">Projects</h2>
          <p className="font-calsans text-xl text-center text-muted-foreground">
            Portfolio of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
