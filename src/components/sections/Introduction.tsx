"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Introduction() {
  return (
    <section
      id="introduction-section"
      className="relative py-20 overflow-hidden min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="relative flex flex-col md:flex-row gap-8 items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 opacity-30 z-0 flex justify-center items-center">
            <div className="relative w-[clamp(280px,40vw,350px)] h-[clamp(420px,60vh,525px)]">
              <Image
                src="/aj.png"
                alt="AJ Aparicio"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 40vw, 350px"
                priority
              />
            </div>
          </div>

          {/* Introduction Text */}
          <motion.div
            className="w-full md:w-1/2 z-10 p-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-calsans text-3xl md:text-4xl mb-6">I am AJ</h2>
            <p className="font-roboto text-lg mb-6">
              A software engineer with a passion to create systems integrated
              with different frameworks and languages. I specialize in backend
              development, but I also have done about just as much full-stack
              development. I do a lot of development and explore other languages
              in my free time because I love to!
            </p>
          </motion.div>

          {/* What I Do */}
          <motion.div
            className="w-full md:w-1/2 z-10 p-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="font-calsans text-3xl md:text-4xl mb-6">
              What I Do
            </h2>
            <p className="font-roboto text-lg">
              I have a total of 5 years experience with software development,
              and have worked with many clients in making their software ideas
              into reality. Below is the technical skills I have and the
              technologies I use.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
