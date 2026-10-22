import { type SkillCategory, skillCategories } from "@/data/skills";

interface WheelCenterHubProps {
  activeCategory: SkillCategory;
  effectiveCategory: SkillCategory;
  onSelectAll: () => void;
}

export function WheelCenterHub({
  activeCategory,
  effectiveCategory,
  onSelectAll,
}: WheelCenterHubProps) {
  const isAllCategory = activeCategory === "ALL";
  const effectiveCategoryMeta = skillCategories.find(
    (c) => c.id === effectiveCategory,
  );

  const currentStyleIcon = isAllCategory
    ? "/images/styles/all-kiwami.png"
    : effectiveCategoryMeta?.styleIcon || "/images/styles/all-kiwami.png";
  const currentThemeColor = isAllCategory
    ? "#ff2a2a"
    : effectiveCategoryMeta?.themeColor || "#f8fafc";
  const currentGlowColor = isAllCategory
    ? "rgba(255, 42, 42, 0.7)"
    : effectiveCategoryMeta?.glowColor || "rgba(255, 255, 255, 0.4)";

  return (
    <g
      className="cursor-pointer transition-transform duration-200 hover:scale-105"
      onClick={onSelectAll}
    >
      {/* Outer Beveled Stance Rim */}
      <circle
        cx="0"
        cy="0"
        r="55"
        fill="none"
        stroke={currentThemeColor}
        strokeWidth="3"
        className="transition-colors duration-300"
        style={{
          filter: `drop-shadow(0 0 6px ${currentGlowColor})`,
        }}
      />

      {/* Rotating Notched Gear Ring */}
      <circle
        cx="0"
        cy="0"
        r="49"
        fill="none"
        stroke={currentThemeColor}
        strokeWidth="1.5"
        strokeDasharray="6 3"
        className="animate-[spin_40s_linear_infinite] transition-colors duration-300"
      />

      {/* Deep Inset Dark Enamel Plate */}
      <circle
        cx="0"
        cy="0"
        r="44"
        fill="url(#center-hub-gradient)"
        stroke="rgba(255, 255, 255, 0.15)"
        strokeWidth="1.5"
      />

      {/* Render Stance Style Seal Asset */}
      <g clipPath="url(#center-hub-clip)">
        <image
          href={currentStyleIcon}
          x="-38"
          y="-38"
          width="76"
          height="76"
          className="pointer-events-none transition-all duration-300 select-none"
          style={{
            filter: `drop-shadow(0 0 10px ${currentGlowColor})`,
          }}
        />
      </g>
    </g>
  );
}
