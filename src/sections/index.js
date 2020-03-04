import React, { lazy, useState } from 'react';
import { createPortal } from 'react-dom';
import { Box, useColorMode } from '@chakra-ui/core';

import Home from './Home';
import PastWorks from './PastWorks';
import Contact from './Contact';
import SkillsAndExperience from './SkillsAndExperience';
import CurveDivider from '../components/CurveDivider';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const HomeCurveDivider = lazy(() => import('../components/HomeCurveDivider'));
const SvgKitty = lazy(() => import('../components/SvgComponents/Kitty'));

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
  transform: translateY(500px);
}
`;

const Kitty = styled(SvgKitty)`
  z-index: 99;
  position: absolute;
  left: 0;
  margin-left: -100px;
  animation: ${yPath} 3s ease-out forwards;
  :after {
    content: ${''};
    display: block;
    animation: ${xPath} 3s ease-in forwards;
  }
`;

const Portal = ({ children, to }) => {
  return to && createPortal(children, to);
};

export default function Sections() {
  const { colorMode } = useColorMode();
  const [section, setSection] = useState(null);

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
      <Home ref={(c) => setSection(c)} />
      <HomeCurveDivider />
      <SkillsAndExperience />
      <CurveDivider />
      <PastWorks />
      <CurveDivider transform='scaleX(-1) scaleY(1)' />
      <Contact />
      <Portal to={section}>
        <Kitty />
      </Portal>
    </Box>
  );
}
