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
        {/* Left: Authentic Persona 5 Tarot Card */}
        <div className="relative z-20 shrink-0 flex flex-col items-center">
          <motion.div
            whileHover={{ rotate: 0, scale: 1.04 }}
            transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
            className="relative aspect-53/98 w-48 sm:w-56 md:w-60 lg:w-68 xl:w-72 -rotate-3 cursor-default select-none"
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

        {/* Right: Connected Black & White Dossier Panel (Title Box Top + Content Box Below) */}
        <div className="relative z-10 flex flex-1 flex-col items-stretch max-w-xl lg:max-w-2xl xl:max-w-3xl w-full md:-ml-10 lg:-ml-12 xl:-ml-14">
          {/* Top Title Box (Consistent 3-Tier Hierarchy: Company Badge, Role, Duration) */}
          <div className="relative z-10 flex flex-col items-start gap-1 border-4 md:border-l-0 border-black bg-white px-4 py-2.5 sm:px-5 sm:py-3 md:pl-14 lg:pl-16 xl:pl-18">
            <span className="shrink-0 -skew-x-12 bg-black px-2 py-0.5 font-linux-biolinum text-[10px] sm:text-[11px] font-black text-white uppercase">
              <span className="block skew-x-12">{experience.company}</span>
            </span>
            <h2 className="font-linux-biolinum text-sm sm:text-base md:text-lg lg:text-xl font-black tracking-wide text-black uppercase">
              {experience.role}
            </h2>
            <span className="font-linux-biolinum text-xs font-bold tracking-widest text-black/60">
              {experience.duration}
            </span>
          </div>

          {/* Bottom Content Box (Fuses with Top Title Box) */}
          <div className="border-4 border-t-0 md:border-l-0 border-black bg-white p-5 sm:p-6 md:pl-16 lg:pl-18 xl:pl-20">
            {/* Top Row: Arcana & Rank Header */}
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

            {/* Middle Row: Quote Icon + Description */}
            <div className="mt-4 flex items-start gap-2.5">
              <span className="text-black font-black text-lg sm:text-xl leading-none shrink-0 mt-0.5 select-none">
                ◤
              </span>
              <p className="font-linux-biolinum text-sm sm:text-base md:text-lg font-semibold leading-relaxed text-black">
                {experience.description}
              </p>
            </div>

            {/* Bottom Row: Confidant Skills & Perks */}
            {experience.skills.length > 0 && (
              <div className="mt-5 flex flex-wrap items-center gap-1.5">
                <span className="font-linux-biolinum text-[10px] sm:text-xs font-black tracking-widest text-black/60 uppercase mr-1">
                  PERKS:
                </span>
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="-skew-x-12 bg-black px-2 py-0.5 font-linux-biolinum text-[10px] sm:text-xs font-bold tracking-wider text-white uppercase shadow-[2px_2px_0_#d4030d]"
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
