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
function NavbarContent() {
  return (
    <Flex
      justify={"center"}
      flexDirection={["column", "column", "column", "row"]}
      pt={["30px", "50px", "60px", "70px"]}
    >
      <Container
        display={"flex"}
        alignItems={"flex-end"}
        flexDirection={"column"}
      >
        <Heading
          color={"#99EFD0"}
          fontSize={["22px", "26px", "32px", "44px"]}
          textAlign={["center", "center", "left", "left"]}
          fontWeight={"700"}
          width={["100%", "100%", "100%", "540px"]}
        >
          Many reasons to get up and start to get back in the business
        </Heading>
        <Box width={["100%", "100%", "100%", "540px"]} py={"10px"}>
          <Text
            color={"#8476AA"}
            width={["100%", "100%", "100%", "469px"]}
            textAlign={["center", "center", "left", "left"]}
          >
            The harder you work for something, the greater you&rsquo;ll feel
            when you achieve it.
          </Text>
        </Box>

        {/* BUTTON CONTAINER */}
        <Box
          width={["100%", "100%", "100%", "540px"]}
          display={"flex"}
          color={"#fff"}
          textAlign={"center"}
          gap={"10px"}
          justifyContent={["center", "center", "normal", "normal"]}
        >
          <Box
            background={"#F2994A"}
            borderRadius={"3px"}
            width={"112px"}
            py={"5px"}
          >
            Learn More
          </Box>
          <Box
            alignSelf={"flex-start"}
            border={"1px"}
            borderRadius={"3px"}
            borderColor={"#F2994A"}
            width={"112px"}
            py={"5px"}
          >
            <Text color={"#F2994A"}>Demo</Text>
          </Box>
        </Box>
        {/* BUTTON CONTAINER */}
        {/* PLAY CONTAINER */}
        <Box
          width={["100%", "100%", "100%", "540px"]}
          display={["block", "block", "flex", "flex"]}
          textAlign={"left"}
          gap={"10px"}
          py={"30px"}
          color={"#8476AA"}
        >
          <Box>
            <Image
              src="/Picture.svg"
              alt="play button"
              width={"140px"}
              mx={"auto"}
            />
          </Box>
          <Text
            width={["100%", "100%", "100%", "380px"]}
            textAlign={["center", "center", "left", "left"]}
          >
            The harder you work for something, the greater you&rsquo;sll feel
            when you achieve it.
            <Text>Watch preview</Text>
          </Text>
        </Box>
        {/* PLAY CONTAINER */}
      </Container>
      <Box display={["none", "none", "none", "block"]}>
        <Image src="/Frame.png" width={"723.71px"} alt="HeroImage" />
      </Box>
    </Flex>
  );
}

export default NavbarContent;
