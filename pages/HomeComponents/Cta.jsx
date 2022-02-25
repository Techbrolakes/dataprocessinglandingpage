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

function Cta() {
  return (
    <Box
      backgroundImage={"/Cta.png"}
      minH={["20vh", "30vh", "40vh", "80vh"]}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"contain"}
      backgroundPosition={"center"}
    >
      <Heading
        color={"#99EFD0"}
        fontSize={["18px", "20px", "22px", "36px"]}
        width={["100%", "100%", "100%", "770px"]}
        textAlign={"center"}
        fontWeight={"700"}
        p={"10px"}
        mx={"auto"}
      >
        Create your <span>next project </span> with startup framework
      </Heading>
      <Box
        background={"#F2994A"}
        width={"112px"}
        py={"5px"}
        textAlign={"center"}
        mx={"auto"}
        my={"10px"}
        color={"#fff"}
        fontSize={"12px"}
        boxShadow={"lg"}
      >
        Get Started
      </Box>
    </Box>
  );
}

export default Cta;
