import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TsushimaCategoryTabProps {
  isActive: boolean;
  onClick: (id: string) => void;
  label: string;
  id: string;
  icon: LucideIcon;
}

export function TsushimaCategoryTab({
  isActive,
  onClick,
  label,
  id,
  icon: Icon,
}: TsushimaCategoryTabProps) {
  return (
    <button
      onClick={() => onClick(id)}
      title={label}
      className={cn(
        "group relative flex h-8 w-8 shrink-0 rotate-45 items-center justify-center border transition-all duration-300 md:h-12 md:w-12",
        isActive
          ? "border-[#d4030d] bg-[#d4030d] shadow-[0_0_10px_rgba(212,3,13,0.5)]"
          : "border-gray-500 bg-transparent hover:border-gray-300 hover:bg-white/5",
      )}
    >
      <div className="flex -rotate-45 items-center justify-center">
        <Icon
          className={cn(
            "h-4 w-4 transition-colors duration-300 md:h-6 md:w-6",
            isActive ? "text-white" : "text-gray-400 group-hover:text-white",
          )}
          strokeWidth={isActive ? 2.5 : 2}
        />
      </div>
    </button>
  );
}
