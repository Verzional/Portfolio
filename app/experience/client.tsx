"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useMenu } from "@/hooks/use-menu";
import { useValidIndex } from "@/hooks/use-valid-index";
import { useCategories } from "@/hooks/use-categories";
import {
  experienceData,
  experienceCategories,
  type ExperienceCategory,
} from "@/data/experience";
import { SubMenu } from "@/components/sub-menu";
import { SidebarPortal } from "@/components/sidebar-portal";
import { PersonaCategoryTab } from "./_components/persona-category-tab";
import { PersonaExperienceSlot } from "./_components/persona-experience-slot";
import { PersonaExperienceDetails } from "./_components/persona-experience-details";

export function ExperienceClient() {
  const router = useRouter();
  const { activeCategory, setActiveCategory } = useCategories(experienceCategories);

  // Filter Experiences by Active Category
  const filteredExperiences = experienceData.filter(
    (exp) =>
      activeCategory === "ALL" ||
      exp.categories.includes(activeCategory as ExperienceCategory),
  );

  // Handle Keyboard Navigation and Selection
  const { activeIndex, setActiveIndex } = useMenu({
    itemCount: filteredExperiences.length + 1,
    onSelect: (index) => {
      if (index === filteredExperiences.length) {
        router.push("/");
      }
    },
  });

  // Reset Cursor to Top on Category Switch
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory, setActiveIndex]);

  const handleExperienceClick = (idx: number) => {
    setActiveIndex(idx);
  };

  const handleExperienceHover = (idx: number) => {
    setActiveIndex(idx);
  };

  const displayIndex = useValidIndex(activeIndex, filteredExperiences.length);
  const activeExperience = filteredExperiences[displayIndex] || null;
  const isBackActive = activeIndex === filteredExperiences.length;

  // Render Experience Sidebar
  const sidebarContent = (
    <SubMenu
      title="Experience"
      isBackActive={isBackActive}
      onBackClick={() => router.push("/")}
      onBackMove={() => setActiveIndex(filteredExperiences.length)}
      controls={[
        { key: "W / S & ▼ / ▲", action: "Navigate" },
        { key: "Q / E", action: "Category" },
        { key: "ENTER / SPACE", action: "Select" },
        { key: "ESC", action: "Back" },
      ]}
    >
      <div className="flex min-h-0 w-full flex-1 flex-col">
        {/* Category Tabs */}
        <div className="flex w-full shrink-0 scrollbar-none flex-nowrap items-center justify-start gap-3 overflow-x-auto px-4 pt-2 pb-4 [-ms-overflow-style:none] md:ml-3 [&::-webkit-scrollbar]:hidden">
          {experienceCategories.map((cat) => (
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

        {/* Experience Slots */}
        <div className="mt-2 flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto px-4 pr-6 pb-8 md:px-8 md:pr-12">
          {filteredExperiences.map((exp, idx) => (
            <PersonaExperienceSlot
              key={exp.id}
              index={idx}
              isActive={idx === activeIndex}
              role={exp.role}
              company={exp.company}
              arcana={exp.arcana}
              arcanaNumber={exp.arcanaNumber}
              rankTitle={exp.rankTitle}
              status={exp.status}
              onClick={handleExperienceClick}
              onHover={handleExperienceHover}
            />
          ))}
        </div>
      </div>
    </SubMenu>
  );

  return (
    <>
      <SidebarPortal>{sidebarContent}</SidebarPortal>
      <PersonaExperienceDetails experience={activeExperience} />
    </>
  );
}
