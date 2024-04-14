import React from 'react';
import { Avatar, Heading, VStack } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';

const avatar = {
  url: `https://i.pravatar.cc/150?img=7`,
  greeting: `Hello, I am Pete!`,
  bio1: `A frontend developer`,
  bio2: `specialised in React`,
};

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={10}>
      <VStack>
        <Avatar src={avatar.url} size="xl" />
        <Heading as="h6" size="sm">
          {avatar.greeting}
        </Heading>
      </VStack>
      <VStack>
        <Heading as="h4" size="xl">
          {avatar.bio1}
        </Heading>
        <Heading as="h4" size="xl">
          {avatar.bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
