"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useMenu } from "@/hooks/use-menu";
import { socialsData } from "@/data/socials";
import { SubMenu } from "@/components/sub-menu";
import { SidebarPortal } from "@/components/sidebar-portal";
import { TaxiMap } from "./_components/taxi-map";

interface SocialSlotProps {
  isActive: boolean;
  onClickAction: () => void;
  onHoverAction: () => void;
  name: string;
}

function SocialSlot({ isActive, onClickAction, onHoverAction, name }: SocialSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isActive]);

  return (
    <div
      ref={containerRef}
      onClick={onClickAction}
      onPointerMove={() => {
        if (!isActive) onHoverAction();
      }}
      className={`flex cursor-pointer w-[95%] items-center gap-4 py-4 pl-8 md:pl-12 transition-all duration-200 ${
        isActive
          ? "bg-menu-select text-foreground"
          : "text-muted hover:text-foreground"
      }`}
    >
      <span className="font-edo-sz text-2xl tracking-widest uppercase md:text-3xl">
        {name}
      </span>
    </div>
  );
}

export function SocialsClient() {
  const router = useRouter();

  // Handle Menu Navigation and Selection
  const { activeIndex, setActiveIndex } = useMenu({
    itemCount: socialsData.length + 1,
    onSelect: (index) => {
      if (index === socialsData.length) {
        router.push("/");
      } else {
        window.open(socialsData[index].url, "_blank");
      }
    },
  });

  // Check if the Back Button is the Active Item
  const isBackActive = activeIndex === socialsData.length;

  // Sidebar Content
  const sidebarContent = (
    <SubMenu
      title="Socials"
      isBackActive={isBackActive}
      onBackClick={() => router.push("/")}
      onBackMove={() => setActiveIndex(socialsData.length)}
      controls={[
        { key: "W/S", action: "NAVIGATE" },
        { key: "ENTER", action: "CONNECT" },
      ]}
    >
      <div className="flex min-h-0 w-full flex-1 flex-col gap-2 overflow-x-hidden overflow-y-auto scrollbar-none pb-4 pt-2">
        {/* Social Links */}
        {socialsData.map((social, idx) => (
          <SocialSlot
            key={social.id}
            isActive={activeIndex === idx}
            onClickAction={() => {
              if (activeIndex !== idx) {
                setActiveIndex(idx);
              } else {
                window.open(social.url, "_blank");
              }
            }}
            onHoverAction={() => setActiveIndex(idx)}
            name={social.name}
          />
        ))}
      </div>
    </SubMenu>
  );

  const handleMapClick = (idx: number) => {
    setActiveIndex(idx);
    window.open(socialsData[idx].url, "_blank");
  };

  return (
    <>
      <SidebarPortal>{sidebarContent}</SidebarPortal>
      <TaxiMap 
        activeIndex={activeIndex} 
        onHoverAction={setActiveIndex} 
        onClickAction={handleMapClick} 
      />
    </>
  );
}
