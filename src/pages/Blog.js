import { Box, Heading, VStack, Text, Link } from "@chakra-ui/react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "My Journey as a Full-Stack Developer",
      excerpt: "Sharing my experiences building modern web applications...",
      url: "/blog/my-journey-as-a-full-stack-developer",
    },
    {
      id: 2,
      title: "Why I Love Flask for Back-End Development",
      excerpt:
        "Flask is my go-to framework for building fast and scalable APIs...",
      url: "/blog/why-i-love-flask",
    },
    // Add more posts here
  ];

  return (
    <Box as="section" py={12} px={6} bg="gray.50" minH="100vh">
      <VStack spacing={8} maxW="800px" mx="auto" textAlign="left">
        <Heading as="h2" size="xl" textAlign="center">
          Blog
        </Heading>
        {posts.map((post) => (
          <Box
            key={post.id}
            p={6}
            bg="white"
            shadow="md"
            borderRadius="md"
            w="100%"
          >
            <Heading as="h3" size="lg" mb={2}>
              <Link href={post.url}>{post.title}</Link>
            </Heading>
            <Text>{post.excerpt}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Blog;
