import { motion } from "motion/react";
import Image from "next/image";
import { projectsData } from "@/lib/data/projects";
import { PersonaSkillTag } from "@/components/ui/persona-skill-tag";
import { PersonaActionButton } from "@/components/ui/persona-action-button";

type Project = typeof projectsData[0];

export function ProjectDetails({ project }: { project: Project | null }) {
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
    ? "w-full xl:w-1/3 h-64 xl:h-full" 
    : "w-full h-48 md:h-72 xl:h-96"; 

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
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
      className={`flex h-full w-full ${containerLayout} p-8 overflow-hidden gap-8 xl:gap-12`}
    >
      
      {/* Image Panel */}
      <motion.div 
        variants={{
          hidden: { opacity: 0, x: 100, scale: 0.95 },
          visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 25 } }
        }}
        className={`relative shrink-0 group ${imageContainerSize}`}
      >
        <div 
          className="absolute inset-0 bg-primary shadow-[8px_8px_0_rgba(255,255,255,1)] transition-transform duration-500 group-hover:scale-[1.02]" 
          style={{ clipPath: imageClipPath }}
        >
          {project.imageUrl && (
            <Image 
              src={project.imageUrl} 
              alt={project.title} 
              fill
              className="object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500" 
            />
          )}
          {/*<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>*/}
        </div>
        
        {/* Decorative Text */}
        <div className="absolute -bottom-6 -right-4 font-edo-sz text-6xl text-white opacity-10 rotate-[-5deg] pointer-events-none select-none">
          PROJECT_0{project.id}
        </div>
      </motion.div>

      {/* Details Panel */}
      <div className={`relative ${detailsContainerSize} flex flex-col justify-center z-10 pt-4 xl:pt-0`}>
        
        {/* Title */}
        <motion.h1 
          variants={{
            hidden: { opacity: 0, scale: 1.5, rotate: -15 },
            visible: { opacity: 1, scale: 1, rotate: -2, transition: { type: "spring", stiffness: 400, damping: 15 } }
          }}
          className="font-edo-sz text-5xl md:text-7xl text-white uppercase leading-tight drop-shadow-[4px_4px_0_#d4030d] relative z-20 origin-left"
        >
          {project.title}
        </motion.h1>

        {/* Description Block */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
          }}
          className="mt-6 bg-black text-white p-6 border-l-4 border-primary shadow-[6px_6px_0_rgba(255,255,255,0.2)] relative z-10 -rotate-1"
        >
          <p className="font-optima-nova text-lg tracking-wider leading-relaxed">{project.desc}</p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
          }}
          className="mt-12 flex flex-wrap gap-6"
        >
          {project.liveUrl && project.liveUrl !== "#" && (
            <PersonaActionButton label="VIEW LIVE" href={project.liveUrl} variant="primary" />
          )}
          
          <PersonaActionButton label="SOURCE CODE" href={project.githubUrl} variant="secondary" />
        </motion.div>
        
      </div>
    </motion.div>
  );
}
