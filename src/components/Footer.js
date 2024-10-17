// src/components/Footer.js
import { Box, Text, Flex, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="teal.500" color="white" p={4}>
      <Flex maxW="1200px" mx="auto" align="center" justify="space-between">
        <Text>
          &copy; {new Date().getFullYear()} Alan Hamson. All rights reserved.
        </Text>
        <Box>
          <Link href="https://github.com/BigA1" isExternal mx={2}>
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/alan-hamson" isExternal mx={2}>
            LinkedIn
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
