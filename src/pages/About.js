import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import {
  FaReact,
  FaPython,
  FaDatabase,
  FaDocker,
  FaAngular,
} from "react-icons/fa";

const About = () => {
  const bg = useColorModeValue("gray.50", "gray.800");

  return (
    <Box as="section" py={12} px={6} bg={bg} minH="100vh">
      <VStack spacing={8} maxW="800px" mx="auto" textAlign="center">
        <Heading as="h2" size="lg" mt={12}>
          Alan Hamson
        </Heading>
        <Image
          src="/assets/images/alanPicture.jpg"
          alt="Alan Hamson"
          mb={6}
          objectFit="cover"
          width="100%"
          maxWidth="600px"
          height="auto"
          borderRadius="md"
        />
        <Text fontSize="lg">
          Hi, I'm a full-stack developer with over 4 years of experience
          building scalable web applications. I've worked with modern frameworks
          like Angular, Flask, and SQL Server, and I specialize in creating
          efficient and reliable solutions for both front-end and back-end
          development.
        </Text>
        <Text fontSize="lg">
          At NetDocuments, I collaborated across teams to develop UI components,
          optimize performance, and enhance the user experience. Recently, I
          completed the IBM Back-End Development course, gaining expertise in
          Python, Flask, MongoDB, and cloud technologies.
        </Text>

        <Heading as="h3" size="lg" mt={10}>
          Skills
        </Heading>

        <HStack spacing={8} justify="center" mt={4}>
          <VStack>
            <Icon as={FaAngular} w={12} h={12} color="brand.500" />
            <Text>Angular</Text>
          </VStack>
          <VStack>
            <Icon as={FaReact} w={12} h={12} color="brand.500" />
            <Text>React</Text>
          </VStack>
          <VStack>
            <Icon as={FaPython} w={12} h={12} color="brand.500" />
            <Text>Python</Text>
          </VStack>
          <VStack>
            <Icon as={FaDatabase} w={12} h={12} color="brand.500" />
            <Text>MongoDB</Text>
          </VStack>
          <VStack>
            <Icon as={FaDocker} w={12} h={12} color="brand.500" />
            <Text>Docker</Text>
          </VStack>
        </HStack>

        <Heading as="h3" size="lg" mt={10}>
          Education
        </Heading>
        <Text fontSize="md" color="gray.600">
          Bachelor of Science in Statistics with a Data Science emphasis from
          Brigham Young University.
        </Text>
        <Text fontSize="md" color="gray.600">
          IBM Back-End Development Certificate and Advanced React Meta
          Certificate.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
