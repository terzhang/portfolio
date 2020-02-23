import React, { useState, lazy } from 'react';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { Stack, Flex, Box, Text, Link } from '@chakra-ui/core';
import SvgDownload from './SvgComponents/Download';
import scrollToTop from '../helpers/scrollToTop';
const SvgStairs = lazy(() => import('./SvgComponents/Stairs'));
const SvgDoor = lazy(() => import('./SvgComponents/Door'));

const lightFlicker = keyframes`
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    10% {
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    20% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  `;

const SvgHangingLight = (props) => {
  const [lightOn, setLightOn] = useState(true);

  const handleBulbClick = () => {
    // toggle state
    setLightOn(!lightOn);
  };

  /*
    Wrap the ray path with styled and add light flickering animation
    (chakra doesn't support svg path props)
  */
  const Ray = styled.path({
    transformOrigin: '50% 0%',
    animation: lightOn ? `${lightFlicker} 5s forwards infinite` : 'none',
    opacity: lightOn ? '1' : '0',
  });

  return (
    <svg width={634} height={467} fill='none' {...props}>
      {/* its on click toggles its opacity */}
      <path
        onClick={handleBulbClick}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M330.577 92.24v-3.1c0-3.973-1.619-7.71-4.564-10.525a15.698 15.698 0 00-7.399-3.954V3.452C318.614 1.545 316.996 0 315 0c-1.996 0-3.615 1.545-3.615 3.452v71.213c-6.851 1.562-11.962 7.459-11.962 14.475v3.106c-9.308 4.458-16.19 12.774-18.452 22.637l-2.797 12.206c-.482 2.09.049 4.245 1.453 5.912 1.403 1.666 3.493 2.623 5.735 2.623h12.466C297.841 144.656 305.539 152 315 152c9.46 0 17.159-7.344 17.173-16.376h12.465c2.241 0 4.332-.957 5.736-2.623 1.403-1.667 1.933-3.822 1.453-5.911l-2.797-12.212c-2.262-9.863-9.145-18.18-18.453-22.638zm-25.52 43.384c.015 5.225 4.47 9.472 9.943 9.472 5.474 0 9.929-4.247 9.943-9.472h-19.886z'
        fill='#BDBBB2'
      />
      <Ray
        d='M349.5 130h-66L0 467h634L349.5 130z'
        fill='#FFE600'
        fillOpacity={0.56}
      />
    </svg>
  );
};

const HangingLight = () => (
  <Flex position='absolute' left='50%' transform='translateX(-50%)'>
    <Box as={SvgHangingLight} alignSelf='flex-start' />
    <Stack
      as='p'
      position='absolute'
      p='10px'
      alignSelf='flex-end'
      alignItems='center'
      fontSize='5xl'
      // center absolute self inside parent
      left='50%'
      transform='translateX(-50%)'
    >
      <Text as='span' color='white.500'>
        Download my
      </Text>
      <Link
        display='flex'
        flexDir='row'
        color='house.basement.download'
        fontWeight='bold'
        href='#'
      >
        Resume
        <SvgDownload />
      </Link>
    </Stack>
  </Flex>
);

const doorClose = keyframes`
  from {
    transform: perspective(900) rotateY(40deg);
  }
  to {
    transform: perspective(0) rotateY(0deg);
  }
`;

const halfDoorSwing = keyframes`
  from {
    transform: perspective(900) rotateY(0deg);
    }
  to {
    transform: perspective(900) rotateY(40deg);
  }
`;

const fullDoorSwing = keyframes`
  from {
    transform: perspective(900) rotateY(40deg);
  }
  to {
    transform: perspective(900) rotateY(90deg);
  }
`;

const Door = styled(SvgDoor)`
  position: relative;
  align-self: flex-end;
  transform-origin: 0% 50%;
  :hover:not(:active):not(:focus) {
    animation: ${halfDoorSwing} 0.5s ease 0.1s forwards;
  }
  :active:hover {
    animation: ${fullDoorSwing} 0.5s ease 0s forwards;
  }
  :not(:hover):not(:active) {
    animation: ${doorClose} 0.5s ease;
  }
`;

const Footer = ({ stairStyle = {}, ...props }) => {
  return (
    <Stack
      w='full'
      backgroundColor='black'
      justifyContent='space-between'
      isInline
      px='10%'
      {...props}
    >
      <Door onClick={() => scrollToTop()} />
      <HangingLight />
      <SvgStairs style={stairStyle} />
      <Text position='absolute' alignSelf='flex-end' right={0}>
        Copyright 2020 © Terry Zhang
      </Text>
    </Stack>
  );
};

export default Footer;
