import { useState } from "react";

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
