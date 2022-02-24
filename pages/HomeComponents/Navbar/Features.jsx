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
function Features() {
  return (
    <>
      <Box
        minH={"100vh"}
        color={"#fff"}
        backgroundImage={"/features.png"}
        backgroundSize={"contain"}
        backgroundPosition={"center"}
      >
        {/* IMAGE BOX */}
        <Flex
          justify={"center"}
          align={"center"}
          gap={"40px"}
          flexDirection={["column", "column", "row", "row"]}
          flexWrap={"wrap"}
        >
          <Image
            src="profit.svg"
            alt="profit"
            width={["100px", "100px", "100px", "100px"]}
          />
          <Image
            src="appcue.svg"
            alt="appcue"
            width={["100px", "100px", "100px", "100px"]}
          />
          <Image
            src="shipboe.svg"
            alt="shipboe"
            width={["100px", "100px", "100px", "100px"]}
          />
          <Image
            src="bench.svg"
            alt="bench"
            width={["100px", "100px", "100px", "100px"]}
          />
          <Image
            src="subby.svg"
            alt="subby"
            width={["100px", "100px", "100px", "100px"]}
          />
          <Image
            src="demio.svg"
            alt="demio"
            width={["100px", "100px", "100px", "100px"]}
          />
        </Flex>
        {/* IMAGE BOX */}
      </Box>
    </>
  );
}

export default Features;
