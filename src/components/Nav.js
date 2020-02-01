import React, { lazy } from 'react';
import { Box, useTheme, useColorMode } from '@chakra-ui/core';
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

export default Nav;
