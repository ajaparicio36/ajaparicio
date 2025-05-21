"use client";

import React, { useEffect, useState } from "react";

export default function StaticBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate opacity based on scroll position - visible only near the top
  const opacity = Math.max(0, 1 - scrollY / 700);

  // This ensures we render the same structure on server and client
  // but the dynamic effects only happen after hydration
  return (
    <div
      id="root-background"
      style={{
        opacity: isMounted ? opacity : 1, // Always visible on initial render for SEO
        pointerEvents: "none",
        transition: "opacity 0.3s ease-out",
      }}
    >
      <div id="root-bg-blob-1" className="bg-blob-1"></div>
      <div id="root-bg-blob-2" className="bg-blob-2"></div>
      <div id="root-bg-blob-3" className="bg-blob-3"></div>
      <div id="root-bg-overlay" className="bg-overlay"></div>
    </div>
  );
}
