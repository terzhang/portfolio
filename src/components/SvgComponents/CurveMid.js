import React from "react";

const SvgCurveMid = props => (
  <svg width={1175} height={39} viewBox="0 0 1175 39" fill="none" {...props}>
    <path
      d="M1175 38.928H0V.445h1175v38.483z"
      fill="url(#curve-mid_svg__paint0_linear)"
    />
    <defs>
      <linearGradient
        id="curve-mid_svg__paint0_linear"
        x1={0}
        y1={29.578}
        x2={1173.05}
        y2={-23.86}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8F5AFF" />
        <stop offset={1} stopColor="#03BFD9" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgCurveMid;
