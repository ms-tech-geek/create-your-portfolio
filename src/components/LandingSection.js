import React from 'react';
import { Avatar, Heading, VStack } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';

const avatarUrl = `https://i.pravatar.cc/150?img=7`;
const greeting = 'Hello, I am Pete!';
const bio1 = 'A frontend developer';
const bio2 = 'specialised in React';

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={10}>
      <VStack>
        <Avatar src={avatarUrl} size="xl" />
        <Heading as="h6" size="sm" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack>
        <Heading as="h4" size="xl" noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h4" size="xl" noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
