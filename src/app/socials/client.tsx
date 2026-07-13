"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  handle: string;
}

function SocialSlot({
  isActive,
  onClickAction,
  onHoverAction,
  name,
  handle,
}: SocialSlotProps) {
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
      className={`flex w-[95%] cursor-pointer flex-col gap-1 py-4 pl-8 transition-all duration-200 md:pl-12 ${
        isActive
          ? "bg-menu-select text-foreground"
          : "text-muted hover:text-foreground"
      }`}
    >
      <span className="font-edo-sz text-2xl tracking-widest uppercase md:text-3xl">
        {name}
      </span>
      {/* Neon Tag Dropdown */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -5 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 overflow-hidden font-lato text-sm font-bold tracking-wider text-foreground drop-shadow-[0_0_5px_var(--color-primary)]"
          >
            <span className="text-muted drop-shadow-none">↳</span>
            {handle}
          </motion.div>
        )}
      </AnimatePresence>
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

  // Track if Back Button is Active
  const isBackActive = activeIndex === socialsData.length;

  // Track Last Valid Index
  const [prevActiveIndex, setPrevActiveIndex] = useState(activeIndex);
  const [lastValidIndex, setLastValidIndex] = useState(0);

  if (activeIndex !== prevActiveIndex) {
    setPrevActiveIndex(activeIndex);
    if (activeIndex < socialsData.length) {
      setLastValidIndex(activeIndex);
    }
  }

  const displayIndex =
    activeIndex < socialsData.length ? activeIndex : lastValidIndex;

  // Sidebar Content
  const sidebarContent = (
    <SubMenu
      title="Socials"
      isBackActive={isBackActive}
      onBackClick={() => router.push("/")}
      controls={[
        { key: "W/S", action: "NAVIGATE" },
        { key: "ENTER", action: "CONNECT" },
      ]}
    >
      <div className="flex min-h-0 w-full flex-1 scrollbar-none flex-col gap-2 overflow-x-hidden overflow-y-auto pt-2 pb-4">
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
            handle={social.handle}
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
        activeIndex={displayIndex}
        onHoverAction={setActiveIndex}
        onClickAction={handleMapClick}
      />
    </>
  );
}
