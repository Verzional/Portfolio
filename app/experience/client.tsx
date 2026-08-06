"use client";

import { SidebarPortal } from "@/components/sidebar-portal";
import { SubMenu } from "@/components/sub-menu";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TsushimaCard } from "./_components/tsushima-card";

export function ExperienceClient() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const dummyTales = [
    "HAMMER AND FORGE",
    "THE TALE OF RYUZO",
    "THE TALE OF LADY MASAKO"
  ];

  return (
    <>
      <SidebarPortal>
        <SubMenu
          title="JOURNAL"
          onBackClick={() => router.push("/")}
        >
          {/* A simple wrapper to preview the cards on a grey background */}
          <div className="flex h-full w-full flex-col bg-[#1a1c23] p-8 gap-2">
            
            <h4 className="font-lato text-xs tracking-widest text-[#7c7d82] uppercase mb-2">
              COMPLETED TALES
            </h4>

            <div className="flex flex-col gap-2">
              {dummyTales.map((tale, idx) => (
                <div key={idx} onClick={() => setActiveIndex(idx)} className="cursor-pointer">
                  <TsushimaCard
                    title={tale}
                    isActive={activeIndex === idx}
                  />
                </div>
              ))}
            </div>

          </div>
        </SubMenu>
      </SidebarPortal>

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <p className="font-lato tracking-widest text-white/50 uppercase">
          Standing by
        </p>
      </div>
    </>
  );
}
