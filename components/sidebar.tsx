"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useMenu } from "@/hooks/use-menu";
import { menuItems } from "@/data/navigation";
import { ControlLegend } from "@/components/control-legend";

export function Sidebar({ previousPath }: { previousPath?: string | null }) {
  const router = useRouter();

  // Find Menu Index Based on Previous Path
  const getInitialIndex = () => {
    if (!previousPath) return 0;
    const index = menuItems.findIndex((item) => previousPath.startsWith(item.href));
    return index !== -1 ? index : 0;
  };

  // Handle Menu Navigation
  const { activeIndex, setActiveIndex } = useMenu({
    itemCount: menuItems.length,
    initialIndex: getInitialIndex(),
    onSelect: (index: number) => {
      const route = menuItems[index].href;
      router.push(route);
    },
  });

  // Prefetch Active Menu Item Route and Dispatch Custom Event for Preview
  useEffect(() => {
    const route = menuItems[activeIndex]?.href;
    if (route) {
      router.prefetch(route);
      window.dispatchEvent(new CustomEvent("preview-route", { detail: route }));
    }
  }, [activeIndex, router]);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navRef.current) {
      const activeEl = navRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [activeIndex]);

  const activeItem = menuItems[activeIndex];

  return (
    <div className="flex h-full w-full flex-col overflow-hidden pt-4 md:pt-0">
      <div className="my-auto flex max-h-full min-h-0 w-full flex-col">
        {/* Header */}
        <div className="shrink-0">
          {/* Control Legend */}
          <ControlLegend
            controls={[
              { key: "W / S & ▼ / ▲", action: "Navigate" },
              { key: "ENTER / SPACE", action: "Select" },
            ]}
          />

          {/* Top Header / Title */}
          <h2 className="pl-6 font-edo-sz text-2xl tracking-widest text-muted uppercase md:pl-8 md:text-5xl">
            Menu
          </h2>

          {/* Divider */}
          <div className="my-3 h-0.5 w-[90%] bg-divider md:my-6" />
        </div>

        {/* Navigation Items */}
        <nav ref={navRef} className="flex min-h-0 flex-1 scrollbar-none flex-col gap-2 overflow-x-hidden overflow-y-auto font-edo-sz text-foreground md:gap-8">
          {menuItems.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <Link
                key={item.id}
                href={item.href}
                data-active={isActive}
                onPointerMove={(e) => {
                  if (e.pointerType === "mouse" && activeIndex !== index) {
                    setActiveIndex(index);
                  }
                }}
                onClick={(e) => {
                  if (activeIndex !== index) {
                    e.preventDefault();
                    setActiveIndex(index);
                  }
                }}
                className={`block w-[95%] shrink-0 py-2 pl-8 text-left text-3xl transition-colors md:pt-2 md:pb-4 md:pl-16 md:text-6xl ${
                  isActive ? "relative bg-menu-select" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="shrink-0">
          {/* Divider */}
          <div className="my-3 h-0.5 w-[90%] bg-divider md:my-6" />

          {/* Description */}
          <p className="text-md mb-4 w-full px-8 font-lato font-bold tracking-widest text-muted md:mb-4 md:px-16 md:text-2xl">
            {activeItem?.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
