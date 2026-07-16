import { memo } from "react";
import { LucideIcon } from "lucide-react";

interface SekiroCategoryTabProps {
  isActive: boolean;
  onClick: (id: string) => void;
  label: string;
  id: string;
  themeColor: string;
  icon: LucideIcon;
}

export const SekiroCategoryTab = memo(function SekiroCategoryTab({
  isActive,
  onClick,
  label,
  id,
  icon: Icon,
}: SekiroCategoryTabProps) {
  return (
    <button
      onClick={() => onClick(id)}
      title={label}
      className={`relative flex h-13.5 w-11.5 shrink-0 cursor-pointer items-center justify-center rounded-sm transition-all duration-200 ${
        isActive ? "border-[3px]" : "border-2 hover:bg-foreground/10"
      }`}
      style={{
        backgroundColor: isActive
          ? "color-mix(in srgb, var(--sekiro-orange) 15%, transparent)"
          : "var(--sekiro-bg-dark)",
        borderColor: isActive
          ? "var(--sekiro-orange)"
          : "var(--sekiro-border-dark)",
        boxShadow: isActive
          ? `0 0 12px color-mix(in srgb, var(--sekiro-orange) 80%, transparent), inset 0 0 15px color-mix(in srgb, var(--sekiro-orange) 50%, transparent)`
          : undefined,
        filter: "url('#sekiro-ink-bleed')",
      }}
    >
      <Icon
        className={`h-7 w-7 transition-colors duration-200 ${isActive ? "text-foreground" : "text-foreground/70"}`}
        strokeWidth={2.5}
      />
    </button>
  );
});
