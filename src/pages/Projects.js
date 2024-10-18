import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <Box as="section" py={12} px={6} bg="gray.50" minH="100vh">
      <Heading as="h2" size="xl" textAlign="center" mb={12}>
        My Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8} justifyItems="center">
        <ProjectCard
          title="Scripture Guesser"
          description="A fun website that challenges you to guess the book of scripture based on the verse. Built with Flask, Angular, and MongoDB."
          link="https://scriptureguesser.com"
        />
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
