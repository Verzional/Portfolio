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
  onClick,
  onHover,
}: SekiroSkillNodeProps) {
  return (
    <div
      className="relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full transition-transform hover:scale-105"
      // Inner Node Styles
      style={{
        width: "80px",
        height: "80px",
        background:
          "radial-gradient(circle at 35% 35%, #E8DCCB 0%, #C5B39A 100%)",
        boxShadow:
          "inset 0 0 15px rgba(90, 60, 40, 0.4), inset 0 0 4px rgba(60, 40, 20, 0.5)",
      }}
      onClick={onClick}
      onMouseEnter={onHover}
    >
      {/* Washi Paper Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Icon */}
      {node.icon && (
        <Image
          src={node.icon}
          alt={node.name}
          width={40}
          height={40}
          className="relative z-10 object-contain opacity-90 drop-shadow-sm"
        />
      )}
    </div>
  );
}
