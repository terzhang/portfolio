import React from 'react';
import { keyframes } from '@emotion/core';
import { Link } from '@chakra-ui/core';
import styled from '@emotion/styled';
const boatRocking = keyframes`
  /*The 0% and 100% declarations are not necessary here because they are the same as the original value that the elements hold within the webpage */
  0%   {
    transform: rotate(3deg) translate(-20px, 20px);}
  50%  {
    transform: rotate(-3deg) translateY(40px);}
  100% {
    transform: rotate(3deg) translate(-20px, 20px);}
  }
`;
const Svg = styled.svg`
  animation: ${boatRocking} 5s ease infinite;
  :hover {
    animation-play-state: 'paused';
  }
  #boat_of_contacts path:hover {
    fill: #000000;
  }
  #footer_logos path {
    pointer-events: none;
  }
`;
const ContactBoat = () => (
  <Svg version='1.1' x='0' y='0' viewBox='0 0 649 194'>
    <g id='boat_of_contacts'>
      <Link href='http://github.com/terzhang'>
        <path
          id='github'
          fill='#8A6052'
          d='M231.8 183C35.5 143.5 0 .1 0 .1c27.1 13.9 65.3 24 109.4 33.5 37.2 8 79.6 12.7 126.4 15.3l-4 134.1z'
        />
      </Link>
      <Link href='https://www.linkedin.com/in/terzhang/'>
        <path
          id='linkedin'
          fill='#8A6052'
          d='M333 193c-37.7-.3-71.3-3.9-101.2-9.9l4-134.1c31.8 1.8 65.5 2.6 101 2.9'
        />
      </Link>
      <Link href='http://twitter.com/tewwyterry'>
        <path
          id='twitter'
          fill='#8A6052'
          d='M449.8 184.3c-33.2 5.8-71.8 9.1-116.8 8.7l3.8-141.1c35.6.3 72.9 0 111.6-.5l1.4 132.9z'
        />
      </Link>
      <Link href='mailto:terzhang@hotmail.com'>
        <path
          id='email'
          fill='#8A6052'
          d='M448.4 51.4c63.6-.8 130.9-2 200.6-2 0 0-21.3 103.7-199.2 134.9'
        />
      </Link>
      <g id='footer_logos'>
        <path
          id='LinkedIn_svg'
          fill='#FFF'
          d='M304.4 128.7h-8v-14.9c0-9-10.7-8.3-10.7 0v14.9h-8V99.4h8v4.7c3.7-6.9 18.7-7.4 18.7 6.6v18zM272.4 128.7h-8V99.4h8v29.3zM268.4 96c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c-.1 2.6-2.2 4.7-4.7 4.7z'
        />
        <path
          id='github_svg'
          fillRule='evenodd'
          clipRule='evenodd'
          fill='#FFF'
          d='M174 69.1c-7.6 0-15 2.8-20.8 7.8-5.8 5-9.6 12-10.9 19.7-1.2 7.7.3 15.6 4.2 22.2s10.1 11.7 17.3 14.1c1.6.3 2.2-.7 2.2-1.6v-5.6c-8.9 2-10.8-4.4-10.8-4.4-.6-2-1.9-3.7-3.6-4.8-2.9-2 .2-2 .2-2 1 .1 2 .5 2.8 1.1.8.6 1.6 1.4 2.1 2.3.4.8 1 1.5 1.7 2.1.7.6 1.5 1 2.4 1.3.9.3 1.8.3 2.7.2.9-.1 1.8-.4 2.5-.8.1-1.7.8-3.2 2-4.4-7.1-.8-14.6-3.6-14.6-16.1 0-3.3 1.1-6.4 3.3-8.8-1-2.8-.8-5.9.3-8.7 0 0 2.7-.9 8.8 3.4 5.2-1.5 10.8-1.5 16 0 6.1-4.2 8.8-3.4 8.8-3.4 1.2 2.7 1.3 5.8.4 8.6 2.2 2.4 3.3 5.5 3.3 8.8 0 12.6-7.5 15.4-14.6 16.1.8.8 1.4 1.7 1.7 2.8.4 1 .5 2.2.4 3.3v9c0 1.1.6 1.9 2.2 1.6 7.1-2.5 13.2-7.5 17-14.2s5.3-14.5 4.1-22.1c-1.2-7.6-5-14.6-10.8-19.6-5.4-5.1-12.7-7.9-20.3-7.9z'
        />
        <path
          id='mail_svg'
          fill='none'
          stroke='#FFF'
          strokeWidth='6.25'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M495.1 94.4l21.9 17.1 22-17.1m-47.6-9.7h51.2c3.4 0 6.1 2.7 6.1 6.1v36.5c0 3.4-2.7 6.1-6.1 6.1h-51.2c-3.4 0-6.1-2.7-6.1-6.1V90.8c0-3.4 2.8-6.1 6.1-6.1z'
        />
        <path
          id='twitter_logo'
          fill='#1DA1F2'
          d='M390.8 129.4c18.9 0 29.2-15.6 29.2-29.2v-1.3c2-1.5 3.7-3.2 5.1-5.3-1.9.8-3.9 1.4-5.9 1.6 2.1-1.3 3.7-3.3 4.5-5.7-2 1.2-4.2 2-6.5 2.5-1.5-1.6-3.6-2.7-5.8-3.1-2.2-.4-4.5 0-6.5 1.1s-3.6 2.8-4.5 4.8c-.9 2.1-1.2 4.4-.7 6.6-4.1-.2-8.1-1.3-11.7-3.1-3.6-1.8-6.9-4.4-9.4-7.6-1.3 2.3-1.7 4.9-1.1 7.5.6 2.5 2.1 4.8 4.3 6.2-1.6 0-3.2-.5-4.7-1.3v.1c0 2.4.8 4.7 2.3 6.5s3.6 3.1 5.9 3.6c-1.5.4-3.1.5-4.6.2.7 2 1.9 3.8 3.6 5.1 1.7 1.3 3.8 2 5.9 2-3.6 2.9-8.1 4.4-12.7 4.4-.8 0-1.6-.1-2.4-.1 4.6 2.9 10.1 4.5 15.7 4.5'
        />
      </g>
    </g>
  </Svg>
);

export default ContactBoat;
