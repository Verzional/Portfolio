import { motion } from "motion/react";
import { type ExperienceData } from "@/data/experience";
import { type ArcanaItem } from "./persona-arcana-data";
import { PersonaAbilityGrid } from "./persona-ability-grid";

interface PersonaConfidantDossierProps {
  experience: ExperienceData;
  arcana: ArcanaItem;
}

export function PersonaConfidantDossier({
  experience,
  arcana,
}: PersonaConfidantDossierProps) {
  const isActiveRole = experience.status === "ACTIVE";

  return (
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
          <PersonaAbilityGrid skills={experience.skills} />
        </motion.div>
      </div>
    </motion.div>
  );
}
