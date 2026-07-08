"use client";

import { projectsData } from "@/lib/data/projects";

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

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-8 text-foreground">
      <div className="animate-in text-center duration-300 fade-in">
        <h1 className="font-optima-nova text-4xl tracking-widest text-primary md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-4 font-lato text-lg text-muted-foreground">
          {project.desc}
        </p>
      </div>
    </div>
  );
}
