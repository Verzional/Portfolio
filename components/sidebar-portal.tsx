"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export function SidebarPortal({ children }: { children: React.ReactNode }) {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let raf: number;

    const checkTarget = () => {
      const el = document.getElementById("sidebar-root");
      if (el) {
        setTarget(el);
      } else {
        raf = requestAnimationFrame(checkTarget);
      }
    };

    checkTarget();

    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  if (!target) return null;

  return createPortal(children, target);
}
