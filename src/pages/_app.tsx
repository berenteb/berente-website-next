import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleAnalytics } from "nextjs-google-analytics";

import theme from "../utils/theme";
import { NavBar } from "@/src/components/NavBar";
import { Footer } from "@/src/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GoogleAnalytics trackPageViews />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
