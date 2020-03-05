import React, { lazy } from 'react';
import { Flex, Box, Text, ListItem, List } from '@chakra-ui/core';
import SectionHeading from '../components/SectionHeading';

const SvgVertical = lazy(() =>
  import('../components/SvgComponents/VerticalLine')
);
const SvgFolder = lazy(() => import('../components/SvgComponents/Folder'));

const PastWorkItem = ({ name }) => {
  return (
    <ListItem border='2px solid' w='24rem'>
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

const Inner = () => (
  <Box w='full' h='full'>
    <SectionHeading heading='Past Works' />
    <Flex w='full' h='full'>
      <Content />
      <Box as={SvgFolder} alignSelf='flex-end' mb='-125px' />
    </Flex>
  </Box>
);

const PastWorks = React.forwardRef((props, ref) => {
  return (
    <Box as='section' position='relative' {...props} ref={ref}>
      <Box
        as={SvgVertical}
        height='100%'
        preserveAspectRatio='none'
        position='absolute'
        left={0}
      />
      <Inner />
    </Box>
  );
});

export default PastWorks;
