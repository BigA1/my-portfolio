// src/components/Header.js
import { Box, Flex, Link, Spacer } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" bg="teal.500" p={4} color="white">
      <Flex maxW="1200px" mx="auto" align="center">
        <Link href="/" fontWeight="bold" fontSize="xl">
          Alan Hamson
        </Link>
        <Spacer />
        <Link href="#about" mx={2}>
          About
        </Link>
        <Link href="#projects" mx={2}>
          Projects
        </Link>
        <Link href="#contact" mx={2}>
          Contact
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
