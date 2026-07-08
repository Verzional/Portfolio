"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMenu } from "@/hooks/use-menu";
import { projectsData, projectCategories } from "@/lib/data/projects";
import { SubMenu } from "@/components/layout/sub-menu";
import { SidebarPortal } from "@/components/layout/sidebar-portal";
import { PersonaCategoryTab } from "@/components/ui/persona-category-tab";
import { PersonaProjectSlot } from "@/components/ui/persona-project-slot";

export function ProjectsClient() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("ALL");

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "q") {
        setActiveCategory((prev) => {
          const idx = projectCategories.findIndex((c) => c.id === prev);
          return projectCategories[
            idx > 0 ? idx - 1 : projectCategories.length - 1
          ].id;
        });
      } else if (e.key.toLowerCase() === "e") {
        setActiveCategory((prev) => {
          const idx = projectCategories.findIndex((c) => c.id === prev);
          return projectCategories[
            idx < projectCategories.length - 1 ? idx + 1 : 0
          ].id;
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
        { key: "ENTER", action: "Select" },
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

      <div className="flex h-full w-full flex-col items-center justify-center p-8 text-foreground">
        {activeProject ? (
          <div className="animate-in text-center duration-300 fade-in">
            <h1 className="font-optima-nova text-4xl tracking-widest text-primary md:text-6xl">
              {activeProject.title}
            </h1>
            <p className="mt-4 font-lato text-lg text-muted-foreground">
              {activeProject.desc}
            </p>
          </div>
        ) : (
          <div className="font-optima-nova text-3xl text-muted-foreground">
            Select a Project
          </div>
        )}
      </div>
    </>
  );
}
