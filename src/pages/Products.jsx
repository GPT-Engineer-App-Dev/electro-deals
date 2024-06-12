import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

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

const Products = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={6}>
        Products
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;