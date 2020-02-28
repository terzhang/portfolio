import React from 'react';
import { Heading } from '@chakra-ui/core';

// a component that renders a heading given a heading prop or children
const SectionHeading = ({ heading = '', ...rest }) => (
  <Heading
    as='h2'
    textAlign='center'
    mb='3rem'
    fontSize='h1'
    letterSpacing='wide'
    {...rest}
  >
    {heading ? heading : rest.children}
  </Heading>
);
export default SectionHeading;
