import { Box, Button, Container, Heading, Text, VStack, Input, useToast, Image, SimpleGrid, GridItem, Textarea, Divider } from "@chakra-ui/react";
import { FaSearch, FaChartBar, FaUserSecret, FaLightbulb } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSearch = () => {
    toast({
      title: "Search initiated.",
      description: "VoxPR is analyzing the data...",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          VoxPR: Your AI-Powered PR Analyst
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Delivering media search, summarization, and analysis with a touch of AI.
        </Text>
        <Image src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzEzNjI5MjI1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Technology" />

        <Box as="form" w="full">
          <VStack spacing={5}>
            <Input placeholder="Enter your search query" size="lg" />
            <Button leftIcon={<FaSearch />} colorScheme="blue" size="lg" onClick={handleSearch}>
              Analyze
            </Button>
          </VStack>
        </Box>

        <SimpleGrid columns={2} spacing={10} w="full">
          <GridItem>
            <VStack spacing={3} align="start">
              <Heading size="lg">Sentiment Analysis</Heading>
              <Text>Understand the emotional tone behind the content.</Text>
              <FaChartBar size="3em" />
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={3} align="start">
              <Heading size="lg">Share of Voice</Heading>
              <Text>Measure your brand's visibility compared to competitors.</Text>
              <FaUserSecret size="3em" />
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={3} align="start">
              <Heading size="lg">Influencer Identification</Heading>
              <Text>Identify key influencers to boost your brand's reach.</Text>
              <FaLightbulb size="3em" />
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={3} align="start">
              <Heading size="lg">Content Ideation</Heading>
              <Text>Generate ideas that resonate with your audience.</Text>
              <FaLightbulb size="3em" />
            </VStack>
          </GridItem>
        </SimpleGrid>

        <Divider />

        <VStack spacing={5} align="stretch">
          <Heading size="lg">Real-time Insights</Heading>
          <Textarea placeholder="Insights will be displayed here..." readOnly />
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
