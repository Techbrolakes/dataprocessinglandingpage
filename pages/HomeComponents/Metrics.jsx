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

function Metrics() {
  return (
    <Box
      backgroundImage={"/Object.png"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"contain"}
      backgroundPosition={"right"}
      minH={["20vh", "30vh", "40vh", "75vh"]}
    >
      <Flex
        justify={"center"}
        gap={["50px", "50px", "70px", "100px"]}
        flexDirection={["column", "column", "column", "row"]}
      >
        <Box>
          <Heading
            color={"#99EFD0"}
            fontSize={["22px", "26px", "32px", "42px"]}
            textAlign={["center", "center", "left", "left"]}
            fontWeight={"700"}
            width={["100%", "100%", "100%", "470px"]}
            pb={["10px", "15px", "20px", "25px"]}
          >
            Invest property for better <span>business </span>
          </Heading>
          <Text
            color={"#8476AA"}
            width={["100%", "100%", "100%", "470px"]}
            textAlign={["center", "center", "left", "left"]}
            pb={["10px", "15px", "20px", "25px"]}
          >
            We are committed to processing the information in order to contact
            you and talk about your project. We are committed to processing the
            information.
          </Text>
          <Box
            background={"#F2994A"}
            borderRadius={"3px"}
            width={"115px"}
            boxShadow={"xl"}
            py={"5px"}
            color={"#ffffff"}
            textAlign={"center"}
            mx={["auto", "auto", "initial", "initial"]}
          >
            Learn More
          </Box>
        </Box>
        <Box mx={["auto", "auto", "initial", "initial"]}>
          <Image src="/metrics.png" alt="HeroImage" width={"340px"} />
        </Box>
      </Flex>
    </Box>
  );
}

export default Metrics;
