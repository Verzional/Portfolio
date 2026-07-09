"use client";

import { useRouter } from "next/navigation";
import { useMemo, useEffect } from "react";
import { useMenu } from "@/hooks/use-menu";
import { useCategories } from "@/hooks/use-categories";
import { projectsData, projectCategories } from "@/lib/data/projects";
import { SubMenu } from "@/components/layout/sub-menu";
import { SidebarPortal } from "@/components/layout/sidebar-portal";
import { PersonaCategoryTab } from "@/components/ui/persona-category-tab";
import { PersonaProjectSlot } from "@/components/ui/persona-project-slot";
import { ProjectDetails } from "./_components/project-details";

export function ProjectsClient() {
  const router = useRouter();
  const { activeCategory, setActiveCategory } =
    useCategories(projectCategories);

  const filteredProjects = useMemo(() => {
    return projectsData.filter(
      (p) => activeCategory === "ALL" || p.categories.includes(activeCategory),
    );
  }, [activeCategory]);

  const { activeIndex, setActiveIndex } = useMenu({
    itemCount: filteredProjects.length + 1,
    columns: 1,
    onSelect: (index) => {
      if (index === filteredProjects.length) {
        router.push("/");
      }
    },
  });

  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory, setActiveIndex]);

  const activeProject =
    activeIndex < filteredProjects.length
      ? filteredProjects[activeIndex]
      : null;
  const isBackActive = activeIndex === filteredProjects.length;

  const sidebarContent = (
    <SubMenu
      title="Projects"
      isBackActive={isBackActive}
      onBackClick={() => router.push("/")}
      onBackMove={() => setActiveIndex(filteredProjects.length)}
      controls={[
        { key: "W / S", action: "Navigate" },
        { key: "Q / E", action: "Category" },
        { key: "A / D", action: "Carousel" },
        { key: "ENTER / SPACE", action: "Select" },
      ]}
    >
      <div className="bg-dots flex h-full min-h-0 w-full flex-col">
        <div className="flex w-full shrink-0 scrollbar-none flex-nowrap items-center justify-center gap-4 overflow-x-auto px-2 pt-4 pb-6 [-ms-overflow-style:none] md:gap-6 [&::-webkit-scrollbar]:hidden">
          {projectCategories.map((cat) => (
            <PersonaCategoryTab
              key={cat.id}
              isActive={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              label={cat.label}
              icon={cat.icon}
            />
          ))}
        </div>

        <div className="mt-4 flex min-h-0 flex-1 flex-col overflow-y-auto px-8 pr-12 pb-8">
          {filteredProjects.map((proj, idx) => (
            <PersonaProjectSlot
              key={proj.id}
              index={idx}
              isActive={idx === activeIndex}
              title={proj.title}
              onClick={() => {
                setActiveIndex(idx);
              }}
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
