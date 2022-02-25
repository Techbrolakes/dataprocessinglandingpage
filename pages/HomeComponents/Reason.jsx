import React from "react";
import {
  Box,
  Container,
  Image,
  Heading,
  Text,
  Flex,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  InputRightAddon,
} from "@chakra-ui/react";

function Reason() {
  return (
    <Box
      minH={["20vh", "30vh", "40vh", "80vh"]}
      backgroundImage={"/Reason.png"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"contain"}
      backgroundPosition={"center"}
      py={"20px"}
    >
      <Container
        textAlign={"center"}
        backgroundImage={"/Rectangle.png"}
        mx={"auto"}
        p={"20px"}
      >
        <Heading
          color={"#99EFD0"}
          fontSize={["18px", "18px", "18px", "18px"]}
          fontWeight={"700"}
          textTransform={"capitalize"}
        >
          <span>There are many reasons to get down</span>
        </Heading>
        <Text
          color={"#8476AA"}
          width={["100%", "100%", "100%", "470px"]}
          pb={["10px", "15px", "20px", "25px"]}
          mx={"auto"}
        >
          There are many reasons to get down and start to get depressed about
          your situation.
        </Text>
        <Box>
          <InputGroup>
            <Input
              color={"#fff"}
              type="email"
              placeholder="Your Email"
              mx={"auto"}
              width={"400px"}
            />
          </InputGroup>
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

        <Text
          color={"#8476AA"}
          width={["100%", "100%", "100%", "470px"]}
          pb={["10px", "15px", "20px", "25px"]}
          mx={"auto"}
        >
          No spam. Only releases, updates and discounts
        </Text>
      </Container>
    </Box>
  );
}

export default Reason;
