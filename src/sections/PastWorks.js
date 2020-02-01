import React, { lazy } from 'react';
import { Stack, Text, ListItem, List } from '@chakra-ui/core';
const SvgVertical = lazy(() =>
  import('../components/SvgComponents/VerticalLine')
);
const SvgFolder = lazy(() => import('../components/SvgComponents/Folder'));

const Content = (props) => {
  return (
    <List>
      <ListItem>
        <Text>Massaging App</Text>
      </ListItem>
      <ListItem>
        <Text>Art Portfolio App</Text>
      </ListItem>
      <ListItem>
        <Text>Nail Salon App</Text>
      </ListItem>
    </List>
  );
};

const PastWorks = () => {
  return (
    <Stack as='section' isInline position='relative' w='full' h='full'>
      <SvgVertical
        height='100%'
        preserveAspectRatio='none'
        style={{ position: 'absolute', left: '0' }}
      />
      <Content />
      <SvgFolder />
    </Stack>
  );
};

export default PastWorks;
