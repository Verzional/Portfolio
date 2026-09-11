"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useMenu } from "@/hooks/use-menu";
import { SubMenu } from "@/components/sub-menu";
import { SidebarPortal } from "@/components/sidebar-portal";

// Navigation Route Options
const notFoundRoutes = [
  { label: "Title Screen", desc: "Return to Home", href: "/" },
  { label: "Projects", desc: "Featured Works", href: "/projects" },
  { label: "Skills", desc: "Combat & Engineering Tree", href: "/skills" },
  { label: "Experience", desc: "Career Quest Log", href: "/experience" },
  { label: "Socials", desc: "Taxi Dispatch & Contacts", href: "/socials" },
];

export function NotFoundClient() {
  const router = useRouter();

  // Manage Keyboard & Focus Navigation
  const { activeIndex, setActiveIndex } = useMenu({
    itemCount: notFoundRoutes.length + 1,
    onSelect: (index) => {
      if (index === notFoundRoutes.length) {
        router.push("/");
      } else {
        router.push(notFoundRoutes[index].href);
      }
    },
  });

  // Prefetch and Update Active Route Background Preview
  useEffect(() => {
    if (activeIndex < notFoundRoutes.length) {
      const route = notFoundRoutes[activeIndex].href;
      router.prefetch(route);
      window.dispatchEvent(new CustomEvent("preview-route", { detail: route }));
    }
  }, [activeIndex, router]);

  // Track Back Button Active State
  const isBackActive = activeIndex === notFoundRoutes.length;

  // Sidebar SubMenu Content
  const sidebarContent = (
    <SubMenu
      title="Lost Route"
      isBackActive={isBackActive}
      onBackClick={() => router.push("/")}
      onBackMove={() => setActiveIndex(notFoundRoutes.length)}
      controls={[
        { key: "W / S & ▼ / ▲", action: "Navigate" },
        { key: "ENTER / SPACE", action: "Select" },
        { key: "ESC", action: "Return" },
      ]}
    >
      <div className="flex min-h-0 w-full flex-1 scrollbar-none flex-col gap-1 overflow-x-hidden overflow-y-auto pt-2 pb-4">
        {notFoundRoutes.map((route, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={route.href}
              type="button"
              onClick={() => router.push(route.href)}
              onPointerMove={(e) => {
                if (e.pointerType === "mouse" && !isActive) {
                  setActiveIndex(idx);
                }
              }}
              className={`flex w-[95%] cursor-pointer flex-col gap-1 py-3 pl-6 text-left transition-colors duration-150 md:py-4 md:pl-12 ${
                isActive
                  ? "bg-menu-select text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <span className="font-edo-sz text-2xl tracking-widest uppercase md:text-3xl">
                {route.label}
              </span>
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -4 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-2 overflow-hidden font-lato text-xs font-bold tracking-wider text-foreground [text-shadow:0_0_5px_var(--color-primary)] md:text-sm"
                  >
                    <span className="text-muted text-shadow-none">↳</span>
                    {route.desc}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>
    </SubMenu>
  );

  return (
    <>
      {/* Portal Navigation to Main Sidebar */}
      <SidebarPortal>{sidebarContent}</SidebarPortal>

      {/* Main Content Area - Yakuza Title Slam */}
      <motion.div
        animate={{
          x: [0, -15, 15, -10, 10, -5, 5, 0],
          y: [0, 15, -15, 10, -10, 5, -5, 0],
        }}
        transition={{
          duration: 0.35,
          delay: 0.45,
          times: [0, 0.1, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
        }}
        className="relative z-10 flex w-full max-w-xl flex-col items-center justify-center px-4 text-center select-none"
      >
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-2 font-edo-sz text-sm tracking-[0.3em] text-muted uppercase md:text-xl"
        >
          {"// SUBSTORY FAILED //"}
        </motion.div>

        {/* Primary 404 Slam */}
        <motion.h1
          initial={{ opacity: 0, scale: 6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.18,
            ease: "easeIn",
            delay: 0.3,
          }}
          className="relative z-20 font-edo-sz text-7xl tracking-widest text-foreground drop-shadow-[5px_5px_0_#d4030d] md:text-9xl md:drop-shadow-[10px_10px_0_#d4030d]"
        >
          404
        </motion.h1>

        {/* Subtitle Slam */}
        <motion.p
          initial={{ opacity: 0, scale: 4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.18,
            ease: "easeIn",
            delay: 0.1,
          }}
          className="relative z-30 mt-1 font-edo-sz text-2xl tracking-[0.3em] text-primary uppercase md:mt-3 md:text-5xl md:tracking-[0.5em]"
        >
          Lost Route
        </motion.p>

        {/* Redesigned HUD Narrative Frame with Red Corner Accents */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          className="relative mt-6 max-w-lg px-8 py-4 text-center backdrop-blur-xs"
        >
          {/* Red Corner Reticle Accents */}
          <span className="absolute top-0 left-0 h-2.5 w-2.5 border-t-2 border-l-2 border-primary" />
          <span className="absolute top-0 right-0 h-2.5 w-2.5 border-t-2 border-r-2 border-primary" />
          <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b-2 border-l-2 border-primary" />
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b-2 border-r-2 border-primary" />

          <p className="font-lato text-sm tracking-wider text-muted leading-relaxed md:text-base">
            There&apos;s nothing down this alley. Head back to the main street.
          </p>
        </motion.div>

        {/* Action Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="mt-6"
        >
          <button
            type="button"
            onClick={() => router.push("/")}
            className="group relative -skew-x-12 border border-foreground/30 bg-menu-select px-6 py-2.5 font-edo-sz text-base tracking-widest text-foreground uppercase transition-all hover:border-primary hover:text-primary md:text-lg"
          >
            <span className="block skew-x-12">Return to Title</span>
          </button>
        </motion.div>
      </motion.div>
    </>
  );
}
