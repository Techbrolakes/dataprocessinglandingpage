import React from "react";
import { Heading, Text, Box, Container } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import NavbarContent from "./Navbar/NavbarContent";
import Features from "./Navbar/Features";
import Business from "./Business";

function Hero() {
  return (
    <>
      <Box>
        <Navbar />
        <NavbarContent />
        <Features />
      </Box>
    </>
  );
}

export default Hero;
