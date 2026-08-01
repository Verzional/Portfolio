import { ExperienceData } from "@/data/experience";
import { motion, AnimatePresence } from "motion/react";

interface TaleDetailsProps {
  experience: ExperienceData;
}

export function TaleDetails({ experience }: TaleDetailsProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={experience.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="flex h-full w-full flex-col justify-center px-8 md:max-w-2xl md:px-16 lg:max-w-3xl"
      >
        {/* Identify Employer */}
        <h1 className="mb-4 font-lato text-3xl font-light tracking-[0.15em] text-white uppercase md:text-5xl">
          {experience.company}
        </h1>

        {/* Detail Role Timeline */}
        <p className="mb-12 font-lato text-base leading-relaxed tracking-wide text-white/70 md:text-lg">
          Served as <span className="text-white">{experience.role}</span> from{" "}
          <span className="text-white">{experience.duration}</span>.
        </p>

        {/* Group Acquired Rewards */}
        <div className="mb-8 flex w-full flex-col">
          <div className="bg-[#151515] px-4 py-2 font-lato text-xs tracking-[0.2em] text-white/50 uppercase md:text-sm">
            Rewards
          </div>
          <div className="flex min-h-[100px] flex-wrap items-center gap-8 bg-[#151515] px-6 pb-6 pt-2">
            {experience.rewards.map((reward, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-3 text-center"
              >
                {/* Display Visual Reward Indicator */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 shadow-inner">
                  <div className="h-6 w-6 rotate-45 border border-white/30" />
                </div>
                <span className="max-w-[120px] font-lato text-xs tracking-wider text-white/70 md:text-sm">
                  {reward}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* List Key Achievements */}
        <div className="flex w-full flex-col">
          <div className="bg-[#151515] px-4 py-2 font-lato text-xs tracking-[0.2em] text-white/50 uppercase md:text-sm">
            Objectives
          </div>
          <div className="flex flex-col gap-4 bg-[#151515] px-6 pb-8 pt-4">
            {experience.objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-4">
                {/* Style List Bullet */}
                <div className="mt-1.5 flex h-3 w-3 shrink-0 rotate-45 items-center justify-center border border-white/50 bg-white/10" />
                <span className="font-lato text-sm leading-relaxed tracking-wide text-white/80 md:text-base">
                  {obj}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
