"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  isClientProject?: boolean;
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  isClientProject = false,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full group"
    >
      <Card className="overflow-hidden h-full flex flex-col bg-black/40 backdrop-blur-sm border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
        {/* Image Container with Overlay */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
          />

          {/* Client Project Badge */}
          {isClientProject && (
            <div className="absolute top-3 left-3 z-10">
              <div className="bg-gradient-to-r from-purple-500/90 to-cyan-500/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20"></div>
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content - using flex-grow to ensure consistent heights */}
        <CardHeader className="pb-3 flex-shrink-0">
          <CardTitle className="font-orbitron text-xl group-hover:text-purple-200 transition-colors duration-300 line-clamp-2">
            {title}
          </CardTitle>
          <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </CardHeader>

        <CardContent className="flex-grow flex flex-col">
          <CardDescription className="font-roboto text-gray-300 mb-4 flex-grow leading-relaxed line-clamp-4">
            {description}
          </CardDescription>

          {/* Technologies */}
          <div className="space-y-3 flex-shrink-0">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: delay + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    variant="outline"
                    className="font-roboto text-xs bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border-purple-500/30 text-purple-200 hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
