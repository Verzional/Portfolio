"use client";

import { useEffect, useRef } from "react";

interface PersonaProjectSlotProps {
  isActive: boolean;
  title: string;
  onClick: () => void;
  index: number;
}

export function PersonaProjectSlot({
  isActive,
  title,
  onClick,
  index,
}: PersonaProjectSlotProps) {
  const tiltClass = index % 2 === 0 ? "rotate-[1deg]" : "rotate-[-1deg]";
  const buttonRef = useRef<HTMLButtonElement>(null);

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
      onClick={onClick}
      className={`group relative mb-3 w-full text-left transition-all duration-200 ${tiltClass} ${
        isActive ? "z-10 translate-x-4 scale-[1.03]" : "hover:translate-x-2"
      }`}
    >
      <div
        className={`absolute inset-0 -skew-x-12 border-4 transition-all duration-200 ${
          isActive
            ? "border-primary bg-white shadow-[6px_6px_0_#d4030d]"
            : "border-white bg-black shadow-[4px_4px_0_rgba(0,0,0,0.8)] group-hover:border-primary group-hover:shadow-[6px_6px_0_#d4030d]"
        }`}
      />

      <div
        className={`relative z-10 px-5 py-3 font-optima-nova text-base tracking-widest transition-colors md:text-lg ${
          isActive
            ? "font-black text-primary"
            : "text-white group-hover:text-primary"
        }`}
      >
        {title}
      </div>
    </button>
  );
}
