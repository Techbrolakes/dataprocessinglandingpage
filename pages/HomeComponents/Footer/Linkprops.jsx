import React from "react";
import {
  Box,
  Container,
  Image,
  Heading,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
function Linkprops({ firstheading, first, second, third, fourth }) {
  return (
    <Box width={["100%", "100%", "100%", "96px"]}>
      <Heading
        color={"#FFFFFF"}
        fontSize={"15px"}
        fontWeight={"700"}
        textTransform={"capitalize"}
        pb={["10px", "15px", "15px", "20px"]}
        textAlign={["center", "center", "left", "left"]}
      >
        {firstheading}
      </Heading>
      <Text color={"#8476AA"} textAlign={["center", "center", "left", "left"]}>
        {first}
      </Text>
      <Text color={"#8476AA"} textAlign={["center", "center", "left", "left"]}>
        {second}
      </Text>
      <Text color={"#8476AA"} textAlign={["center", "center", "left", "left"]}>
        {third}
      </Text>
      <Text color={"#8476AA"} textAlign={["center", "center", "left", "left"]}>
        {fourth}
      </Text>
    </Box>
  );
}

export default Linkprops;
