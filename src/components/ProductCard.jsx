import { Box, Image, Text, Heading, Button, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src={product.image} alt={product.name} boxSize="200px" mx="auto" />
      <VStack spacing={4} mt={4} align="start">
        <Heading as="h3" size="md">
          {product.name}
        </Heading>
        <Text>{product.description}</Text>
        <Text fontSize="xl" color="teal.500">
          {product.price}
        </Text>
        <Button as={RouterLink} to={`/products/${product.id}`} colorScheme="teal">
          View Details
        </Button>
      </VStack>
    </Box>
  );
};

export default ProductCard;