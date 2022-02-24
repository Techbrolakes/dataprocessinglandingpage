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
function FeaturesProps({ heading, text, icon }) {
  return (
    <Flex align={"flex-start"} gap={"10px"} width={"269px"}>
      <Image src={icon} alt="icon one" />
      <Box>
        <Heading
          color={"#99EFD0"}
          fontSize={["18px", "18px", "18px", "18px"]}
          fontWeight={"700"}
        >
          {heading}
        </Heading>
        <Text color={"#8476AA"} fontSize={"14px"}>
          {text}
        </Text>
      </Box>
    </Flex>
  );
}

export default FeaturesProps;
