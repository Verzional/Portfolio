import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData } from "@/lib/data/projects";
import { PersonaSkillTag } from "@/components/ui/persona-skill-tag";
import { PersonaActionButton } from "@/components/ui/persona-action-button";

type Project = (typeof projectsData)[0];

export function ProjectDetails({ project }: { project: Project | null }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [prevProjectId, setPrevProjectId] = useState(project?.id);

  if (project?.id !== prevProjectId) {
    setPrevProjectId(project?.id);
    setImageIndex(0);
  }

  useEffect(() => {
    if (!project || !project.images || project.images.length <= 1) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      if (e.key.toLowerCase() === "a" || e.key === "ArrowLeft") {
        setImageIndex((prev) =>
          prev > 0 ? prev - 1 : project.images.length - 1,
        );
      } else if (e.key.toLowerCase() === "d" || e.key === "ArrowRight") {
        setImageIndex((prev) =>
          prev < project.images.length - 1 ? prev + 1 : 0,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project]);

  /* Empty State */
  if (!project) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center p-8 text-foreground">
        <div className="font-optima-nova text-3xl text-muted-foreground">
          Select a Project
        </div>
      </div>
    );
  }

  const isMobileApp = project.categories.includes("MOBILE");

  const containerLayout = isMobileApp ? "flex-col xl:flex-row" : "flex-col";

  const imageContainerSize = isMobileApp
    ? "w-full xl:w-1/3 h-48 md:h-64 xl:h-full"
    : "w-full h-32 md:h-72 xl:h-96";

  const imageClipPath = isMobileApp
    ? "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)"
    : "polygon(2% 0, 100% 0, 98% 100%, 0% 100%)";

  const detailsContainerSize = isMobileApp ? "w-full xl:w-2/3" : "w-full";

  return (
    <motion.div
      key={project.id}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      }}
      className={`flex h-full w-full ${containerLayout} scrollbar-none justify-start gap-4 overflow-x-hidden overflow-y-auto p-4 md:justify-center md:gap-8 md:p-8 xl:gap-12`}
    >
      {/* Image Panel */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 100, scale: 0.95 },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 25 },
          },
        }}
        className={`group relative shrink-0 ${imageContainerSize}`}
      >
        <div
          className="absolute inset-0 bg-primary shadow-[8px_8px_0_rgba(255,255,255,1)] transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ clipPath: imageClipPath }}
        >
          <AnimatePresence mode="wait">
            {project.images && project.images.length > 0 && (
              <motion.div
                key={imageIndex}
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Image
                  src={project.images[imageIndex]}
                  alt={`${project.title} screenshot ${imageIndex + 1}`}
                  fill
                  className="object-cover transition-transform duration-500"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Carousel Indicators */}
          {project.images && project.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
              {project.images.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 transition-all duration-300 ${i === imageIndex ? "w-8 bg-white" : "w-2 bg-white/30"}`}
                  style={{ transform: "skewX(-12deg)" }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Decorative Text */}
        <div className="pointer-events-none absolute -right-4 -bottom-6 rotate-[-5deg] font-optima-nova text-4xl text-foreground opacity-10 select-none md:text-6xl">
          PROJECT_0{project.id}
        </div>
      </motion.div>

      {/* Details Panel */}
      <div
        className={`relative ${detailsContainerSize} z-10 flex flex-col justify-center pt-4 xl:pt-0`}
      >
        {/* Title */}
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
          className="relative z-20 origin-left font-optima-nova text-3xl leading-tight text-foreground uppercase drop-shadow-[2px_2px_0_#d4030d] md:text-4xl md:drop-shadow-[3px_3px_0_#d4030d] xl:text-7xl xl:drop-shadow-[4px_4px_0_#d4030d]"
        >
          {project.title}
        </motion.h1>

        {/* Description Block */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            },
          }}
          className="relative z-10 mt-4 -rotate-1 border-l-4 border-primary bg-black p-4 text-foreground shadow-[4px_4px_0_rgba(255,255,255,0.2)] md:mt-5 md:p-5 md:shadow-[5px_5px_0_rgba(255,255,255,0.2)] xl:mt-6 xl:p-6 xl:shadow-[6px_6px_0_rgba(255,255,255,0.2)]"
        >
          <p className="font-optima-nova text-sm leading-relaxed tracking-wider md:text-base xl:text-lg">
            {project.desc}
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
          }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {project.techStack.map((tech) => (
            <PersonaSkillTag key={tech} label={tech} />
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            },
          }}
          className="mt-6 flex flex-wrap gap-4 pb-12 md:mt-12 md:gap-6 md:pb-0"
        >
          {project.liveUrl && project.liveUrl !== "#" && (
            <PersonaActionButton
              label="VIEW LIVE"
              href={project.liveUrl}
              variant="primary"
            />
          )}

          <PersonaActionButton
            label="SOURCE CODE"
            href={project.githubUrl}
            variant="secondary"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
