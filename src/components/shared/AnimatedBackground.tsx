"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0);
  const opacity = useTransform(progress, [0, 1], [0.3, 0.6]);

  useEffect(() => {
    // Alternative approach using keyframes for the animation
    let start = 0;
    const animateProgress = () => {
      const time = ((Date.now() - start) % 10000) / 10000; // 10 seconds cycle
      const value = time < 0.5 ? time * 2 : 2 - time * 2; // 0->1->0 pattern
      progress.set(value);
      requestAnimationFrame(animateProgress);
    };

    start = Date.now();
    const animationFrame = requestAnimationFrame(animateProgress);

    return () => cancelAnimationFrame(animationFrame);
  }, [progress]);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div ref={containerRef} className="relative w-full h-full">
        <motion.div
          className="absolute w-[70vw] h-[70vh] rounded-full bg-purple-700/30 blur-[120px]"
          initial={{ x: "-10%", y: "0%" }}
          animate={{
            x: ["0%", "10%", "-5%", "0%"],
            y: ["0%", "20%", "10%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ opacity }}
        />
        <motion.div
          className="absolute w-[60vw] h-[60vh] rounded-full bg-blue-700/30 blur-[100px]"
          initial={{ x: "20%", y: "10%" }}
          animate={{
            x: ["20%", "10%", "30%", "20%"],
            y: ["10%", "30%", "5%", "10%"],
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ opacity }}
        />
        <motion.div
          className="absolute w-[40vw] h-[40vh] rounded-full bg-cyan-700/30 blur-[80px]"
          initial={{ x: "60%", y: "30%" }}
          animate={{
            x: ["60%", "50%", "65%", "60%"],
            y: ["30%", "40%", "20%", "30%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ opacity }}
        />
      </div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    </div>
  );
}
