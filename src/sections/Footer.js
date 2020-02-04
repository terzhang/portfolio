import React, { lazy } from 'react';
import { Stack, Flex, Text } from '@chakra-ui/core';
const SvgStairs = lazy(() => import('../components/SvgComponents/Stairs'));
const SvgDoor = lazy(() => import('../components/SvgComponents/Door'));
const SvgHangingLight = lazy(() =>
  import('../components/SvgComponents/HangingLight')
);

const Footer = ({ stairStyle = {}, ...props }) => {
  return (
    <Stack
      w='full'
      backgroundColor='black'
      justifyContent='space-between'
      isInline
      {...props}
    >
      <SvgDoor style={{ alignSelf: 'flex-end' }} />
      <Flex position='relative' justifyContent='space-between'>
        <SvgHangingLight style={{ position: 'absolute' }} />
        <Stack position='absolute' index={99}>
          <Text color='white.500'>Download my</Text>
          <Text color='green.500'>Resume</Text>
        </Stack>
      </Flex>
      <SvgStairs style={stairStyle} />
    </Stack>
  );
};

export default Footer;
