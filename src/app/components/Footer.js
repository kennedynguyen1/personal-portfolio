"use client";

import { Twitter, Linkedin, Github, Mail, CodeXml } from "lucide-react";
import { useEffect, useState } from "react";
import CurvedArrow from "./CurvedArrow";

export default function Footer({ className }) {
  const [showFooterHint, setShowFooterHint] = useState(false);

  useEffect(() => {
    setShowFooterHint(!localStorage.getItem("hasClickedFooterLink"));
  }, []);

  const dismissFooterHint = () => {
    localStorage.setItem("hasClickedFooterLink", "true");
    setShowFooterHint(false);
  };

  const links = [
    {
      name: "x",
      href: "https://x.com/kennedynguyen_",
      icon: Twitter,
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/kennedynguyen1/",
      icon: Linkedin,
    },
    {
      name: "github",
      href: "https://github.com/kennedynguyen1",
      icon: Github,
    },
    {
      name: "email",
      href: "mailto:knguyen1273@gmail.com",
      icon: Mail,
    },
    {
      name: "repo",
      href: "https://github.com/kennedynguyen1/personal-portfolio",
      icon: CodeXml,
    }
  ];

  return (
    <footer className={`flex flex-col gap-4 text-sm text-stone-500 dark:text-stone-400 ${className}`}>
      <hr className="border-b border-neutral-200 dark:border-neutral-800" />
      <div className="relative flex flex-row gap-4">
        {showFooterHint && (
          <CurvedArrow
            text="get in touch!"
            direction="doodle-flat"
            className="hidden lg:flex absolute top-3.5 left-28"
          />
        )}
        <div className="flex flex-wrap gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={dismissFooterHint}
              className="group flex items-center hover:text-link dark:hover:text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon && (
                <>
                  <link.icon className="w-5 h-5 hover:scale-110 md:hover:scale-110 transition-transform duration-500 ease-out" />
                  <span className="hidden md:inline-block md:w-0 md:overflow-hidden md:group-hover:w-auto md:group-hover:ml-2 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
                    {link.name}
                  </span>
                </>
              )}
              {!link.icon && (
                <span>{link.name}</span>
              )}
            </a>
          ))}
        </div>
      </div>
      <p>{new Date().getFullYear()} &copy; Kennedy Nguyen</p>
    </footer>
  );
}
