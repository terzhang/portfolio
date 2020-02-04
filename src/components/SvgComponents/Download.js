import React from 'react';

const SvgDownload = ({ fill = '#15C787', ...props }) => (
  <svg width={77} height={77} fill='none' {...props}>
    <path
      d='M38.5 51.333l12.833-16.041h-9.625V12.833h-6.416v22.459h-9.626L38.5 51.333z'
      fill={fill}
    />
    <path
      d='M64.166 57.75H12.834V35.292H6.416V57.75a6.423 6.423 0 006.417 6.417h51.334a6.423 6.423 0 006.416-6.417V35.292h-6.416V57.75z'
      fill={fill}
    />
  </svg>
);

export default SvgDownload;
