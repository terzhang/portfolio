import React from "react";

const SvgSLine = props => (
  <svg width={1434} height={305} viewBox="0 0 1434 305" fill="none" {...props}>
    <g filter="url(#s-line_svg__filter0_d)">
      <path
        d="M1304 131.243H129v38.483h1175v-38.483z"
        fill="url(#s-line_svg__paint0_linear)"
      />
      <path
        d="M1423.5 292.171c0-141.686-25.5-160.928-119.5-160.928v38.483c64 0 80 17.492 80 122.445h39.5z"
        fill="url(#s-line_svg__paint1_linear)"
      />
      <path
        d="M129.5 169.227c-94 0-119.5-19.242-119.5-160.928h39.5c0 104.953 16 122.445 80 122.445v38.483z"
        fill="url(#s-line_svg__paint2_linear)"
      />
    </g>
    <defs>
      <linearGradient
        id="s-line_svg__paint0_linear"
        x1={10.005}
        y1={136.291}
        x2={1423.94}
        y2={128.38}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#03BFD9" />
        <stop offset={1} stopColor="#8F5AFF" />
      </linearGradient>
      <linearGradient
        id="s-line_svg__paint1_linear"
        x1={10.005}
        y1={136.291}
        x2={1423.94}
        y2={128.38}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#03BFD9" />
        <stop offset={1} stopColor="#8F5AFF" />
      </linearGradient>
      <linearGradient
        id="s-line_svg__paint2_linear"
        x1={10.005}
        y1={136.291}
        x2={1423.94}
        y2={128.38}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#03BFD9" />
        <stop offset={1} stopColor="#8F5AFF" />
      </linearGradient>
      <filter
        id="s-line_svg__filter0_d"
        x={0}
        y={0.299}
        width={1433.5}
        height={303.872}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={5} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend
          mode="multiply"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SvgSLine;
