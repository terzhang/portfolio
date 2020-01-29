import React from 'react';
import { Stack } from '@chakra-ui/core';
import Home from './Home';
import Contact from './Contact';
import SkillsAndExperience from './SkillsAndExperience';

export default function Sections() {
  return (
    <Stack as='main'>
      <Home />
      <SkillsAndExperience />
      <Contact />
    </Stack>
  );
}
