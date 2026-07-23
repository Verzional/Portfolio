"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { preload } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { Sidebar as HomeMenu } from "@/components/sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [previewRoute, setPreviewRoute] = useState<string | null>(null);
  const [previousPath, setPreviousPath] = useState<string | null>(null);
  const currentPathRef = useRef(pathname);

  // Track Previous Path
  useEffect(() => {
    if (currentPathRef.current !== pathname) {
      setPreviousPath(currentPathRef.current);
      currentPathRef.current = pathname;
    }
  }, [pathname]);

  // Handle Preview Route Events
  useEffect(() => {
    const handlePreview = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setPreviewRoute(customEvent.detail);
    };

    window.addEventListener("preview-route", handlePreview);
    return () => window.removeEventListener("preview-route", handlePreview);
  }, []);

  // Home Page Backgrounds
  const homeHoverBgMap: Record<string, string> = {
    "/projects": "/images/backgrounds/BG-Kiryu.webp",
    "/skills": "/images/backgrounds/BG-Majima.webp",
    "/experience": "/images/backgrounds/BG-Saejima.webp",
    "/socials": "/images/backgrounds/BG-Ichiban.webp",
  };

  // Aggressively Preload Home Page Backgrounds
  if (isHome) {
    Object.values(homeHoverBgMap).forEach((bg) => {
      preload(bg, { as: "image" });
    });
  }

  // Non-Home Page Backgrounds
  const pageBgMap: Record<string, string> = {
    "/projects": "/images/backgrounds/BG-Persona.webp",
    "/skills": "/images/backgrounds/BG-Sekiro.webp",
    "/experience": "/images/backgrounds/BG-Saejima.webp",
    "/socials": "/images/backgrounds/BG-Ichiban.webp",
  };

  // Background Opacity Mapping
  const bgOpacityMap: Record<string, string> = {
    "/images/backgrounds/BG-Kiryu.webp": "opacity-5 md:opacity-3",
    "/images/backgrounds/BG-Majima.webp": "opacity-15 md:opacity-10",
    "/images/backgrounds/BG-Saejima.webp": "opacity-5 md:opacity-3",
    "/images/backgrounds/BG-Ichiban.webp": "opacity-5 md:opacity-3",
    "/images/backgrounds/BG-Persona.webp": "opacity-5 md:opacity-3",
    "/images/backgrounds/BG-Nishiki.webp": "opacity-5 md:opacity-3",
    "/images/backgrounds/BG-Sekiro.webp": "opacity-5 md:opacity-3",
  };

  // Home Page Background Logic
  let activeBg = "/images/backgrounds/BG-Kiryu.webp";
  if (isHome) {
    if (previewRoute && homeHoverBgMap[previewRoute]) {
      activeBg = homeHoverBgMap[previewRoute];
    }
  } else {
    if (pageBgMap[pathname]) {
      activeBg = pageBgMap[pathname];
    }
  }

  // Get Target Opacity for Active Background
  const activeOpacity = bgOpacityMap[activeBg] || "opacity-10 md:opacity-10";

  return (
    <div className="relative flex h-dvh w-full overflow-hidden bg-background">
      {/* Background Image Container */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[50%] overflow-hidden md:bottom-0 md:h-full">
        <AnimatePresence>
          <motion.div
            key={activeBg}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={activeBg}
              alt="Theme Background"
              fill={true}
              priority={true}
              sizes="100vw"
              quality={90}
              className={`object-cover object-[90%_center] md:object-center ${activeOpacity}`}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[60%] bg-hero-glow-mobile md:bottom-0 md:h-auto md:bg-hero-glow" />

      {/* Sidebar Bleed */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[70%] w-full bg-sidebar-bleed-mobile transition-sidebar md:inset-y-0 md:right-auto md:left-0 md:h-full md:bg-sidebar-bleed ${
          isHome ? "md:w-[55%] lg:w-[45%]" : "md:w-[40%] lg:w-[25%]"
        }`}
      />

      {/* Interactive Layer */}
      <div className="relative z-20 flex h-full w-full flex-col bg-transparent md:flex-row">
        {/* Sidebar Container */}
        <aside
          className={`order-2 flex h-[50%] w-full flex-col justify-center overflow-x-hidden bg-transparent py-4 transition-sidebar md:order-1 md:h-full md:py-24 ${
            isHome ? "md:w-[50%] lg:w-[40%]" : "md:w-[35%] lg:w-[20%]"
          }`}
        >
          <AnimatePresence mode="wait">
            {isHome ? (
              // Home Menu
              <motion.div
                key="home-menu"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex h-full w-full min-w-screen flex-col justify-center md:min-w-[40vw]"
              >
                <HomeMenu previousPath={previousPath} />
              </motion.div>
            ) : (
              // Sub Menu
              <motion.div
                key="sub-menu"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex h-full w-full flex-col justify-center"
              >
                <div id="sidebar-root" className="h-full w-full" />
              </motion.div>
            )}
          </AnimatePresence>
        </aside>

        {/* Main Content Area */}
        <main className="relative order-1 flex h-[50%] w-full flex-1 flex-col items-center justify-center md:order-2 md:h-full">
          {children}
        </main>
      </div>
    </div>
  );
}
