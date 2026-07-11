"use client";

import { motion } from "motion/react";
// import { Hexagon } from "lucide-react";

export function YakuzaTitle() {
  const subtitleDelay = 0.1;
  const slamDelay = 0.3;
  const impactTime = slamDelay + 0.15;

  return (
    // Shake Animation Wrapper
    <motion.div
      animate={{
        x: [0, -15, 15, -10, 10, -5, 5, 0],
        y: [0, 15, -15, 10, -10, 5, -5, 0],
      }}
      transition={{
        duration: 0.35,
        delay: impactTime,
        times: [0, 0.1, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
      }}
      className="relative z-10 flex w-full flex-col items-center justify-center text-center"
    >
      {/* Logo */}
      {/*<motion.div
        initial={{ opacity: 0, scale: 0.3, rotate: -45 }}
        animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 m-auto flex items-center justify-center text-primary"
      >
        <Hexagon className="h-64 w-64 md:h-96 md:w-96" strokeWidth={1} />
      </motion.div>*/}

      {/* Main Title Slam */}
      <motion.h1
        initial={{ opacity: 0, scale: 8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.15,
          ease: "easeIn",
          delay: slamDelay,
        }}
        className="relative z-20 font-edo-sz text-6xl tracking-widest text-foreground drop-shadow-[4px_4px_0_#d4030d] md:text-8xl md:drop-shadow-[8px_8px_0_#d4030d]"
      >
        Verzional
      </motion.h1>

      {/* Subtitle Slam */}
      <motion.p
        initial={{ opacity: 0, scale: 5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.15,
          ease: "easeIn",
          delay: subtitleDelay,
        }}
        className="relative z-30 mt-2 px-6 py-2 font-edo-sz text-xl tracking-[0.2em] text-primary uppercase md:mt-4 md:text-4xl md:tracking-[0.5em]"
      >
        Full-Stack Engineer
      </motion.p>
    </motion.div>
  );
}
