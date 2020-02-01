import React from "react";

const SvgFadeOut = props => (
  <svg width={120} height={161} viewBox="0 0 120 161" fill="none" {...props}>
    <path
      d="M119.5 160.928C119.5 19.241 94 0 0 0v38.483c64 0 80 17.492 80 122.445h39.5z"
      fill="url(#fade-out_svg__paint0_linear)"
    />
    <defs>
      <linearGradient
        id="fade-out_svg__paint0_linear"
        x1={0}
        y1={0}
        x2={10.219}
        y2={210.003}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1282A7" />
        <stop offset={0} stopColor="#8F5AFF" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgFadeOut;
