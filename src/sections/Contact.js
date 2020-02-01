import React, { lazy } from 'react';
import { Stack, Text } from '@chakra-ui/core';
const SvgCurveIn = lazy(() => import('../components/SvgComponents/CurveIn'));
const SvgCurveMid = lazy(() => import('../components/SvgComponents/CurveMid'));
const SvgCurveOut = lazy(() => import('../components/SvgComponents/CurveOut'));
const SvgVertical = lazy(() =>
  import('../components/SvgComponents/VerticalLine')
);
const SvgLighthouse = lazy(() =>
  import('../components/SvgComponents/Lighthouse')
);
const SvgBoat = lazy(() => import('../components/SvgComponents/ContactsBoat'));

const Content = (props) => {
  return (
    <Stack {...props}>
      <Text as='h2' id='boat-label'>
        There's a boat load of methods to find me
      </Text>
      <SvgBoat labelledby='boat-label' />
    </Stack>
  );
};

const Contact = () => {
  return (
    <Stack w='full' alignSelf='center' positive='relative'>
      <Stack as='section' isInline position='relative'>
        <SvgVertical
          height='100%'
          preserveAspectRatio='none'
          style={{ position: 'absolute', left: '0' }}
        />
        <SvgLighthouse />
        <Content />
      </Stack>
    </Stack>
  );
};

export default Contact;
