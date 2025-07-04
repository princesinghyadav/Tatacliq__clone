 
import {  Heading, Text, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      bg="gray.50"
      textAlign="center"
      px={4}
    >
      <Heading fontSize="6xl" color="red.400">
        404
      </Heading>
      <Text fontSize="2xl" mt={4} fontWeight="bold">
        Page Not Found
      </Text>
      <Text fontSize="md" color="gray.600" mt={2}>
        Oops! The page you're looking for doesn't exist.
      </Text>
      <Button
        colorScheme="teal"
        mt={6}
        px={6}
        onClick={() => navigate("/")}
      >
        Go to Home
      </Button>
    </Flex>
  );
};

export default NotFound;
