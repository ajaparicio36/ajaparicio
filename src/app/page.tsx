"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import TopSection from "@/components/sections/TopSection";
import Introduction from "@/components/sections/Introduction";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";

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
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render motion components on the client
  if (!isMounted) {
    return (
      <div className="bg-black text-foreground min-h-screen">
        <TopSection />
        <Introduction />
        <Technologies />
        <Projects />
        <Footer />
      </div>
    );
  }

  return (
    <div ref={scrollRef} className="bg-black text-foreground">
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

      <div className="relative bg-black">
        <Footer />
      </div>
    </div>
  );
}
