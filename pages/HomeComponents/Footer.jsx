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
import Linkprops from "./Footer/Linkprops";
function Footer() {
  return (
    <Box
      backgroundImage={"/Footer.png"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"contain"}
      minH={["20vh", "30vh", "40vh", "75vh"]}
      mx={"auto"}
      px={"100px"}
    >
      <Box>
        <Flex justify={"space-between"} align={"center"}>
          <Heading
            color={"#99EFD0"}
            fontSize={["18px", "18px", "18px", "26px"]}
            fontWeight={"700"}
            textTransform={"capitalize"}
          >
            <span>ARShakir</span>
          </Heading>
          <Flex gap={"10px"}>
            <Image src="/Facebook.svg" alt="Facebook" />
            <Image src="/Twitter.svg" alt="Twiiter" />
            <Image src="/Google.svg" alt="Google" />
          </Flex>
        </Flex>
      </Box>
      <Box py={"70px"}>
        <Flex
          align={"center"}
          justify={"space-between"}
          flexDirection={["column", "column", "column", "row"]}
          gap={"10px"}
        >
          <Linkprops
            firstheading="First"
            first="first page"
            second="second page"
            third="third page"
            fourth="fourth page"
          />
          <Linkprops
            firstheading="Second"
            first="first page"
            second="second page"
            third="third page"
            fourth="fourth page"
          />
          <Linkprops
            firstheading="Third"
            first="first page"
            second="second page"
            third="third page"
            fourth="fourth page"
          />
          <Linkprops
            firstheading="Fourth"
            first="first page"
            second="second page"
            third="third page"
            fourth="fourth page"
          />
        </Flex>
      </Box>
      <Flex
        textAlign={"center"}
        justify={"center"}
        gap={"10px"}
        flexDirection={["column", "column", "column", "row"]}
      >
        <Text color={"#8D8D8D"} fontSize={"14px"} fontWeight={"400"}>
          © Copyrights 2021
        </Text>
        <Text color={"#8D8D8D"} fontSize={"14px"} fontWeight={"400"}>
          Privacy policy
        </Text>
        <Text color={"#8D8D8D"} fontSize={"14px"} fontWeight={"400"}>
          Terms of service
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
