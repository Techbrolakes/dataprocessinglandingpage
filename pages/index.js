import { Heading, Text, Box } from "@chakra-ui/react";
import Head from "next/head";
import Business from "./HomeComponents/Business";
import Cta from "./HomeComponents/Cta";
import Finding from "./HomeComponents/Finding";
import Footer from "./HomeComponents/Footer";
import Hero from "./HomeComponents/Hero";
import Metrics from "./HomeComponents/Metrics";
import Reason from "./HomeComponents/Reason";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Data Processing Landing Page</title>
        <meta
          name="description"
          content="Simple Data Landing Page Created By Lekan Dar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        backgroundImage={"/herobackground.png"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      >
        <Hero />
        <Business />
        <Cta />
        <Metrics />
        <Finding />
        <Reason />
        <Footer />
      </Box>
    </div>
  );
}
