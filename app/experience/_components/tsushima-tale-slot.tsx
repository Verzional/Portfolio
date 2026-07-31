import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TsushimaTaleSlotProps {
  index: number;
  isActive: boolean;
  company: string;
  role: string;
  status: string;
  onClick: (index: number) => void;
}

export function TsushimaTaleSlot({
  index,
  isActive,
  company,
  role,
  status,
  onClick,
}: TsushimaTaleSlotProps) {
  return (
    <motion.button
      onClick={() => onClick(index)}
      className={cn(
        "group relative flex w-full items-center py-3 pr-4 pl-2 text-left transition-colors md:py-4 md:pl-4",
        isActive
          ? "bg-menu-select text-white"
          : "text-gray-400 hover:bg-white/5",
      )}
      whileHover={!isActive ? { x: 5 } : {}}
      whileTap={{ scale: 0.98 }}
    >
      {/* Diamond Icon */}
      <div className="flex shrink-0 items-center justify-center pr-4 pl-2 md:pr-6">
        <div
          className={cn(
            "relative flex h-3 w-3 rotate-45 items-center justify-center border-[1.5px] md:h-4 md:w-4",
            isActive ? "border-white" : "border-gray-500",
          )}
        >
          <div
            className={cn(
              "h-1 w-1 bg-current md:h-1.5 md:w-1.5",
              isActive ? "opacity-100" : "opacity-0",
            )}
          />
        </div>
      </div>

      {/* Tale Info */}
      <div className="flex min-w-0 flex-col">
        <span
          className={cn(
            "truncate font-lato text-sm tracking-widest uppercase md:text-base md:font-medium",
            isActive ? "text-white" : "text-gray-300 group-hover:text-white",
          )}
        >
          {company}
        </span>
        <span
          className={cn(
            "truncate font-lato text-xs tracking-wider md:text-sm",
            isActive
              ? "text-white/80"
              : "text-gray-500 group-hover:text-gray-400",
          )}
        >
          {role}
        </span>
      </div>
    </motion.button>
  );
}
