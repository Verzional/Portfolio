"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMenu } from "@/hooks/use-menu";
import { SubMenu } from "@/components/layout/sub-menu";
import { SidebarPortal } from "@/components/layout/sidebar-portal";
import { InventorySlot } from "@/components/ui/inventory-slot";
import { CategoryTab } from "@/components/ui/category-tab";
import { projectCategories, projectsData } from "@/lib/data/projects";

export function ProjectsClient() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => activeCategory === "ALL" || p.categories.includes(activeCategory));
  }, [activeCategory]);

  const { activeIndex, setActiveIndex } = useMenu({
    itemCount: filteredProjects.length + 1,
    columns: 2,
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
          return projectCategories[idx > 0 ? idx - 1 : projectCategories.length - 1].id;
        });
      } else if (e.key.toLowerCase() === "e") {
        setActiveCategory((prev) => {
          const idx = projectCategories.findIndex((c) => c.id === prev);
          return projectCategories[idx < projectCategories.length - 1 ? idx + 1 : 0].id;
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const activeProject = activeIndex < filteredProjects.length ? filteredProjects[activeIndex] : null;
  const isBackActive = activeIndex === filteredProjects.length;

  const sidebarContent = (
    <SubMenu 
      title="Projects" 
      isBackActive={isBackActive}
      onBackClick={() => router.push("/")}
      onBackMove={() => setActiveIndex(filteredProjects.length)}
    >
      <div className="flex h-full w-full flex-col">
        <div className="flex w-full items-center justify-between pb-4 pt-2">
          <div className="hidden pl-2 font-edo-sz text-xl text-muted-foreground xl:block opacity-50">
            [Q]
          </div>
          <div className="flex flex-1 justify-around">
            {projectCategories.map((cat) => (
              <CategoryTab
                key={cat.id}
                isActive={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                icon={cat.icon}
                label={cat.label}
              />
            ))}
          </div>
          <div className="hidden pr-2 font-edo-sz text-xl text-muted-foreground xl:block opacity-50">
            [E]
          </div>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-4 overflow-y-auto px-2 pb-4">
          {filteredProjects.map((proj, idx) => (
            <InventorySlot
              key={proj.id}
              isActive={idx === activeIndex}
              onClick={() => {
                setActiveIndex(idx);
              }}
            >
              <div className="text-center text-xs px-1 md:text-sm">
                {proj.title}
              </div>
            </InventorySlot>
          ))}
        </div>
      </div>
    </SubMenu>
  );

  return (
    <>
      <SidebarPortal>
        {sidebarContent}
      </SidebarPortal>
        
      <div className="flex h-full w-full flex-col items-center justify-center p-8 text-foreground">
        {activeProject ? (
          <div className="text-center">
            <h1 className="font-edo-sz text-5xl tracking-widest text-primary md:text-7xl">{activeProject.title}</h1>
            <p className="mt-4 font-lato text-xl text-muted-foreground">{activeProject.desc}</p>
          </div>
        ) : (
          <div className="font-edo-sz text-4xl text-muted-foreground">Select a Project</div>
        )}
      </div>
    </>
  );
}
