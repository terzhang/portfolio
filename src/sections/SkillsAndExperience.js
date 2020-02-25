import React, { lazy } from 'react';
import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Avatar,
  Tag,
  TagLabel,
} from '@chakra-ui/core';
const SvgFrameworks = lazy(() =>
  import('../components/SvgComponents/Frameworks')
);
const SvgVertical = lazy(() =>
  import('../components/SvgComponents/VerticalLine')
);

const ExperienceItem = ({ title, date = '', description = '' }) => (
  <ListItem key={title + date}>
    <Text as='p'>
      <Text as='span' fontSize='2xl'>
        {title}
      </Text>
      <Text as='span' fontSize='lg' color='gray.500'>{` (${date})`}</Text>
    </Text>
    <Text as='p'>{description}</Text>
  </ListItem>
);

const Experiences = () => (
  <List>
    <ExperienceItem title='Developer' date='2018-2020' />
    <ExperienceItem title='Freelancer' date='2018-2019' />
    <ExperienceItem title='eCommerce owner' date='2017-2018' />
  </List>
);

const SkillTags = ({ skillsObj }) => {
  // check any resource is given
  if (!skillsObj) {
    return null;
  }

  // method pick a color index randomly
  const colors = ['red', 'blue', 'green', 'purple'];
  const pickColor = () => colors[Math.floor(Math.random() * colors.length)];

  // map out the given avatar object into an array of tags
  return (
    <List display='inline-block'>
      {skillsObj.map((avatar) => (
        <ListItem key={avatar.name} display='inline' mr={2}>
          <Tag variantColor={pickColor()} rounded='full'>
            <Avatar
              {...avatar}
              background='none'
              size='xs'
              ml={-1}
              mr={2}
              object-fit='contain'
            />
            <TagLabel>{avatar.name}</TagLabel>
          </Tag>
        </ListItem>
      ))}
    </List>
  );
};

const skillsObj = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    name: 'React',
  },
  {
    src: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    name: 'Git',
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
    name: 'Node JS',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
    name: 'Express',
  },
];

const Content = (props) => (
  <Stack spacing={8} justifyContent='space-evenly' h='full' {...props}>
    <Box>
      <Heading size='lg'>I'm well versed in</Heading>
      <SkillTags skillsObj={skillsObj} />
    </Box>
    <Box>
      <Heading size='lg' id='experience'>
        Work Experience
      </Heading>
      <Experiences />
    </Box>
  </Stack>
);

const SkillsAndExperience = (props) => {
  return (
    <Flex
      isInline
      w='full'
      alignSelf='center'
      alignItems='center'
      position='relative'
      spacing={0}
      {...props}
    >
      <Box as={SvgFrameworks} mb='-125px' />
      <Content margin='auto' />
      <Box
        as={SvgVertical}
        height='100%'
        viewBox='0 0 40 225'
        preserveAspectRatio='none'
        position='absolute'
        right={0}
        bottom={0}
        alignSelf='flex-end'
      />
    </Flex>
  );
};

export default SkillsAndExperience;
