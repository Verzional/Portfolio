import { useEffect, useRef, memo } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SocialSlotProps {
  isActive: boolean;
  onClickAction: (index: number, url: string) => void;
  onHoverAction: (index: number) => void;
  name: string;
  handle: string;
  index: number;
  url: string;
}

export const SocialSlot = memo(function SocialSlot({
  isActive,
  onClickAction,
  onHoverAction,
  name,
  handle,
  index,
  url,
}: SocialSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isActive]);

  return (
    <div
      ref={containerRef}
      onClick={() => onClickAction(index, url)}
      onPointerMove={() => {
        if (!isActive) onHoverAction(index);
      }}
      className={`flex w-[95%] cursor-pointer flex-col gap-1 py-4 pl-8 transition-all duration-200 md:pl-12 ${
        isActive
          ? "bg-menu-select text-foreground"
          : "text-muted hover:text-foreground"
      }`}
    >
      <span className="font-edo-sz text-2xl tracking-widest uppercase md:text-3xl">
        {name}
      </span>
      {/* Neon Tag Dropdown */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -5 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 overflow-hidden font-lato text-sm font-bold tracking-wider text-foreground drop-shadow-[0_0_5px_var(--color-primary)]"
          >
            <span className="text-muted drop-shadow-none">↳</span>
            {handle}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
