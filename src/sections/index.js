import React, { lazy } from 'react';
import { Box, Stack, useColorMode, Flex } from '@chakra-ui/core';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import PastWorks from './PastWorks';
import Contact from './Contact';
import SkillsAndExperience from './SkillsAndExperience';
import CurveDivider from '../components/CurveDivider';
import Nav from '../components/Nav';
import RoofBg from '../components/SvgComponents/RoofBg';

const SvgChimney = lazy(() => import('../components/SvgComponents/Chimney'));

export default function Sections() {
  const { colorMode } = useColorMode();
  return (
    <Stack
      w='full'
      h='full'
      position='relative'
      backgroundColor={`header.background.${colorMode}`}
      spacing={0}
    >
      <Header minH='500px' />
      <Flex direction='column'>
        <Nav />
        <SvgChimney
          style={{ position: 'absolute', alignSelf: 'flex-start', left: '10%' }}
        />
        <Stack
          mx='10%'
          alignSelf='center'
          alignItems='center'
          position='relative'
          spacing={0}
        >
          <RoofBg
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
      </Flex>
    </Stack>
  );
}
