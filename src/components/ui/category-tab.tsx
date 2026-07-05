import { LucideIcon } from "lucide-react";

interface CategoryTabProps {
  isActive: boolean;
  onClick: () => void;
  icon: LucideIcon;
  label: string;
}

export function CategoryTab({
  isActive,
  onClick,
  icon: Icon,
  label,
}: CategoryTabProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex flex-col items-center gap-2 transition-colors ${
        isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      <div
        className={`rounded-full p-2 transition-all ${
          isActive
            ? "scale-110 bg-primary/20 shadow-[0_0_15px_rgba(255,0,0,0.4)]"
            : "bg-transparent group-hover:bg-white/5"
        }`}
      >
        <Icon size={28} />
      </div>
      <span className="font-edo-sz text-xs tracking-widest">{label}</span>
    </button>
  );
}
