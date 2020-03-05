import React, { Suspense, lazy } from 'react';
import { Spinner, Flex, useColorMode } from '@chakra-ui/core';
import Header from './sections/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
const SvgChimney = lazy(() => import('./components/SvgComponents/Chimney'));
const Sections = lazy(() => import('./sections'));
const SvgRoofBg = lazy(() => import('./components/SvgComponents/RoofBg'));
const SvgRoofVertical = lazy(() =>
  import('./components/SvgComponents/RoofVertical')
);

function App() {
  const { colorMode } = useColorMode();
  return (
    <Suspense fallback={<Spinner label='Getting ready...' color='blue' />}>
      <Flex
        flexDir='column'
        w='full'
        h='full'
        position='relative'
        backgroundColor={`header.background.${colorMode}`}
        overflow-x='hidden'
      >
        <Header minH='500px' />
        <Flex flexDir='column' position='relative'>
          <Nav />
          <Flex
            flexDir='column'
            alignSelf='center'
            alignItems='center'
            position='relative'
          >
            <SvgRoofBg
              fill={colorMode === 'light' ? '#FFFBEC' : '#2E2E2E'}
              style={{ alignSelf: 'center', position: 'absolute' }}
            />
            <SvgChimney
              style={{
                // position: 'absolute',
                alignSelf: 'flex-start',
                marginLeft: '10%',
                zIndex: '2',
              }}
            />
            <SvgRoofVertical
              style={{
                // position: 'absolute',
                alignSelf: 'flex-start',
                marginLeft: '10%',
                zIndex: '2',
                display: 'block',
              }}
            />
            <Sections />
            <Footer zIndex='1' />
          </Flex>
        </Flex>
      </Flex>
    </Suspense>
  );
}

export default App;
