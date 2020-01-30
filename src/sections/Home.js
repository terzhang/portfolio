import React, { lazy } from 'react';
import { Stack, useTheme, useColorMode, Text } from '@chakra-ui/core';

const SvgRoofNav = lazy(() => import('../components/SvgComponents/RoofNav'));
const SvgHello = lazy(() => import('../components/SvgComponents/Hello'));
const SvgChimney = lazy(() => import('../components/SvgComponents/Chimney'));
const SvgRoofVertical = lazy(() =>
  import('../components/SvgComponents/RoofVertical')
);
const SvgFadeInLine = lazy(() =>
  import('../components/SvgComponents/FadeInLine')
);

const Home = (props) => {
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

  // TODO: convert style prop to emotion css prop use as chakra components
  return (
    <Stack
      alignSelf='center'
      alignItems='center'
      maxW='100%'
      position='relative'
      marginX='calc(50% - 1414px / 2)'
      // overflowX='hidden'
      height='100%'
      {...props}
    >
      <SvgRoofNav
        fill={roofNavFill}
        width='1920px'
        style={{ position: 'absolute' }}
      />
      <SvgChimney style={{ position: 'relative', alignSelf: 'flex-start' }} />
      <section
        aria-label='home'
        style={{
          display: 'flex',
          width: '100%',
          height: 'fit-content',
          margin: '0',
        }}
      >
        <SvgRoofVertical preserveAspectRatio='none' height='100%' />
        <Stack m='auto'>
          <SvgHello aria-labelledby='introduction' />
          <Text id='introduction'>Hi there! I'm Terry</Text>
          <Text>A web developer from Scarborough, Ontario</Text>
        </Stack>
      </section>
      <SvgFadeInLine style={{ maxWidth: '100%' }} />
    </Stack>
  );
};

export default Home;
