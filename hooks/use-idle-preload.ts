"use client";

import { useEffect, useState } from "react";

/**
 * Returns true only after initial page paint and when the browser is idle,
 * safeguarding LCP and Speed Index by deferring non-critical asset preloads.
 */
export function useIdlePreload(fallbackDelayMs = 1500) {
  const [shouldPreload, setShouldPreload] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("requestIdleCallback" in window) {
      const handle = window.requestIdleCallback(
        () => {
          setShouldPreload(true);
        },
        { timeout: fallbackDelayMs },
      );
      return () => window.cancelIdleCallback(handle);
    }

    const timer = setTimeout(() => {
      setShouldPreload(true);
    }, fallbackDelayMs);

    return () => clearTimeout(timer);
  }, [fallbackDelayMs]);

  return shouldPreload;
}
