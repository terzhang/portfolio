import React, { lazy } from 'react';
import { Stack, Heading, Text, List, ListItem } from '@chakra-ui/core';
const SvgFrameworks = lazy(() =>
  import('../components/SvgComponents/Frameworks')
);
const SvgVertical = lazy(() =>
  import('../components/SvgComponents/VerticalLine')
);

const ExperienceItem = ({ title, date = '', description = '' }) => (
  <ListItem key={title + date}>
    <Text>
      <Text as='span' fontSize='4xl'>
        {title}
      </Text>
      <Text as='span' fontSize='lg' color='gray.500'>{` (${date})`}</Text>
      <Text>{description}</Text>
    </Text>
  </ListItem>
);

const Content = (props) => (
  <Stack spacing={4} justifyContent='space-evenly' h='full' {...props}>
    <Stack>
      <Heading size='lg'>I'm well versed in</Heading>
      <Text alignSelf='center'>React - Git - NodeJs - Express</Text>
    </Stack>
    <Heading size='lg' id='experience'>
      Work Experience
    </Heading>
    <List>
      <ExperienceItem title='Developer' date='2018-2020' />
      <ExperienceItem title='Freelancer' date='2018-2019' />
      <ExperienceItem title='eCommerce owner' date='2017-2018' />
    </List>
  </Stack>
);

const SkillsAndExperience = () => {
  return (
    <Stack
      isInline
      w='full'
      alignSelf='center'
      justifyContent='center'
      alignItems='center'
      position='relative'
    >
      <SvgFrameworks />
      <Content />
      <SvgVertical
        height='100%'
        viewBox='0 0 40 225'
        preserveAspectRatio='none'
        style={{
          position: 'absolute',
          right: '0',
          bottom: '0',
          alignSelf: 'flex-end',
        }}
      />
    </Stack>
  );
};

export default SkillsAndExperience;
