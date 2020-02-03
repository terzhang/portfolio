import React, { lazy } from 'react';
import { Stack, useColorMode } from '@chakra-ui/core';

import Footer from './Footer';
import Home from './Home';
import PastWorks from './PastWorks';
import Contact from './Contact';
import SkillsAndExperience from './SkillsAndExperience';
import CurveDivider from '../components/CurveDivider';
const SvgRoofBg = lazy(() => import('../components/SvgComponents/RoofBg'));

export default function Sections() {
  const { colorMode } = useColorMode();
  return (
    <Stack
      mx='10%'
      alignSelf='center'
      alignItems='center'
      position='relative'
      spacing={0}
    >
      <SvgRoofBg
        fill={colorMode === 'light' ? '#FFFBEC' : '#2E2E2E'}
        style={{ alignSelf: 'center' }}
      />
      <Stack
        as='main'
        // h='full' <-- this made the container not flex by children
        w='full'
        backgroundColor={
          colorMode === 'light'
            ? 'house.background.light'
            : 'house.background.dark'
        }
        position='relative'
        spacing={0}
      >
        <Home />
        <SkillsAndExperience />
        <CurveDivider />
        <PastWorks />
        <CurveDivider transform='scaleX(-1) scaleY(1)' />
        <Contact />
        <Footer />
      </Stack>
    </Stack>
  );
}
