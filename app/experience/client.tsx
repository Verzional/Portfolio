"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useMenu } from "@/hooks/use-menu";
import { useValidIndex } from "@/hooks/use-valid-index";
import { experienceData } from "@/data/experience";
import { SubMenu } from "@/components/sub-menu";
import { SidebarPortal } from "@/components/sidebar-portal";
import { TsushimaTaleSlot } from "./_components/tsushima-tale-slot";

export function ExperienceClient() {
  const router = useRouter();

  // Handle Menu Navigation and Selection
  const { activeIndex, setActiveIndex } = useMenu({
    itemCount: experienceData.length + 1,
    onSelect: (index) => {
      if (index === experienceData.length) {
        router.push("/");
      }
    },
  });

  const displayIndex = useValidIndex(activeIndex, experienceData.length);
  const activeExperience = experienceData[displayIndex] || null;
  const isBackActive = activeIndex === experienceData.length;

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
      onBackMove={() => setActiveIndex(experienceData.length)}
      controls={[
        { key: "W / S & ▼ / ▲", action: "Navigate" },
        { key: "ENTER / SPACE", action: "Select" },
        { key: "ESC", action: "Back" },
      ]}
    >
      <div className="flex min-h-0 w-full flex-1 scrollbar-none flex-col overflow-x-hidden overflow-y-auto px-2 pt-4 pb-6">
        {/* Active Tales Section */}
        <div className="mb-2 pl-4 font-lato text-xs tracking-widest text-muted md:text-sm">
          ACTIVE TALES
        </div>
        <div className="mb-6 flex flex-col gap-1">
          {experienceData.map((exp, idx) => {
            if (exp.status !== "IN PROGRESS") return null;
            return (
              <TsushimaTaleSlot
                key={exp.id}
                index={idx}
                isActive={activeIndex === idx}
                company={exp.company}
                role={exp.role}
                status={exp.status}
                onClick={handleSlotClick}
              />
            );
          })}
        </div>

        {/* Completed Tales Section */}
        <div className="mb-2 pl-4 font-lato text-xs tracking-widest text-muted md:text-sm">
          COMPLETED TALES
        </div>
        <div className="flex flex-col gap-1">
          {experienceData.map((exp, idx) => {
            if (exp.status !== "CLEARED") return null;
            return (
              <TsushimaTaleSlot
                key={exp.id}
                index={idx}
                isActive={activeIndex === idx}
                company={exp.company}
                role={exp.role}
                status={exp.status}
                onClick={handleSlotClick}
              />
            );
          })}
        </div>
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
