import { type LucideIcon } from "lucide-react";
import { type SkillCategory } from "@/data/skills";

interface YakuzaCategoryTabProps {
  id: SkillCategory;
  label: string;
  themeColor: string;
  glowColor: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: (id: SkillCategory) => void;
}

export function YakuzaCategoryTab({
  id,
  label,
  themeColor,
  glowColor,
  icon: Icon,
  isActive,
  onClick,
}: YakuzaCategoryTabProps) {
  return (
    <button
      onClick={() => onClick(id)}
      type="button"
      title={label}
      aria-label={label}
      className={`group relative flex h-8.5 w-8.5 shrink-0 cursor-pointer items-center justify-center rounded-full transition-all duration-200 select-none md:h-9 md:w-9 ${
        isActive
          ? "z-10 scale-110 opacity-100"
          : "opacity-75 hover:scale-105 hover:opacity-100"
      }`}
      style={{
        backgroundColor: isActive ? "#141926" : "#0d1017",
        border: `2px solid ${isActive ? themeColor : "rgba(255, 255, 255, 0.16)"}`,
        boxShadow: isActive ? `0 0 12px ${glowColor}` : undefined,
      }}
    >
      {/* Inner Subtle Metallic Bevel */}
      <div
        className="pointer-events-none absolute inset-0.5 rounded-full border border-white/10"
        style={{
          borderColor: isActive
            ? "rgba(255, 255, 255, 0.3)"
            : "rgba(255, 255, 255, 0.06)",
        }}
      />

      {/* Center Icon */}
      <Icon
        className="relative z-10 h-4 w-4 transition-colors duration-200 md:h-4.5 md:w-4.5"
        strokeWidth={isActive ? 2.5 : 2}
        style={{ color: isActive ? themeColor : "#94a3b8" }}
      />
    </button>
  );
}
