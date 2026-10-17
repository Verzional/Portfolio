"use client";

import { useEffect, useRef } from "react";

interface PersonaProjectSlotProps {
  isActive: boolean;
  title: string;
  category: string;
  romanNumeral: string;
  onClick: (index: number) => void;
  index: number;
}

export function PersonaProjectSlot({
  isActive,
  title,
  category,
  romanNumeral,
  onClick,
  index,
}: PersonaProjectSlotProps) {
  const tiltClass = index % 2 === 0 ? "rotate-[1deg]" : "rotate-[-1deg]";
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isInitialMount = useRef(true);

  // Auto Scroll to Center on User Selection
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (isActive && buttonRef.current) {
      buttonRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isActive]);

  return (
    <button
      ref={buttonRef}
      onClick={() => onClick(index)}
      className={`group relative mb-3.5 w-full cursor-pointer text-left outline-none focus:outline-none focus-visible:outline-none transition-all duration-200 ${tiltClass} ${
        isActive
          ? "z-10 translate-x-3 scale-[1.02] md:translate-x-4 md:scale-[1.03]"
          : "hover:translate-x-2"
      }`}
    >
      {/* Skewed Background Block */}
      <div
        className={`absolute inset-0 -skew-x-12 border-4 transition-all duration-200 ${
          isActive
            ? "border-primary bg-foreground shadow-[6px_6px_0_#d4030d]"
            : "border-foreground bg-background shadow-[4px_4px_0_rgba(0,0,0,0.8)] group-hover:border-primary group-hover:shadow-[6px_6px_0_#d4030d]"
        }`}
      />

      {/* Content Container */}
      <div className="relative z-10 flex items-center gap-2.5 px-3 py-2.5 md:px-3.5 md:py-3">
        {/* Roman Numeral Crest */}
        <div
          className={`flex h-10 w-10 shrink-0 -skew-x-12 items-center justify-center border-2 font-linux-biolinum text-xs font-black tracking-wider transition-colors md:h-11 md:w-11 md:text-sm ${
            isActive
              ? "border-primary bg-primary text-foreground shadow-[2px_2px_0_rgba(0,0,0,0.8)]"
              : "border-foreground/50 bg-foreground/5 text-foreground group-hover:border-primary group-hover:bg-primary group-hover:text-foreground"
          }`}
        >
          <span className="block skew-x-12">{romanNumeral}</span>
        </div>

        {/* Middle Text Info */}
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5">
          {/* Top Row: Category */}
          <div className="flex items-center gap-1.5">
            <span
              className={`truncate font-linux-biolinum text-[10px] font-bold tracking-wider uppercase transition-colors ${
                isActive
                  ? "text-primary font-black"
                  : "text-muted group-hover:text-foreground"
              }`}
              title={category}
            >
              {category}
            </span>
          </div>

          {/* Main Title */}
          <h2
            className={`truncate font-linux-biolinum text-xs font-black tracking-wide uppercase transition-colors md:text-sm ${
              isActive ? "text-background" : "text-foreground group-hover:text-primary"
            }`}
            title={title}
          >
            {title}
          </h2>
        </div>
      </div>
    </button>
  );
}
