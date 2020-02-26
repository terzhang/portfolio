import React, { lazy } from 'react';
import { Flex, Box, useColorMode } from '@chakra-ui/core';

import Home from './Home';
import PastWorks from './PastWorks';
import Contact from './Contact';
import SkillsAndExperience from './SkillsAndExperience';
import CurveDivider from '../components/CurveDivider';
const SvgFadeIn = lazy(() => import('../components/SvgComponents/FadeIn'));
const SvgFadeMid = lazy(() => import('../components/SvgComponents/FadeMid'));
const SvgFadeOut = lazy(() => import('../components/SvgComponents/FadeOut'));

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

export default function Sections() {
  const { colorMode } = useColorMode();
  return (
    <Box
      as='main'
      // h='full' <-- this made the container not flex by children
      w='full'
      backgroundColor={
        colorMode === 'light'
          ? 'house.background.light'
          : 'house.background.dark'
      }
      position='relative'
      px='10%'
    >
      <Home />
      <HomeCurveDivider />
      <SkillsAndExperience />
      <CurveDivider />
      <PastWorks />
      <CurveDivider transform='scaleX(-1) scaleY(1)' />
      <Contact />
    </Box>
  );
}
