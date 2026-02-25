"use client";

import Link from "./components/Link";
import Headshot from "@/app/assets/headshot.png";
import NextLink from "next/link";
import EugoLogo from "@/app/components/icon/Eugo.png";
import BenioffLogo from "@/app/components/icon/BOSL.png";
import MemoryGlassLogo from "@/app/components/icon/MemoryGlass.png";
import UCSantaBarbaraLogo from "@/app/components/icon/UCSantaBarbara.png";
import UCSBCSLogo from "@/app/components/icon/UCSantaBarbaraCS.png";
import Image from "next/image";
import { GalleryHorizontalEnd } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto font-extralight">
      <ul className="grid gap-1 text-base">
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400">
            3rd year CS
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
          </span>
        </li>
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            what i&apos;ve been building:
          </span>
          <ul className="grid gap-1 pl-4">
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
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
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
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
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            previously:
          </span>
          <ul className="grid gap-1 pl-4">
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                Software Engineer Intern
                <span className="inline-flex items-baseline gap-1 ml-2">
                  <Image
                    src={EugoLogo}
                    alt="Eugo Logo"
                    width={14}
                    height={14}
                    className="object-contain relative top-[2px]"
                  />
                  <Link href="https://eugo.io/" className="font-medium">
                    Eugo
                  </Link>
                </span>
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                Software Engineer Intern
                <span className="inline-flex items-baseline gap-1 ml-2">
                  <Image
                    src={BenioffLogo}
                    alt="Benioff Ocean Science Laboratory Logo"
                    width={14}
                    height={14}
                    className="object-contain relative top-[2px]"
                  />
                  <Link href="https://bosl.ucsb.edu/" className="font-medium">
                    Benioff Ocean Science Laboratory
                  </Link>
                </span>
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                Software Engineer (Contract Work)
                <span className="inline-flex items-baseline gap-1 ml-2">
                  <Image
                    src={MemoryGlassLogo}
                    alt="Memory Glass Logo"
                    width={14}
                    height={14}
                    className="object-contain relative top-[2px]"
                  />
                  <Link
                    href="https://www.memoryglass.com/"
                    className="font-medium"
                  >
                    Memory Glass
                  </Link>
                </span>
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                Research
                <span className="inline-flex items-baseline gap-1 ml-2">
                  <Image
                    src={UCSBCSLogo}
                    alt="UCSB CS Department Logo"
                    width={14}
                    height={14}
                    className="object-contain relative top-[2px]"
                  />
                  <Link
                    href="https://cs.ucsb.edu/people/faculty/jianwen-su"
                    className="font-medium"
                  >
                    UCSB CS Department
                  </Link>
                </span>
              </span>
            </li>
          </ul>
        </li>
      </ul>

      <NextLink
        href="/projects"
        className="text-center mt-4 py-4 px-6 rounded-lg border border-stone-400 dark:border-stone-600 bg-stone-50 dark:bg-stone-900 text-stone-600 dark:text-stone-400 transform transition-all duration-300 font-extralight hover:scale-[1.02] active:scale-[0.98] shadow-sm"
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

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-6">
        <div className="w-full rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 p-4 text-stone-600 dark:text-stone-400">
          <p className="leading-relaxed">
            Hi, I&apos;m Kennedy! I love to explore new technology and build products that people want.
          </p>
          <p className="leading-relaxed mt-3">
            Outside of tech, you&apos;ll usually find me playing basketball, lifting, or spending time outdoors.
          </p>
        </div>
        <div className="w-48 h-48 shrink-0 relative rounded-full border-2 border-stone-200 dark:border-stone-700 shadow-lg overflow-hidden bg-stone-50 dark:bg-stone-800">
          <Image
            src={Headshot}
            alt="Kennedy Nguyen Headshot"
            fill
            className="object-cover object-top rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
