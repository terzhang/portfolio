import React from 'react';
import { Stack, useColorMode } from '@chakra-ui/core';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import SkillsAndExperience from './SkillsAndExperience';

export default function Sections() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack
      as='main'
      w='full'
      h='full'
      backgroundColor={`header.background.${colorMode}`}
    >
      <Header zIndex='1' />
      <Home zIndex='2' />
      <SkillsAndExperience />
      <Contact />
      <Footer />
    </Stack>
  );
}
