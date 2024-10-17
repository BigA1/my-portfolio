// src/pages/Home.js
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box
      as="section"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-r, teal.400, blue.500)"
      color="white"
      textAlign="center"
    >
      <Heading as="h1" size="2xl" mb={4}>
        Hi, I'm Alan Hamson
      </Heading>
      <Text fontSize="xl" mb={6}>
        A software developer passionate about building modern web applications.
      </Text>
      <Button
        size="lg"
        colorScheme="teal"
        onClick={() => (window.location.href = "#projects")}
      >
        View My Projects
      </Button>
    </Box>
  );
};

export default Home;
