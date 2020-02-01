import React, { lazy } from 'react';
import {
  Stack,
  useTheme,
  useColorMode,
  Text,
  Box,
  List,
  ListItem,
} from '@chakra-ui/core';
const SvgFrameworks = lazy(() =>
  import('../components/SvgComponents/Frameworks')
);
const SvgVertical = lazy(() =>
  import('../components/SvgComponents/VerticalLine')
);

const ExperienceItem = ({ title, date = '', description = '' }) => (
  <ListItem key={title + date}>
    <Text>{title + `(${date})`}</Text>
    <Text>{description}</Text>
  </ListItem>
);

const Content = (props) => (
  <Stack spacing={2} {...props}>
    <Text as='h2' mb>
      I'm well versed in:
    </Text>
    <Text alignSelf='center'>React - Git - NodeJs - Express</Text>
    <Text as='h2'>Work Experience</Text>
    <List>
      <ExperienceItem title='Developer' date='2018-2020' />
      <ExperienceItem title='Freelancer' date='2018-2019' />
      <ExperienceItem title='eCommerce owner' date='2017-2018' />
    </List>
  </Stack>
);
/* <SvgRoofVertical
            height='100%'
            viewBox='0 0 40 225'
            preserveAspectRatio='none'
            style={{ position: 'absolute', left: '0', alignSelf: 'flex-start' }}
          /> */
const SkillsAndExperience = () => {
  return (
    <Stack
      isInline
      w='80%'
      alignSelf='center'
      justifyContent='center'
      alignItems='center'
      position='relative'
      p='100px'
    >
      <SvgFrameworks />
      <Content />
      <SvgVertical
        height='100%'
        viewBox='0 0 40 225'
        preserveAspectRatio='none'
        style={{ position: 'absolute', right: '0', alignSelf: 'flex-end' }}
      />
    </Stack>
  );
};

export default SkillsAndExperience;
