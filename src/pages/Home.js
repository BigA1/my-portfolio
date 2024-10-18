// src/pages/Home.js
import { Box, Spacer, Text, Button, Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box
      as="section"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-r, brand.500, brand.100)"
      color="white"
      textAlign="center"
    >
      <Image
        src="/assets/images/TallandTechy.png"
        alt="Tall and Techy Logo"
        boxSize="300px"
        objectFit="contain"
      />
      <Text fontSize="xl" mb={6}>
        Full-stack developer with a passion for tech.
      </Text>
      <Button
        size="lg"
        colorScheme="brand"
        onClick={() => (window.location.href = "/projects")}
      >
        View My Projects
      </Button>
    </Box>
  );
};

export default Home;
