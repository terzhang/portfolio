import React, { lazy } from 'react';
import { Stack, Flex, Text, Link } from '@chakra-ui/core';
import SvgDownload from '../components/SvgComponents/Download';
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
      <Flex position='relative' justifyContent='center'>
        <SvgHangingLight style={{ alignSelf: 'flex-start' }} />
        <Stack
          as='p'
          position='absolute'
          p='10px'
          alignSelf='flex-end'
          alignItems='center'
          fontSize='5xl'
        >
          <Text as='span' color='white.500'>
            Download my
          </Text>
          <Link
            display='flex'
            flexDir='row'
            color='house.basement.download'
            fontWeight='bold'
            href='#'
          >
            Resume
            <SvgDownload />
          </Link>
        </Stack>
      </Flex>
      <SvgStairs style={stairStyle} />
      <Text position='absolute' alignSelf='flex-end' right={0}>
        Copyright 2020 © Terry Zhang
      </Text>
    </Stack>
  );
};

export default Footer;
