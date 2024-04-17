import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Box, HStack } from '@chakra-ui/react';

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto: hello@example.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com',
  },
  {
    icon: faMedium,
    url: 'https://medium.com',
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com',
  },
];

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(prevScrollY.current >= currentScrollY);
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (anchor) => (event) => {
    event.preventDefault();
    const id = `${anchor}-section`;
    console.log('id', id);
    const element = document.getElementById(id);
    console.log('element', element);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#18181b',
        transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a key={index} href={social.url} aria-label={social.name}>
                  <FontAwesomeIcon icon={social.icon} size="1x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects" onClick={handleClick('projects')}>
                Projects
              </a>
              <a href="/#contact-me" onClick={handleClick('contactme')}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
