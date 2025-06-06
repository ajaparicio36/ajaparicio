"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface TechCardProps {
  name: string;
  icon: string;
  description: string;
  frameworks?: string[];
  delay?: number;
}

export default function TechCard({
  name,
  icon,
  description,
  frameworks,
  delay = 0,
}: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative h-full"
    >
      {/* Glowing background effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full flex flex-col">
        {/* Header with icon and name */}
        <div className="flex items-center gap-4 mb-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <motion.div
                  className="relative w-12 h-12 p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <Image
                    src={icon}
                    alt={`${name} logo`}
                    fill
                    className="object-contain p-1"
                  />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex-1">
            <h3 className="font-orbitron text-xl group-hover:text-purple-200 transition-colors duration-300">
              {name}
            </h3>
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mt-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
        </div>

        {/* Description */}
        <p className="font-roboto text-sm text-gray-300 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Frameworks/Technologies */}
        {frameworks && frameworks.length > 0 && (
          <div className="space-y-3">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="flex flex-wrap gap-2">
              {frameworks.map((framework, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: delay + i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-xs py-1.5 px-3 rounded-full font-roboto text-purple-200 hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-300 cursor-default"
                >
                  {framework}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
