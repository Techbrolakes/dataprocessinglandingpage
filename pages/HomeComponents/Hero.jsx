import React from "react";
import { Heading, Text, Box, Container } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import NavbarContent from "./Navbar/NavbarContent";
import Features from "./Navbar/Features";

function Hero() {
  return (
    <>
      <Box
        backgroundImage={"/herobackground.png"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      >
        <Navbar />
        <NavbarContent />
        <Features />
      </Box>
    </>
  );
}

export default Hero;
