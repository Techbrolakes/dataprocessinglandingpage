import {
  Box,
  Container,
  Image,
  ListItem,
  UnorderedList,
  IconButton,
  VStack,
  Button,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [nav, setnav] = useState(false);

  const handleNavbarClick = () => {
    return setnav(!nav);
  };
  return (
    <div>
      <Box
        color={"#fff"}
        display={["none", "none", "flex", "flex"]}
        justifyContent={"space-between"}
        alignItems={"center"}
        textTransform={"uppercase"}
        textAlign={"center"}
        py={"20px"}
        mx={"auto"}
        fontSize={"12px"}
        width={["100vw", "100vw", "100vw", "83vw"]}
      >
        <UnorderedList
          display={["block", "block", "flex", "flex"]}
          gap={"20px"}
          listStyleType={"none"}
          alignItems={"center"}
          color={"#B5B5B5"}
        >
          <Image src="Logo.svg" alt="website logo" />
          <ListItem>About</ListItem>
          <ListItem>Gallery</ListItem>
          <ListItem>pricing</ListItem>
          <ListItem>FAQ</ListItem>
          <ListItem>BENEFITS</ListItem>
        </UnorderedList>
        <Box display={"flex"} alignItems={"center"} gap={"20px"}>
          <Box
            border={"1px"}
            borderRadius={"3px"}
            borderColor={"#F2994A"}
            width={"112px"}
            py={"5px"}
          >
            Sign in
          </Box>
          <Box
            background={"#F2994A"}
            borderRadius={"3px"}
            width={"112px"}
            py={"5px"}
          >
            Sign up
          </Box>
        </Box>
      </Box>
      {/* MOBILE NAVIGATION */}
      <Box
        display={["flex", "flex", "none", "none"]}
        justifyContent={"space-between"}
        px={"20px"}
        py={"20px"}
      >
        <Image src="Logo.svg" alt="website logo" />
        <Box>
          {nav ? (
            <IconButton
              aria-label="Fa Times"
              icon={<FaTimes />}
              onClick={handleNavbarClick}
            />
          ) : (
            <IconButton
              aria-label="Fa Bars"
              icon={<FaBars />}
              onClick={handleNavbarClick}
            />
          )}
        </Box>
      </Box>
      <Box display={["block", "block", "none", "none"]}>
        {nav ? (
          <Box
            color="#fff"
            display={"block"}
            position={"absolute"}
            zIndex={"3"}
            bg={"#2A1855"}
            padding={"1rem"}
            width={"100%"}
            shadow="2xl"
          >
            <UnorderedList
              textTransform={"capitalize"}
              fontSize="14px"
              listStyleType={"none"}
              textAlign={"center"}
            >
              <ListItem shadow={"lg"} p={1} my={1}>
                About
              </ListItem>
              <ListItem shadow={"lg"} p={1} my={1}>
                Gallery
              </ListItem>
              <ListItem shadow={"lg"} p={1} my={1}>
                pricing
              </ListItem>
              <ListItem shadow={"lg"} p={1} my={1}>
                FAQ
              </ListItem>
              <ListItem shadow={"lg"} p={1} my={1}>
                Benefits
              </ListItem>
            </UnorderedList>
            <Flex justify={"center"} textAlign={"center"} gap={"10px"} my={1}>
              <Box
                border={"1px"}
                borderRadius={"3px"}
                borderColor={"#F2994A"}
                width={"112px"}
                py={"3px"}
              >
                Sign in
              </Box>
              <Box
                background={"#F2994A"}
                borderRadius={"3px"}
                width={"112px"}
                py={"3px"}
              >
                Sign up
              </Box>
            </Flex>
          </Box>
        ) : (
          <Box color="#fff" display={"none"}>
            <UnorderedList textTransform={"capitalize"}>
              <ListItem>About</ListItem>
              <ListItem>Gallery</ListItem>
              <ListItem>pricing</ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>Benefits</ListItem>
            </UnorderedList>
          </Box>
        )}
      </Box>
    </div>
  );
}

export default Navbar;
