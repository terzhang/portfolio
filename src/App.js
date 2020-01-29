import React, { Suspense, lazy } from 'react';
import Providers from './Providers';
import { CSSReset, Spinner } from '@chakra-ui/core';
import { Global } from '@emotion/core';
import global from './theme/global';
import Sections from './sections';

function App() {
  return (
    <Providers>
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
    </Providers>
  );
}

export default App;
