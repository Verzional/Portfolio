"use client";

import ExportedImage from "next-image-export-optimizer";
import { motion } from "motion/react";
import { ExperienceData } from "@/data/experience";

// Persona 5 Major Arcana Mapping
const arcanaMap: Record<
  string,
  { arcana: string; name: string; french: string; image: string }
> = {
  I: {
    arcana: "I",
    name: "The Magician",
    french: "LE BATELEUR",
    image: "/images/tarot/I-magician.webp",
  },
  II: {
    arcana: "II",
    name: "The Priestess",
    french: "LA PAPESSE",
    image: "/images/tarot/II-priestess.webp",
  },
  III: {
    arcana: "III",
    name: "The Empress",
    french: "L'IMPERATRICE",
    image: "/images/tarot/III-empress.webp",
  },
  IV: {
    arcana: "IV",
    name: "The Emperor",
    french: "L'EMPEREUR",
    image: "/images/tarot/IV-emperor.webp",
  },
  V: {
    arcana: "V",
    name: "The Hierophant",
    french: "LE PAPE",
    image: "/images/tarot/V-hierophant.webp",
  },
  VI: {
    arcana: "VI",
    name: "The Lovers",
    french: "L'AMOUREUX",
    image: "/images/tarot/VI-lovers.webp",
  },
  VII: {
    arcana: "VII",
    name: "The Chariot",
    french: "LE CHARIOT",
    image: "/images/tarot/VII-chariot.webp",
  },
  VIII: {
    arcana: "VIII",
    name: "Justice",
    french: "LA JUSTICE",
    image: "/images/tarot/VIII-justice.webp",
  },
  IX: {
    arcana: "IX",
    name: "The Hermit",
    french: "L'HERMITE",
    image: "/images/tarot/IX-hermit.webp",
  },
  X: {
    arcana: "X",
    name: "Fortune",
    french: "LA ROUE DE FORTUNE",
    image: "/images/tarot/X-fortune.webp",
  },
};

interface PersonaExperienceDetailsProps {
  experience: ExperienceData | null;
}

