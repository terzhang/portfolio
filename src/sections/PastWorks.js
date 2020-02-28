import React, { lazy } from 'react';
import { Flex, Box, Text, ListItem, List } from '@chakra-ui/core';
const SvgVertical = lazy(() =>
  import('../components/SvgComponents/VerticalLine')
);
const SvgFolder = lazy(() => import('../components/SvgComponents/Folder'));

const PastWorkItem = ({ name }) => {
  return (
    <ListItem border='2px solid' w='24rem' flex='1'>
      <Box d='inline-block' backgroundColor='blue' size='20' />
      <Text d='inline-block'>{name}</Text>
    </ListItem>
  );
};

const Content = (props) => {
  return (
    <List d='flex' flexDir='column' mx='auto' {...props}>
      <PastWorkItem name='Massaging App' />
      <PastWorkItem name='Art Portfolio Site' />
      <PastWorkItem name='Nail Salon Site' />
    </List>
  );
};

const PastWorks = (props) => {
  return (
    <Flex
      as='section'
      isInline
      position='relative'
      w='full'
      h='full'
      justifyContent='space-between'
      {...props}
    >
      <Box
        as={SvgVertical}
        height='100%'
        preserveAspectRatio='none'
        position='absolute'
        left={0}
      />
      <Content />
      <Box as={SvgFolder} alignSelf='flex-end' mb='-125px' />
    </Flex>
  );
};

export default PastWorks;
