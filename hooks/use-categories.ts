import { useState, useEffect } from "react";

export function useCategories<T extends { id: string }>(categories: T[]) {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "q") {
        setActiveCategory((prev) => {
          const idx = categories.findIndex((c) => c.id === prev);
          return categories[idx > 0 ? idx - 1 : categories.length - 1].id;
        });
      } else if (e.key.toLowerCase() === "e") {
        setActiveCategory((prev) => {
          const idx = categories.findIndex((c) => c.id === prev);
          return categories[idx < categories.length - 1 ? idx + 1 : 0].id;
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [categories]);

  return { activeCategory, setActiveCategory };
}
