"use client";

import Link from "./components/Link";
import Headshot from "@/app/assets/headshot.png";
import Hawaii from "@/app/assets/hawaii.png";
import LakeDiablo from "@/app/assets/lake_diablo.png";
import Basketball from "@/app/assets/basketball.png";
import Food from "@/app/assets/food.png";
import NextLink from "next/link";
import SnowflakeLogo from "@/app/components/icon/Snowflake.png";
import ShopifyLogo from "@/app/components/icon/Shopify.png";
import EugoLogo from "@/app/components/icon/Eugo.png";
import BenioffLogo from "@/app/components/icon/BOSL.png";
import MemoryGlassLogo from "@/app/components/icon/MemoryGlass.png";
import UCSantaBarbaraLogo from "@/app/components/icon/UCSantaBarbara.png";
import UCSBCSLogo from "@/app/components/icon/UCSantaBarbaraCS.png";
import DropdownItem from "@/app/components/DropdownItem";
import CurvedArrow from "@/app/components/CurvedArrow";
import Image from "next/image";
import { GalleryHorizontalEnd } from "lucide-react";
import { useEffect, useState } from "react";

const personas = [
  { caption: "Hey, I'm Kennedy. I'm a Software Engineer 👨🏻‍💻, but also love ...", img: Headshot },
  { caption: "travelling ✈️", img: Hawaii },
  { caption: "the outdoors ⛰️", img: LakeDiablo },
  { caption: "basketball (warriors fan) 🏀", img: Basketball },
  {
    caption: "food 🍜!!, and the list can go on and on ...",
    subcaption:
      "Reach out to chat about tech, hobbies, or your whatever you're into!",
    img: Food,
  },
];

const currentRoles = [
  {
    id: "snowflake",
    role: "SWE Intern",
    company: "Snowflake",
    companyHref: "https://www.snowflake.com/",
    logo: SnowflakeLogo,
    logoAlt: "Snowflake Logo",
    details: ["Metadata Interoperability (Delta Lake)"],
    technologies: ["Java", "C++", "AWS"],
  },
  {
    id: "shopify",
    role: "Fall SWE Intern",
    company: "Shopify",
    companyHref: "https://shopify.com/",
    logo: ShopifyLogo,
    logoAlt: "Shopify Logo",
    details: ["Developer Productivity (Environments)"],
  },
];

const previousExperience = [
  {
    id: "eugo",
    role: "Software Engineer Intern",
    company: "Eugo",
    companyHref: "https://eugo.io/",
    logo: EugoLogo,
    logoAlt: "Eugo Logo",
    details: ["Product Development"],
    technologies: ["Python", "TypeScript", "React"],
  },
  {
    id: "benioff",
    role: "Software Engineer Intern",
    company: "Benioff Ocean Science Lab",
    companyHref: "https://bosl.ucsb.edu/",
    logo: BenioffLogo,
    logoAlt: "Benioff Ocean Science Laboratory Logo",
    details: [
      "Built a children's game to teach computer vision fundamentals",
    ],
    technologies: ["TypeScript", "React"],
  },
  {
    id: "memory-glass",
    role: "Software Engineer (CW)",
    company: "Memory Glass",
    companyHref: "https://www.memoryglass.com/",
    logo: MemoryGlassLogo,
    logoAlt: "Memory Glass Logo",
    details: [
      "Built business systems and internal tools",
    ],
    technologies: ["JavaScript", "SQL"],
  },
  {
    id: "ucsb-cs",
    role: "Database Research",
    company: "UCSB CS Department",
    companyHref: "https://cs.ucsb.edu/people/faculty/jianwen-su",
    logo: UCSBCSLogo,
    logoAlt: "UCSB CS Department Logo",
    details: [
      "Professor Jianwen Su's CS events processing lab",
      "Conducting research on event processing and data stream management systems, focusing on query models, real-time analytics, and the design tradeoffs of streaming databases",
    ],
  },
];

