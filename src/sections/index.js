import React, { lazy } from 'react';
import { Box, useTheme, Flex, Stack, useColorMode } from '@chakra-ui/core';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import SkillsAndExperience from './SkillsAndExperience';
import CurveDivider from '../components/CurveDivider';
const SvgRoofNav = lazy(() => import('../components/SvgComponents/RoofNav'));

const Nav = (props) => {
  const { colorMode } = useColorMode();
  const {
    colors: {
      house: { roof, chimney },
    },
  } = useTheme();

  const roofNavFill = {
    chimney: chimney[colorMode],
    chimneyShade: chimney[`${colorMode}Shade`],
    roof: roof[colorMode],
    roofSelected: chimney[`${colorMode}Selected`],
  };

  return (
    <Box
      as='nav'
      position='absolute'
      zIndex='99'
      alignSelf='center'
      w='100%'
      {...props}
    >
      <SvgRoofNav
        fill={roofNavFill}
        // make both w and h 100% to scale if it has a viewBox
        width='100%'
        height='100%'
        // style={{ position: 'absolute', zIndex: '2' }}
      />
    </Box>
  );
};

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
        >
          <Home zIndex='2' />
          <SkillsAndExperience />
          <CurveDivider />
          <Contact />
          <Footer />
        </Stack>
      </Box>
    </Stack>
  );
}
