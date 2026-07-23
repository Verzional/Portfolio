import { LucideIcon } from "lucide-react";

interface SekiroCategoryTabProps {
  isActive: boolean;
  onClick: (id: string) => void;
  label: string;
  id: string;
  themeColor: string;
  icon: LucideIcon;
}

export function SekiroCategoryTab({
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
      className={`relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-sm transition-all duration-200 md:h-12 md:w-12 xl:h-14 xl:w-14 ${
        isActive ? "border-[3px]" : "border-2 hover:bg-foreground/10"
      }`}
      style={{
        backgroundColor: isActive
          ? "color-mix(in srgb, #d95c14 15%, transparent)"
          : "#161616",
        borderColor: isActive
          ? "#d95c14"
          : "#3a3a3a",
        boxShadow: isActive
          ? `0 0 12px color-mix(in srgb, #d95c14 80%, transparent), inset 0 0 15px color-mix(in srgb, #d95c14 50%, transparent)`
          : undefined,
        filter: "url('#sekiro-ink-bleed')",
      }}
    >
      <Icon
        className={`h-5 w-5 md:h-6 md:w-6 xl:h-7 xl:w-7 transition-colors duration-200 ${isActive ? "text-foreground" : "text-foreground/70"}`}
        strokeWidth={2.5}
      />
    </button>
  );
}
