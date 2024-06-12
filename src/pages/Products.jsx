import { Box, SimpleGrid, Heading, Select, Input, Button, VStack, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with all the new features.",
    price: "$699",
    category: "Electronics",
    image: "/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play.",
    price: "$999",
    category: "Electronics",
    image: "/images/laptop.jpg",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones.",
    price: "$199",
    category: "Accessories",
    image: "/images/headphones.jpg",
  },
];

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();
  useEffect(() => {
    const searchQuery = query.get("search") || "";
    setFilteredProducts(
      sampleProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [query]);

  const handleFilter = () => {
    let filtered = sampleProducts;

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (minPrice) {
      filtered = filtered.filter((product) => parseFloat(product.price.replace("$", "")) >= parseFloat(minPrice));
    }

    if (maxPrice) {
      filtered = filtered.filter((product) => parseFloat(product.price.replace("$", "")) <= parseFloat(maxPrice));
    }

    setFilteredProducts(filtered);
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={6}>
        Products
      </Heading>
      <VStack spacing={4} mb={6} align="start">
        <HStack spacing={4}>
          <Select placeholder="Select category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
          </Select>
          <Input
            placeholder="Min price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <Input
            placeholder="Max price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <Button onClick={handleFilter} colorScheme="teal">
            Apply Filters
          </Button>
        </HStack>
      </VStack>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;