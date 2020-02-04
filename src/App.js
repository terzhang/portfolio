import React, { Suspense, lazy } from 'react';
import { Spinner, Flex, useColorMode, Stack } from '@chakra-ui/core';
import Header from './sections/Header';
import Nav from './components/Nav';
import Footer from './sections/Footer';
const SvgChimney = lazy(() => import('./components/SvgComponents/Chimney'));
const Sections = lazy(() => import('./sections'));
const SvgRoofBg = lazy(() => import('./components/SvgComponents/RoofBg'));
const SvgStairs = lazy(() => import('./components/SvgComponents/Stairs'));

function App() {
  const { colorMode } = useColorMode();
  return (
    <Suspense fallback={<Spinner label='Getting ready...' color='blue' />}>
      <Stack
        w='full'
        h='full'
        position='relative'
        backgroundColor={`header.background.${colorMode}`}
        spacing={0}
      >
        <Header minH='500px' />
        <Flex direction='column' position='relative'>
          <Nav />
          <Stack
            alignSelf='center'
            alignItems='center'
            position='relative'
            spacing={0}
          >
            <SvgRoofBg
              fill={colorMode === 'light' ? '#FFFBEC' : '#2E2E2E'}
              style={{ alignSelf: 'center' }}
            />
            <SvgChimney
              style={{
                position: 'absolute',
                alignSelf: 'flex-start',
                left: '10%',
              }}
            />
            <Sections />
            <Footer stairStyle={{ marginRight: '10%' }} />
          </Stack>
        </Flex>
      </Stack>
    </Suspense>
  );
}

export default App;
