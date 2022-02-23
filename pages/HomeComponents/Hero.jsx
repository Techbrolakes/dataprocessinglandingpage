import React from "react";
import { Heading, Text, Box, Container } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import NavbarContent from "./Navbar/NavbarContent";

function Hero() {
  return (
    <>
      <Box backgroundImage={"/herobackground.png"} minH={"100vh"}>
        <Navbar />
        <NavbarContent />
      </Box>
    </>
  );
}

export default Hero;
