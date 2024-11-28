import React from 'react'
import Button from './ui/Button'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center">
        <h3 className="capitalize z-[100] w-[20ch] sm:w-auto text-3xl text-center sm:text-5xl">
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
  )
}

export default HeroSection