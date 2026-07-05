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
        <div className="flex w-full justify-around pb-4 pt-2">
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

        <div className="mt-2 grid grid-cols-2 gap-4 overflow-y-auto px-2 pb-4">
          {filteredProjects.map((proj, idx) => (
            <InventorySlot
              key={proj.id}
              isActive={idx === activeIndex}
              onPointerMove={(e) => {
                if (e.pointerType === "mouse" && activeIndex !== idx) {
                  setActiveIndex(idx);
                }
              }}
            >
              <div className="text-center text-sm md:text-xl">
                {proj.categories.join(" / ")}
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
