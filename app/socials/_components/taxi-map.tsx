"use client";

import Image from "next/image";

import { socialsData, socialsMap } from "@/data/socials";

export function TaxiMap({
  activeIndex,
  onHoverAction,
  onClickAction,
}: {
  activeIndex: number;
  onHoverAction: (idx: number) => void;
  onClickAction: (idx: number) => void;
}) {
  return (
    <div className="relative flex h-full w-full animate-map-enter items-center justify-center overflow-hidden p-4 md:p-12">
      {/* Main Map Container */}
      <div className="relative z-10 flex h-full w-full max-w-6xl items-center justify-center">
        {/* Render Map in SVG */}
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {[...socialsMap]
            .sort((a, b) => {
              const aIsActive = socialsMap.indexOf(a) === activeIndex;
              const bIsActive = socialsMap.indexOf(b) === activeIndex;
              if (aIsActive) return 1;
              if (bIsActive) return -1;
              return 0;
            })
            .map((district) => {
              const idx = socialsMap.indexOf(district);
              const isActive = idx === activeIndex;

              return (
                <g
                  key={district.id}
                  className="cursor-pointer"
                  onPointerMove={() => {
                    if (activeIndex !== idx) onHoverAction(idx);
                  }}
                  onClick={() => onClickAction(idx)}
                >
                  {/* Glow Effect */}
                  {isActive && (
                    <>
                      <polygon
                        points={district.points}
                        fill="none"
                        stroke="var(--color-primary)"
                        strokeWidth="16"
                        strokeOpacity="0.15"
                        vectorEffect="non-scaling-stroke"
                      />
                      <polygon
                        points={district.points}
                        fill="none"
                        stroke="var(--color-primary)"
                        strokeWidth="6"
                        strokeOpacity="0.3"
                        vectorEffect="non-scaling-stroke"
                      />
                    </>
                  )}

                  {/* Core Shape */}
                  <polygon
                    points={district.points}
                    fill={
                      isActive ? "var(--color-primary)" : "var(--color-muted)"
                    }
                    fillOpacity={isActive ? 0.15 : 0.05}
                    stroke={
                      isActive ? "var(--color-primary)" : "var(--color-muted)"
                    }
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    className="transition-all duration-500 ease-out"
                  />
                </g>
              );
            })}
        </svg>

        {/* District Container */}
        <div className="pointer-events-none absolute inset-0 z-20">
          {socialsMap.map((district, idx) => {
            const isActive = idx === activeIndex;
            const social = socialsData[idx];

            return (
              <div
                key={district.id}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center transition-all duration-500"
                style={{
                  left: `${district.centerX}%`,
                  top: `${district.centerY}%`,
                }}
              >
                {/* Social Icon with Glow Effect */}
                <div
                  className={`relative mb-3 transition-all duration-500 ${
                    isActive
                      ? "h-8 w-8 scale-110 opacity-100 drop-shadow-[0_0_15px_var(--color-primary)] md:h-20 md:w-20"
                      : "h-6 w-6 scale-100 opacity-40 grayscale md:h-16 md:w-16"
                  }`}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    fill={true}
                    sizes="(max-width: 768px) 64px, 80px"
                    className="object-contain"
                  />
                </div>

                {/* District Name */}
                <span
                  className={`text-center font-edo-sz text-sm leading-tight tracking-widest transition-all duration-500 md:text-2xl ${
                    isActive
                      ? "text-foreground drop-shadow-[2px_2px_0_var(--color-primary)]"
                      : "text-muted"
                  }`}
                >
                  {social.districtName.split(" ").map((word, i, arr) => (
                    <span key={i}>
                      {word}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
