"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface ControlItem {
  key: string;
  action: string;
}

export function ControlLegend({ controls }: { controls: ControlItem[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!controls || controls.length === 0 || !mounted) return null;

  const content = (
    <div className="pointer-events-none fixed top-6 left-6 z-[100] hidden animate-in flex-wrap items-center gap-4 font-edo-sz text-sm text-muted-foreground opacity-50 duration-500 fade-in md:text-base xl:flex">
      {controls.map((c) => (
        <div key={c.key} className="flex items-center gap-2">
          <span className="tracking-widest text-foreground">[{c.key}]</span>
          <span className="tracking-widest uppercase">{c.action}</span>
        </div>
      ))}
    </div>
  );

  return createPortal(content, document.body);
}
