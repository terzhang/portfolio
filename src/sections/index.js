import React, { lazy, useRef } from 'react';
import { Flex, Box, useColorMode } from '@chakra-ui/core';

import Home from './Home';
import PastWorks from './PastWorks';
import Contact from './Contact';
import SkillsAndExperience from './SkillsAndExperience';
import CurveDivider from '../components/CurveDivider';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import useSize from '../hooks/useSize';

const SvgFadeIn = lazy(() => import('../components/SvgComponents/FadeIn'));
const SvgFadeMid = lazy(() => import('../components/SvgComponents/FadeMid'));
const SvgFadeOut = lazy(() => import('../components/SvgComponents/FadeOut'));
const SvgKitty = lazy(() => import('../components/SvgComponents/Kitty'));

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
  const homeRef = useRef();
  const homeSize = useSize(homeRef);

  const xPath = keyframes`
  to {
    transform: translateX(500px);
  }
  `;

  const yPath = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(${homeSize.height}px);
  }
  `;

  const Kitty = styled(SvgKitty)`
    z-index: 99;
    position: absolute;
    margin-left: -100px;
    animation: ${yPath} 3s ease-out forwards;
    :after {
      content: ${''};
      display: block;
      animation: ${xPath} 3s ease-in forwards;
    }
  `;
  return (
    <Box
      as='main'
      w='full'
      backgroundColor={
        colorMode === 'light'
          ? 'house.background.light'
          : 'house.background.dark'
      }
      position='relative'
      px='10%'
    >
      <Kitty />
      <Home ref={homeRef} />
      <HomeCurveDivider />
      <SkillsAndExperience />
      <CurveDivider />
      <PastWorks />
      <CurveDivider transform='scaleX(-1) scaleY(1)' />
      <Contact />
    </Box>
  );
}
