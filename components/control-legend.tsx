"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";

export interface ControlItem {
  key: string;
  action: string;
}

export function ControlLegend({ controls }: { controls: ControlItem[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!controls || controls.length === 0 || !mounted) return null;

  const content = (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 0.5, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="pointer-events-none fixed top-6 left-6 z-100 hidden flex-wrap items-center gap-4 font-edo-sz text-sm text-foreground md:text-base xl:flex"
    >
      {controls.map((c) => (
        <div key={c.key} className="flex items-center gap-2">
          <span className="tracking-widest">[{c.key}]</span>
          <span className="tracking-widest text-muted uppercase">
            {c.action}
          </span>
        </div>
      ))}
    </motion.div>
  );

  return createPortal(content, document.body);
}
