import React, { lazy, useState } from 'react';
import styled from '@emotion/styled';
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

import SectionHeading from '../components/SectionHeading';
import useIntersect from '../hooks/useIntersect';

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

const Experiences = (props) => (
  <List textAlign='left' {...props}>
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
  <Stack
    spacing={12}
    justifyContent='space-evenly'
    h='full'
    textAlign='center'
    {...props}
  >
    {/* skills */}
    <Stack spacing={8}>
      <Heading fontSize='h3'>I'm well versed in</Heading>
      <SkillTags skillsObj={skillsObj} />
    </Stack>
    {/* work exp */}
    <Stack spacing={8}>
      <Heading fontSize='h3' id='experience'>
        Work Experience
      </Heading>
      <Experiences />
    </Stack>
  </Stack>
);

const Inner = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useIntersect(() => {
    setAnimate(true);
  });

  return (
    <Flex
      w='full'
      alignSelf='center'
      alignItems='center'
      position='relative'
      flexDir='column'
      ref={ref}
    >
      <SectionHeading>Skills and Experience</SectionHeading>
      <Flex w='full' h='full'>
        <Frameworks animate={animate} />
        <Content margin='auto' />
      </Flex>
    </Flex>
  );
};

const Frameworks = styled(SvgFrameworks)`
  margin-bottom: -125px;
`;

const SkillsAndExperience = (props) => {
  return (
    <Box as='section' position='relative' {...props}>
      <Inner />
      <Box
        as={SvgVertical}
        height='100%'
        // viewBox='0 0 40 225'
        preserveAspectRatio='none'
        position='absolute'
        top={0}
        right={0}
      />
    </Box>
  );
};

export default SkillsAndExperience;
