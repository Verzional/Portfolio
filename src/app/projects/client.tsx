"use client";

import { useRouter } from "next/navigation";
import { useMemo, useEffect, useCallback } from "react";
import { useMenu } from "@/hooks/use-menu";
import { useValidIndex } from "@/hooks/use-valid-index";
import { useCategories } from "@/hooks/use-categories";
import { projectsData, projectCategories } from "@/data/projects";
import { SubMenu } from "@/components/sub-menu";
import { SidebarPortal } from "@/components/sidebar-portal";
import { PersonaCategoryTab } from "./_components/persona-category-tab";
import { PersonaProjectSlot } from "./_components/persona-project-slot";
import { ProjectDetails } from "./_components/project-details";

export function ProjectsClient() {
  const router = useRouter();
  const { activeCategory, setActiveCategory } =
    useCategories(projectCategories);

  // Filter Projects Based on Active Category
  const filteredProjects = useMemo(() => {
    return projectsData.filter(
      (p) => activeCategory === "ALL" || p.categories.includes(activeCategory),
    );
  }, [activeCategory]);

  // Handle Menu Navigation and Selection
  const { activeIndex, setActiveIndex } = useMenu({
    itemCount: filteredProjects.length + 1,
    onSelect: (index) => {
      if (index === filteredProjects.length) {
        router.push("/");
      }
    },
  });

  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory, setActiveIndex]);

  const handleProjectClick = useCallback(
    (idx: number) => {
      setActiveIndex(idx);
    },
    [setActiveIndex],
  );

  const displayIndex = useValidIndex(activeIndex, filteredProjects.length);

  // Determine Active Project and Back Button State
  const activeProject = filteredProjects[displayIndex] || null;

  // Track if Back Button is Active
  const isBackActive = activeIndex === filteredProjects.length;

  // Sidebar Content
  const sidebarContent = (
    <SubMenu
      title="Projects"
      isBackActive={isBackActive}
      onBackClick={() => router.push("/")}
      controls={[
        { key: "W / S & ▼ / ▲", action: "Navigate" },
        { key: "Q / E", action: "Category" },
        { key: "A / D & ◄ / ►", action: "Carousel" },
        { key: "ENTER / SPACE", action: "Select" },
      ]}
    >
      <div className="flex min-h-0 w-full flex-1 flex-col">
        {/* Category Tabs */}
        <div className="flex w-full shrink-0 scrollbar-none flex-nowrap items-center justify-start gap-4 overflow-x-auto px-4 pt-2 pb-4 [-ms-overflow-style:none] md:justify-center md:gap-3 [&::-webkit-scrollbar]:hidden">
          {projectCategories.map((cat) => (
            <PersonaCategoryTab
              key={cat.id}
              id={cat.id}
              isActive={activeCategory === cat.id}
              onClick={setActiveCategory}
              label={cat.label}
              icon={cat.icon}
            />
          ))}
        </div>

        {/* Project Slots */}
        <div className="mt-4 flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto px-4 pr-6 pb-8 md:px-8 md:pr-12">
          {filteredProjects.map((proj, idx) => (
            <PersonaProjectSlot
              key={proj.id}
              index={idx}
              isActive={idx === activeIndex}
              title={proj.title}
              onClick={handleProjectClick}
            />
          ))}
        </div>
      </div>
    </SubMenu>
  );

  return (
    <>
      <SidebarPortal>{sidebarContent}</SidebarPortal>
      <ProjectDetails project={activeProject} />
    </>
  );
}
