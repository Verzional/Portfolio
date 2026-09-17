"use client";

import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";
import { ExperienceData } from "@/data/experience";

// Category Tactical Insignia
function MissionEmblem({ category }: { category: string }) {
  switch (category) {
    case "DEV":
      return (
        <svg viewBox="0 0 100 100" className="h-28 w-28 text-foreground" fill="currentColor">
          {/* Terminal Hexagon Enclosure */}
          <polygon
            points="50,8 86,28 86,72 50,92 14,72 14,28"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
          />
          {/* Terminal Prompt Brackets */}
          <path
            d="M30 38 L44 50 L30 62"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="52" y="58" width="18" height="5" className="text-primary fill-current" />
          {/* Center Circuit Core */}
          <circle cx="50" cy="50" r="5" className="text-primary fill-current" />
          <circle cx="50" cy="24" r="3" className="text-foreground fill-current" />
          <circle cx="50" cy="76" r="3" className="text-foreground fill-current" />
        </svg>
      );
    case "ACAD":
      return (
        <svg viewBox="0 0 100 100" className="h-28 w-28 text-foreground" fill="currentColor">
          {/* Academic Laurel Crest & Mortarboard */}
          <polygon points="50,16 86,34 50,52 14,34" className="text-primary fill-current" />
          <polygon points="50,22 76,34 50,46 24,34" className="text-background fill-current" />
          <path d="M28 44 L28 62 C28 74 72 74 72 62 L72 44" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M82 34 L88 56 L85 74" fill="none" stroke="var(--color-primary)" strokeWidth="3" />
          <circle cx="85" cy="76" r="3.5" className="text-primary fill-current" />
          <path
            d="M18 78 C24 86 40 88 50 88 C60 88 76 86 82 78"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      );
    case "LEAD":
    default:
      return (
        <svg viewBox="0 0 100 100" className="h-28 w-28 text-foreground" fill="currentColor">
          {/* Spiked Command Shield & Star */}
          <polygon
            points="50,12 84,26 84,60 50,90 16,60 16,26"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
          />
          <polygon
            points="50,22 74,34 74,56 50,78 26,56 26,34"
            className="text-primary fill-current"
            opacity="0.35"
          />
          <polygon
            points="50,32 54,44 67,44 57,52 61,64 50,56 39,64 43,52 33,44 46,44"
            className="text-primary fill-current"
          />
          <circle cx="50" cy="50" r="3" className="text-foreground fill-current" />
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
          Select an Experience Record
        </div>
      </div>
    );
  }

  const isActiveRole = experience.status === "ACTIVE";
  const primaryCategory = experience.categories[0] || "DEV";

  return (
    <motion.div
      key={experience.id}
      initial="hidden"
      animate="visible"
      tabIndex={-1}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.04 },
        },
      }}
      className="relative flex h-full w-full flex-col justify-start overflow-x-hidden max-md:overflow-y-auto md:overflow-hidden px-4 py-4 scrollbar-none outline-none focus:outline-none focus-visible:outline-none md:justify-center md:px-8 md:py-6 lg:px-12"
    >
      {/* Subtle Background Watermark Roman Numeral */}
      <div className="pointer-events-none absolute -right-6 -bottom-6 -rotate-6 font-linux-biolinum text-7xl font-black tracking-widest text-foreground opacity-5 select-none [-webkit-text-stroke:1px_currentColor] md:text-9xl">
        {experience.romanNumeral}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-10">
        {/* ───────────────────────────────────────────────────────────── */}
        {/* LEFT COLUMN: TACTICAL MISSION PASS CARD                       */}
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

            {/* Top Mission Banner */}
            <div className="relative z-10 flex w-full items-center justify-between px-2 pt-1">
              <div className="flex items-center gap-1.5 font-linux-biolinum text-xs font-black tracking-[0.25em] text-primary uppercase">
                <span>◆</span>
                <span>MISSION</span>
              </div>
              <span className="font-linux-biolinum text-2xl font-black tracking-widest text-foreground [-webkit-text-stroke:0.5px_currentColor]">
                {experience.romanNumeral}
              </span>
            </div>

            {/* Center Insignia Artwork with Sunburst */}
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

                {/* Category Insignia */}
                <MissionEmblem category={primaryCategory} />
              </div>

              {/* Inked Rubber Stamp Slanted Across Artwork */}
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
                  {isActiveRole ? "★ ACTIVE ROLE ★" : "★ VERIFIED MISSION ★"}
                </motion.div>
              </div>
            </div>

            {/* Bottom Card Title Banner */}
            <div className="relative z-10 flex w-full flex-col items-center border-t-2 border-foreground/25 pt-3 pb-1 text-center">
              <div className="-skew-x-12 bg-foreground px-3.5 py-1 text-background shadow-[3px_3px_0_#d4030d]">
                <span className="block skew-x-12 font-linux-biolinum text-xs font-black tracking-[0.2em] uppercase">
                  {primaryCategory} TRACK // {experience.durationMonths}
                </span>
              </div>
              <span className="mt-2 line-clamp-1 font-lato text-[11px] font-semibold text-muted">
                {experience.company}
              </span>
            </div>
          </motion.div>
        </div>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* RIGHT COLUMN: TACTICAL MISSION DOSSIER & DELIVERABLES         */}
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
          {/* Header Info: Role, Organization & Metadata */}
          <div className="flex flex-col gap-2">
            {/* Category Banner & Meta Badges */}
            <div className="flex flex-wrap items-center gap-2.5 md:gap-3">
              <div className="-skew-x-12 bg-primary px-3 py-0.5 font-linux-biolinum text-[11px] font-black tracking-widest text-foreground shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
                <span className="block skew-x-12">TACTICAL MISSION DOSSIER</span>
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

          {/* Operational Scope & Context Panel */}
          <div className="flex flex-col gap-1.5 border-l-4 border-primary bg-foreground/[0.04] p-3 shadow-[3px_3px_0_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2">
              <span className="font-linux-biolinum text-xs font-black tracking-widest text-primary uppercase">
                OPERATIONAL SCOPE & CONTEXT
              </span>
            </div>

            <p className="font-linux-biolinum text-xs leading-relaxed tracking-wide text-foreground/90">
              {experience.description}
            </p>
          </div>

          {/* Key Technical Deliverables & Impact */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between border-l-4 border-primary pl-2.5 py-0.5">
              <h2 className="font-linux-biolinum text-xs font-black tracking-[0.2em] text-foreground uppercase">
                KEY TECHNICAL DELIVERABLES & IMPACT
              </h2>
              <span className="font-linux-biolinum text-[10px] font-bold tracking-widest text-muted uppercase">
                {experience.deliverables.length} MILESTONES
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {experience.deliverables.map((deliverable) => (
                <div
                  key={deliverable.title}
                  className="group relative flex flex-col -skew-x-6 border border-foreground/20 bg-background/90 p-3 transition-colors hover:border-primary hover:bg-foreground/[0.03] hover:shadow-[3px_3px_0_#d4030d]"
                >
                  {/* Symmetrical Top Row: Title on Left, Domain Badge on Right */}
                  <div className="flex items-center justify-between gap-3 skew-x-6">
                    <span className="font-linux-biolinum text-xs md:text-sm font-black tracking-wide text-foreground uppercase group-hover:text-primary transition-colors">
                      {deliverable.title}
                    </span>
                    <span className="-skew-x-12 shrink-0 border border-primary/50 bg-primary/10 px-2 py-0.5 font-linux-biolinum text-[9px] font-black tracking-wider text-primary uppercase shadow-[1px_1px_0_rgba(0,0,0,0.5)]">
                      <span className="block skew-x-12">{deliverable.tag}</span>
                    </span>
                  </div>

                  {/* Symmetrical Spanning Description Below */}
                  <p className="mt-1.5 font-lato text-xs leading-relaxed text-muted group-hover:text-foreground/90 transition-colors skew-x-6">
                    {deliverable.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Deployed Technologies & Tooling */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            <span className="mr-1 font-linux-biolinum text-[11px] font-bold tracking-widest text-muted uppercase">
              DEPLOYED TECH & TOOLING:
            </span>
            {experience.skills.map((skill) => (
              <div
                key={skill}
                className="-skew-x-12 border border-foreground/40 bg-foreground px-2.5 py-0.5 font-linux-biolinum text-[11px] font-bold tracking-wider text-background shadow-[2px_2px_0_#d4030d] transition-colors hover:border-primary hover:bg-primary hover:text-foreground cursor-default"
              >
                <span className="block skew-x-12">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
