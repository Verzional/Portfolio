import { bridgeCoordinates } from "./wheel-utils";

export function WheelDefs() {
  return (
    <defs>
      {/* Subtle Metallic Background Radial Gradient */}
      <radialGradient id="wheel-plate-gradient" cx="0" cy="0" r="100%">
        <stop offset="0%" stopColor="#121620" />
        <stop offset="65%" stopColor="#0b0e14" />
        <stop offset="100%" stopColor="#06080b" />
      </radialGradient>

      {/* Golden Center Hub Enamel Gradient */}
      <radialGradient id="center-hub-gradient" cx="0" cy="0" r="100%">
        <stop offset="0%" stopColor="#222b3d" />
        <stop offset="60%" stopColor="#141926" />
        <stop offset="100%" stopColor="#0a0d14" />
      </radialGradient>

      {/* Active Node Pulse Glow */}
      <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Active Selected Glow */}
      <filter id="selected-glow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur1" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur2" />
        <feMerge>
          <feMergeNode in="blur1" />
          <feMergeNode in="blur2" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Center Hub Inner Clip */}
      <clipPath id="center-hub-clip">
        <circle cx="0" cy="0" r="43.5" />
      </clipPath>

      {/* Render Inter Discipline Bridge Gradients */}
      <linearGradient
        id="bridge-web-mobile"
        gradientUnits="userSpaceOnUse"
        x1={bridgeCoordinates.webMobile1.x}
        y1={bridgeCoordinates.webMobile1.y}
        x2={bridgeCoordinates.webMobile2.x}
        y2={bridgeCoordinates.webMobile2.y}
      >
        <stop offset="0%" stopColor="#f43f8e" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>

      <linearGradient
        id="bridge-mobile-devops"
        gradientUnits="userSpaceOnUse"
        x1={bridgeCoordinates.mobileDevops1.x}
        y1={bridgeCoordinates.mobileDevops1.y}
        x2={bridgeCoordinates.mobileDevops2.x}
        y2={bridgeCoordinates.mobileDevops2.y}
      >
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#eab308" />
      </linearGradient>

      <linearGradient
        id="bridge-devops-data"
        gradientUnits="userSpaceOnUse"
        x1={bridgeCoordinates.devopsData1.x}
        y1={bridgeCoordinates.devopsData1.y}
        x2={bridgeCoordinates.devopsData2.x}
        y2={bridgeCoordinates.devopsData2.y}
      >
        <stop offset="0%" stopColor="#eab308" />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>

      <linearGradient
        id="bridge-data-web"
        gradientUnits="userSpaceOnUse"
        x1={bridgeCoordinates.dataWeb1.x}
        y1={bridgeCoordinates.dataWeb1.y}
        x2={bridgeCoordinates.dataWeb2.x}
        y2={bridgeCoordinates.dataWeb2.y}
      >
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f43f8e" />
      </linearGradient>
    </defs>
  );
}
