"use client";

import { SidebarPortal } from "@/components/sidebar-portal";
import { SubMenu } from "@/components/sub-menu";
import { useRouter } from "next/navigation";
import { useMenu } from "@/hooks/use-menu";
import { experienceData } from "@/data/experience";
import { TsushimaCard } from "./_components/tsushima-card";
import { useValidIndex } from "@/hooks/use-valid-index";

export function ExperienceClient() {
  const router = useRouter();

  // Group tales by status
  const activeTales = experienceData.filter((d) => d.status === "IN PROGRESS");
  const completedTales = experienceData.filter((d) => d.status === "CLEARED");
  const allTales = [...activeTales, ...completedTales];

  const { activeIndex, setActiveIndex } = useMenu({
    itemCount: allTales.length + 1,
    onSelect: (index) => {
      if (index === allTales.length) {
        router.push("/");
      }
    },
  });

  const displayIndex = useValidIndex(activeIndex, allTales.length);
  const isBackActive = activeIndex === allTales.length;

  return (
    <>
      <SidebarPortal>
        <SubMenu
          title="JOURNAL"
          isBackActive={isBackActive}
          onBackClick={() => router.push("/")}
          onBackMove={() => setActiveIndex(allTales.length)}
          controls={[
            { key: "W / S & ▼ / ▲", action: "Navigate" },
            { key: "ENTER / SPACE", action: "Select" },
            { key: "ESC", action: "Back" },
          ]}
        >
          <div className="flex h-full w-full flex-col bg-[#1a1c23] p-4 gap-6 md:p-8">
            
            {/* Active Tales Section */}
            {activeTales.length > 0 && (
              <div className="flex flex-col gap-2">
                <h4 className="font-lato text-xs tracking-widest text-[#7c7d82] uppercase mb-2 px-2">
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
                        title={tale.company}
                        isActive={activeIndex === idx}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Completed Tales Section */}
            {completedTales.length > 0 && (
              <div className="flex flex-col gap-2">
                <h4 className="font-lato text-xs tracking-widest text-[#7c7d82] uppercase mb-2 px-2">
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
                          title={tale.company}
                          isActive={activeIndex === globalIdx}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        </SubMenu>
      </SidebarPortal>

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <p className="font-lato tracking-widest text-white/50 uppercase">
          {isBackActive 
            ? "Ready to return" 
            : `Selected: ${allTales[displayIndex]?.company || "None"}`
          }
        </p>
      </div>
    </>
  );
}
