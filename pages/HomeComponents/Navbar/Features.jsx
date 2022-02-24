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
import FeaturesProps from "./FeaturesProps";
function Features() {
  return (
    <>
      <Box
        color={"#fff"}
        backgroundImage={"/features.png"}
        backgroundSize={"contain"}
        backgroundPosition={"center"}
        py={"30px"}
      >
        {/* IMAGE BOX */}
        <Flex
          justify={"center"}
          align={"center"}
          gap={"40px"}
          flexDirection={["column", "column", "row", "row"]}
          flexWrap={"wrap"}
          pb={"50px"}
        >
          <Image
            src="profit.svg"
            alt="profit"
            width={["100px", "100px", "100px", "100px"]}
          />
          <Image
            src="appcue.svg"
            alt="appcue"
            width={["100px", "100px", "100px", "100px"]}
          />
          <Image
            src="shipboe.svg"
            alt="shipboe"
            width={["100px", "100px", "100px", "100px"]}
          />
          <Image
            src="bench.svg"
            alt="bench"
            width={["100px", "100px", "100px", "100px"]}
          />
          <Image
            src="subby.svg"
            alt="subby"
            width={["100px", "100px", "100px", "100px"]}
          />
          <Image
            src="demio.svg"
            alt="demio"
            width={["100px", "100px", "100px", "100px"]}
          />
        </Flex>
        {/* IMAGE BOX */}
        {/*   DETAILS BOX */}
        <Heading
          color={"#99EFD0"}
          fontSize={["22px", "26px", "32px", "44px"]}
          textAlign={"center"}
          fontWeight={"700"}
        >
          Your choice
        </Heading>
        <Text color={"#8476AA"} textAlign={"center"}>
          There are many reasons to get down and start to get depressed about
          your situation.
        </Text>
        {/*   DETAILS BOX */}
        <Flex
          justify={["normal", "normal", "center", "center"]}
          padding={["40px", "15px", "30px", "40px"]}
          gap={"20px"}
          flexDirection={["column", "column", "row", "row"]}
        >
          <FeaturesProps
            icon="/icon1.svg"
            heading="Ecstatic elegance"
            text="Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add."
          />
          <FeaturesProps
            icon="/Airpods.svg"
            heading="Folly words widow"
            text="Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what."
          />
          <FeaturesProps
            icon="/icon3.svg"
            heading="Possible procured trifling"
            text="We me rent been part what. An concluded sportsman offending so provision mr education."
          />
        </Flex>
        <Flex
          justify={["normal", "normal", "center", "center"]}
          px={["40px", "15px", "30px", "40px"]}
          gap={"20px"}
          flexDirection={["column", "column", "row", "row"]}
        >
          <FeaturesProps
            icon="Thunder-move.svg"
            heading="Open game"
            text="Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable."
          />
          <FeaturesProps
            icon="/Attachment.svg"
            heading="Endeavor"
            text="Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. "
          />
          <FeaturesProps
            icon="/Bulb.svg"
            heading="Comfort pursuit"
            text="Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug."
          />
        </Flex>
      </Box>
    </>
  );
}

export default Features;
