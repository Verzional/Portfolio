"use client";

import Image from "next/image";
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
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.04,
          },
        },
      }}
      className="relative flex h-full w-full items-center justify-center p-4 md:p-6 lg:p-8"
    >
      {/* Confidant Dossier Assembly */}
      <div className="relative flex flex-col md:flex-row items-center justify-center max-w-5xl lg:max-w-6xl w-full gap-4 md:gap-0">
        {/* Major Arcana Tarot Card Anchor */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -60, scale: 0.94 },
            visible: {
              opacity: 1,
              x: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 300, damping: 25 },
            },
          }}
          className="relative z-20 shrink-0 flex flex-col items-center"
        >
          <div
            className="relative aspect-53/98 w-50 sm:w-58 md:w-68 lg:w-76 xl:w-84 -rotate-3 cursor-default select-none filter drop-shadow-[8px_10px_0_#000000]"
          >
            <Image
              src={arcana.image}
              alt={`${arcana.arcana} - ${arcana.french}`}
              width={530}
              height={980}
              priority={true}
              className="h-full w-full object-contain pointer-events-none select-none"
            />
          </div>

          {/* Preload Other Tarot Cards for Instant Navigation */}
          <div
            className="pointer-events-none fixed inset-0 -z-50 overflow-hidden opacity-0"
            aria-hidden="true"
          >
            {Object.values(arcanaMap)
              .filter((item) => item.image !== arcana.image)
              .map((item) => (
                <Image
                  key={item.image}
                  src={item.image}
                  alt=""
                  width={530}
                  height={980}
                />
              ))}
          </div>
        </motion.div>

        {/* Confidant Dossier Panel */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                staggerChildren: 0.06,
              },
            },
          }}
          className="relative z-10 flex flex-1 flex-col items-stretch max-w-xl lg:max-w-2xl xl:max-w-3xl w-full md:-ml-10 lg:-ml-12 xl:-ml-14 filter drop-shadow-[8px_8px_0_#000000]"
        >
          {/* Company Hanging Tab */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20, scale: 0.95 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 350, damping: 22 },
              },
            }}
            className="relative -mb-1 z-30 self-start md:pl-8 lg:pl-9 xl:pl-10"
          >
            <div className="inline-block border-4 border-black bg-white px-4 py-1 skew-x-12 shadow-[3px_0_0_#d4030d]">
              <span className="font-linux-biolinum text-xs sm:text-sm font-black uppercase tracking-wider text-black block -skew-x-12">
                {experience.company}
              </span>
            </div>
          </motion.div>

          {/* Role Title And Duration Header */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 350, damping: 25 },
              },
            }}
            className="relative z-20 flex flex-col items-start border-4 md:border-l-0 border-black bg-white px-4 py-3.5 sm:px-5 sm:py-4 md:pl-14 lg:pl-16 xl:pl-18"
          >
            <h2 className="font-linux-biolinum italic text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase tracking-tight text-black leading-tight">
              {experience.role}
            </h2>

            {/* Duration Pill Row */}
            <div className="mt-2.5 flex items-center gap-2 flex-wrap">
              <span className="font-linux-biolinum text-xs sm:text-sm font-bold tracking-widest text-black/75 uppercase">
                {experience.duration}
              </span>
              <span className="skew-x-12 bg-black px-2.5 py-0.5 font-linux-biolinum text-[10px] font-black text-white uppercase ml-1 shadow-[2px_2px_0_#d4030d]">
                <span className="block -skew-x-12">{experience.durationMonths}</span>
              </span>
            </div>
          </motion.div>

          {/* Arcana And Rank Strip */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 350, damping: 25 },
              },
            }}
            className="border-4 border-t-0 md:border-l-0 border-black bg-white px-4 py-3.5 sm:px-5 sm:py-4 md:pl-14 lg:pl-16 xl:pl-18"
          >
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

              {/* Rank And Stars Counter */}
              <div className="flex flex-col items-end">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-linux-biolinum text-[11px] sm:text-xs font-black tracking-widest text-black/60 uppercase">
                    RANK
                  </span>
                  <span className="font-linux-biolinum text-lg sm:text-xl lg:text-2xl font-black italic tracking-wider text-black">
                    {isActiveRole ? "ACTIVE" : "10 MAX"}
                  </span>
                </div>
                {/* Star Progress Rating */}
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
          </motion.div>

          {/* Confidant Bio Intel Box */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 320,
                  damping: 24,
                  staggerChildren: 0.05,
                },
              },
            }}
            className="border-4 border-t-0 md:border-l-0 border-black bg-black p-5 sm:p-6 md:pl-16 lg:pl-18 xl:pl-20 text-white"
          >
            {/* Description Quote */}
            <div className="flex items-start gap-2.5">
              <span className="text-white font-black text-lg sm:text-xl leading-none shrink-0 mt-0.5 select-none">
                ◤
              </span>
              <p className="font-linux-biolinum text-sm sm:text-base md:text-lg font-medium leading-relaxed text-zinc-100">
                {experience.description}
              </p>
            </div>

            {/* Confidant Abilities Grid */}
            {experience.skills.length > 0 && (
              <div className="mt-6 pt-5 border-t border-zinc-800/80">
                <div className="flex items-baseline justify-between mb-3 border-b border-zinc-800/80 pb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-linux-biolinum text-xs font-black tracking-widest text-[#d4030d] uppercase">
                      CONFIDANT
                    </span>
                    <span className="font-linux-biolinum italic text-sm sm:text-base font-black tracking-wider text-white">
                      ABILITIES
                    </span>
                  </div>
                  <span className="font-linux-biolinum text-[11px] font-black tracking-widest text-zinc-400 uppercase">
                    {experience.skills.length} SLOTS
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {experience.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      variants={{
                        hidden: { opacity: 0, scale: 0.92, y: 12 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: { type: "spring", stiffness: 400, damping: 22 },
                        },
                      }}
                      whileHover={{ y: -2, transition: { duration: 0.15, ease: "easeOut" } }}
                      className={`flex items-center gap-2.5 border border-zinc-800 bg-zinc-900/60 px-3 py-2 transition-colors hover:border-[#d4030d] cursor-default ${
                        index === experience.skills.length - 1 && experience.skills.length % 2 !== 0
                          ? "sm:col-span-2"
                          : ""
                      }`}
                    >
                      <span className="text-[#d4030d] font-black text-xs leading-none select-none shrink-0">
                        ◤
                      </span>
                      <span className="font-linux-biolinum text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-100 truncate">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