export function PersonaExperienceDetails({ experience }: PersonaExperienceDetailsProps) {
  // Handle Empty State
  if (!experience) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center p-8 text-foreground">
        <div className="font-linux-biolinum text-2xl text-muted [-webkit-text-stroke:0.5px_currentColor] [text-stroke:0.5px_currentColor] md:text-3xl">
          Select a Confidant
        </div>
      </div>
    );
  }

  const arcana =
    arcanaMap[experience.romanNumeral] || {
      arcana: experience.romanNumeral,
      name: "The Fool",
      french: "LE MAT",
      image: "/images/tarot/0-fool.webp",
    };
  const isActiveRole = experience.status === "ACTIVE";

  return (
    <motion.div
      key={experience.id}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
      className="relative flex h-full w-full items-center justify-center p-4 md:p-6 lg:p-8"
    >
      {/* Connected Persona 5 Confidant Dossier Assembly */}
      <div className="relative flex flex-col md:flex-row items-center justify-center max-w-5xl lg:max-w-6xl w-full gap-4 md:gap-0">
        {/* Left: Authentic Persona 5 Tarot Card Anchor */}
        <div className="relative z-20 shrink-0 flex flex-col items-center">
          <motion.div
            whileHover={{ rotate: 0, scale: 1.04 }}
            transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
            className="relative aspect-53/98 w-48 sm:w-56 md:w-60 lg:w-64 xl:w-68 -rotate-3 cursor-default select-none filter drop-shadow-[8px_10px_0_#000000]"
          >
            <ExportedImage
              src={arcana.image}
              alt={`${arcana.arcana} - ${arcana.french}`}
              width={530}
              height={980}
              priority={true}
              className="h-full w-full object-contain pointer-events-none select-none"
            />
          </motion.div>
        </div>

        {/* Right: Connected Dossier with Refined Option 3 Architecture */}
        <div className="relative z-10 flex flex-1 flex-col items-stretch max-w-xl lg:max-w-2xl xl:max-w-3xl w-full md:-ml-10 lg:-ml-12 xl:-ml-14 filter drop-shadow-[8px_8px_0_#000000]">
          {/* Hanging Roof Tab for Company (No filler symbols, clean crisp -12deg slant) */}
          <div className="relative -mb-1 z-30 self-start md:pl-10 lg:pl-12 xl:pl-14">
            <div className="inline-block border-4 border-black bg-white px-4 py-1 -skew-x-12 shadow-[3px_3px_0_#d4030d]">
              <span className="font-linux-biolinum text-xs sm:text-sm font-black uppercase tracking-wider text-black block skew-x-12">
                {experience.company}
              </span>
            </div>
          </div>

          {/* Tier 1 Header: Role Title & Balanced Date Row */}
          <div className="relative z-20 flex flex-col items-start border-4 md:border-l-0 border-black bg-white px-4 py-3.5 sm:px-5 sm:py-4 md:pl-14 lg:pl-16 xl:pl-18">
            <h2 className="-skew-x-12 origin-left font-linux-biolinum text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase tracking-tight text-black leading-tight">
              {experience.role}
            </h2>

            {/* Persona Date Row (Clean, No Redundant Symbols) */}
            <div className="mt-2.5 flex items-center gap-2 flex-wrap">
              <span className="font-linux-biolinum text-xs sm:text-sm font-bold tracking-widest text-black/75 uppercase">
                {experience.duration}
              </span>
              <span className="-skew-x-12 bg-black px-2.5 py-0.5 font-linux-biolinum text-[10px] font-black text-white uppercase ml-1 shadow-[2px_2px_0_#d4030d]">
                <span className="block skew-x-12">{experience.durationMonths}</span>
              </span>
            </div>
          </div>

          {/* Tier 2: Arcana & Rank Strip (Unified Left Padding) */}
          <div className="border-4 border-t-0 md:border-l-0 border-black bg-white px-4 py-3.5 sm:px-5 sm:py-4 md:pl-14 lg:pl-16 xl:pl-18">
            <div className="flex items-center justify-between gap-4">
              {/* Arcana Title */}
              <div className="flex items-baseline gap-2">
                <span className="font-linux-biolinum text-xs font-black tracking-widest text-black/60 uppercase">
                  ARCANA
                </span>
                <span className="font-linux-biolinum italic text-xl sm:text-2xl lg:text-3xl font-black text-black">
                  {arcana.name.replace(/^The /i, "")}
                </span>
              </div>

              {/* Rank & Stars */}
              <div className="flex flex-col items-end">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-linux-biolinum text-[11px] sm:text-xs font-black tracking-widest text-black/60 uppercase">
                    RANK
                  </span>
                  <span className="font-linux-biolinum text-lg sm:text-xl lg:text-2xl font-black italic tracking-wider text-black">
                    {isActiveRole ? "ACTIVE" : "10 MAX"}
                  </span>
                </div>
                {/* 10 Star Progress Rating */}
                <div className="flex items-center gap-0.5 text-xs sm:text-sm text-black">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <span
                      key={i}
                      className={isActiveRole && i >= 7 ? "text-black/25" : "text-black"}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tier 3: Bottom Bio Intel Box (Solid Black with White Accents & Unified Padding) */}
          <div className="border-4 border-t-0 md:border-l-0 border-black bg-black p-5 sm:p-6 md:pl-14 lg:pl-16 xl:pl-18 text-white">
            {/* Description Quote */}
            <div className="flex items-start gap-2.5">
              <span className="text-white font-black text-lg sm:text-xl leading-none shrink-0 mt-0.5 select-none">
                ◤
              </span>
              <p className="font-linux-biolinum text-sm sm:text-base md:text-lg font-medium leading-relaxed text-zinc-100">
                {experience.description}
              </p>
            </div>

            {/* Confidant Perks */}
            {experience.skills.length > 0 && (
              <div className="mt-5 flex flex-wrap items-center gap-1.5">
                <span className="font-linux-biolinum text-[10px] sm:text-xs font-black tracking-widest text-zinc-400 uppercase mr-1">
                  PERKS:
                </span>
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="-skew-x-12 bg-white px-2 py-0.5 font-linux-biolinum text-[10px] sm:text-xs font-black tracking-wider text-black uppercase shadow-[2px_2px_0_#d4030d]"
                  >
                    <span className="block skew-x-12">{skill}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
