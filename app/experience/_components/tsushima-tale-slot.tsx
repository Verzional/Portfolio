import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TsushimaTaleSlotProps {
  index: number;
  isActive: boolean;
  company: string;
  role: string;
  onClick: (index: number) => void;
}

export function TsushimaTaleSlot({
  index,
  isActive,
  company,
  role,
  onClick,
}: TsushimaTaleSlotProps) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isActive && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isActive]);

  return (
    <motion.button
      ref={ref}
      onClick={() => onClick(index)}
      className={cn(
        "group relative flex w-full items-center py-3 pr-4 pl-4 text-left transition-colors md:py-4 md:pl-6",
        isActive
          ? "z-10 text-white"
          : "bg-linear-to-r from-[#e8e8e8] to-[#d6d6d6] text-[#111] hover:brightness-105",
      )}
      whileHover={!isActive ? { x: 3 } : {}}
      whileTap={{ scale: 0.98 }}
    >
      {/* Indicate Active Selection */}
      {isActive && (
        <motion.div
          className="absolute -bottom-1.25 -left-0.75 -right-8 -top-1.25 -z-10 bg-[#c1272d] shadow-lg md:-right-12"
          initial={{ scaleX: 1.05, scaleY: 1.1, opacity: 0 }}
          animate={{ scaleX: 1, scaleY: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 1000,
            damping: 30,
            mass: 0.5,
          }}
        />
      )}
      {/* Render Visual Bullet */}
      <div className="flex shrink-0 items-center justify-center pr-5 md:pr-6">
        <div
          className={cn(
            "relative flex h-3 w-3 rotate-45 items-center justify-center border-2 md:h-4 md:w-4",
            isActive ? "border-white" : "border-black",
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

      {/* Display Tale Metadata */}
      <div className="flex min-w-0 flex-col pr-2">
        <span
          className={cn(
            "truncate font-lato text-sm font-bold tracking-widest uppercase md:text-base",
            isActive ? "text-white" : "text-[#111]",
          )}
        >
          {company}
        </span>
        <span
          className={cn(
            "mt-0.5 truncate font-lato text-xs font-semibold tracking-wider md:text-sm",
            isActive ? "text-white/90" : "text-[#111]/70",
          )}
        >
          {role}
        </span>
      </div>
    </motion.button>
  );
}
