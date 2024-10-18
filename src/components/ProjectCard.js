import { Box, Heading, Text, Button, Link } from "@chakra-ui/react";

const ProjectCard = ({ title, description, link }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      m={4}
      bg="white"
      shadow="md"
      maxW="400px"
    >
      <Heading as="h3" size="lg" mb={4}>
        {title}
      </Heading>
      <Text fontSize="md" mb={4}>
        {description}
      </Text>
      <Button as={Link} href={link} isExternal colorScheme="brand">
        View Project
      </Button>
    </Box>
  );
};

export default ProjectCard;
