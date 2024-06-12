import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={6}>
        Welcome to Electronics Store
      </Heading>
      <Text fontSize="lg" mb={6}>
        Your one-stop shop for the latest and greatest in electronics.
      </Text>
      <VStack spacing={4}>
        <Button as={RouterLink} to="/products" colorScheme="teal" size="lg">
          Shop Now
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;