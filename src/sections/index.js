import React, { lazy } from 'react';
import { Stack, useColorMode } from '@chakra-ui/core';

import Home from './Home';
import PastWorks from './PastWorks';
import Contact from './Contact';
import SkillsAndExperience from './SkillsAndExperience';
import CurveDivider from '../components/CurveDivider';

export default function Sections() {
  const { colorMode } = useColorMode();
  return (
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
      px='10%'
    >
      <Home />
      <SkillsAndExperience />
      <CurveDivider />
      <PastWorks />
      <CurveDivider transform='scaleX(-1) scaleY(1)' />
      <Contact />
    </Stack>
  );
}
