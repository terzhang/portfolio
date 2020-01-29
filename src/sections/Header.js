import { keyframes } from '@emotion/core';
import React, { useState, lazy } from 'react';
import { Stack, Text, Input, Flex } from '@chakra-ui/core';

const SvgSun = lazy(() => import('../components/SvgComponents/Sun'));
const SvgMoon = lazy(() => import('../components/SvgComponents/Moon'));
// const StarBig = lazy(() => import('../components/StarBig'));
// const StarMid = lazy(() => import('../components/StarMid'));
// const StarSmall = lazy(() => import('../components/StarSmall'));
// const Moon = lazy(() => import('../components/FallingStar'));

const MyName = ({ first = 'Terry', last = 'Zhang', ...rest }) => (
  <Stack justifyContent='center' alignItems='center' {...rest}>
    <Text color='header.heading'>{first}</Text>
    <Text color='header.heading'>{last}</Text>
  </Stack>
);

const BashInput = ({ defaultText = 'Full stack web developer', ...rest }) => {
  const [text, setText] = useState(defaultText);
  const handleChange = (event) => setText(event.target.value);

  const flicker = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;

  return (
    <Stack direction='row' alignItems='center' {...rest}>
      <Text as='span' color='green.500' fontSize='4xl' m={0} p={0}>
        {'>'}
      </Text>
      {/* TODO: make it either a horizontal caret */}
      <Input
        as='textarea'
        rows='1'
        whiteSpace='nowrap'
        maxLength='40'
        wrap='soft'
        cols={text.length ? text.length + '' : '1'}
        aria-label='A pseudo bash console that is purely presentational'
        overflow='hidden'
        resize='none'
        spellCheck='false'
        // variant='unstyled'
        // unstyled has unoverridable stylings so do it manually
        position='relative'
        outline='none'
        backgroundColor='transparent'
        border='none transparent'
        // override its default look when focused as well
        _focus={{ border: 'none transparent', outline: 'none' }}
        px={0}
        m={0}
        // size='lg'
        fontSize='4xl'
        value={text}
        color='header.subheading'
        onChange={handleChange}
        w='full'
      />
      {/* animate the flicker */}
      <Text
        as='span'
        color='green.500'
        fontSize='4xl'
        animation={`${flicker} .9s forwards infinite`}
      >
        {'_'}
      </Text>
    </Stack>
  );
};

const Header = () => {
  const [mode, setMode] = useState('light');

  // toggle between light and dark mode state
  const handleModeChange = () => setMode(mode === 'light' ? 'dark' : 'light');

  // TODO: solve the onHover issue without importing all icon as object as ChakraUI instructs
  const renderMoonOrSun = () => (mode === 'light' ? <SvgSun /> : <SvgMoon />);

  const renderDayOrNightText = () => (
    <Text position='absolute' color='black'>
      {mode === 'light' ? 'Day' : 'Night'}
    </Text>
  );

  return (
    <Stack
      as='header'
      backgroundColor={`header.background.${mode}`}
      w='full'
      h='1000px'
      justifyContent='center'
      alignItems='center'
    >
      <Flex
        onClick={handleModeChange}
        position='absolute'
        top={0}
        right={0}
        p='5px'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
      >
        {renderMoonOrSun()}
        {renderDayOrNightText()}
      </Flex>
      <MyName first='Terry' last='Zhang' />
      <BashInput defaultText='Full stack web developer' />
    </Stack>
  );
};

export default Header;
