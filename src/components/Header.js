import { Box, Flex, Link, Spacer, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" bg="brand.500" p={4} color="white">
      <Flex maxW="1200px" mx="auto" align="center">
        <Link href="/" fontWeight="bold" fontSize="xl">
          <Image
            src="/assets/images/logo.png"
            alt="Tall and Techy Logo"
            boxSize="50px"
            objectFit="contain"
          />
        </Link>
        <Spacer />
        <Link href="/about" mx={2}>
          About
        </Link>
        <Link href="/projects" mx={2}>
          Projects
        </Link>
        <Link href="/blog" mx={2}>
          Blog
        </Link>
        <Link href="/contact" mx={2}>
          Contact
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
