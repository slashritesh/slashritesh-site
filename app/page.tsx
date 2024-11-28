import BenifitsSection from "@/components/BenifitsSection";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import { Spotlight } from "@/components/ui/Spotlight";
import { main } from "motion/react-client";
import React from "react";

const Homepage = () => {
  return (
    <main>
      <div className="min-h-screen relative overflow-hidden  w-full flex flex-col justify-center items-center">
        <Spotlight
          className="absolute  -top-6 -right-96 z-[52] sm:top-0 sm:right-42"
          fill="blue"
        />
        <Spotlight
          className="absolute top-10 left-10 z-[52] sm:w-[23vw] sm:top-30 sm:right-0"
          fill="blue"
        />
        <HeroSection />
      </div>
      <BenifitsSection />
      <Projects />
    </main>
  );
};

export default Homepage;
