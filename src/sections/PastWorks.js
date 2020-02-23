import React, { lazy } from 'react';
import { Stack, Text, ListItem, List } from '@chakra-ui/core';
const SvgVertical = lazy(() =>
  import('../components/SvgComponents/VerticalLine')
);
const SvgFolder = lazy(() => import('../components/SvgComponents/Folder'));

const Content = (props) => {
  return (
    <Stack {...props}>
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
    </Stack>
  );
};

const PastWorks = (props) => {
  return (
    <Stack
      as='section'
      isInline
      position='relative'
      w='full'
      h='full'
      justifyContent='space-between'
      {...props}
    >
      <SvgVertical
        height='100%'
        preserveAspectRatio='none'
        style={{ position: 'absolute', left: '0' }}
      />
      <Content ml='32' alignSelf='center' />
      <SvgFolder style={{ marginBottom: '-125px' }} />
    </Stack>
  );
};

export default PastWorks;
