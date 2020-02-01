import React, { lazy } from 'react';
import { Stack } from '@chakra-ui/core';
const SvgStairs = lazy(() => import('../components/SvgComponents/Stairs'));
const SvgDoor = lazy(() => import('../components/SvgComponents/Door'));
const SvgHangingLight = lazy(() =>
  import('../components/SvgComponents/HangingLight')
);

const Footer = (props) => {
  return (
    <Stack
      w='full'
      backgroundColor='black'
      justifyContent='space-between'
      isInline
      {...props}
    >
      <SvgDoor style={{ alignSelf: 'flex-end' }} />
      <SvgHangingLight style={{ alignSelf: 'flex-start' }} />
      <SvgStairs />
    </Stack>
  );
};

export default Footer;
