"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Introduction() {
  return (
    <section
      id="introduction-section"
      className="relative py-20 overflow-hidden min-h-screen flex items-center backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Photo Section - Now More Prominent */}
          <motion.div
            className="relative flex justify-center lg:justify-start order-1 lg:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl scale-110" />

              {/* Main photo container */}
              <div className="relative w-80 h-96 md:w-96 md:h-[28rem] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image
                  src="/aj.png"
                  alt="AJ Aparicio - Software Engineer"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 320px, 384px"
                  priority
                />

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/60 rounded-full blur-sm"
                animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-cyan-500/40 rounded-full blur-md"
                animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-8 order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Introduction */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="font-orbitron text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  Meet AJ
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6" />
              </motion.div>

              <motion.p
                className="font-roboto text-lg md:text-xl leading-relaxed text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="text-white font-semibold">
                  Passionate software engineer
                </span>{" "}
                with
                <span className="text-purple-300 font-semibold">
                  {" "}
                  3+ years of experience
                </span>{" "}
                crafting innovative solutions. I don&apos;t just code—I
                architect digital experiences that make a difference.
              </motion.p>

              <motion.p
                className="font-roboto text-lg leading-relaxed text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                From{" "}
                <span className="text-cyan-300 font-semibold">
                  full-stack web applications
                </span>{" "}
                to
                <span className="text-blue-300 font-semibold">
                  {" "}
                  mobile experiences
                </span>
                , I bring ideas to life using cutting-edge technologies. My
                expertise spans multiple frameworks and languages—because great
                solutions require the right tools.
              </motion.p>
            </div>

            {/* Skills Highlight */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="font-calsans text-xl mb-4 text-purple-200">
                What drives me:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-gray-200">Backend Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-gray-200">Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                  <span className="text-gray-200">Mobile Applications</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  <span className="text-gray-200">System Integration</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button
                asChild
                size="lg"
                className="font-calsans text-lg px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <a
                  href="/Resume.pdf"
                  download="AJ_Aparicio_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
