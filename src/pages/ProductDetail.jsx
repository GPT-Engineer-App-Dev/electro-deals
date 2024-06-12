import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with all the new features.",
    price: "$699",
    image: "/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play.",
    price: "$999",
    image: "/images/laptop.jpg",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones.",
    price: "$199",
    image: "/images/headphones.jpg",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Image src={product.image} alt={product.name} boxSize="300px" />
        <Heading as="h2" size="xl">
          {product.name}
        </Heading>
        <Text fontSize="lg">{product.description}</Text>
        <Text fontSize="2xl" color="teal.500">
          {product.price}
        </Text>
      </VStack>
    </Box>
  );
};

export default ProductDetail;