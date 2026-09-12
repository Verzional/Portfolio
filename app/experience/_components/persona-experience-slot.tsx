"use client";

import { useEffect, useRef } from "react";

interface PersonaExperienceSlotProps {
  isActive: boolean;
  role: string;
  company: string;
  arcana: string;
  arcanaNumber: string;
  rankTitle: string;
  status: "ACTIVE" | "CLEARED";
  onClick: (index: number) => void;
  onHover: (index: number) => void;
  index: number;
}

export function PersonaExperienceSlot({
  isActive,
  role,
  company,
  arcana,
  arcanaNumber,
  rankTitle,
  status,
  onClick,
  onHover,
  index,
}: PersonaExperienceSlotProps) {
  const tiltClass = index % 2 === 0 ? "rotate-[1deg]" : "rotate-[-1deg]";
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Auto Scroll to Center on Selection
  useEffect(() => {
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
      onPointerMove={(e) => {
        if (e.pointerType === "mouse" && !isActive) {
          onHover(index);
        }
      }}
      className={`group relative mb-3.5 w-full cursor-pointer text-left transition-all duration-200 ${tiltClass} ${
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
      <div className="relative z-10 flex items-center gap-3 px-3.5 py-2.5 md:px-4 md:py-3">
        {/* Arcana Roman Numeral Crest */}
        <div
          className={`flex h-11 w-11 shrink-0 -skew-x-12 items-center justify-center border-2 font-linux-biolinum text-sm font-black tracking-widest transition-colors ${
            isActive
              ? "border-primary bg-primary text-foreground shadow-[2px_2px_0_rgba(0,0,0,0.8)]"
              : "border-foreground/50 bg-foreground/5 text-foreground group-hover:border-primary group-hover:bg-primary group-hover:text-foreground"
          }`}
        >
          <span className="block skew-x-12">{arcanaNumber}</span>
        </div>

        {/* Middle Text Info */}
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          {/* Top Row: Arcana Label, Status Badge & Rank Tag */}
          <div className="flex items-center justify-between gap-1.5">
            <div className="flex min-w-0 items-center gap-1.5">
              <span
                className={`truncate font-linux-biolinum text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
                  isActive ? "text-primary/90" : "text-primary"
                }`}
              >
                {arcana}
              </span>
              {status === "ACTIVE" && (
                <span className="shrink-0 -skew-x-12 bg-primary px-1 text-[9px] font-black text-foreground uppercase">
                  NOW
                </span>
              )}
            </div>

            <span
              className={`shrink-0 -skew-x-12 px-1.5 py-0.5 font-linux-biolinum text-[9px] font-black tracking-widest uppercase transition-colors ${
                isActive
                  ? "bg-primary text-foreground shadow-[2px_2px_0_rgba(0,0,0,0.8)]"
                  : "border border-foreground/30 bg-background text-muted group-hover:border-primary group-hover:text-primary"
              }`}
            >
              <span className="block skew-x-12">{rankTitle.replace("RANK ", "R-")}</span>
            </span>
          </div>

          {/* Role Name: Allowed 2 Lines, Never Truncates */}
          <span
            className={`line-clamp-2 font-linux-biolinum text-sm font-bold leading-tight tracking-wide transition-colors [-webkit-text-stroke:0.3px_currentColor] [text-stroke:0.3px_currentColor] md:text-base ${
              isActive
                ? "font-black text-primary"
                : "text-foreground group-hover:text-primary"
            }`}
          >
            {role}
          </span>

          {/* Company */}
          <span
            className={`mt-0.5 truncate font-lato text-xs transition-colors ${
              isActive
                ? "font-semibold text-background/80"
                : "text-muted group-hover:text-foreground/80"
            }`}
          >
            {company}
          </span>
        </div>
      </div>
    </button>
  );
}
