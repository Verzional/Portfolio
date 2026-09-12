import { LucideIcon } from "lucide-react";

interface PersonaCategoryTabProps {
  isActive: boolean;
  onClick: (id: string) => void;
  label: string;
  id: string;
  icon: LucideIcon;
}

export function PersonaCategoryTab({
  isActive,
  onClick,
  label,
  id,
  icon: Icon,
}: PersonaCategoryTabProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      title={label}
      aria-label={label}
      className={`relative h-8 w-12 shrink-0 cursor-pointer transition-all duration-200 md:h-8 md:w-10 xl:h-10 xl:w-14 ${
        isActive
          ? "z-10 scale-110 -rotate-3"
          : "scale-100 rotate-2 opacity-85 hover:scale-105 hover:opacity-100"
      }`}
    >
      <div
        className={`absolute inset-0 transition-colors ${
          isActive
            ? "border-2 border-foreground bg-primary shadow-[4px_4px_0_rgba(0,0,0,0.8)]"
            : "border-2 border-foreground/40 bg-foreground/10 hover:border-primary hover:bg-primary/20"
        }`}
        style={{ clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0% 100%)" }}
      />
      <div
        className={`relative z-10 flex h-full w-full items-center justify-center ${
          isActive ? "text-foreground" : "text-foreground/85"
        }`}
      >
        <Icon className="h-5 w-5 xl:h-6 xl:w-6" strokeWidth={2.5} />
      </div>
    </button>
  );
}
