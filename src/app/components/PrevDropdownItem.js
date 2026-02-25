"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "./Link";

export default function PrevDropdownItem({ item, isOpen, onToggle }) {
  const panelId = `previous-panel-${item.id}`;

  return (
    <li className="group/row relative">
      <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
        ↳
      </span>
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
          <ul className="ml-1 pl-4 border-l border-stone-300 dark:border-stone-700 space-y-1">
            {item.details.map((detail, index) => (
              <li
                key={`${item.id}-${index}`}
                className="text-sm text-stone-500 dark:text-stone-500 leading-relaxed"
              >
                {index === 0 ? detail : `• ${detail}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
