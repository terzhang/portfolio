import React, { lazy, useState, useEffect, useRef } from 'react';
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
    transform-origin: 50% 0%;
    top: 0;
  }
  100% {
    transform-origin: 50% 0%;
    top: 50%;
  }
`;

const slideRight = keyframes`
  0% {
    top: 50%;
    left: 0;
  }
  10% {
    top: 100%;
    left: 0;
    transform: rotate(-90deg);
  }
  100% {
    top: 100%;
    transform: rotate()
    left: 100%;
  }
`;

const kittyAnimation = (type) => {
  switch (type) {
    case 'slideRight':
      return `animation: ${slideRight} 3s ease-out forwards`;
    default:
      return `animation: ${yPath} 3s ease-out forwards`;
  }
};

const Kitty = styled(SvgKitty)`
  z-index: 99;
  position: absolute;
  left: 0;
  margin-left: -100px;
  transform-origin: 50% 0%;
  animation: ${yPath} 3s ease-out forwards;
  :hover {
    left: 0;
    transform-origin: 50% 0%;
    animation: ${slideRight} 3s linear forwards;
  }
`;

const Portal = ({ children, to }) => {
  return to && createPortal(children, to);
};

export default function Sections() {
  const { colorMode } = useColorMode();
  const [catLocation, setCatLocation] = useState(null);
  const sections = useRef({
    home: null,
    skills: null,
    works: null,
    contact: null,
  });

  useEffect(() => {
    // start cat location state at home section
    if (sections.current.home) {
      setCatLocation(sections.current.home);
    }
  }, [sections.current.home]);

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
      <Home ref={(ref) => (sections.current.home = ref)} />
      <HomeCurveDivider />
      <SkillsAndExperience ref={(ref) => (sections.current.skills = ref)} />
      <CurveDivider />
      <PastWorks ref={(ref) => (sections.current.works = ref)} />
      <CurveDivider transform='scaleX(-1) scaleY(1)' />
      <Contact ref={(ref) => (sections.current.contact = ref)} />
      <Portal to={catLocation}>
        <Kitty />
      </Portal>
    </Box>
  );
}
