import { round2 } from "./wheel-utils";

// Generate Outer Rim Gauge Markings
const rimTicks = Array.from({ length: 48 }).map((_, i) => {
  const angle = (i * 360) / 48;
  const rad = (angle * Math.PI) / 180;
  const rInner = i % 4 === 0 ? 298 : 304;
  const rOuter = 312;
  return {
    x1: round2(rInner * Math.sin(rad)),
    y1: round2(-rInner * Math.cos(rad)),
    x2: round2(rOuter * Math.sin(rad)),
    y2: round2(-rOuter * Math.cos(rad)),
    isMajor: i % 4 === 0,
  };
});

export function WheelChassis() {
  return (
    <g>
      {/* Outer Circular Disc (Stationary Casing) */}
      <circle
        cx="0"
        cy="0"
        r="320"
        fill="none"
        stroke="rgba(255, 255, 255, 0.12)"
        strokeWidth="3"
      />

      {/* Brushed Metal Concentric Grooves */}
      <circle
        cx="0"
        cy="0"
        r="145"
        fill="none"
        stroke="rgba(255, 255, 255, 0.03)"
        strokeWidth="1"
      />
      <circle
        cx="0"
        cy="0"
        r="225"
        fill="none"
        stroke="rgba(255, 255, 255, 0.03)"
        strokeWidth="1"
      />
      <circle
        cx="0"
        cy="0"
        r="290"
        fill="none"
        stroke="rgba(255, 255, 255, 0.04)"
        strokeWidth="1"
      />

      {/* Outer Notched Rim Gear Ticks */}
      <circle
        cx="0"
        cy="0"
        r="312"
        fill="none"
        stroke="rgba(255, 255, 255, 0.18)"
        strokeWidth="1.5"
      />
      {rimTicks.map((tick, i) => (
        <line
          key={i}
          x1={tick.x1}
          y1={tick.y1}
          x2={tick.x2}
          y2={tick.y2}
          stroke={
            tick.isMajor
              ? "rgba(255, 255, 255, 0.4)"
              : "rgba(255, 255, 255, 0.15)"
          }
          strokeWidth={tick.isMajor ? 2 : 1}
        />
      ))}

      {/* Continuous Concentric Chassis Rails */}
      {[116, 190, 265].map((r) => (
        <g key={r}>
          {/* Primary Machined Track Rail */}
          <circle
            cx="0"
            cy="0"
            r={r}
            fill="none"
            stroke="rgba(255, 255, 255, 0.16)"
            strokeWidth="1.5"
          />
          {/* Subtle Companion Track Groove */}
          <circle
            cx="0"
            cy="0"
            r={r - 3}
            fill="none"
            stroke="rgba(255, 255, 255, 0.04)"
            strokeWidth="0.75"
          />
        </g>
      ))}
    </g>
  );
}
