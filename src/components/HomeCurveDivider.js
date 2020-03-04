import React, { lazy } from 'react';
import { Flex } from '@chakra-ui/core';
const SvgFadeIn = lazy(() => import('./SvgComponents/FadeIn'));
const SvgFadeMid = lazy(() => import('./SvgComponents/FadeMid'));
const SvgFadeOut = lazy(() => import('./SvgComponents/FadeOut'));

const HomeCurveDivider = () => (
  // this height is (FadeIn/FadeOut height * 2) - FadeMid
  <Flex h='calc(161px * 2 - 39px)' w='full'>
    <SvgFadeIn
      height='161px'
      style={{ alignSelf: 'flex-start', flex: 'none' }}
    />
    {/* line is 39px thick by default */}
    <SvgFadeMid
      width='100%'
      height='39px'
      preserveAspectRatio='none'
      style={{ alignSelf: 'center', flex: 'auto' }}
    />
    <SvgFadeOut
      height='161px'
      style={{ alignSelf: 'flex-end', flex: 'none' }}
    />
  </Flex>
);

export default HomeCurveDivider;
