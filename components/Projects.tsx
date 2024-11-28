import Image from "next/image";
import React from "react";
import { EarthIcon, LucideEarth } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    url: "/projects/cafe-site.png",
    label: "Brew Cafe",
    link: "https://brewcafe.framer.website/",
  },
  {
    url: "/projects/real-estate.png",
    label: "Vira Heights",
    link: "https://viraheights.framer.website/",
  },
  {
    url: "/projects/dental-site.png",
    label: "DentBlue Dental Clinic",
    link: "https://dentblue.framer.website/",
  },
];

const Projects = () => {
  return (
    <div className="px-5 sm:px-20 my-60">
      <h1 className="text-4xl sm:text-5xl text-center capitalize mb-20">Work Showcase</h1>
      <div className="grid gap-5 sm:gap-8 grid-cols-1 sm:grid-cols-2">
        {projects.map((card) => {
          return (
            <ProjectCard link={card.link} url={card.url} label={card.label} />
          );
        })}
      </div>
    </div>
  );
};

const ProjectCard = ({
  url,
  label,
  link,
}: {
  url: string;
  label: string;
  link: string;
}) => {
  return (
    <div className="p-3 w-full rounded-lg">
      <Image
        className="rounded-lg object-cover"
        alt={label}
        sizes="100vw"
  
        style={{
          width: "100%",
          height: "auto",
        }}
        height={600}
        width={700}
        src={url}
      />
      <div className="flex justify-between items-center my-4">
        <div>
          <p className="p-2 bg-slate-900 border rounded-full px-5">
            Website Design
          </p>
        </div>
        <Link
          href={link}
          className="underline-offset-4 flex items-center gap-4 underline"
        >
          Go To Website
        </Link>
      </div>
    </div>
  );
};

export default Projects;
