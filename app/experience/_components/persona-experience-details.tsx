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
      className="relative flex h-full w-full items-center justify-start px-6 py-6 lg:px-12 xl:px-16"
    >
      {/* Isolated Left Stage: The Authentic Persona 5 Major Arcana Card */}
      <div className="relative flex flex-col items-center">
        {/* Floating Card Motion Container */}
        <motion.div
          whileHover={{ rotate: 0, scale: 1.04 }}
          transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
          className="relative aspect-53/98 w-52 sm:w-60 md:w-68 lg:w-72 -rotate-3 cursor-default select-none shadow-[10px_10px_0_#000000]"
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

        {/* Tactical Under-Card Bond Badge */}
        <div className="mt-8 -skew-x-12 bg-foreground px-4 py-1 text-center shadow-[3px_3px_0_#d4030d]">
          <span className="block skew-x-12 font-linux-biolinum text-xs font-black tracking-widest text-background uppercase">
            {isActiveRole ? "CURRENT BOND" : "MAX BOND"} · {experience.durationMonths}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
