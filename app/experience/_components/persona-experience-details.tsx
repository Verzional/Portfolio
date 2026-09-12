"use client";

import { motion } from "motion/react";
import { Calendar, MapPin, Sparkles } from "lucide-react";
import { ExperienceData } from "@/data/experience";

// Arcana Tarot Emblems
function ArcanaEmblem({ arcanaNumber }: { arcanaNumber: string }) {
  switch (arcanaNumber) {
    case "I": // The Magician: Radiant Starburst + Infinity Lemniscate
      return (
        <svg viewBox="0 0 100 100" className="h-32 w-32 text-primary" fill="currentColor">
          <path d="M50 8 L54 36 L82 40 L54 44 L50 72 L46 44 L18 40 L46 36 Z" />
          <path d="M50 20 L53 37 L70 40 L53 43 L50 60 L47 43 L30 40 L47 37 Z" opacity="0.6" />
          <circle cx="50" cy="40" r="4" className="text-foreground fill-current" />
          <path
            d="M30 82 C20 82 16 72 26 66 C36 60 44 74 50 68 C56 62 64 76 74 70 C84 64 80 82 70 82 C60 82 54 72 50 72 C46 72 40 82 30 82 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
          />
          <circle cx="28" cy="74" r="2.5" />
          <circle cx="72" cy="74" r="2.5" />
        </svg>
      );
    case "IV": // The Emperor: Heraldic Spiked Crown & Fortress Crest
      return (
        <svg viewBox="0 0 100 100" className="h-32 w-32 text-primary" fill="currentColor">
          <path d="M18 68 L24 30 L40 48 L50 20 L60 48 L76 30 L82 68 Z" />
          <rect x="20" y="72" width="60" height="9" rx="2" className="text-foreground fill-current" />
          <rect x="26" y="74" width="48" height="5" rx="1" fill="currentColor" />
          <circle cx="50" cy="18" r="4.5" className="text-foreground fill-current" />
          <circle cx="24" cy="28" r="3.5" className="text-foreground fill-current" />
          <circle cx="76" cy="28" r="3.5" className="text-foreground fill-current" />
          <polygon points="50,42 58,54 50,66 42,54" className="text-foreground fill-current" />
        </svg>
      );
    case "II": // The High Priestess: Dual Crescents & Arcane Grimoire
      return (
        <svg viewBox="0 0 100 100" className="h-32 w-32 text-primary" fill="currentColor">
          <path d="M36 20 C18 36 18 64 36 80 C24 64 24 36 36 20 Z" />
          <path d="M64 20 C82 36 82 64 64 80 C76 64 76 36 64 20 Z" />
          <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="4" />
          <circle cx="50" cy="50" r="10" />
          <polygon points="50,38 53,47 62,50 53,53 50,62 47,53 38,50 47,47" className="text-foreground fill-current" />
          <rect x="38" y="76" width="24" height="5" rx="1" />
        </svg>
      );
    case "V": // The Hierophant: Crossed Keys of Mystery & Sacred Pillars
      return (
        <svg viewBox="0 0 100 100" className="h-32 w-32 text-primary" stroke="currentColor" strokeWidth="4" fill="none">
          <path d="M28 82 L72 18 M38 18 C28 18 22 26 22 35 C22 44 30 48 38 46 L30 54 M66 24 L76 34 M60 30 L70 40" strokeLinecap="round" />
          <path d="M72 82 L28 18 M62 18 C72 18 78 26 78 35 C78 44 70 48 62 46 L70 54 M34 24 L24 34 M40 30 L30 40" strokeLinecap="round" />
          <circle cx="50" cy="22" r="4.5" fill="currentColor" stroke="none" />
          <circle cx="50" cy="50" r="8" fill="currentColor" stroke="none" />
          <circle cx="50" cy="50" r="4" className="text-foreground fill-current" stroke="none" />
        </svg>
      );
    case "VIII": // Justice: Scales of Truth & Sword Hilt
      return (
        <svg viewBox="0 0 100 100" className="h-32 w-32 text-primary" fill="currentColor">
          <path d="M48 10 L52 10 L53 78 L50 88 L47 78 Z" />
          <path d="M16 28 L84 28 L84 32 L16 32 Z" />
          <circle cx="50" cy="14" r="5" className="text-foreground fill-current" />
          <path d="M20 32 L10 56 L30 56 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M8 56 C8 68 32 68 32 56 Z" />
          <path d="M80 32 L70 56 L90 56 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M68 56 C68 68 92 68 92 56 Z" />
        </svg>
      );
    case "VII": // The Chariot: Winged Pegasus Shield
      return (
        <svg viewBox="0 0 100 100" className="h-32 w-32 text-primary" fill="currentColor">
          <path d="M50 16 L84 32 L72 76 L50 92 L28 76 L16 32 Z" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M50 26 L68 40 L62 70 L50 82 L38 70 L32 40 Z" />
          <circle cx="50" cy="52" r="6" className="text-foreground fill-current" />
          <path d="M12 44 L2 28 L20 34 Z" />
          <path d="M88 44 L98 28 L80 34 Z" />
        </svg>
      );
    case "IX": // The Hermit: Lantern of Wisdom & Star Core
      return (
        <svg viewBox="0 0 100 100" className="h-32 w-32 text-primary" fill="currentColor">
          <path d="M38 28 L62 28 L68 76 L32 76 Z" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M42 18 L58 18 L62 28 L38 28 Z" />
          <rect x="30" y="76" width="40" height="7" rx="2" />
          <path d="M50 34 L54 46 L66 50 L54 54 L50 66 L46 54 L34 50 L46 46 Z" className="text-foreground fill-current" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <circle cx="50" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      );
    case "X": // Wheel of Fortune: Alchemical Sun-Wheel
    default:
      return (
        <svg viewBox="0 0 100 100" className="h-32 w-32 text-primary" fill="currentColor">
          <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="4" />
          <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="50" cy="50" r="6" className="text-foreground fill-current" />
          <path d="M50 12 L50 34 M50 66 L50 88 M12 50 L34 50 M66 50 L88 50" stroke="currentColor" strokeWidth="3.5" />
          <path d="M23 23 L39 39 M61 61 L77 77 M77 23 L61 39 M39 61 L23 77" stroke="currentColor" strokeWidth="3.5" />
          <polygon points="50,6 54,12 46,12" />
          <polygon points="50,94 54,88 46,88" />
          <polygon points="6,50 12,54 12,46" />
          <polygon points="94,50 88,54 88,46" />
        </svg>
      );
  }
}

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
          transition: { staggerChildren: 0.04 },
        },
      }}
      className="relative flex h-full w-full flex-col justify-start overflow-x-hidden overflow-y-auto px-4 py-4 scrollbar-none md:justify-center md:px-8 md:py-6 lg:px-12"
    >
      {/* Subtle Background Watermark Arcana */}
      <div className="pointer-events-none absolute -right-6 -bottom-6 -rotate-6 font-linux-biolinum text-7xl font-black tracking-widest text-foreground opacity-5 select-none [-webkit-text-stroke:1px_currentColor] md:text-9xl">
        {experience.arcanaNumber}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-10">
        {/* ───────────────────────────────────────────────────────────── */}
        {/* LEFT COLUMN: THE PERSONA 5 TAROT ARCANA CARD                 */}
        {/* Fixed Authentic Proportion (Never Stretches Vertically)      */}
        {/* ───────────────────────────────────────────────────────────── */}
        <div className="relative shrink-0 -rotate-2">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14, scale: 0.97 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.28, ease: [0.33, 1, 0.68, 1] },
              },
            }}
            className="group relative flex h-[460px] w-[270px] flex-col items-center justify-between border-4 border-foreground bg-background p-4 shadow-[8px_8px_0_#d4030d]"
          >
            {/* Card Inner Ornate Borders */}
            <div className="pointer-events-none absolute inset-1.5 border-2 border-foreground/30" />
            <div className="pointer-events-none absolute inset-2.5 border border-foreground/15" />

            {/* Corner Red Diamond Cutouts */}
            <div className="absolute top-1 left-1 h-3 w-3 bg-primary" />
            <div className="absolute top-1 right-1 h-3 w-3 bg-primary" />
            <div className="absolute bottom-1 left-1 h-3 w-3 bg-primary" />
            <div className="absolute bottom-1 right-1 h-3 w-3 bg-primary" />

            {/* Top Arcana Number Banner */}
            <div className="relative z-10 flex w-full items-center justify-between px-2 pt-1">
              <div className="flex items-center gap-1.5 font-linux-biolinum text-xs font-black tracking-[0.25em] text-primary uppercase">
                <span>◆</span>
                <span>ARCANA</span>
              </div>
              <span className="font-linux-biolinum text-2xl font-black tracking-widest text-foreground [-webkit-text-stroke:0.5px_currentColor]">
                {experience.arcanaNumber}
              </span>
            </div>

            {/* Center Tarot Artwork with Persona Comic Sunburst */}
            <div className="relative my-auto flex flex-col items-center justify-center py-2">
              {/* Persona Halftone / Sunburst Radial Background */}
              <div className="relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-full border-2 border-foreground/30 bg-foreground/[0.03]">
                {/* Geometric Sunburst Rays */}
                <svg viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full opacity-25" fill="currentColor">
                  <polygon points="50,50 40,0 60,0" className="text-primary" />
                  <polygon points="50,50 100,40 100,60" className="text-primary" />
                  <polygon points="50,50 60,100 40,100" className="text-primary" />
                  <polygon points="50,50 0,60 0,40" className="text-primary" />
                  <polygon points="50,50 78,12 88,22" className="text-foreground" />
                  <polygon points="50,50 88,78 78,88" className="text-foreground" />
                  <polygon points="50,50 22,88 12,78" className="text-foreground" />
                  <polygon points="50,50 12,22 22,12" className="text-foreground" />
                </svg>

                {/* Tarot Emblem */}
                <ArcanaEmblem arcanaNumber={experience.arcanaNumber} />
              </div>

              {/* Inked Persona Rubber Stamp Slanted Across Artwork */}
              <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-14 z-20">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 1.35 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.22, delay: 0.08, ease: [0.33, 1, 0.68, 1] },
                    },
                  }}
                  className={`border-4 px-3.5 py-1 font-linux-biolinum text-xs font-black tracking-[0.22em] uppercase select-none shadow-[4px_4px_0_rgba(0,0,0,0.9)] ${
                    isActiveRole
                      ? "border-primary bg-background/95 text-primary"
                      : "border-foreground bg-background/95 text-foreground"
                  }`}
                >
                  {isActiveRole ? "★ ACTIVE LINK ★" : "★ CONFIDANT MAX ★"}
                </motion.div>
              </div>
            </div>

            {/* Bottom Card Title Banner */}
            <div className="relative z-10 flex w-full flex-col items-center border-t-2 border-foreground/25 pt-3 pb-1 text-center">
              <div className="-skew-x-12 bg-foreground px-3.5 py-1 text-background shadow-[3px_3px_0_#d4030d]">
                <span className="block skew-x-12 font-linux-biolinum text-xs font-black tracking-[0.2em] uppercase">
                  {experience.frenchArcana || experience.arcana}
                </span>
              </div>
              <span className="mt-2 line-clamp-1 font-lato text-[11px] font-semibold text-muted">
                {experience.company}
              </span>
            </div>
          </motion.div>
        </div>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* RIGHT COLUMN: CONFIDANT DOSSIER & UNLOCKED ABILITIES          */}
        {/* ───────────────────────────────────────────────────────────── */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.28, ease: [0.33, 1, 0.68, 1] },
            },
          }}
          className="flex min-w-0 flex-1 max-w-xl xl:max-w-2xl flex-col justify-center gap-3.5"
        >
          {/* Header Info: Role, Affiliation & Metadata */}
          <div className="flex flex-col gap-2">
            {/* Category Banner & Meta Badges */}
            <div className="flex flex-wrap items-center gap-2.5 md:gap-3">
              <div className="-skew-x-12 bg-primary px-3 py-0.5 font-linux-biolinum text-[11px] font-black tracking-widest text-foreground shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
                <span className="block skew-x-12">CO-OPERATION DOSSIER</span>
              </div>

              <div className="flex items-center gap-1.5 font-lato text-xs font-semibold text-muted">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                <span>
                  {experience.duration}
                  {experience.durationMonths ? ` · ${experience.durationMonths}` : ""}
                </span>
              </div>

              <div className="flex items-center gap-1.5 font-lato text-xs font-semibold text-muted">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span>
                  {experience.location}
                  {experience.workplaceType ? ` · ${experience.workplaceType}` : ""}
                </span>
              </div>
            </div>

            {/* Role Title with Persona Cutout Shadow */}
            <div className="origin-left">
              <h1 className="font-linux-biolinum text-2xl font-black leading-tight tracking-wide text-foreground uppercase [-webkit-text-stroke:0.5px_currentColor] [text-shadow:3px_3px_0_#d4030d] [text-stroke:0.5px_currentColor] md:text-3xl lg:text-4xl">
                {experience.role}
              </h1>

              {/* Company Affiliation Ribbon */}
              <div className="mt-1 inline-flex items-center gap-2 border-l-4 border-primary bg-foreground/10 px-2.5 py-0.5 -skew-x-12">
                <span className="block skew-x-12 font-linux-biolinum text-xs font-bold tracking-wider text-foreground md:text-sm">
                  {experience.company}
                  {experience.employmentType ? (
                    <>
                      {" "}
                      <span className="font-normal text-primary">·</span>{" "}
                      {experience.employmentType}
                    </>
                  ) : (
                    ""
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Persona Confidant Rank Meter Bar */}
          <div className="flex flex-col gap-2 border-l-4 border-primary bg-foreground/[0.04] p-3 shadow-[3px_3px_0_rgba(0,0,0,0.5)]">
            {/* Rank Level & Gauge Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="-skew-x-12 bg-primary px-2 py-0.5 font-linux-biolinum text-[10px] font-black tracking-widest text-foreground shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
                  <span className="block skew-x-12">RANK</span>
                </span>
                <span className="font-linux-biolinum text-sm font-black tracking-widest text-primary uppercase">
                  {experience.rankTitle.replace("RANK ", "")} ({experience.rankLevel} / {experience.maxRank})
                </span>
              </div>

              <span className="font-linux-biolinum text-[10px] font-bold tracking-[0.2em] text-muted uppercase">
                BOND LEVEL PROGRESSION
              </span>
            </div>

            {/* Segmented Persona Meter Bars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: experience.maxRank }).map((_, i) => {
                const isFilled = i < experience.rankLevel;
                return (
                  <div
                    key={i}
                    className={`flex h-4 flex-1 items-center justify-center -skew-x-20 transition-all duration-300 ${
                      isFilled
                        ? "border border-primary bg-primary shadow-[2px_2px_0_rgba(0,0,0,0.8)]"
                        : "border border-foreground/25 bg-background/60"
                    }`}
                  >
                    {isFilled && (
                      <span className="block skew-x-20 text-[8px] font-black text-foreground">
                        ◆
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="font-linux-biolinum text-xs leading-relaxed tracking-wide text-foreground/90">
              {experience.description}
            </p>
          </div>

          {/* Unlocked Confidant Abilities (Passive Perks) */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-linux-biolinum text-xs font-black tracking-[0.25em] text-foreground uppercase">
              <span className="-skew-x-12 bg-primary px-2 py-0.5 text-[10px] text-foreground font-black">
                <span className="block skew-x-12">PERKS</span>
              </span>
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span>CO-OP ABILITIES UNLOCKED</span>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {experience.abilities.map((ability) => (
                <div
                  key={ability.name}
                  className="group relative flex items-start gap-2.5 -skew-x-6 border border-foreground/20 bg-background/90 p-2 transition-colors hover:border-primary hover:bg-foreground/[0.04] hover:shadow-[3px_3px_0_#d4030d]"
                >
                  {/* Rank Required Flag */}
                  <div className="shrink-0 bg-primary px-2 py-0.5 font-linux-biolinum text-[10px] font-black tracking-wider text-foreground shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
                    <span className="block skew-x-6">{ability.level}</span>
                  </div>

                  {/* Ability Name and Description */}
                  <div className="flex flex-col skew-x-6">
                    <span className="font-linux-biolinum text-xs font-black tracking-wider text-foreground uppercase group-hover:text-primary transition-colors">
                      {"// "}{ability.name}
                    </span>
                    <span className="font-lato text-xs leading-snug text-muted group-hover:text-foreground/90 transition-colors">
                      {ability.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mastered Skills as Persona Skill Cards */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            <span className="mr-1 font-linux-biolinum text-[11px] font-bold tracking-widest text-muted uppercase">
              SKILL CARDS:
            </span>
            {experience.skills.map((skill) => (
              <div
                key={skill}
                className="-skew-x-12 border border-foreground/40 bg-foreground px-2.5 py-0.5 font-linux-biolinum text-[11px] font-bold tracking-wider text-background shadow-[2px_2px_0_#d4030d] transition-colors hover:border-primary hover:bg-primary hover:text-foreground cursor-default"
              >
                <span className="block skew-x-12">◆ {skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
