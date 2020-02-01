import React, { lazy } from 'react';
import { Box, Stack, useColorMode } from '@chakra-ui/core';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import PastWorks from './PastWorks';
import Contact from './Contact';
import SkillsAndExperience from './SkillsAndExperience';
import CurveDivider from '../components/CurveDivider';
import Nav from '../components/Nav';

export default function Sections() {
  const { colorMode } = useColorMode();
  return (
    <Stack
      w='full'
      h='full'
      position='relative'
      backgroundColor={`header.background.${colorMode}`}
    >
      <Header zIndex='1' minH='500px' />
      <Box w='full' h='full'>
        <Nav />
        <Stack
          as='main'
          mx='10%'
          // h='full' <-- this made the container not flex by children
          alignSelf='center'
          alignItems='center'
          backgroundColor={
            colorMode === 'light'
              ? 'house.background.light'
              : 'house.background.dark'
          }
          position='relative'
        >
          <Home zIndex='2' />
          <SkillsAndExperience />
          <CurveDivider />
          <PastWorks />
          <CurveDivider transform='scaleX(-1) scaleY(1)' />
          <Contact />
          <Footer />
        </Stack>
      </Box>
    </Stack>
  );
}
