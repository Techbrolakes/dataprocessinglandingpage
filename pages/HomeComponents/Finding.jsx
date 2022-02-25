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

function Finding() {
  return (
    <Box
      backgroundImage={"/finding.png"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"contain"}
      backgroundPosition={"right"}
      minH={["20vh", "30vh", "40vh", "75vh"]}
      py={"50px"}
    >
      <Flex
        justify={"center"}
        align={"center"}
        gap={["50px", "50px", "70px", "100px"]}
        flexDirection={["column-reverse", "column-reverse", "column", "row"]}
      >
        <Box mx={["auto", "auto", "initial", "initial"]}>
          <Image src="/Group13.png" alt="HeroImage" width={"340px"} />
        </Box>
        <Box>
          <Heading
            color={"#99EFD0"}
            fontSize={["18px", "18px", "18px", "18px"]}
            fontWeight={"700"}
            textTransform={"capitalize"}
            pb={["10px", "15px", "15px", "20px"]}
            textAlign={["center", "center", "left", "left"]}
          >
            Help Finding Information Online{" "}
          </Heading>
          <Text
            color={"#8476AA"}
            width={["100%", "100%", "100%", "470px"]}
            textAlign={["center", "center", "left", "left"]}
            pb={["10px", "15px", "20px", "25px"]}
          >
            Fully customizable and neatly organized components will help you
            work faster without limiting creative freedom.
          </Text>
          <Flex
            flexDirection={["column", "column", "column", "row"]}
            textAlign={["center", "center", "left", "left"]}
          >
            <Box width={["100%", "100%", "100%", "321px"]}>
              <Image
                src={"/Swiss-knife.svg"}
                alt="icon one"
                width={"36px"}
                mx={["auto", "auto", "initial", "initial"]}
              />
              <Heading
                color={"#99EFD0"}
                fontSize={["18px", "18px", "18px", "18px"]}
                fontWeight={"700"}
                py={"5px"}
              >
                Feature one
              </Heading>
              <Text color={"#8476AA"} fontSize={"15px"} lineHeight={"20px"}>
                Fully customizable and neatly organized components will help you
                work faster
              </Text>
            </Box>
            <Box width={["100%", "100%", "100%", "321px"]}>
              <Image
                src={"/icon3.svg"}
                alt="icon one"
                width={"36px"}
                mx={["auto", "auto", "initial", "initial"]}
              />

              <Heading
                color={"#99EFD0"}
                fontSize={["18px", "18px", "18px", "18px"]}
                fontWeight={"700"}
                py={"5px"}
              >
                Feature one
              </Heading>
              <Text color={"#8476AA"} fontSize={"15px"} lineHeight={"20px"}>
                Fully customizable and neatly organized components will help you
                work faster
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Finding;
