import { Box, Flex, Link, Spacer, Heading, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <Box bg="teal.500" p={4}>
      <Flex maxW="1200px" mx="auto" align="center">
        <Heading as="h1" size="lg" color="white">
          <Link as={RouterLink} to="/">
            Electronics Store
          </Link>
        </Heading>
        <InputGroup maxW="400px" mx={2}>
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            bg="white"
            color="black"
          />
          <InputRightElement>
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              onClick={() => console.log("Search for:", searchQuery)}
            />
          </InputRightElement>
        </InputGroup>
        <Spacer />
        <Link as={RouterLink} to="/" color="white" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/products" color="white" mx={2}>
          Products
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;