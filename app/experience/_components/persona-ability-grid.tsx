import { motion } from "motion/react";

interface PersonaAbilityGridProps {
  skills: string[];
}

export function PersonaAbilityGrid({ skills }: PersonaAbilityGridProps) {
  if (skills.length === 0) return null;

  return (
    <div className="mt-4 border-t border-zinc-800/80 pt-4 sm:mt-6 sm:pt-5">
      {/* Header Slot Title */}
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
          {skills.length} SLOTS
        </span>
      </div>

      {/* Ability Cards Grid */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {skills.map((skill, index) => (
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
              index === skills.length - 1 && skills.length % 2 !== 0
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
  );
}
