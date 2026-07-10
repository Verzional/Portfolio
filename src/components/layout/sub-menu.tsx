"use client";

import { ControlLegend } from "@/components/ui/control-legend";

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
  return (
    <div className="flex h-full flex-col justify-between text-foreground">
      <div className="flex min-h-0 flex-1 flex-col">
        {/* Control Legend */}
        {controls && <ControlLegend controls={controls} />}

        {/* Title */}
        <h2 className="shrink-0 truncate pl-6 font-edo-sz text-2xl tracking-widest text-muted-foreground uppercase md:pl-8 md:text-4xl xl:text-5xl">
          {title}
        </h2>
        <div className="my-3 h-0.5 w-[90%] bg-divider md:my-4 xl:my-6" />

        {/* Children */}
        <div
          id="sidebar-slot"
          className="flex min-h-0 w-full flex-1 flex-col items-center justify-center"
        >
          {children}
        </div>
      </div>

      {/* Back Button */}
      <div className="shrink-0">
        <div className="my-3 h-0.5 w-[90%] bg-divider md:my-4 xl:my-6" />
        <button
          onPointerMove={onBackMove}
          onClick={onBackClick}
          className={`block w-[95%] py-2 pl-6 text-left font-edo-sz text-2xl tracking-widest uppercase transition-colors md:py-3 md:pl-8 md:text-4xl xl:pt-2 xl:pb-4 xl:text-5xl ${
            isBackActive
              ? "relative bg-menu-select text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Back
        </button>
      </div>
    </div>
  );
}
