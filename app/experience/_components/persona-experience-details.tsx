"use client";

import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { ExperienceData } from "@/data/experience";

// Arcana Thematic Titles
const arcanaMap: Record<string, string> = {
  DEV: "THE TECHNOLOGIST",
  ACAD: "THE SCHOLAR",
  LEAD: "THE EMPEROR",
};

// Full-Frame High-Contrast Persona 5 Major Arcana Engravings
function ArcanaEmblem({ category }: { category: string }) {
  switch (category) {
    case "DEV":
      return (
        <svg viewBox="0 0 200 280" className="h-full w-full" fill="none">
          {/* Background Circuit Grid & Halo */}
          <g stroke="currentColor" strokeWidth="1" opacity="0.12">
            <line x1="100" y1="10" x2="100" y2="270" strokeDasharray="3 3" />
            <line x1="10" y1="140" x2="190" y2="140" strokeDasharray="3 3" />
            <circle cx="100" cy="140" r="95" strokeDasharray="4 4" />
            <circle cx="100" cy="140" r="65" strokeDasharray="2 2" />
          </g>

          {/* Left Data Pillar */}
          <rect x="14" y="35" width="12" height="210" className="fill-background" stroke="currentColor" strokeWidth="2" />
          <line x1="20" y1="42" x2="20" y2="238" stroke="var(--color-primary)" strokeWidth="1.5" strokeDasharray="6 3" />
          <rect x="12" y="30" width="16" height="6" className="fill-primary" />
          <rect x="12" y="244" width="16" height="6" className="fill-current" />

          {/* Right Data Pillar */}
          <rect x="174" y="35" width="12" height="210" className="fill-background" stroke="currentColor" strokeWidth="2" />
          <line x1="180" y1="42" x2="180" y2="238" stroke="var(--color-primary)" strokeWidth="1.5" strokeDasharray="6 3" />
          <rect x="172" y="30" width="16" height="6" className="fill-primary" />
          <rect x="172" y="244" width="16" height="6" className="fill-current" />

          {/* Top Floating Infinity Symbol */}
          <path
            d="M84,32 C74,22 62,32 72,42 C82,52 94,22 104,32 C114,42 126,32 116,22 C106,12 94,42 84,32 Z"
            stroke="var(--color-primary)"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Radiating Bus Lines from Top to Core */}
          <line x1="100" y1="48" x2="100" y2="76" stroke="currentColor" strokeWidth="2" />
          <circle cx="100" cy="76" r="3.5" className="fill-primary" />

          {/* Outer Cybernetic Hex Shield */}
          <polygon
            points="100,68 156,100 156,180 100,212 44,180 44,100"
            className="fill-background"
            stroke="currentColor"
            strokeWidth="3"
          />
          <polygon
            points="100,76 148,104 148,176 100,204 52,176 52,104"
            className="fill-foreground/[0.03]"
            stroke="var(--color-primary)"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />

          {/* Hex Shield Corner Nodes */}
          <rect x="96" y="64" width="8" height="8" className="fill-primary" />
          <rect x="152" y="96" width="8" height="8" className="fill-current" />
          <rect x="152" y="176" width="8" height="8" className="fill-current" />
          <rect x="96" y="208" width="8" height="8" className="fill-primary" />
          <rect x="40" y="176" width="8" height="8" className="fill-current" />
          <rect x="40" y="96" width="8" height="8" className="fill-current" />

          {/* Horizontal Bus Bridges to Pillars */}
          <path d="M26,140 L44,140" stroke="currentColor" strokeWidth="2" />
          <circle cx="35" cy="140" r="2.5" className="fill-primary" />
          <path d="M156,140 L174,140" stroke="currentColor" strokeWidth="2" />
          <circle cx="165" cy="140" r="2.5" className="fill-primary" />

          {/* Central Processor Unit */}
          <rect
            x="66"
            y="106"
            width="68"
            height="68"
            rx="5"
            className="fill-background"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <rect
            x="72"
            y="112"
            width="56"
            height="56"
            rx="3"
            className="fill-foreground/[0.04]"
            stroke="var(--color-primary)"
            strokeWidth="1.5"
          />

          {/* Bold Code Brackets < / > */}
          <path
            d="M84,124 L75,140 L84,156"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="105"
            y1="123"
            x2="95"
            y2="157"
            stroke="var(--color-primary)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M116,124 L125,140 L116,156"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Base Dais Circuit Tracks */}
          <path d="M72,212 L72,236 L40,236" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M128,212 L128,236 L160,236" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="40" cy="236" r="3" className="fill-primary" />
          <circle cx="160" cy="236" r="3" className="fill-primary" />
          <rect x="50" y="244" width="100" height="8" className="fill-background" stroke="currentColor" strokeWidth="2" />
          <rect x="70" y="246" width="60" height="4" className="fill-primary" />
        </svg>
      );
    case "ACAD":
      return (
        <svg viewBox="0 0 200 280" className="h-full w-full" fill="none">
          {/* Background Radiant Geometry */}
          <g stroke="currentColor" strokeWidth="1" opacity="0.12">
            <line x1="100" y1="15" x2="100" y2="265" strokeDasharray="3 3" />
            <circle cx="100" cy="135" r="95" strokeDasharray="4 4" />
            <circle cx="100" cy="135" r="65" strokeDasharray="2 2" />
          </g>

          {/* Left Classical Temple Pillar */}
          <rect x="14" y="35" width="12" height="210" className="fill-background" stroke="currentColor" strokeWidth="2" />
          <line x1="20" y1="42" x2="20" y2="238" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <rect x="10" y="30" width="20" height="6" className="fill-primary" />
          <rect x="10" y="244" width="20" height="6" className="fill-current" />

          {/* Right Classical Temple Pillar */}
          <rect x="174" y="35" width="12" height="210" className="fill-background" stroke="currentColor" strokeWidth="2" />
          <line x1="180" y1="42" x2="180" y2="238" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <rect x="170" y="30" width="20" height="6" className="fill-primary" />
          <rect x="170" y="244" width="20" height="6" className="fill-current" />

          {/* Grand Laurel Wreaths Climbing Both Sides */}
          <path d="M42,210 C26,170 26,90 54,48" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M28,180 C20,174 26,164 36,170" className="fill-primary stroke-primary" strokeWidth="1" />
          <path d="M24,148 C16,142 22,132 32,138" className="fill-current stroke-current" strokeWidth="1" />
          <path d="M26,116 C18,110 24,100 34,106" className="fill-primary stroke-primary" strokeWidth="1" />
          <path d="M34,84 C26,78 32,68 42,74" className="fill-current stroke-current" strokeWidth="1" />
          <path d="M46,56 C38,50 44,40 54,46" className="fill-primary stroke-primary" strokeWidth="1" />

          <path d="M158,210 C174,170 174,90 146,48" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M172,180 C180,174 174,164 164,170" className="fill-primary stroke-primary" strokeWidth="1" />
          <path d="M176,148 C184,142 178,132 168,138" className="fill-current stroke-current" strokeWidth="1" />
          <path d="M174,116 C182,110 176,100 166,106" className="fill-primary stroke-primary" strokeWidth="1" />
          <path d="M166,84 C174,78 168,68 158,74" className="fill-current stroke-current" strokeWidth="1" />
          <path d="M154,56 C162,50 156,40 146,46" className="fill-primary stroke-primary" strokeWidth="1" />

          {/* Mortarboard / Academic Cap Crown */}
          <polygon points="100,26 156,48 100,70 44,48" className="fill-primary" stroke="currentColor" strokeWidth="2.5" />
          <polygon points="100,34 142,48 100,62 58,48" className="fill-background" />
          <path d="M68,60 L68,78 C68,92 132,92 132,78 L132,60" fill="none" stroke="currentColor" strokeWidth="2.5" />
          {/* Tassel */}
          <path d="M146,48 L154,76 L150,96" stroke="var(--color-primary)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="150" cy="100" r="4" className="fill-primary" />

          {/* Glowing Arcane Star of Knowledge */}
          <polygon points="100,94 103,103 112,103 105,109 108,118 100,112 92,118 95,109 88,103 97,103" className="fill-primary stroke-foreground" strokeWidth="1" />

          {/* Grand Open Grimoire of Knowledge */}
          <path
            d="M48,138 C68,132 88,136 100,146 C112,136 132,132 152,138 L152,196 C132,190 112,194 100,204 C88,194 68,190 48,196 Z"
            className="fill-background"
            stroke="currentColor"
            strokeWidth="3"
          />
          <line x1="100" y1="146" x2="100" y2="204" stroke="var(--color-primary)" strokeWidth="3" />
          <path d="M100,204 L100,224 L104,220 L108,224 L108,202" className="fill-primary" />

          {/* Text Page Etchings */}
          <line x1="56" y1="152" x2="88" y2="152" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <line x1="56" y1="162" x2="86" y2="162" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <line x1="56" y1="172" x2="88" y2="172" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <line x1="56" y1="182" x2="82" y2="182" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />

          <line x1="112" y1="152" x2="144" y2="152" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <line x1="114" y1="162" x2="144" y2="162" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <line x1="112" y1="172" x2="144" y2="172" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <line x1="118" y1="182" x2="144" y2="182" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />

          {/* Pedestal Base */}
          <rect x="40" y="238" width="120" height="12" className="fill-background" stroke="currentColor" strokeWidth="2.5" />
          <rect x="60" y="242" width="80" height="4" className="fill-primary" />
        </svg>
      );
    case "LEAD":
    default:
      return (
        <svg viewBox="0 0 200 280" className="h-full w-full" fill="none">
          {/* Background Radiant Lines */}
          <g stroke="currentColor" strokeWidth="1" opacity="0.12">
            <line x1="100" y1="15" x2="100" y2="265" strokeDasharray="3 3" />
            <circle cx="100" cy="135" r="95" strokeDasharray="4 4" />
            <circle cx="100" cy="135" r="65" strokeDasharray="2 2" />
          </g>

          {/* Left Imperial Fluted Column */}
          <rect x="14" y="35" width="12" height="210" className="fill-background" stroke="currentColor" strokeWidth="2" />
          <line x1="20" y1="42" x2="20" y2="238" stroke="var(--color-primary)" strokeWidth="1.5" strokeDasharray="4 2" />
          <rect x="10" y="30" width="20" height="6" className="fill-primary" />
          <rect x="10" y="244" width="20" height="6" className="fill-current" />

          {/* Right Imperial Fluted Column */}
          <rect x="174" y="35" width="12" height="210" className="fill-background" stroke="currentColor" strokeWidth="2" />
          <line x1="180" y1="42" x2="180" y2="238" stroke="var(--color-primary)" strokeWidth="1.5" strokeDasharray="4 2" />
          <rect x="170" y="30" width="20" height="6" className="fill-primary" />
          <rect x="170" y="244" width="20" height="6" className="fill-current" />

          {/* Dual Crossed Command Swords Behind Shield */}
          <line x1="32" y1="40" x2="168" y2="228" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="25" y1="31" x2="43" y2="51" stroke="var(--color-primary)" strokeWidth="3" />
          <circle cx="23" cy="29" r="4.5" className="fill-primary" />

          <line x1="168" y1="40" x2="32" y2="228" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="175" y1="31" x2="157" y2="51" stroke="var(--color-primary)" strokeWidth="3" />
          <circle cx="177" cy="29" r="4.5" className="fill-primary" />

          {/* Imperial Sovereign Coronet */}
          <path
            d="M62,60 L70,36 L84,48 L100,28 L116,48 L130,36 L138,60 Z"
            className="fill-primary stroke-foreground"
            strokeWidth="2.5"
          />
          <circle cx="70" cy="34" r="3" className="fill-foreground" />
          <circle cx="100" cy="25" r="3.5" className="fill-foreground" />
          <circle cx="130" cy="34" r="3" className="fill-foreground" />

          {/* Grand Imperial Command Shield */}
          <polygon
            points="100,64 158,84 158,154 100,210 42,154 42,84"
            className="fill-background"
            stroke="currentColor"
            strokeWidth="3.5"
          />
          <polygon
            points="100,76 146,92 146,148 100,196 54,148 54,92"
            className="fill-foreground/[0.03]"
            stroke="var(--color-primary)"
            strokeWidth="2"
          />

          {/* Radiant 8-Pointed Command Star */}
          <polygon
            points="100,92 106,114 128,120 106,126 100,148 94,126 72,120 94,114"
            className="fill-primary stroke-foreground"
            strokeWidth="2.5"
          />
          <polygon
            points="100,102 104,116 118,120 104,124 100,138 96,124 82,120 96,116"
            className="fill-foreground"
          />
          <circle cx="100" cy="120" r="5" className="fill-primary" />

          {/* Flanking Laurels of Sovereignty */}
          <path d="M48,110 C36,125 36,155 48,175" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M152,110 C164,125 164,155 152,175" stroke="currentColor" strokeWidth="2" fill="none" />

          {/* Bottom Imperial Dais */}
          <rect x="45" y="238" width="110" height="12" className="fill-background" stroke="currentColor" strokeWidth="2.5" />
          <rect x="65" y="242" width="70" height="4" className="fill-primary" />
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
  const primaryCategory = experience.categories[0] || "DEV";
  const arcanaTitle = arcanaMap[primaryCategory] || `${primaryCategory} ARCANA`;

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
          transition: { staggerChildren: 0.05 },
        },
      }}
      className="relative flex h-full w-full flex-col justify-start overflow-x-hidden max-md:overflow-y-auto md:overflow-hidden px-4 py-3 scrollbar-none outline-none focus:outline-none focus-visible:outline-none md:justify-center md:px-6 lg:px-8 xl:px-12"
    >
      {/* Main Confidant Stage: Zero Scroll, Compact & Balanced */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl xl:max-w-6xl flex-col items-center justify-center gap-5 lg:flex-row lg:items-center lg:gap-8 xl:gap-10">
        {/* Left Column: Compact Tarot Arcana Card & Bond Ledger */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 14, scale: 0.96, rotate: -4 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              rotate: -2,
              transition: { duration: 0.35, ease: [0.33, 1, 0.68, 1] },
            },
          }}
          className="flex w-full max-w-[215px] lg:max-w-[230px] xl:max-w-[245px] shrink-0 flex-col items-center justify-between"
        >
          {/* Tarot Card Object */}
          <div className="group relative flex aspect-[1/1.52] w-full flex-col justify-between border-3 md:border-4 border-foreground bg-background p-2.5 lg:p-3 shadow-[6px_6px_0_#d4030d] transition-transform duration-300 hover:rotate-0">
            {/* Inner Ornate Borders */}
            <div className="pointer-events-none absolute inset-1 border border-foreground/30" />
            <div className="pointer-events-none absolute inset-2 border border-foreground/15" />

            {/* Corner Red Diamonds */}
            <div className="absolute top-1 left-1 h-2 w-2 bg-primary" />
            <div className="absolute top-1 right-1 h-2 w-2 bg-primary" />
            <div className="absolute bottom-1 left-1 h-2 w-2 bg-primary" />
            <div className="absolute bottom-1 right-1 h-2 w-2 bg-primary" />

            {/* Top Arcana Crest: Roman Numeral Centered */}
            <div className="relative z-10 flex w-full items-center justify-center gap-1.5 pt-0.5">
              <span className="text-[9px] text-primary">★</span>
              <span className="font-linux-biolinum text-xl lg:text-2xl font-black tracking-widest text-foreground [-webkit-text-stroke:0.5px_currentColor]">
                {experience.romanNumeral}
              </span>
              <span className="text-[9px] text-primary">★</span>
            </div>

            {/* Center Hero Artwork Window (Full Height, Unobstructed) */}
            <div className="relative z-10 my-auto flex h-[180px] lg:h-[200px] w-full items-center justify-center p-0.5">
              <ArcanaEmblem category={primaryCategory} />
            </div>

            {/* Bottom Arcana Title Banner (Clean, Completely Unobstructed) */}
            <div className="relative z-10 w-full">
              <div className="-skew-x-12 bg-primary px-2.5 py-0.5 lg:py-1 text-center shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
                <span className="block skew-x-12 font-linux-biolinum text-[11px] lg:text-xs font-black tracking-widest text-foreground uppercase">
                  {arcanaTitle}
                </span>
              </div>
            </div>
          </div>

          {/* Under-Card Bond Status & Tactical Metadata */}
          <div className="mt-2.5 flex w-full flex-col gap-1.5">
            <div className="-skew-x-12 bg-foreground px-3 py-0.5 lg:py-1 text-center shadow-[2px_2px_0_#d4030d]">
              <span className="block skew-x-12 font-linux-biolinum text-[11px] lg:text-xs font-black tracking-wider text-background uppercase">
                {isActiveRole ? "CURRENT BOND" : "MAX BOND"} · {experience.durationMonths}
              </span>
            </div>

            <div className="-skew-x-6 border-l-3 border-foreground/30 bg-foreground/[0.03] p-2 shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
              <div className="skew-x-6 flex flex-col gap-0.5 font-lato text-[11px] text-muted">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3 w-3 text-primary shrink-0" />
                  <span className="font-semibold text-foreground/90">{experience.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Confidant Profile, Story & Cooperation Abilities */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 18 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.35, ease: [0.33, 1, 0.68, 1] },
            },
          }}
          className="flex min-w-0 flex-1 flex-col gap-2.5 lg:gap-3"
        >
          {/* Confidant Header: Character Role Title & Affiliation */}
          <div className="flex flex-col">
            <h1 className="origin-left -rotate-1 font-linux-biolinum text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[36px] font-black leading-tight tracking-wide text-foreground uppercase [-webkit-text-stroke:0.5px_currentColor] [text-shadow:3px_3px_0_#d4030d] [text-stroke:0.5px_currentColor]">
              {experience.role}
            </h1>

            {/* Affiliation Slash Ribbon */}
            <div className="mt-1 inline-flex w-fit items-center gap-2 border-l-4 border-primary bg-foreground/10 px-2.5 py-0.5 -skew-x-12">
              <span className="block skew-x-12 font-linux-biolinum text-xs font-bold tracking-wider text-foreground">
                {experience.company}
              </span>
            </div>
          </div>

          {/* Confidant Story & Context Quote */}
          <div className="relative -skew-x-3 border-l-4 border-primary bg-foreground/[0.04] p-2.5 shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
            <div className="skew-x-3">
              <div className="mb-0.5 flex items-center gap-1.5 font-linux-biolinum text-[10px] font-black tracking-widest text-primary uppercase">
                <span>◆</span>
                <span>CONFIDANT PROFILE & CONTEXT</span>
              </div>
              <p className="font-linux-biolinum text-xs leading-relaxed tracking-wide text-foreground/90 italic">
                &ldquo;{experience.description}&rdquo;
              </p>
            </div>
          </div>

          {/* Confidant Deployed Skills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            <div className="mr-1 flex items-center gap-1.5 font-linux-biolinum text-[11px] font-bold tracking-widest text-muted uppercase">
              <span className="text-primary">◆</span>
              <span>CONFIDANT SKILLS:</span>
            </div>
            {experience.skills.map((skill) => (
              <div
                key={skill}
                className="-skew-x-12 border border-foreground/40 bg-foreground px-2 py-0.5 font-linux-biolinum text-[11px] font-bold tracking-wider text-background shadow-[2px_2px_0_#d4030d] transition-colors hover:border-primary hover:bg-primary hover:text-foreground cursor-default"
              >
                <span className="block skew-x-12">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Render Background Serial */}
        <div className="pointer-events-none absolute -right-4 -bottom-6 rotate-[-5deg] font-linux-biolinum text-4xl text-foreground opacity-10 select-none [-webkit-text-stroke:0.5px_currentColor] [text-stroke:0.5px_currentColor] md:text-6xl">
          EXPERIENCE_{experience.id.padStart(2, "0")}
        </div>
      </div>
    </motion.div>
  );
}
