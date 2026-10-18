import Image from "next/image";
import { type SkillNode, skillCategories } from "@/data/skills";

interface YakuzaHeatDossierProps {
  activeNode: SkillNode | null;
}

export function YakuzaHeatDossier({ activeNode }: YakuzaHeatDossierProps) {
  if (!activeNode) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-6 text-center text-muted">
        <p className="font-edo-sz text-xl tracking-wider text-foreground">
          SELECT AN ABILITY NODE
        </p>
        <p className="mt-2 font-lato text-xs tracking-widest uppercase">
          Use WASD or click any node on the wheel
        </p>
      </div>
    );
  }

  const categoryMeta = skillCategories.find((c) => c.id === activeNode.category);
  const themeColor = categoryMeta?.themeColor || "var(--color-primary)";
  const glowColor = categoryMeta?.glowColor || "rgba(239, 68, 68, 0.4)";

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col overflow-x-hidden overflow-y-auto px-6 pt-3 pb-8 outline-none focus:outline-none focus-visible:outline-none md:px-8 md:pt-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border/40">
      {/* Side-by-Side Hero Header */}
      <div className="flex h-12 items-center gap-3 md:h-13 md:gap-3.5">
        {/* Tech Icon Square Frame */}
        <div
          className="relative flex aspect-square h-full shrink-0 items-center justify-center rounded-sm border-2 bg-surface/90 p-2 transition-all md:p-2.5"
          style={{
            borderColor: themeColor,
            boxShadow: `0 0 12px ${glowColor}`,
          }}
        >
          <Image
            src={activeNode.icon}
            alt={activeNode.name}
            width={30}
            height={30}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Title and Domain Category */}
        <div className="flex h-full min-w-0 flex-1 flex-col justify-between py-0.5">
          <span
            className="font-lato text-[10px] font-bold tracking-widest uppercase md:text-[11px]"
            style={{ color: themeColor }}
          >
            {categoryMeta?.subtitle || activeNode.category}
          </span>
          <h3
            className={`font-edo-sz leading-none tracking-wide text-foreground break-normal ${
              activeNode.name.length > 9
                ? "text-lg sm:text-xl xl:text-2xl"
                : "text-xl sm:text-2xl xl:text-3xl"
            }`}
          >
            {activeNode.name}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 font-lato text-sm leading-relaxed text-foreground/80 md:mt-6 md:text-base md:pr-4">
        {activeNode.description}
      </p>
    </div>
  );
}
