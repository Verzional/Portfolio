"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useMenu } from "@/hooks/use-menu";
import { menuItems } from "@/lib/data/navigation";
import { ControlLegend } from "@/components/ui/control-legend";

export function Sidebar() {
  const router = useRouter();
  const handleSelect = useCallback(
    (index: number) => {
      const route = menuItems[index].href;
      router.push(route);
    },
    [router],
  );

  const { activeIndex, setActiveIndex } = useMenu({
    itemCount: menuItems.length,
    onSelect: handleSelect,
  });

  useEffect(() => {
    const route = menuItems[activeIndex]?.href;
    if (route) {
      router.prefetch(route);
    }
  }, [activeIndex, router]);

  const activeItem = menuItems[activeIndex];

  return (
    <div className="flex h-full w-full flex-col justify-center">
      <div>
        <ControlLegend 
          controls={[
            { key: "W / S", action: "Navigate" },
            { key: "ENTER / SPACE", action: "Select" }
          ]} 
        />
        
        {/* Top Header / Title */}
        <h2 className="pl-6 font-edo-sz text-3xl tracking-widest text-muted-foreground uppercase md:pl-8 md:text-5xl">
          Menu
        </h2>

        {/* Divider */}
        <div className="my-6 h-0.5 w-[90%] bg-divider" />

        {/* Navigation Items */}
        <nav className="flex flex-col gap-4 font-edo-sz text-foreground md:gap-8">
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
                className={`block w-[95%] pt-2 pb-4 pl-8 text-left text-4xl transition-colors md:pl-16 md:text-6xl ${
                  isActive ? "relative bg-menu-select" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div>
        {/* Divider */}
        <div className="my-6 h-0.5 w-[90%] bg-divider" />

        {/* Description */}
        <p className="mb-8 w-full px-8 font-lato text-lg font-bold tracking-widest text-muted-foreground md:mb-4 md:px-16 md:text-2xl">
          {activeItem?.desc}
        </p>
      </div>
    </div>
  );
}
