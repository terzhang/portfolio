import React, { lazy } from 'react';
import { Box, Stack, Text } from '@chakra-ui/core';
const SvgVertical = lazy(() =>
  import('../components/SvgComponents/VerticalLine')
);
const SvgLighthouse = lazy(() =>
  import('../components/SvgComponents/Lighthouse')
);
const SvgBoat = lazy(() => import('../components/SvgComponents/ContactBoat'));

const Content = (props) => {
  return (
    <Stack alignItems='center' {...props}>
      <Text as='h2' fontSize='5xl' mx='20' id='boat-label'>
        There's a boat load of methods to find me
      </Text>
      <SvgBoat labelledby='boat-label' />
    </Stack>
  );
};

const Contact = (props) => {
  return (
    <Stack as='section' isInline position='relative' {...props}>
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
