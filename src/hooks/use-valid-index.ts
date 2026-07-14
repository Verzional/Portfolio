import { useState } from "react";

/**
 * Tracks the active index and returns the last valid index within bounds.
 * Useful when navigating menus where the "Back" button (or an exit action) 
 * sets the index out of bounds, but you still want to display background/preview 
 * content for the previously selected valid item.
 */
export function useValidIndex(activeIndex: number, dataLength: number) {
  const [prevActiveIndex, setPrevActiveIndex] = useState(activeIndex);
  const [lastValidIndex, setLastValidIndex] = useState(0);

  if (activeIndex !== prevActiveIndex) {
    setPrevActiveIndex(activeIndex);
    if (activeIndex < dataLength) {
      setLastValidIndex(activeIndex);
    }
  }

  return activeIndex < dataLength ? activeIndex : lastValidIndex;
}
