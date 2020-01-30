import React, { Suspense, lazy } from 'react';
import {
  ThemeProvider,
  CSSReset,
  Spinner,
  ColorModeProvider,
} from '@chakra-ui/core';
import { Global } from '@emotion/core';
import global from './theme/global';
import theme from './theme';
const Sections = lazy(() => import('./sections'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Global styles={global} />
        <Suspense
          fallback={
            <Spinner
              size='lg'
              thickness='5px'
              label='Getting ready...'
              color='blue'
            />
          }
        >
          <Sections />
        </Suspense>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
