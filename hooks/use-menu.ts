import { useState, useEffect } from "react";

interface UseMenuOptions {
  itemCount: number;
  initialIndex?: number;
  onSelect?: (index: number) => void;
}

export function useMenu({ itemCount, initialIndex = 0, onSelect }: UseMenuOptions) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Page Scrolling on Arrow Keys
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
      }

      if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : itemCount - 1));
      } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
        setActiveIndex((prev) => (prev < itemCount - 1 ? prev + 1 : 0));
      } else if (e.key === "Enter" || e.key === " ") {
        onSelect?.(activeIndex);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [itemCount, activeIndex, onSelect]);

  return { activeIndex, setActiveIndex };
}
