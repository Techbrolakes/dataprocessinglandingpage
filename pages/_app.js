import "@fontsource/inter/400.css";
import "@fontsource/cabin/400.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
