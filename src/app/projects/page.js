"use client";

import Link from "../components/Link";
import ProjectList from "../components/ProjectList";

import CycleImage from "../assets/projects/cycle.png";
import GauchoGraduateImage from "../assets/projects/gaucho-graduate.png";

import { useState } from "react";
import { Search } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Cycle",
      href: "https://devpost.com/software/cycle-z6euoc",
      description:
        "an AI-powered returns automation platform that collects Gmail receipts, tracks return windows, and scrapes retailer policies for fully automated return processing.",
      image: CycleImage,
      imageAlt: "Cycle",
      technologies: [
        "React",
        "FastAPI (Python)",
        "BrightData",
        "Selenium",
        "PostgreSQL",
      ],
      github: "https://github.com/taedonreth/cycle",
      demo: "https://devpost.com/software/cycle-z6euoc",
    },
    {
      title: "Gaucho Graduate",
      href: "https://devpost.com/software/gaucho-graduate",
      description:
        "a web app that allows students to plan their academic path with real-time trackers for graduation requirements.",
      image: GauchoGraduateImage,
      imageAlt: "Gaucho Graduate",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "PostgreSQL",
      ],
      github: "https://github.com/JohnKim04/UCSB-Course-Scheduler",
      demo: "https://devpost.com/software/gaucho-graduate",
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="relative">
        <Search className="absolute top-2.5 left-3 size-6 text-stone-400" />
        <input
          type="text"
          placeholder="search for a project, technology, etc."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 px-4 border border-stone-400 rounded-md bg-transparent focus:outline-none focus:border-stone-700 pl-10"
        />
      </div>
      <ProjectList
        projects={projects.filter(
          (project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            project.technologies.some((technology) =>
              technology.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )}
      />
      <p>
        You can check out the rest of my projects{" "}
        <Link href="https://github.com/kennedynguyen1?tab=repositories&q=&type=source">
          here
        </Link>
        .
      </p>
    </>
  );
}
