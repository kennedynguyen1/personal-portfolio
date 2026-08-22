"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "./Link";

export default function DropdownItem({ item, isOpen, onToggle, variant = "nested" }) {
  const panelId = `dropdown-panel-${item.id}`;
  const isTop = variant === "top";

  return (
    <li
      className={
        isTop
          ? "group/row group relative pl-4 hover:translate-x-1 transition-transform duration-200"
          : "group/row relative"
      }
    >
      {isTop ? (
        <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-secondary rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
      ) : (
        <span className="absolute left-[-20px] top-0 text-secondary">↳</span>
      )}
      <div className="w-full flex items-start justify-between gap-3">
        <div className="min-w-0 flex items-baseline gap-1 flex-wrap text-stone-600 dark:text-stone-400">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={panelId}
            className="text-left hover:text-stone-800 dark:hover:text-stone-200 transition-colors focus-visible:outline-none focus-visible:underline"
          >
            {item.role}
          </button>
          <span className="inline-flex items-baseline gap-1 ml-1">
            <Image
              src={item.logo}
              alt={item.logoAlt}
              width={14}
              height={14}
              className="object-contain relative top-[2px]"
            />
            <Link href={item.companyHref} className="font-medium">
              {item.company}
            </Link>
          </span>
        </div>
        <button
          type="button"
          onClick={onToggle}
          aria-label={`${isOpen ? "Collapse" : "Expand"} details for ${item.company}`}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className={`mt-1 shrink-0 rounded-md p-0.5 text-stone-500 dark:text-stone-500 transition-opacity duration-200 hover:text-stone-700 dark:hover:text-stone-300 focus-visible:opacity-100 ${
            isOpen ? "opacity-100" : "opacity-0 group-hover/row:opacity-100"
          }`}
        >
          <ChevronDown
            className={`size-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div
        id={panelId}
        aria-hidden={!isOpen}
        className={`grid transition-all duration-300 ease-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-2"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <div className="relative flex flex-col gap-1 pl-5 pb-1">
            {/* timeline marker: olive circle with a line dropping down, like Sean's experience section */}
            <span
              aria-hidden
              className="absolute left-0 top-[7px] w-[7px] h-[7px] rounded-full border border-secondary"
            />
            <span
              aria-hidden
              className="absolute left-[3px] top-[18px] bottom-[4px] w-px bg-stone-300 dark:bg-stone-700"
            />
            {item.details.map((detail, index) => (
              <p
                key={`${item.id}-${index}`}
                className="text-sm text-stone-500 dark:text-stone-500 leading-relaxed m-0"
              >
                {detail}
              </p>
            ))}
            {item.technologies?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-0.5">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-1.5 py-0.5 rounded bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border border-transparent hover:border-accent transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
