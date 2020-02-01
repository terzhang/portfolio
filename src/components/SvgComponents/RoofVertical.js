import React from "react";

const SvgRoofVertical = props => (
  <svg width={40} height={225} viewBox="0 0 40 225" fill="none" {...props}>
    <path
      d="M39.5.859H0v223.899h39.5V.858z"
      fill="url(#roof-vertical_svg__paint0_linear)"
    />
    <defs>
      <linearGradient
        id="roof-vertical_svg__paint0_linear"
        x1={19.75}
        y1={0.859}
        x2={19.75}
        y2={224.758}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.271} stopColor="#45628E" />
        <stop offset={1} stopColor="#1282A7" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgRoofVertical;
