import { useId } from "react";

interface TsushimaCardProps {
  title: string;
  isActive?: boolean;
}

export function TsushimaCard({ title, isActive = false }: TsushimaCardProps) {
  const filterId = useId().replace(/:/g, "");

  return (
    <div className="relative flex h-13 w-full max-w-md items-center pl-5">
      <svg className="absolute h-0 w-0">
        <filter id={`brush-edge-${filterId}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8 0.1"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="8"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {isActive ? (
        <div className="absolute inset-y-0 left-0 z-0 w-[105%] overflow-hidden">
          <div
            className="absolute -top-4 right-2 -bottom-4 -left-4 bg-[#ce423b]"
            style={{
              filter: `url(#brush-edge-${filterId})`,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      ) : (
        <div
          className="absolute inset-0 z-0 bg-[#2d3036]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      <div className="relative z-10 flex items-center gap-4">
        <div className="flex h-5 w-5 shrink-0 items-center justify-center">
          {isActive ? (
            <svg
              viewBox="0 0 24 24"
              className="h-full w-full rotate-45 transform"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                fill="black"
                stroke="#d1be78"
                strokeWidth="1.5"
              />
              <rect
                x="6"
                y="6"
                width="5"
                height="5"
                fill="none"
                stroke="#d1be78"
                strokeWidth="1.5"
              />
              <rect
                x="13"
                y="6"
                width="5"
                height="5"
                fill="none"
                stroke="#d1be78"
                strokeWidth="1.5"
              />
              <rect
                x="6"
                y="13"
                width="5"
                height="5"
                fill="none"
                stroke="#d1be78"
                strokeWidth="1.5"
              />
              <rect
                x="13"
                y="13"
                width="5"
                height="5"
                fill="none"
                stroke="#d1be78"
                strokeWidth="1.5"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-full w-full rotate-45 transform"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                fill="transparent"
                stroke="#7a7b80"
                strokeWidth="1.5"
              />
              <rect
                x="6"
                y="6"
                width="5"
                height="5"
                fill="none"
                stroke="#7a7b80"
                strokeWidth="1.5"
              />
              <rect
                x="13"
                y="6"
                width="5"
                height="5"
                fill="none"
                stroke="#7a7b80"
                strokeWidth="1.5"
              />
              <rect
                x="6"
                y="13"
                width="5"
                height="5"
                fill="none"
                stroke="#7a7b80"
                strokeWidth="1.5"
              />
              <rect
                x="13"
                y="13"
                width="5"
                height="5"
                fill="none"
                stroke="#7a7b80"
                strokeWidth="1.5"
              />
            </svg>
          )}
        </div>

        <span
          className={`font-lato text-sm font-medium tracking-widest uppercase ${
            isActive ? "text-white" : "text-[#8a8b8f]"
          }`}
        >
          {title}
        </span>
      </div>
    </div>
  );
}
