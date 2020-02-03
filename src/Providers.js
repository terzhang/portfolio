import React from 'react';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { Global } from '@emotion/core';
import global from './theme/global';
import theme from './theme';

const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Global styles={global} />
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default Providers;
