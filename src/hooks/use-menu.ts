import { useState, useEffect } from "react";

interface UseMenuOptions {
  itemCount: number;
  onSelect?: (index: number) => void;
  columns?: number;
}

export function useMenu({ itemCount, onSelect, columns = 1 }: UseMenuOptions) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Page Scrolling on Arrow Keys
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
      }

      if (columns === 1) {
        if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
          setActiveIndex((prev) => (prev > 0 ? prev - 1 : itemCount - 1));
        } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
          setActiveIndex((prev) => (prev < itemCount - 1 ? prev + 1 : 0));
        } else if (e.key === "Enter" || e.key === " ") {
          onSelect?.(activeIndex);
        }
      } else {
        if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
          setActiveIndex((prev) => (prev - columns >= 0 ? prev - columns : prev));
        } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
          setActiveIndex((prev) => (prev + columns < itemCount ? prev + columns : prev));
        } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
          setActiveIndex((prev) => (prev % columns === 0 ? prev : prev - 1));
        } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
          setActiveIndex((prev) => ((prev + 1) % columns === 0 || prev + 1 >= itemCount ? prev : prev + 1));
        } else if (e.key === "Enter" || e.key === " ") {
          onSelect?.(activeIndex);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, itemCount, onSelect, columns]);

  return { activeIndex, setActiveIndex };
}
