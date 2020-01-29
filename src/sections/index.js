import React from 'react';
import { Stack } from '@chakra-ui/core';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import SkillsAndExperience from './SkillsAndExperience';

export default function Sections() {
  return (
    <>
      <Header />
      <Stack as='main' w='full' h='full'>
        <Home />
        <SkillsAndExperience />
        <Contact />
        <Footer />
      </Stack>
    </>
  );
}
