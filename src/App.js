import React, { Suspense, lazy } from 'react';
import { Spinner, Flex, useColorMode, Stack } from '@chakra-ui/core';
import Header from './sections/Header';
import Nav from './components/Nav';
const SvgChimney = lazy(() => import('./components/SvgComponents/Chimney'));

const Sections = lazy(() => import('./sections'));

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
        <Flex direction='column'>
          <Nav />
          <SvgChimney
            style={{
              position: 'absolute',
              alignSelf: 'flex-start',
              left: '10%',
            }}
          />
          <Sections />
        </Flex>
      </Stack>
    </Suspense>
  );
}

export default App;
