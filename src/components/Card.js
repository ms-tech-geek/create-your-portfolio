import { HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack backgroundColor={'white'} borderRadius={'lg'}>
      <Image src={imageSrc} alt={title} objectFit="cover" borderRadius={'lg'} />
      <VStack align="start" padding={4} spacing={4}>
        <Heading as="h6" size="sm" color={'black'}>
          {title}
        </Heading>
        <Text fontSize="sm" color={'black'}>
          {description}
        </Text>
        <HStack color={'black'}>
          <a href="#">
            <Text fontSize="xs" color={'black'}>
              {'See More'}
            </Text>
          </a>
          <FontAwesomeIcon icon={faArrowRight} size="xs" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
