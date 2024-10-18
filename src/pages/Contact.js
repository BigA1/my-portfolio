import {
  Box,
  Heading,
  VStack,
  Text,
  Link,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Box as="section" py={12} px={6} bg="gray.50" minH="100vh">
      <VStack spacing={8} maxW="600px" mx="auto" textAlign="center">
        <Heading as="h2" size="xl">
          Get in Touch
        </Heading>
        <Text fontSize="lg">
          I'm currently not accepting form submissions through the site, but
          feel free to reach out to me through the following channels!
        </Text>

        <Heading as="h3" size="lg" mt={10}>
          Connect with Me
        </Heading>
        <HStack spacing={6} justify="center">
          <Link href="https://linkedin.com/in/alan-hamson" isExternal>
            <Icon as={FaLinkedin} w={8} h={8} color="brand.500" />
          </Link>
          <Link href="https://github.com/yourusername" isExternal>
            <Icon as={FaGithub} w={8} h={8} color="brand.500" />
          </Link>
          <Link href="mailto:ahamson@gmail.com">
            <Icon as={FaEnvelope} w={8} h={8} color="brand.500" />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Contact;
