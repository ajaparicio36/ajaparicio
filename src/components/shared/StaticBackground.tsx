"use client";

import React, { useEffect, useState } from "react";

export default function StaticBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("StaticBackground mounted");

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      console.log("StaticBackground unmounted");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate opacity based on scroll position - visible only near the top
  const opacity = Math.max(0, 1 - scrollY / 700);

  return (
    <div
      id="root-background"
      style={{
        opacity: opacity,
        pointerEvents: "none", // Ensure it doesn't interfere with clicks
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
