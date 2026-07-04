"use client";

import { useMenu } from "@/hooks/use-menu";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

const navItems = ["Projects", "Skills", "Experience", "Socials"];
const projectDescriptions = [
  "Inventory of completed applications and repositories",
  "Tree of mastered frameworks and unlocked technologies.",
  "Quest log of professional roles and key contributions.",
  "Waypoints for digital profiles and networking channels.",
];

export default function Home() {
  const router = useRouter();
  const handleSelect = useCallback((index: number) => {
    const route = `/${navItems[index].toLowerCase()}`;
    router.push(route);
  }, [router]);

  const { activeIndex, setActiveIndex } = useMenu({
    itemCount: navItems.length,
    onSelect: handleSelect,
  });

  const activeItem = navItems[activeIndex];

  return (
    <div className="relative flex h-dvh w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[50%] bg-cover bg-center bg-no-repeat opacity-3 md:bottom-0 md:h-auto md:opacity-2"
        style={{ backgroundImage: `url('/images/BG-Dragon.webp')` }}
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[50%] bg-hero-glow-mobile md:bottom-0 md:h-auto md:bg-hero-glow" />

      {/* Sidebar Bleed */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[70%] w-full bg-sidebar-bleed-mobile md:inset-y-0 md:right-auto md:left-0 md:h-full md:w-[45%] md:bg-sidebar-bleed" />

      {/* Interactive Layer */}
      <div className="relative z-20 flex h-full w-full flex-col bg-transparent md:flex-row">
        {/* Sidebar */}
        <aside className="order-2 flex h-[60%] w-full flex-col justify-center bg-transparent py-4 md:order-1 md:h-full md:w-[40%] md:py-24">
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
        </aside>

        {/* Main Content */}
        <main className="relative order-1 flex h-[40%] w-full flex-col items-center justify-center md:order-2 md:h-full md:w-[60%]">
          <div className="z-10 text-center">
            {/* Title */}
            <h1 className="font-edo-sz text-6xl tracking-widest text-foreground md:text-8xl">
              Verzional
            </h1>

            {/* Subtitle */}
            <p className="mt-2 font-lato text-xl font-black tracking-[0.2em] text-primary-foreground uppercase md:mt-4 md:text-4xl md:tracking-[0.5em]">
              Full-Stack Engineer
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
