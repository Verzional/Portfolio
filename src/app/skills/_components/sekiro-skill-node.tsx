"use client";

import Image from "next/image";
import { SkillNode } from "@/data/skills";

interface SekiroSkillNodeProps {
  node: SkillNode;
  isActive: boolean;
  inkColor?: "blue" | "red" | "brown";
  onClick?: () => void;
  onHover?: () => void;
}

export function SekiroSkillNode({
  node,
  isActive,
  inkColor = "blue",
  onClick,
  onHover,
}: SekiroSkillNodeProps) {
  const inkPalettes = {
    blue: { dark: "#2B3A52", mid: "#4A607A", light: "#768CA3" },
    red: { dark: "#4A2018", mid: "#7A352A", light: "#A35C52" },
    brown: { dark: "#403020", mid: "#705A45", light: "#9A8068" },
  };
  const palette = inkPalettes[inkColor];

  const octagonPoints =
    "29% 0%, 71% 0%, 100% 29%, 100% 71%, 71% 100%, 29% 100%, 0% 71%, 0% 29%";

  return (
    <div
      className={`relative flex h-15 w-15 cursor-pointer items-center justify-center transition-all duration-300 md:h-20 md:w-20 ${
        isActive
          ? "z-50 scale-110 drop-shadow-[0_0_20px_rgba(255,200,100,0.8)]"
          : "hover:scale-105"
      }`}
      onClick={onClick}
      onPointerMove={() => {
        if (!isActive) onHover?.();
      }}
    >
      {/* Render Outer Ink Ring Mask */}
      {!isActive && (
        <div
          className="pointer-events-none absolute -inset-6 opacity-90 mix-blend-multiply"
          style={{
            background: `radial-gradient(circle at 40% 40%, ${palette.dark} 0%, ${palette.mid} 60%, ${palette.light} 100%)`,
            // Load Custom Ink Brush Mask
            maskImage: "url('/images/ui/ink-mask.png')",
            maskSize: "contain",
            maskPosition: "center",
            maskRepeat: "no-repeat",
            WebkitMaskImage: "url('/images/ui/ink-mask.png')",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
          }}
        />
      )}

      {/* Render Inner Parchment Octagon */}
      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden"
        style={{
          clipPath: `polygon(${octagonPoints})`,
          // Apply Dynamic State Gradients
          background: isActive
            ? "radial-gradient(circle at 40% 40%, #FFF5D1 0%, #D4AF37 75%, #AA7900 100%)"
            : "radial-gradient(circle at 40% 40%, #E8DCCB 0%, #C5B39A 75%, #A68A6B 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {node.icon && (
          <Image
            src={node.icon}
            alt={node.name}
            width={40}
            height={40}
            className={`relative z-10 h-9 w-9 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] transition-opacity duration-300 md:h-10 md:w-10 ${
              isActive ? "opacity-100" : "opacity-90"
            }`}
          />
        )}
      </div>
    </div>
  );
}
