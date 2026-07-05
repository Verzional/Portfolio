import { ReactNode, PointerEvent } from "react";

interface InventorySlotProps {
  isActive: boolean;
  onClick?: () => void;
  onPointerMove?: (e: PointerEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

export function InventorySlot({
  isActive,
  onClick,
  onPointerMove,
  children,
}: InventorySlotProps) {
  return (
    <button
      onClick={onClick}
      onPointerMove={onPointerMove}
      className={`aspect-square w-full rounded border transition-all ${
        isActive
          ? "scale-105 border-primary bg-primary/20 shadow-[0_0_15px_rgba(255,0,0,0.4)]"
          : "scale-100 border-border/20 bg-black/40 hover:bg-black/60"
      }`}
    >
      <div
        className={`flex h-full w-full items-center justify-center font-edo-sz text-2xl transition-colors ${
          isActive ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {children}
      </div>
    </button>
  );
}
