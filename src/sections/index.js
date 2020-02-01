import React, { lazy } from 'react';
import { Stack, useColorMode } from '@chakra-ui/core';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import SkillsAndExperience from './SkillsAndExperience';
import { Box } from '@chakra-ui/core';
const Roof = lazy(() => import('../components/SvgComponents/RoofNav'));

const Nav = (props) => {
  return (
    <Box as='nav' w='full' {...props}>
      <Roof style={{ position: 'absolute' }} />
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
      {/* <Nav /> */}
      <Header zIndex='1' />
      <Stack as='main' w='full' h='full'>
        <Home zIndex='2' />
        <SkillsAndExperience />
        <Contact />
        <Footer />
      </Stack>
    </Stack>
  );
}
