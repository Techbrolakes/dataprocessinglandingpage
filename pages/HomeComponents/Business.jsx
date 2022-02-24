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

function Business() {
  return (
    <>
      <Box
        py={"50px"}
        backgroundImage={"/stroke.png"}
        backgroundPosition={"left"}
        backgroundSize={"300px"}
        backgroundRepeat={"no-repeat"}
      >
        <Flex
          justify={"center"}
          gap={"50px"}
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
              Increase your business <span>traffic </span>
            </Heading>
            <Text
              color={"#8476AA"}
              width={["100%", "100%", "100%", "470px"]}
              textAlign={["center", "center", "left", "left"]}
              pb={["10px", "15px", "20px", "25px"]}
            >
              We are committed to processing the information in order to contact
              you and talk about your project.
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
            <Image src="/Image.png" alt="HeroImage" width={"340px"} />
          </Box>
        </Flex>

        <Box padding={"30px"}>
          <Heading
            color={"#99EFD0"}
            fontSize={["18px", "20px", "22px", "36px"]}
            width={["100%", "100%", "100%", "770px"]}
            textAlign={"center"}
            fontWeight={"700"}
            p={"10px"}
            mx={"auto"}
          >
            3 Simple Ways To <span> Save</span> A Bunch <br /> Of
            <span> Money</span> When Buying A New Computer
          </Heading>
          <Text
            color={"#8476AA"}
            textAlign={"center"}
            width={["100%", "100%", "100%", "470px"]}
            mx={"auto"}
            fontSize={"15px"}
            py={"10px"}
          >
            Fully customizable and neatly organized components will help you
            work faster without limiting creative freedom.
          </Text>
          <Flex
            justify={"center"}
            gap={"30px"}
            p={"10px"}
            flexDirection={["column", "column", "column", "row"]}
          >
            <Box width={["100%", "100%", "100%", "261px"]}>
              <Heading
                color={"#99EFD0"}
                fontSize={["18px", "20px", "22px", "24px"]}
                textAlign={"center"}
                fontWeight={"700"}
                pb={"10px"}
              >
                100+
              </Heading>
              <Text color={"#8476AA"} textAlign={"center"} fontSize={"15px"}>
                5 Reasons To Purchase Desktop Computers
              </Text>
            </Box>
            <Box width={["100%", "100%", "100%", "261px"]}>
              <Heading
                color={"#99EFD0"}
                fontSize={["18px", "20px", "22px", "24px"]}
                textAlign={"center"}
                fontWeight={"700"}
                pb={"10px"}
              >
                43,000+
              </Heading>
              <Text color={"#8476AA"} textAlign={"center"} fontSize={"15px"}>
                3 Simple Ways To Save A Bunch Of Money When Buying A New
                Computer
              </Text>
            </Box>
            <Box width={["100%", "100%", "100%", "261px"]}>
              <Heading
                color={"#99EFD0"}
                fontSize={["18px", "20px", "22px", "24px"]}
                textAlign={"center"}
                fontWeight={"700"}
                pb={"10px"}
              >
                30+
              </Heading>
              <Text color={"#8476AA"} textAlign={"center"} fontSize={"15px"}>
                A Discount Toner Cartridge Is Better Than Ever And You Will Save
                50 Or More
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Business;
