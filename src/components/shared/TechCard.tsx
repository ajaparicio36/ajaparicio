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
      whileHover={{ scale: 1.05 }}
      className="bg-secondary/20 backdrop-blur-sm rounded-lg p-6 border border-secondary/30"
    >
      <div className="flex items-center gap-4 mb-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="relative w-12 h-12">
                <Image
                  src={icon}
                  alt={`${name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <h3 className="font-calsans text-xl">{name}</h3>
      </div>

      <p className="font-roboto text-sm text-muted-foreground mb-4">
        {description}
      </p>

      {frameworks && frameworks.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {frameworks.map((framework, i) => (
            <div
              key={i}
              className="bg-primary/20 text-xs py-1 px-2 rounded font-roboto"
            >
              {framework}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
