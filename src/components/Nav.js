import React, { lazy } from 'react';
import { Box, useTheme, useColorMode } from '@chakra-ui/core';
const SvgRoof = lazy(() => import('./SvgComponents/Roof'));

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
    <Box as='nav' position='absolute' zIndex='99' alignSelf='center' {...props}>
      <SvgRoof fill={roofNavFill} />
    </Box>
  );
};

export default Nav;
