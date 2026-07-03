"use client";

import { useMenu } from "@/hooks/use-menu";
import { useCallback } from "react";

const navItems = ["Projects", "Skills", "Experience", "Socials"];
const projectDescriptions = [
  "Inventory of completed applications and development repositories",
  "Tree of mastered frameworks and unlocked technologies.",
  "Quest log of professional roles and key contributions.",
  "External nodes for digital profiles and networking channels.",
];

export default function Hero() {
  const handleSelect = useCallback((index: number) => {
    console.log(`Selected: ${navItems[index]}`);
  }, []);

  const { activeIndex, setActiveIndex } = useMenu({
    itemCount: navItems.length,
    onSelect: handleSelect,
  });
  
  const activeItem = navItems[activeIndex];

  return (
    <div className="relative flex h-dvh w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-2"
        style={{ backgroundImage: `url('/images/BG-Dragon.webp')` }}
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-hero-glow" />

      {/* Sidebar Bleed */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[45%] bg-sidebar-bleed" />

      {/* Interactive Layer */}
      <div className="relative z-20 flex h-full w-full bg-transparent">
        
        {/* Sidebar */}
        <aside className="flex h-full w-[40%] flex-col justify-center bg-transparent py-24">
          <div>
            {/* Top Header / Title */}
            <h2 className="pl-8 font-edo-sz text-5xl tracking-widest text-muted-foreground uppercase">
              Menu
            </h2>

            {/* Divider */}
            <div className="my-6 h-0.5 w-[90%] bg-divider" />

            {/* Navigation Items */}
            <nav className="flex flex-col gap-8 font-edo-sz text-foreground">
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
                        console.log(`Navigating to: ${item}`);
                      } else {
                        setActiveIndex(index);
                      }
                    }}
                    className={`w-[95%] pt-2 pb-4 pl-16 text-left text-6xl transition-colors ${
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
            <p className="w-full px-16 font-lato text-2xl font-bold tracking-widest text-muted-foreground">
              {projectDescriptions[navItems.indexOf(activeItem)]}{" "}
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="relative flex h-full w-[60%] flex-col items-center justify-center">
          <div className="z-10 text-center">

            {/* Title */}
            <h1 className="font-edo-sz text-8xl tracking-widest text-foreground">
              Verzional
            </h1>

            {/* Subtitle */}
            <p className="mt-4 font-lato text-4xl font-black tracking-[0.5em] text-primary-foreground uppercase">
              Full-Stack Engineer
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
