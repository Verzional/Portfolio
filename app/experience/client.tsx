"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useMenu } from "@/hooks/use-menu";
import { useValidIndex } from "@/hooks/use-valid-index";
import { useCategories } from "@/hooks/use-categories";
import { experienceData, experienceCategories } from "@/data/experience";
import { SubMenu } from "@/components/sub-menu";
import { SidebarPortal } from "@/components/sidebar-portal";
import { TsushimaCategoryTab } from "./_components/tsushima-category-tab";
import { TsushimaTaleSlot } from "./_components/tsushima-tale-slot";

export function ExperienceClient() {
  const router = useRouter();

  const { activeCategory, setActiveCategory } =
    useCategories(experienceCategories);

  const filteredExperience = experienceData.filter(
    (exp) => activeCategory === "ALL" || exp.type === activeCategory,
  );

  const hasActiveTales = filteredExperience.some(
    (exp) => exp.status === "IN PROGRESS",
  );
  const hasCompletedTales = filteredExperience.some(
    (exp) => exp.status === "CLEARED",
  );

  // Handle Menu Navigation and Selection
  const { activeIndex, setActiveIndex } = useMenu({
    itemCount: filteredExperience.length + 1,
    onSelect: (index) => {
      if (index === filteredExperience.length) {
        router.push("/");
      }
    },
  });

  const displayIndex = useValidIndex(activeIndex, filteredExperience.length);
  const activeExperience = filteredExperience[displayIndex] || null;
  const isBackActive = activeIndex === filteredExperience.length;

  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory, setActiveIndex]);

  const activeIndexRef = useRef(activeIndex);
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const handleSlotClick = (idx: number) => {
    setActiveIndex(idx);
  };

  const sidebarContent = (
    <SubMenu
      title="Tales"
      isBackActive={isBackActive}
      onBackClick={() => router.push("/")}
      onBackMove={() => setActiveIndex(filteredExperience.length)}
      controls={[
        { key: "W / S & ▼ / ▲", action: "Navigate" },
        { key: "Q / E", action: "Category" },
        { key: "ENTER / SPACE", action: "Select" },
        { key: "ESC", action: "Back" },
      ]}
    >
      <div className="flex min-h-0 w-full flex-1 scrollbar-none flex-col overflow-x-hidden overflow-y-auto pb-6">
        {/* Category Tabs */}
        <div className="flex w-full shrink-0 scrollbar-none flex-nowrap items-center justify-start gap-4 overflow-x-auto px-4 pt-3 pb-8 [-ms-overflow-style:none] md:ml-3 md:gap-8 [&::-webkit-scrollbar]:hidden">
          {experienceCategories.map((cat) => (
            <TsushimaCategoryTab
              key={cat.id}
              id={cat.id}
              isActive={activeCategory === cat.id}
              onClick={setActiveCategory}
              label={cat.label}
              icon={cat.icon}
            />
          ))}
        </div>

        {/* Active Tales Section */}
        {hasActiveTales && (
          <>
            <div className="mb-2 pl-6 font-lato text-xs tracking-widest text-muted md:text-sm">
              ACTIVE TALES
            </div>
            <div className="mb-6 flex flex-col gap-1 px-2">
              {filteredExperience.map((exp, idx) => {
                if (exp.status !== "IN PROGRESS") return null;
                return (
                  <TsushimaTaleSlot
                    key={exp.id}
                    index={idx}
                    isActive={activeIndex === idx}
                    company={exp.company}
                    role={exp.role}
                    onClick={handleSlotClick}
                  />
                );
              })}
            </div>
          </>
        )}

        {/* Completed Tales Section */}
        {hasCompletedTales && (
          <>
            <div className="mb-2 pl-6 font-lato text-xs tracking-widest text-muted md:text-sm">
              COMPLETED TALES
            </div>
            <div className="flex flex-col gap-1 px-2">
              {filteredExperience.map((exp, idx) => {
                if (exp.status !== "CLEARED") return null;
                return (
                  <TsushimaTaleSlot
                    key={exp.id}
                    index={idx}
                    isActive={activeIndex === idx}
                    company={exp.company}
                    role={exp.role}
                    onClick={handleSlotClick}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </SubMenu>
  );

  return (
    <>
      <SidebarPortal>{sidebarContent}</SidebarPortal>

      {/* Main View Area Placeholder */}
      <div className="relative z-10 flex h-full w-full items-center justify-center bg-black/90">
        <div className="font-lato text-sm font-light tracking-[0.3em] text-white/30 uppercase">
          Tale Details Pending
        </div>
      </div>
    </>
  );
}
