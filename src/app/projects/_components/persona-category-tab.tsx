import { LucideIcon } from "lucide-react";

interface PersonaCategoryTabProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
  icon: LucideIcon;
}

export function PersonaCategoryTab({
  isActive,
  onClick,
  label,
  icon: Icon,
}: PersonaCategoryTabProps) {
  return (
    <button
      onClick={onClick}
      title={label}
      className={`relative h-8 w-12 shrink-0 transition-all duration-200 md:h-8 md:w-10 xl:h-10 xl:w-14 ${
        isActive
          ? "z-10 scale-110 -rotate-3"
          : "scale-100 rotate-2 opacity-60 hover:opacity-100"
      }`}
    >
      <div
        className={`absolute inset-0 ${isActive ? "bg-primary" : "bg-background"} border-2 transition-colors ${isActive ? "border-foreground shadow-[4px_4px_0_rgba(0,0,0,0.8)]" : "border-primary"}`}
        style={{ clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0% 100%)" }}
      />
      <div
        className={`relative z-10 flex h-full w-full items-center justify-center ${isActive ? "text-foreground" : "text-primary"}`}
      >
        <Icon className="h-6 w-6 xl:h-7 xl:w-7" strokeWidth={2.5} />
      </div>
    </button>
  );
}