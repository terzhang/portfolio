import React, { lazy } from 'react';
import { Stack, Flex, Text } from '@chakra-ui/core';

// const SvgRoofNav = lazy(() => import('../components/SvgComponents/RoofNav'));
const SvgHello = lazy(() => import('../components/SvgComponents/Hello'));
const SvgRoofVertical = lazy(() =>
  import('../components/SvgComponents/RoofVertical')
);

const Home = (props) => {
  // TODO: convert style prop to emotion css prop use as chakra components
  return (
    <Flex
      alignSelf='center'
      alignItems='center'
      w='full'
      position='relative'
      flexDir='column'
      {...props}
    >
      <Flex
        as='section'
        aria-label='home'
        position='relative'
        w='100%'
        h='fit-content'
      >
        <SvgRoofVertical
          height='100%'
          viewBox='0 0 40 225'
          preserveAspectRatio='none'
          style={{ position: 'absolute', left: '0', alignSelf: 'flex-start' }}
        />
        <Stack m='auto' alignItems='center' fontWeight='semibold'>
          <SvgHello aria-labelledby='introduction' />
          <Text id='introduction' fontSize='5xl' textAlign='center'>
            <Text as='span'>Hi there, I'm Terry!</Text>
            <br />
            <Text as='span'>A web developer from Scarborough, Ontario</Text>
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Home;
