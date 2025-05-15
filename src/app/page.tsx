import React from "react";
import TopSection from "@/components/sections/TopSection";
import Introduction from "@/components/sections/Introduction";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";

export default function Home() {
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
