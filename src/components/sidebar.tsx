"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useMenu } from "@/hooks/use-menu";
import { menuItems } from "@/data/navigation";
import { ControlLegend } from "@/components/control-legend";

export function Sidebar() {
  const router = useRouter();

  // Handle Menu Item Selection
  const handleSelect = useCallback(
    (index: number) => {
      const route = menuItems[index].href;
      router.push(route);
    },
    [router],
  );

  // Handle Menu Navigation
  const { activeIndex, setActiveIndex } = useMenu({
    itemCount: menuItems.length,
    onSelect: handleSelect,
  });

  // Prefetch Active Menu Item Route and Dispatch Custom Event for Preview
  useEffect(() => {
    const route = menuItems[activeIndex]?.href;
    if (route) {
      router.prefetch(route);
      window.dispatchEvent(new CustomEvent("preview-route", { detail: route }));
    }
  }, [activeIndex, router]);

  const activeItem = menuItems[activeIndex];

  return (
    <div className="flex h-full w-full flex-col overflow-hidden pt-4 md:pt-0">
      <div className="my-auto flex max-h-full min-h-0 w-full flex-col">
        {/* Header */}
        <div className="shrink-0">
          {/* Control Legend */}
          <ControlLegend
            controls={[
              { key: "W / S", action: "Navigate" },
              { key: "ENTER / SPACE", action: "Select" },
            ]}
          />

          {/* Top Header / Title */}
          <h2 className="pl-6 font-edo-sz text-2xl tracking-widest text-muted-foreground uppercase md:pl-8 md:text-5xl">
            Menu
          </h2>

          {/* Divider */}
          <div className="my-3 h-0.5 w-[90%] bg-divider md:my-6" />
        </div>

        {/* Navigation Items */}
        <nav className="flex min-h-0 flex-1 scrollbar-none flex-col gap-2 overflow-x-hidden overflow-y-auto font-edo-sz text-foreground md:gap-8">
          {menuItems.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <Link
                key={item.id}
                href={item.href}
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
          <p className="text-md mb-4 w-full px-8 font-lato font-bold tracking-widest text-muted-foreground md:mb-4 md:px-16 md:text-2xl">
            {activeItem?.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
