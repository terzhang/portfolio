import React from 'react';

const svgExit = (props) => (
  <svg
    width={166}
    height={125}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#filter0_di)'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M23.016 100.237a4 4 0 004 4h109.946a4 4 0 004-4V47.606a4 4 0 00-4-4h-26.751a.01.01 0 01-.007-.018c.004-.004.01-.004.006-.008L88.885 22.395c-6.896-6.85-6.896-6.85-13.792 0L53.768 43.58c-.004.004.002.004.006.008a.01.01 0 01-.007.018h-26.75a4 4 0 00-4 4v52.631zm7.155-7.09a4 4 0 004 4h95.636a4 4 0 004-4V54.728a4 4 0 00-3.998-4l-20.857-.007a4.002 4.002 0 01-2.818-1.162L85.163 28.726c-.821-.815-2.016-1.076-3.174-1.076s-2.353.26-3.174 1.076L57.861 49.543a4 4 0 01-2.82 1.162L34.17 50.7a4 4 0 00-4 4v38.447z'
        fill='url(#paint_linear)'
      />
      <path
        d='M67.214 90.055a3.565 3.565 0 003.193-1.98l2.998-6.045 3 6.045a3.565 3.565 0 003.193 1.98c2.645 0 4.368-2.78 3.193-5.15L77.385 74.01l5.406-10.895c1.175-2.37-.548-5.149-3.193-5.149a3.565 3.565 0 00-3.193 1.98l-3 6.044-2.998-6.044a3.564 3.564 0 00-3.193-1.98c-2.645 0-4.37 2.78-3.194 5.149l5.406 10.895-5.406 10.896c-1.175 2.37.549 5.149 3.194 5.149z'
        fill='url(#paint_linear)'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M127.675 61.512a3.545 3.545 0 00-3.546-3.546h-14.324a3.545 3.545 0 000 7.091h3.593v21.428a3.57 3.57 0 007.139 0V65.057h3.592a3.545 3.545 0 003.546-3.545zM43.441 80.215a2.748 2.748 0 002.748 2.748h4.95a3.546 3.546 0 010 7.091H40.303a4 4 0 01-4-4V61.79a4 4 0 014-4h10.836a3.546 3.546 0 110 7.091h-4.95a2.748 2.748 0 000 5.496h4.95a3.546 3.546 0 010 7.091h-4.95a2.748 2.748 0 00-2.748 2.748z'
        fill='url(#paint_linear)'
      />
      <path
        d='M95.552 57.966a3.57 3.57 0 00-3.57 3.57v24.95a3.57 3.57 0 107.138 0v-24.95a3.57 3.57 0 00-3.568-3.57z'
        fill='url(#paint_linear)'
      />
    </g>
    <defs>
      <linearGradient
        id='paint_linear'
        x1='81.171'
        y1='104.237'
        x2='82.01'
        y2='13.5'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='1' stop-color='#fff' />
        <stop offset='1' stop-color='#fff' stop-opacity='0' />
      </linearGradient>
      <filter
        id='filter0_di'
        x='-1.984'
        y='-7.743'
        width='167.946'
        height='136.981'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset />
        <feGaussianBlur stdDeviation='12.5' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.28 0 0 0 1 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
        <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset />
        <feGaussianBlur stdDeviation='3' />
        <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
        <feColorMatrix values='0 0 0 0 0.2 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0' />
        <feBlend in2='shape' result='effect2_innerShadow' />
      </filter>
    </defs>
  </svg>
);

export default svgExit;
