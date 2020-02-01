import React from "react";

const SvgFadeMid = props => (
  <svg width={1175} height={39} viewBox="0 0 1175 39" fill="none" {...props}>
    <path
      d="M1175 0H0v38.483h1175V0z"
      fill="url(#fade-mid_svg__paint0_linear)"
    />
    <defs>
      <linearGradient
        id="fade-mid_svg__paint0_linear"
        x1={0}
        y1={9.35}
        x2={1173.05}
        y2={62.787}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1282A7" />
        <stop offset={1} stopColor="#8F5AFF" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgFadeMid;
