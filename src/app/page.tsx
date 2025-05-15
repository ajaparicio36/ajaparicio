"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import TopSection from "@/components/sections/TopSection";
import Introduction from "@/components/sections/Introduction";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";
import StaticBackground from "@/components/shared/StaticBackground";

// Section wrapper component for scroll animations
const Section = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
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
      className="min-h-screen relative z-10"
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
    <>
      {/* Background only for the top section */}
      <StaticBackground />

      {!isMounted ? (
        <div className="bg-black/0 text-foreground min-h-screen relative z-10">
          <TopSection />
          <Introduction />
          <Technologies />
          <Projects />
          <Footer />
        </div>
      ) : (
        <div className="bg-black/0 text-foreground relative z-10">
          {/* Progress bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
            style={{ scaleX: scrollYProgress }}
          />

          <Section id="home">
            <TopSection />
          </Section>

          <Section id="about">
            <Introduction />
          </Section>

          <Section id="technologies">
            <Technologies />
          </Section>

          <Section id="projects">
            <Projects />
          </Section>

          <div className="relative z-10">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
