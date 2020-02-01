import React from "react";

const SvgVerticalLine = props => (
  <svg width={40} height={225} viewBox="0 0 40 225" fill="none" {...props}>
    <path
      d="M39.5.63H0v223.899h39.5V.629z"
      fill="url(#vertical-line_svg__paint0_linear)"
    />
    <defs>
      <linearGradient
        id="vertical-line_svg__paint0_linear"
        x1={20}
        y1={0.63}
        x2={64.879}
        y2={215.139}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8F5AFF" />
        <stop offset={1} stopColor="#03BFD9" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgVerticalLine;
