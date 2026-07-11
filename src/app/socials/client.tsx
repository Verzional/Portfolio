"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useMenu } from "@/hooks/use-menu";
import { socialsData } from "@/data/socials";
import { SubMenu } from "@/components/sub-menu";
import { SidebarPortal } from "@/components/sidebar-portal";
import { TaxiMap } from "./_components/taxi-map";

interface SocialSlotProps {
  isActive: boolean;
  onClick: () => void;
  icon: string;
  name: string;
}

function SocialSlot({ isActive, onClick, icon, name }: SocialSlotProps) {
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
      onClick={onClick}
      className={`flex cursor-pointer w-[95%] items-center gap-4 py-4 pl-8 md:pl-12 transition-all duration-200 ${
        isActive
          ? "bg-menu-select text-foreground"
          : "text-muted hover:text-foreground"
      }`}
    >
      <div
        className={`relative h-6 w-6 shrink-0 transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-50 grayscale"}`}
      >
        <Image
          src={icon}
          alt={name}
          fill
          sizes="24px"
          className="object-contain"
        />
      </div>
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
            onClick={() => setActiveIndex(idx)}
            icon={social.icon}
            name={social.name}
          />
        ))}
      </div>
    </SubMenu>
  );

  return (
    <>
      <SidebarPortal>{sidebarContent}</SidebarPortal>
      <TaxiMap activeIndex={activeIndex} />
    </>
  );
}
