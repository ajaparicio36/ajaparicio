"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import TopSection from "@/components/sections/TopSection";
import Introduction from "@/components/sections/Introduction";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";

// Section wrapper component for scroll animations
const Section = ({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen relative z-10 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="text-foreground relative">
      {/* Progress bar - only visible after hydration */}
      {isMounted && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 z-50"
          style={{ scaleX: scrollYProgress }}
        />
      )}

      {/* TopSection with integrated background */}
      {isMounted ? (
        <Section id="home">
          <TopSection />
        </Section>
      ) : (
        <div id="home" className="min-h-screen relative z-10">
          <TopSection />
        </div>
      )}

      {/* Other sections with semi-transparent backgrounds */}
      {isMounted ? (
        <>
          <Section id="about">
            <Introduction />
          </Section>

          <Section id="technologies" className="bg-black/90">
            <Technologies />
          </Section>

          <Section id="projects" className="bg-black/95">
            <Projects />
          </Section>
        </>
      ) : (
        <div className="opacity-0 h-0 overflow-hidden">
          <Introduction />
          <Technologies />
          <Projects />
        </div>
      )}

      <div className="relative z-10 bg-black">
        <Footer />
      </div>
    </div>
  );
}
