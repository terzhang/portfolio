import React from 'react';

const SvgRoofBg = ({ fill = '#2E2E2E', ...props }) => (
  <svg
    width='1726'
    height='590'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M1726 590H0L863 0l863 590z' fill={fill} />
  </svg>
);

export default SvgRoofBg;
