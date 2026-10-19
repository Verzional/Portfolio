"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ExperienceData } from "@/data/experience";
import { useIdlePreload } from "@/hooks/use-idle-preload";

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
    french: "L'ERMITE",
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

export function PersonaExperienceDetails({
  experience,
}: PersonaExperienceDetailsProps) {
  const shouldPreload = useIdlePreload();
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto Reset Scroll Position on Selection
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [experience?.id]);

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

  const arcana = arcanaMap[experience.romanNumeral] || {
    arcana: experience.romanNumeral,
    name: "The Fool",
    french: "LE MAT",
    image: "/images/tarot/0-fool.webp",
  };
  const isActiveRole = experience.status === "ACTIVE";

  return (
    <motion.div
      ref={containerRef}
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
      className="relative flex h-full w-full scrollbar-none justify-start overflow-x-hidden overflow-y-auto p-3 pt-6 pb-20 md:items-center md:justify-center md:p-6 md:pb-6 lg:p-8"
    >
      {/* Confidant Dossier Assembly */}
      <div className="relative my-auto flex w-full max-w-5xl flex-col items-center justify-center gap-6 md:flex-row md:gap-0 lg:max-w-6xl">
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
          className="relative z-20 flex shrink-0 flex-col items-center"
        >
          <div className="relative aspect-53/98 w-36 -rotate-3 cursor-default drop-shadow-[6px_8px_0_#000000] filter select-none sm:w-48 md:w-64 md:drop-shadow-[8px_10px_0_#000000] lg:w-76 xl:w-84">
            <Image
              src={arcana.image}
              alt={`${arcana.arcana} - ${arcana.french}`}
              width={530}
              height={980}
              priority={true}
              className="pointer-events-none h-full w-full object-contain select-none"
            />
          </div>

          {/* Preload Other Tarot Cards for Instant Navigation */}
          {shouldPreload && (
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
          )}
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
          className="relative z-10 flex w-full max-w-xl flex-1 flex-col items-stretch md:-ml-10 lg:-ml-12 lg:max-w-2xl xl:-ml-14 xl:max-w-3xl"
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
            className="relative z-30 -mb-1 self-start md:pl-8 lg:pl-9 xl:pl-10"
          >
            <div className="inline-block skew-x-12 border-3 border-black bg-white px-3 py-1 shadow-[3px_0_0_#d4030d] sm:border-4 sm:px-4">
              <span className="block max-w-65 -skew-x-12 truncate font-linux-biolinum text-[10px] font-black tracking-wider text-black uppercase sm:max-w-none sm:text-xs md:text-sm">
                {experience.company}
              </span>
            </div>
          </motion.div>

          {/* Connected Dossier Body Assembly */}
          <div className="flex flex-col shadow-[6px_6px_0_#000000] md:shadow-[8px_8px_0_#000000]">
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
              className="relative z-20 flex flex-col items-start border-4 border-black bg-white px-3.5 py-3 sm:px-5 sm:py-4 md:border-l-0 md:pl-14 lg:pl-16 xl:pl-18"
            >
              <h2 className="font-linux-biolinum text-sm leading-tight font-black tracking-tight text-black uppercase italic sm:text-base md:text-xl lg:text-2xl">
                {experience.role}
              </h2>

              {/* Duration Pill Row */}
              <div className="mt-2 flex flex-wrap items-center gap-2 sm:mt-2.5">
                <span className="font-linux-biolinum text-xs font-bold tracking-widest text-black/75 uppercase sm:text-sm">
                  {experience.duration}
                </span>
                <span className="ml-1 skew-x-12 bg-black px-2 py-0.5 font-linux-biolinum text-[9px] font-black text-white uppercase shadow-[2px_2px_0_#d4030d] sm:px-2.5 sm:text-[10px]">
                  <span className="block -skew-x-12">
                    {experience.durationMonths}
                  </span>
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
              className="border-4 border-t-0 border-black bg-white px-3.5 py-3 sm:px-5 sm:py-4 md:border-l-0 md:pl-14 lg:pl-16 xl:pl-18"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 sm:flex-nowrap sm:gap-4">
                {/* Arcana Title */}
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className="font-linux-biolinum text-[10px] font-black tracking-widest text-black/60 uppercase sm:text-xs">
                    ARCANA
                  </span>
                  <span className="font-linux-biolinum text-lg font-black text-black italic sm:text-2xl lg:text-3xl">
                    {arcana.name.replace(/^The /i, "")}
                  </span>
                </div>

                {/* Rank And Stars Counter */}
                <div
                  className="flex flex-col items-start sm:items-end"
                  aria-label={isActiveRole ? "Rank: Active" : "Rank: 10 Max"}
                >
                  <div className="flex items-baseline gap-1 sm:gap-1.5">
                    <span className="font-linux-biolinum text-[10px] font-black tracking-widest text-black/60 uppercase sm:text-xs">
                      RANK
                    </span>
                    <span className="font-linux-biolinum text-base font-black tracking-wider text-black italic sm:text-xl lg:text-2xl">
                      {isActiveRole ? "ACTIVE" : "10 MAX"}
                    </span>
                  </div>
                  {/* Star Progress Rating */}
                  <div
                    className="flex items-center gap-0.5 text-xs text-black sm:text-sm"
                    aria-hidden="true"
                  >
                    {Array.from({ length: 10 }).map((_, i) => (
                      <span
                        key={i}
                        className={
                          isActiveRole && i >= 7
                            ? "text-black/25"
                            : "text-black"
                        }
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
              className="border-4 border-t-0 border-black bg-black p-4 text-white sm:p-5 md:border-l-0 md:p-6 md:pl-16 lg:pl-18 xl:pl-20"
            >
              {/* Description Quote */}
              <div className="flex items-start gap-2 sm:gap-2.5">
                <span className="mt-0.5 shrink-0 text-base leading-none font-black text-white select-none sm:text-lg">
                  ◤
                </span>
                <p className="font-linux-biolinum text-xs leading-relaxed font-medium text-zinc-100 sm:text-sm md:text-base lg:text-lg">
                  {experience.description}
                </p>
              </div>

              {/* Confidant Abilities Grid */}
              {experience.skills.length > 0 && (
                <div className="mt-4 border-t border-zinc-800/80 pt-4 sm:mt-6 sm:pt-5">
                  <div className="mb-2.5 flex items-baseline justify-between border-b border-zinc-800/80 pb-2 sm:mb-3">
                    <div className="flex items-baseline gap-1.5 sm:gap-2">
                      <span className="font-linux-biolinum text-[10px] font-black tracking-widest text-red-500 uppercase sm:text-xs">
                        CONFIDANT
                      </span>
                      <span className="font-linux-biolinum text-xs font-black tracking-wider text-white italic sm:text-sm md:text-base">
                        ABILITIES
                      </span>
                    </div>
                    <span className="font-linux-biolinum text-[10px] font-black tracking-widest text-zinc-400 uppercase sm:text-[11px]">
                      {experience.skills.length} SLOTS
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {experience.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        variants={{
                          hidden: { opacity: 0, scale: 0.92, y: 12 },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 22,
                            },
                          },
                        }}
                        whileHover={{
                          y: -2,
                          transition: { duration: 0.15, ease: "easeOut" },
                        }}
                        className={`flex cursor-default items-center gap-2 border border-zinc-800 bg-zinc-900/60 px-2.5 py-1.5 transition-colors hover:border-[#d4030d] sm:px-3 sm:py-2 ${
                          index === experience.skills.length - 1 &&
                          experience.skills.length % 2 !== 0
                            ? "sm:col-span-2"
                            : ""
                        }`}
                      >
                        <span className="shrink-0 text-[10px] leading-none font-black text-red-500 select-none sm:text-xs">
                          ◤
                        </span>
                        <span className="truncate font-linux-biolinum text-[11px] font-black tracking-wider text-zinc-100 uppercase sm:text-xs md:text-sm">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
