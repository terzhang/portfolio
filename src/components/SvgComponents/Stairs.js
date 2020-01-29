import React from "react";

const SvgStairs = props => (
  <svg width={513} height={467} fill="none" {...props}>
    <path
      d="M354 163c0-11.046 8.954-20 20-20h80c11.046 0 20-8.954 20-20V0h38.5v163c0 11.046-8.954 20-20 20H394v74.25c0 11.046-8.954 20-20 20h-98v74.4c0 11.045-8.954 20-20 20h-98v74.4c0 11.045-8.954 20-20 20H0v-20c0-11.046 8.954-20 20-20h98v-74.4c0-11.046 8.954-20 20-20h98v-74.4c0-11.046 8.954-20 20-20h98V163z"
      fill="url(#stairs_svg__paint0_linear)"
    />
    <defs>
      <linearGradient
        id="stairs_svg__paint0_linear"
        x1={0.002}
        y1={210.132}
        x2={512.676}
        y2={209.498}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8F5AFF" />
        <stop offset={1} stopColor="#03BFD9" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgStairs;
