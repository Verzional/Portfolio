"use client";

import { useEffect } from "react";
import { ControlLegend } from "@/components/control-legend";

interface SubMenuProps {
  title: string;
  children?: React.ReactNode;
  isBackActive?: boolean;
  onBackClick?: () => void;
  onBackMove?: () => void;
  controls?: { key: string; action: string }[];
}

export function SubMenu({
  title,
  children,
  isBackActive = false,
  onBackClick,
  onBackMove,
  controls,
}: SubMenuProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onBackClick) {
        onBackClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onBackClick]);

  return (
    <div className="flex h-full w-full flex-col overflow-hidden text-foreground pt-4 md:pt-0">
      <div className="my-auto flex max-h-full min-h-0 w-full flex-col">
        {/* Header */}
        <div className="shrink-0 flex flex-col">
          {/* Control Legend */}
          {controls && <ControlLegend controls={controls} />}

          {/* Title */}
          <h2 className="shrink-0 truncate pl-6 font-edo-sz text-2xl tracking-widest text-muted uppercase md:pl-8 md:text-4xl xl:text-5xl">
            {title}
          </h2>

          {/* Divider */}
          <div className="my-3 h-0.5 w-[90%] bg-divider md:my-4 xl:my-6" />
        </div>

        {/* Children */}
        <div
          id="sidebar-slot"
          className="flex min-h-0 w-full flex-1 flex-col"
        >
          {children}
        </div>

        {/* Footer */}
        <div className="shrink-0 flex flex-col">
          {/* Divider */}
          <div className="my-3 h-0.5 w-[90%] bg-divider md:my-4 xl:my-6" />

          {/* Back Button */}
          <button
            onClick={onBackClick}
            onPointerMove={(e) => {
              if (e.pointerType === "mouse" && !isBackActive) {
                onBackMove?.();
              }
            }}
            className={`block w-[95%] py-2 pl-6 text-left font-edo-sz text-2xl tracking-widest uppercase transition-colors md:py-3 md:pl-8 md:text-4xl xl:pt-2 xl:pb-4 xl:text-5xl ${
              isBackActive
                ? "relative bg-menu-select text-foreground"
                : "text-muted hover:bg-menu-select hover:text-foreground"
            }`}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
