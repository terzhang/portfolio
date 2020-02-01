import React from "react";

const SvgCurveIn = props => (
  <svg width={120} height={161} viewBox="0 0 120 161" fill="none" {...props}>
    <path
      d="M119.5 0C119.5 141.686 94 160.927 0 160.927v-38.482c64 0 80-17.492 80-122.445h39.5z"
      fill="url(#curve-in_svg__paint0_linear)"
    />
    <defs>
      <linearGradient
        id="curve-in_svg__paint0_linear"
        x1={0}
        y1={88.369}
        x2={119.541}
        y2={88.469}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#03BFD9" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgCurveIn;
