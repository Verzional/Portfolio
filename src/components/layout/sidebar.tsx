"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useMenu } from "@/hooks/use-menu";

const navItems = ["Projects", "Skills", "Experience", "Socials"];
const projectDescriptions = [
  "Inventory of completed applications and repositories",
  "Tree of mastered frameworks and unlocked technologies.",
  "Quest log of professional roles and key contributions.",
  "Waypoints for digital profiles and networking channels.",
];

export function Sidebar() {
  const router = useRouter();
  const handleSelect = useCallback(
    (index: number) => {
      const route = `/${navItems[index].toLowerCase()}`;
      router.push(route);
    },
    [router],
  );

  const { activeIndex, setActiveIndex } = useMenu({
    itemCount: navItems.length,
    onSelect: handleSelect,
  });

  const activeItem = navItems[activeIndex];

  return (
    <div className="flex h-full w-full flex-col justify-center">
      <div>
        {/* Top Header / Title */}
        <h2 className="pl-6 font-edo-sz text-3xl tracking-widest text-muted-foreground uppercase md:pl-8 md:text-5xl">
          Menu
        </h2>

        {/* Divider */}
        <div className="my-6 h-0.5 w-[90%] bg-divider" />

        {/* Navigation Items */}
        <nav className="flex flex-col gap-4 font-edo-sz text-foreground md:gap-8">
          {navItems.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={item}
                onPointerMove={(e) => {
                  if (e.pointerType === "mouse" && activeIndex !== index) {
                    setActiveIndex(index);
                  }
                }}
                onClick={() => {
                  if (activeIndex === index) {
                    handleSelect(index);
                  } else {
                    setActiveIndex(index);
                  }
                }}
                className={`w-[95%] pt-2 pb-4 pl-8 text-left text-4xl transition-colors md:pl-16 md:text-6xl ${
                  isActive ? "relative bg-menu-select" : ""
                }`}
              >
                {item}
              </button>
            );
          })}
        </nav>
      </div>

      <div>
        {/* Divider */}
        <div className="my-6 h-0.5 w-[90%] bg-divider" />

        {/* Description */}
        <p className="mb-8 w-full px-8 font-lato text-lg font-bold tracking-widest text-muted-foreground md:mb-0 md:px-16 md:text-2xl">
          {projectDescriptions[navItems.indexOf(activeItem)]}{" "}
        </p>
      </div>
    </div>
  );
}