export default function About() {
  const [openIds, setOpenIds] = useState({});
  const [showDropdownHint, setShowDropdownHint] = useState(false);
  const [personaIndex, setPersonaIndex] = useState(0);
  const [showHeadshotHint, setShowHeadshotHint] = useState(false);

  useEffect(() => {
    setShowDropdownHint(!localStorage.getItem("hasOpenedDropdown"));
    setShowHeadshotHint(!localStorage.getItem("hasClickedHeadshot"));
  }, []);

  const cyclePersona = () => {
    localStorage.setItem("hasClickedHeadshot", "true");
    setShowHeadshotHint(false);
    setPersonaIndex((i) => (i + 1) % personas.length);
  };

  const toggleOpen = (id) => {
    localStorage.setItem("hasOpenedDropdown", "true");
    setShowDropdownHint(false);
    setOpenIds((current) => ({ ...current, [id]: !current[id] }));
  };

  return (
    <div className="flex flex-col max-w-2xl mx-auto font-extralight">
      <div className="relative">
        {showDropdownHint && (
          <CurvedArrow
            text="click me!"
            direction="right"
            className="hidden lg:block absolute top-4 -left-12"
          />
        )}
      </div>
      <ul className="grid gap-1 text-base">
        {currentRoles.map((role) => (
          <DropdownItem
            key={role.id}
            variant="top"
            item={role}
            isOpen={!!openIds[role.id]}
            onToggle={() => toggleOpen(role.id)}
          />
        ))}
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-secondary rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400">
            CS
            <span className="inline-flex items-baseline gap-1 ml-2">
              <Image
                src={UCSantaBarbaraLogo}
                alt="UC Santa Barbara Logo"
                width={14}
                height={14}
                className="object-contain relative top-[2px]"
              />
              <Link href="https://www.ucsb.edu/" className="font-medium">
                UC Santa Barbara
              </Link>
            </span>
            <span className="inline-flex items-baseline gap-1 ml-2">&apos;27</span>
          </span>
        </li>
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-secondary rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400">
            interested in distributed systems, databases, and applied ai/ml
          </span>
        </li>
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-secondary rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            what i&apos;ve built:
          </span>
          <ul className="grid gap-1 pl-4">
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-secondary">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                built{" "}
                <Link href="https://devpost.com/software/cycle-z6euoc" className="font-medium">
                  Cycle
                </Link>
                , an AI-powered returns platform that automates receipt collection, return tracking, and retailer policy scraping
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-secondary">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                built{" "}
                <Link href="https://devpost.com/software/gaucho-graduate" className="font-medium">
                  Gaucho Graduate
                </Link>
                , a course planner for UCSB students with real-time graduation requirement tracking
              </span>
            </li>
          </ul>
        </li>
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-secondary rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            previously:
          </span>
          <ul className="grid gap-1 pl-4">
            {previousExperience.map((item) => (
              <DropdownItem
                key={item.id}
                item={item}
                isOpen={!!openIds[item.id]}
                onToggle={() => toggleOpen(item.id)}
              />
            ))}
          </ul>
        </li>
      </ul>

      <NextLink
        href="/projects"
        className="text-center mt-4 py-4 px-6 rounded-lg border border-stone-400 dark:border-stone-600 hover:border-accent dark:hover:border-accent bg-stone-50 dark:bg-stone-900 text-stone-600 dark:text-stone-400 transform transition-all duration-300 font-extralight hover:scale-[1.02] active:scale-[0.98] shadow-sm"
      >
        see what i&apos;ve built{" "}
        <GalleryHorizontalEnd className="size-5 inline align-top ml-1 transition-transform group-hover:rotate-3" />
      </NextLink>
      
      {/* <div className="flex items-center justify-center gap-2 text-stone-600 dark:text-stone-400 mt-4">
        <span>or, </span>
        <span>→</span>
        <Link href="/resume.pdf" className="font-medium">
          view my resume
        </Link>
      </div> */}

      <div className="flex flex-col items-center mt-6 gap-3">
        <div className="relative">
          {showHeadshotHint && (
            <CurvedArrow
              text="get a glimpse of my life!"
              direction="doodle"
              className="hidden lg:flex absolute top-4 left-full -ml-1 whitespace-nowrap"
            />
          )}
          <button
            type="button"
            aria-label="Click to cycle through my interests"
            onClick={cyclePersona}
            className="w-48 h-48 shrink-0 relative rounded-full border-2 border-stone-200 dark:border-stone-700 shadow-lg overflow-hidden bg-stone-50 dark:bg-stone-800 cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] block"
          >
            {personas.map((persona, i) => (
              <div
                key={persona.caption}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  i === personaIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={persona.img}
                  alt={`Kennedy Nguyen — ${persona.caption}`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            ))}
          </button>
        </div>
        <span
          key={personaIndex}
          className="text-sm text-stone-600 dark:text-stone-400 animate-fade-in text-center"
        >
          {personas[personaIndex].caption}
          {personas[personaIndex].subcaption && (
            <span className="block mt-1 max-w-xs">
              {personas[personaIndex].subcaption}
            </span>
          )}
        </span>
      </div>
    </div>
  );
}
