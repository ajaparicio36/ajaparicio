"use client";

import React, { useEffect, useState } from "react";

export default function StaticBackground() {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    console.log("StaticBackground mounted");
    setIsRendered(true);

    // Force a re-render after a short delay to help with visibility
    const timer = setTimeout(() => {
      console.log("Forcing background refresh");
      const bg = document.getElementById("static-background");
      if (bg) {
        bg.style.opacity = "0";
        setTimeout(() => {
          bg.style.opacity = "1";
        }, 50);
      }
    }, 200);

    return () => {
      console.log("StaticBackground unmounted");
      clearTimeout(timer);
    };
  }, []);

  // Use inline styles exclusively to avoid any CSS conflicts
  return (
    <div
      id="static-background"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
        opacity: isRendered ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "70vw",
          height: "70vh",
          borderRadius: "50%",
          backgroundColor: "rgba(126, 34, 206, 0.4)",
          filter: "blur(100px)",
          opacity: 0.6,
          left: "5%",
          top: "-10%", // Moved up from 10% to -10%
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "60vw",
          height: "60vh",
          borderRadius: "50%",
          backgroundColor: "rgba(29, 78, 216, 0.4)",
          filter: "blur(90px)",
          opacity: 0.6,
          left: "20%",
          top: "-5%", // Moved up from 15% to -5%
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "40vw",
          height: "40vh",
          borderRadius: "50%",
          backgroundColor: "rgba(14, 116, 144, 0.4)",
          filter: "blur(70px)",
          opacity: 0.6,
          left: "55%",
          top: "5%", // Moved up from 25% to 5%
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(1px)",
        }}
      />
    </div>
  );
}
