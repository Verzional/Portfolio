import { useState, useEffect, useCallback } from "react";

export function useCategories<T extends { id: string }>(
  categories: T[],
  onCategoryChange?: (category: T["id"]) => void,
) {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  // Update Active Category And Trigger Callback
  const selectCategory = useCallback(
    (nextId: T["id"]) => {
      setActiveCategory(nextId);
      onCategoryChange?.(nextId);
    },
    [onCategoryChange],
  );

  // Listen For Keyboard Category Switching
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore Keystrokes In Form Input Elements
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key.toLowerCase() === "q") {
        const idx = categories.findIndex((c) => c.id === activeCategory);
        const nextId = categories[idx > 0 ? idx - 1 : categories.length - 1].id;
        selectCategory(nextId);
      } else if (e.key.toLowerCase() === "e") {
        const idx = categories.findIndex((c) => c.id === activeCategory);
        const nextId = categories[idx < categories.length - 1 ? idx + 1 : 0].id;
        selectCategory(nextId);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [categories, activeCategory, selectCategory]);

  return { activeCategory, setActiveCategory: selectCategory };
}
