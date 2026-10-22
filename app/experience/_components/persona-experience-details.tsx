"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { type ExperienceData } from "@/data/experience";
import { getArcana } from "./persona-arcana-data";
import { PersonaTarotCard } from "./persona-tarot-card";
import { PersonaConfidantDossier } from "./persona-confidant-dossier";

interface PersonaExperienceDetailsProps {
  experience: ExperienceData | null;
}

export function PersonaExperienceDetails({
  experience,
}: PersonaExperienceDetailsProps) {
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

  const arcana = getArcana(experience.romanNumeral);

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
        <PersonaTarotCard arcana={arcana} />
        <PersonaConfidantDossier experience={experience} arcana={arcana} />
      </div>
    </motion.div>
  );
}
