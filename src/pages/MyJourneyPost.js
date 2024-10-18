// src/pages/MyJourneyPost.js
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const MyJourneyPost = () => {
  return (
    <Box as="section" py={12} px={6} bg="gray.50" minH="100vh">
      <VStack spacing={8} maxW="800px" mx="auto" textAlign="left">
        <Heading as="h1" size="xl" textAlign="center">
          My Journey as a Full-Stack Developer
        </Heading>
        <Text fontSize="lg">
          In this post, I’ll be sharing my experiences as a full-stack
          developer... (Write more about your journey here)
        </Text>
        {/* Add more content here */}
      </VStack>
    </Box>
  );
};

export default MyJourneyPost;
