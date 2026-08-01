import { useEffect } from "react";
import { motion } from "motion/react";
import { projectsData } from "@/data/projects";
import { PersonaActionButton } from "./persona-action-button";
import { ProjectCarousel } from "./project-carousel";
import { ProjectInfo } from "./project-info";

type Project = (typeof projectsData)[0];

export function ProjectDetails({
  project,
  isBackActive = false,
}: {
  project: Project | null;
  isBackActive?: boolean;
}) {
  // Bind Project Action Shortcuts
  useEffect(() => {
    if (!project || isBackActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      if (e.key.toLowerCase() === "c") {
        e.preventDefault();
        window.open(project.githubUrl, "_blank", "noopener,noreferrer");
      } else if (e.key.toLowerCase() === "v") {
        e.preventDefault();
        if (project.liveUrl && project.liveUrl !== "#") {
          window.open(project.liveUrl, "_blank", "noopener,noreferrer");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, isBackActive]);

  // Handle Empty State
  if (!project) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center p-8 text-foreground">
        <div className="font-linux-biolinum text-3xl text-muted [-webkit-text-stroke:0.5px_currentColor] [text-stroke:0.5px_currentColor]">
          Select a Project
        </div>
      </div>
    );
  }

  // Configure Layout Dimensions
  const isMobileApp = project.categories.includes("MOBILE");

  const containerLayout = isMobileApp
    ? "flex-col xl:flex-row"
    : "flex-col items-center";

  const containerGap = isMobileApp
    ? "gap-4 md:gap-8 xl:gap-12"
    : "gap-2 md:gap-3 xl:gap-4";

  const imageContainerSize = isMobileApp
    ? "w-full xl:w-1/3 aspect-[9/16] xl:aspect-auto xl:h-[90%] my-auto"
    : "w-full aspect-[16/10]";

  const imageClipPath = isMobileApp
    ? "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)"
    : "polygon(2% 0, 100% 0, 98% 100%, 0% 100%)";

  const detailsContainerSize = isMobileApp ? "w-full xl:w-2/3" : "w-full";

  const detailsContainerJustify = isMobileApp
    ? "justify-center pt-4 xl:pt-0"
    : "justify-start";

  return (
    <motion.div
      key={project.id}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      }}
      className={`flex h-full w-full ${containerLayout} ${containerGap} scrollbar-none justify-start overflow-x-hidden overflow-y-auto p-4 md:justify-center md:p-8`}
    >
      {/* Render Image Container */}
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
        <ProjectCarousel project={project} imageClipPath={imageClipPath}>
          {/* Render Desktop Overlay Details */}
          {!isMobileApp && (
            <ProjectInfo
              project={project}
              variant="overlay"
              className="absolute right-4 bottom-6 left-4 z-30 hidden max-w-4xl flex-col items-start gap-2 md:right-8 md:bottom-10 md:left-8 md:flex xl:right-12 xl:bottom-12 xl:left-12"
            />
          )}
        </ProjectCarousel>

        {/* Render Background Serial */}
        <div className="pointer-events-none absolute -right-4 -bottom-6 rotate-[-5deg] font-linux-biolinum text-4xl text-foreground opacity-10 select-none [-webkit-text-stroke:0.5px_currentColor] [text-stroke:0.5px_currentColor] md:text-6xl">
          PROJECT_0{project.id}
        </div>
      </motion.div>

      {/* Render Details Container */}
      <div
        className={`relative ${detailsContainerSize} z-10 flex flex-col ${detailsContainerJustify}`}
      >
        {/* Render Mobile Layout Details */}
        <ProjectInfo
          project={project}
          variant="normal"
          className={`mb-6 flex flex-col items-start ${
            !isMobileApp ? "md:hidden" : ""
          }`}
        />

        {/* Render Action Links */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            },
          }}
          className="mt-0 flex flex-wrap gap-4 pb-12 md:gap-6 md:pb-0"
        >
          {project.liveUrl && project.liveUrl !== "#" && (
            <PersonaActionButton
              label="VIEW LIVE"
              href={project.liveUrl}
              variant="primary"
            />
          )}

          {project.githubUrl && project.githubUrl !== "#" && (
            <PersonaActionButton
              label="SOURCE CODE"
              href={project.githubUrl}
              variant="secondary"
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
