import Button from "@/components/ui/Button";
import { Spotlight } from "@/components/ui/Spotlight";
import { SpotlightRight } from "@/components/ui/SpotlightRight";
import React from "react";

const Homepage = () => {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Spotlight className="absolute z-[52] top-0 right-52" fill="blue" />
      <Spotlight className="absolute w-[23vw] top-30 right-0" fill="blue" />
      <div className="flex flex-col items-center">
        <h3 className="capitalize text-4xl text-center sm:text-5xl">
          Transforming Your Potential <br className="" /> into Production-Ready
          Solution
        </h3>
        <p className="sm:w-[68ch] capitalize textl text-center my-10">
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
