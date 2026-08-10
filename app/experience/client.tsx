"use client";

import { SidebarPortal } from "@/components/sidebar-portal";
import { SubMenu } from "@/components/sub-menu";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useMenu } from "@/hooks/use-menu";
import { useCategories } from "@/hooks/use-categories";
import { experienceData, experienceCategories } from "@/data/experience";
import { TsushimaCard } from "./_components/tsushima-card";
import { TsushimaCategoryTab } from "./_components/tsushima-category-tab";
import { useValidIndex } from "@/hooks/use-valid-index";

export function ExperienceClient() {
  const router = useRouter();
  const { activeCategory, setActiveCategory } = useCategories(experienceCategories);

  // Filter Tales By Category
  const filteredTales = experienceData.filter(
    (d) => activeCategory === "ALL" || d.type === activeCategory
  );

  // Group Filtered Tales By Status
  const activeTales = filteredTales.filter((d) => d.status === "IN PROGRESS");
  const completedTales = filteredTales.filter((d) => d.status === "CLEARED");
  const allTales = [...activeTales, ...completedTales];

  const { activeIndex, setActiveIndex } = useMenu({
    itemCount: allTales.length + 1,
    onSelect: (index) => {
      if (index === allTales.length) {
        router.push("/");
      }
    },
  });

  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory, setActiveIndex]);

  const displayIndex = useValidIndex(activeIndex, allTales.length);
  const isBackActive = activeIndex === allTales.length;

  return (
    <>
      <SidebarPortal>
        <SubMenu
          title="EXPERIENCE"
          isBackActive={isBackActive}
          onBackClick={() => router.push("/")}
          onBackMove={() => setActiveIndex(allTales.length)}
          controls={[
            { key: "W / S & ▼ / ▲", action: "Navigate" },
            { key: "ENTER / SPACE", action: "Select" },
            { key: "ESC", action: "Back" },
          ]}
        >
          <div className="relative flex min-h-0 w-full flex-1 flex-col pb-4 md:pb-8">
            {/* Dark Grey Background Layer (Narrower to match padded container bounds) */}
            <div 
              className="absolute inset-y-0 left-4 right-6 z-0 bg-[#1a1c23] md:left-6 md:right-8"
              style={{
                maskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)"
              }}
            />

            {/* Content Layer */}
            <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col">
              {/* Render Category Tabs */}
              <div className="flex w-full shrink-0 scrollbar-none flex-nowrap items-center justify-start gap-3 overflow-x-auto px-4 pb-2 pt-6 [-ms-overflow-style:none] -translate-x-2 md:-translate-x-1 md:justify-center [&::-webkit-scrollbar]:hidden">
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

              {/* Render Scrollable Tales List */}
              <div className="flex min-h-0 w-full flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <div className="flex flex-col gap-6 pl-4 pr-6 pt-4 md:pl-6 md:pr-8">
                  {/* Render Active Tales */}
                {activeTales.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <h4 className="mb-2 px-2 font-lato text-xs tracking-widest text-[#7c7d82] uppercase">
                      ACTIVE TALES
                    </h4>
                    <div className="flex flex-col gap-1">
                      {activeTales.map((tale, idx) => (
                        <div 
                          key={tale.id} 
                          onClick={() => setActiveIndex(idx)} 
                          className="cursor-pointer"
                        >
                          <TsushimaCard
                            title={tale.role}
                            isActive={activeIndex === idx}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Render Completed Tales */}
                {completedTales.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <h4 className="mb-2 px-2 font-lato text-xs tracking-widest text-[#7c7d82] uppercase">
                      COMPLETED TALES
                    </h4>
                    <div className="flex flex-col gap-1">
                      {completedTales.map((tale, idx) => {
                        const globalIdx = activeTales.length + idx;
                        return (
                          <div 
                            key={tale.id} 
                            onClick={() => setActiveIndex(globalIdx)} 
                            className="cursor-pointer"
                          >
                            <TsushimaCard
                              title={tale.role}
                              isActive={activeIndex === globalIdx}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                </div>
              </div>
            </div>
          </div>
        </SubMenu>
      </SidebarPortal>

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <p className="font-lato tracking-widest text-white/50 uppercase">
          {isBackActive
            ? "Ready to return"
            : `Selected: ${allTales[displayIndex]?.company || "None"}`}
        </p>
      </div>
    </>
  );
}
