"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMenu } from "@/hooks/use-menu";

export function SubMenu() {
  const pathname = usePathname();
  const router = useRouter();
  const pageTitle = pathname.replace("/", "");

  const { activeIndex, setActiveIndex } = useMenu({
    itemCount: 1,
    onSelect: () => router.push("/"),
  });

  return (
    <div className="flex h-full flex-col justify-between px-4 text-foreground md:px-8">
      <div>
        <h2 className="truncate font-edo-sz text-3xl tracking-widest text-muted-foreground uppercase md:text-4xl">
          {pageTitle}
        </h2>
        <div className="my-6 h-0.5 w-[90%] bg-divider" />

        {/* Dynamic Content (Grid Inventory) Will Render Here */}
        <div
          id="sidebar-slot"
          className="flex w-full flex-1 flex-col items-center justify-center py-4"
        >
          {/* Placeholder for Squares */}
        </div>
      </div>

      <div>
        <div className="my-6 h-0.5 w-[90%] bg-divider" />
        <button
          onPointerMove={(e) => {
            if (e.pointerType === "mouse" && activeIndex !== 0) {
              setActiveIndex(0);
            }
          }}
          onClick={() => router.push("/")}
          className={`w-[95%] pt-2 pb-4 pl-4 text-left font-edo-sz text-3xl tracking-widest uppercase transition-colors md:pl-8 ${
            activeIndex === 0
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
