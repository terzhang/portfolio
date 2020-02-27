import React, { lazy } from 'react';
import { Box, Stack, Text } from '@chakra-ui/core';
import { keyframes } from '@emotion/core';
const SvgVertical = lazy(() =>
  import('../components/SvgComponents/VerticalLine')
);
const SvgLighthouse = lazy(() =>
  import('../components/SvgComponents/Lighthouse')
);
const SvgBoat = lazy(() => import('../components/SvgComponents/ContactsBoat'));

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

const Content = (props) => {
  return (
    <Stack alignItems='center' {...props}>
      <Text as='h2' fontSize='5xl' mx='20' id='boat-label'>
        There's a boat load of methods to find me
      </Text>
      <Box
        as={SvgBoat}
        labelledby='boat-label'
        animation={`${boatRocking} 5s ease infinite`}
      />
    </Stack>
  );
};

const Contact = (props) => {
  return (
    <Stack
      as='section'
      isInline
      position='relative'
      w='full'
      h='full'
      {...props}
    >
      <Box
        as={SvgLighthouse}
        preserveAspectRatio='xMidYMax meet'
        alignSelf='flex-end'
      />
      <Content alignSelf='flex-end' />
      <SvgVertical
        height='100%'
        preserveAspectRatio='none'
        style={{ position: 'absolute', right: '0' }}
      />
    </Stack>
  );
};

export default Contact;
