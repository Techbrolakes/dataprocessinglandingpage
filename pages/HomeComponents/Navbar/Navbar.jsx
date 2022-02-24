import {
  Box,
  Container,
  Image,
  ListItem,
  UnorderedList,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
          <GiHamburgerMenu
            size={"32px"}
            color={"#fff"}
            onClick={onOpen}
            ref={btnRef}
          />

          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Mobile Nav</DrawerHeader>

              <DrawerBody>
                <UnorderedList
                  listStyleType={"none"}
                  textAlign={"center"}
                  fontSize={"26px"}
                >
                  <ListItem border={"2px"} borderColor={"#F2994A"}>
                    About
                  </ListItem>
                  <ListItem border={"2px"} borderColor={"#F2994A"} my={"5px"}>
                    Gallery
                  </ListItem>
                  <ListItem border={"2px"} borderColor={"#F2994A"} my={"5px"}>
                    pricing
                  </ListItem>
                  <ListItem border={"2px"} borderColor={"#F2994A"} my={"5px"}>
                    FAQ
                  </ListItem>
                  <ListItem border={"2px"} borderColor={"#F2994A"} my={"5px"}>
                    BENEFITS
                  </ListItem>
                  <Box
                    border={"1px"}
                    borderRadius={"3px"}
                    borderColor={"#F2994A"}
                    my={"5px"}
                  >
                    Sign in
                  </Box>
                  <Box background={"#F2994A"} borderRadius={"3px"} my={"5px"}>
                    Sign up
                  </Box>{" "}
                </UnorderedList>
              </DrawerBody>

              <DrawerFooter textAlign={"center"}>
                <Image
                  src="Logo.svg"
                  alt="website logo"
                  width="100px"
                  mx={"auto"}
                />
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </div>
  );
}

export default Navbar;
