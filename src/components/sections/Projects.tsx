"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../shared/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "SnapScore",
      description:
        "An application with both a web version, and downloadable mobile version. It aims to help instructors correct the paper of their students by using Artificial Intelligence to scan and correct those papers.",
      image: "/projects/1.png",
      technologies: [
        "Flutter",
        "Next.js",
        "Nest.js",
        "OpenAI",
        "MongoDB",
        "Vercel",
      ],
      isClientProject: true,
    },
    {
      title: "POS with Back Office",
      description:
        "A completely customized POS application that comes with a back office to control what products to display, along with employee management for shifts, and sales, bills, and profit checking and management.",
      image: "/projects/2.png",
      technologies: ["Flutter", "Next.js", "Nest.js", "PostgreSQL", "Vercel"],
      isClientProject: true,
    },
    {
      title: "Raspberry Pi Fire and Flood Detection System",
      description:
        "A natural disaster detection system that utilizes yolov5 and computer vision to detect fire, with water and rain sensors to detect flood, all deployed on a Raspberry Pi. It comes with a UI accessible to the local network.",
      image: "/projects/4.png",
      technologies: ["Python", "YOLOv5", "PiOS", "Vue.js"],
      isClientProject: true,
    },
    {
      title: "RawMats",
      description: "An online directory to display the products of MSMEs.",
      image: "/projects/3.png",
      technologies: ["Next.js", "PostgreSQL", "Supabase"],
      isClientProject: true,
    },
    {
      title: "DevMatch",
      description:
        "A platform for clients to match with software developers for their online needs.",
      image: "/projects/5.png",
      technologies: ["Firebase", "Supabase Auth", "Next.js"],
      isClientProject: true,
    },
    {
      title: "Photobooth App",
      description:
        "A professional photobooth application featuring collage and flipbook modes. Creates stunning photo collages or transforms video frames into printed flipbooks, with digital copies delivered through a hosted web application.",
      image: "/projects/6.png",
      technologies: [
        "Vite",
        "React",
        "Electron",
        "gphoto2",
        "Neon",
        "PostgreSQL",
        "Next.js",
        "node-printer",
        "ffmpeg",
      ],
      isClientProject: true,
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Section background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black" />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

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
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 px-4 py-2 rounded-full">
                  <span className="text-purple-200 text-sm font-roboto">
                    Client Work
                  </span>
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-orbitron text-center mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full mx-auto mb-6" />
              <p className="font-calsans text-xl md:text-2xl text-center text-muted-foreground max-w-3xl mx-auto">
                Real-world solutions delivered for clients across various
                industries
              </p>
            </motion.div>

            {/* Stats or highlights */}
            <motion.div
              className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-12 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-center">
                <div className="text-2xl font-orbitron text-purple-300 mb-1">
                  {projects.length}+
                </div>
                <div className="text-sm text-gray-400 font-roboto">
                  Client Projects
                </div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-2xl font-orbitron text-cyan-300 mb-1">
                  5+
                </div>
                <div className="text-sm text-gray-400 font-roboto">
                  Tech Stacks
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-orbitron text-blue-300 mb-1">
                  3+
                </div>
                <div className="text-sm text-gray-400 font-roboto">
                  Years Exp
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Project Grid with uniform sizing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -10 }}
                className="group h-full"
              >
                <div className="relative h-full">
                  {/* Glowing background effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    isClientProject={project.isClientProject}
                    delay={0} // We're handling animation here
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
