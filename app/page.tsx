import Button from "@/components/ui/Button";
import { Spotlight } from "@/components/ui/Spotlight";
import { SpotlightRight } from "@/components/ui/SpotlightRight";
import React from "react";

const Homepage = () => {
  return (
    <main className="min-h-screen  w-full flex justify-center items-center">
      <Spotlight className="absolute  -top-6 -right-96 z-[52] sm:top-0 sm:right-42" fill="blue" />
      <Spotlight className="absolute top-10 left-10 sm:w-[23vw] sm:top-30 sm:right-0" fill="blue" />
      <div className="flex flex-col items-center">
        <h3 className="capitalize w-[20ch] sm:w-auto text-3xl text-center sm:text-5xl">
          Transforming Your Potential <br className="hidden sm:block" /> into Production-Ready
          Solution
        </h3>
        <p className="w-[35ch] sm:w-[68ch] capitalize textl text-center my-10">
          I'm Ritesh, a freelance
          <span className="capitalize font-medium italic text-blue-400">
            {" "}full-stack engineer and indie hacker
          </span>
          . I help non-technical clients turn their ideas into real, working
          products that make an impact.
        </p>

        <Button>Let's Work Together</Button>
      </div>
    </main>
  );
};

export default Homepage;
