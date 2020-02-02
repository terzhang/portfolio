import React, { lazy } from 'react';
import { Stack, Text } from '@chakra-ui/core';

// const SvgRoofNav = lazy(() => import('../components/SvgComponents/RoofNav'));
const SvgHello = lazy(() => import('../components/SvgComponents/Hello'));
const SvgRoofVertical = lazy(() =>
  import('../components/SvgComponents/RoofVertical')
);
const SvgFadeIn = lazy(() => import('../components/SvgComponents/FadeIn'));
const SvgFadeMid = lazy(() => import('../components/SvgComponents/FadeMid'));
const SvgFadeOut = lazy(() => import('../components/SvgComponents/FadeOut'));

const Home = (props) => {
  // TODO: convert style prop to emotion css prop use as chakra components
  return (
    <Stack
      alignSelf='center'
      alignItems='center'
      // w='1920px'
      w='full'
      m='0'
      p='0'
      position='relative'
      // marginX='calc(50% - 1414px / 2)'
      // overflowX='hidden'
      {...props}
    >
      <section
        // as='section'
        aria-label='home'
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          height: 'fit-content',
          margin: '0',
        }}
        // position='relative'
        // display='flex'
        // w='100%'
        // h='fit-content'
        // m='0'
      >
        <SvgRoofVertical
          height='100%'
          viewBox='0 0 40 225'
          preserveAspectRatio='none'
          style={{ position: 'absolute', left: '0', alignSelf: 'flex-start' }}
        />
        <Stack m='auto'>
          <SvgHello aria-labelledby='introduction' />
          <Text id='introduction'>Hi there! I'm Terry</Text>
          <Text>A web developer from Scarborough, Ontario</Text>
        </Stack>
      </section>
      {/* this height is (FadeIn/FadeOut height * 2) - FadeMid  */}
      <Stack isInline h='calc(161px * 2 - 39px)' w='full'>
        <SvgFadeIn
          height='161px'
          style={{ alignSelf: 'flex-start', flex: 'none' }}
        />
        {/* line is 39px thick by default */}
        <SvgFadeMid
          width='100%'
          height='39px'
          preserveAspectRatio='none'
          style={{ alignSelf: 'center', flex: 'auto' }}
        />
        <SvgFadeOut
          height='161px'
          style={{ alignSelf: 'flex-end', flex: 'none' }}
        />
      </Stack>
    </Stack>
  );
};

export default Home;
