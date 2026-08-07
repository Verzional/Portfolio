import { LucideIcon } from "lucide-react";

interface TsushimaCategoryTabProps {
  id: string;
  isActive: boolean;
  onClick: (id: string) => void;
  label: string;
  icon: LucideIcon;
}

export function TsushimaCategoryTab({
  id,
  isActive,
  onClick,
  label,
  icon: Icon,
}: TsushimaCategoryTabProps) {
  return (
    <button
      onClick={() => onClick(id)}
      className="group relative flex items-center gap-4 outline-none"
      title={label}
    >
      {/* Render Diamond Shape */}
      <div className="relative flex items-center justify-center p-3">
        <div
          className={`flex h-10 w-10 rotate-45 items-center justify-center border transition-all duration-200 md:h-13 md:w-13 ${
            isActive
              ? "border-[#c6a75f] bg-[#c6a75f]"
              : "scale-95 border-white/20 bg-transparent hover:scale-100 hover:border-white/50"
          }`}
        >
          <div className="-rotate-45">
            <Icon
              className={`h-6 w-6 md:h-7 md:w-7 ${isActive ? "text-black" : "text-white/50"}`}
              strokeWidth={2.5}
            />
          </div>
        </div>
      </div>
    </button>
  );
}
