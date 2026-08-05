import { motion } from "motion/react";
import { PersonaSkillTag } from "./persona-skill-tag";
import { projectsData } from "@/data/projects";

type Project = (typeof projectsData)[0];

interface ProjectInfoProps {
  project: Project;
  variant: "overlay" | "normal";
  className?: string;
}

export function ProjectInfo({
  project,
  variant,
  className = "",
}: ProjectInfoProps) {
  const isOverlay = variant === "overlay";

  return (
    <div className={className}>
      {/* Render Title */}
      <motion.h1
        variants={{
          hidden: { opacity: 0, scale: 1.5, rotate: -15 },
          visible: {
            opacity: 1,
            scale: 1,
            rotate: -2,
            transition: { type: "spring", stiffness: 400, damping: 15 },
          },
        }}
        className={`relative z-20 origin-left font-linux-biolinum text-3xl text-foreground uppercase [-webkit-text-stroke:0.5px_currentColor] [text-shadow:0.5px_0.5px_0_#d4030d] [text-stroke:0.5px_currentColor] md:text-4xl md:[text-shadow:3px_3px_0_#d4030d] xl:text-7xl xl:[text-shadow:4px_4px_0_#d4030d] ${
          isOverlay ? "leading-none xl:mb-2" : "leading-tight"
        }`}
      >
        {project.title}
      </motion.h1>

      {/* Render Description */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          },
        }}
        className={`relative z-10 -rotate-1 border-l-4 border-primary p-4 text-foreground shadow-[4px_4px_0_rgba(255,255,255,0.2)] md:p-5 md:shadow-[5px_5px_0_rgba(255,255,255,0.2)] xl:p-6 xl:shadow-[6px_6px_0_rgba(255,255,255,0.2)] ${
          isOverlay ? "bg-background/95" : "mt-4 bg-background md:mt-5 xl:mt-6"
        }`}
      >
        <p className="font-linux-biolinum text-sm leading-relaxed tracking-wider [-webkit-text-stroke:0.5px_currentColor] [text-stroke:0.5px_currentColor] md:text-base xl:text-lg">
          {project.desc}
        </p>
      </motion.div>

      {/* Render Tech Stack */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
        }}
        className={`flex flex-wrap gap-3 ${isOverlay ? "mt-1 md:mt-4" : "mt-8"}`}
      >
        {project.techStack.map((tech) => (
          <PersonaSkillTag key={tech} label={tech} />
        ))}
      </motion.div>
    </div>
  );
}
