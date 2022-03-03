import "../styles/globals.css";
import "../styles/markdown.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/neuton";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@fontsource/amiko";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const theme = extendTheme({
  textStyles: {
    h1: {
      letterSpacing: "2px",
    },
    h2: {
      letterSpacing: "2px",
    },
    h3: {
      letterSpacing: "2px",
    },
    p: {
      letterSpacing: "2px",
    },
  },
  fonts: {
    body: "'Amiko', sans-serif",
    heading: "'Neuton', serif",
    mono: "Menlo, monospace",
  },
  colors: {
    brand: {
      primary: "#6A5495",
      secondary: "#ED5EDD",
      contrast: "#8BDB81",
      accent: "#E7ED9B",
    },
    gray: {
      50: "#F2F2F2",
      100: "#DBDBDB",
      200: "#C4C4C4",
      300: "#ADADAD",
      400: "#969696",
      500: "#808080",
      600: "#666666",
      700: "#4D4D4D",
      800: "#333333",
      900: "#1A1A1A",
    },
    red: {
      50: "#FCE8E8",
      100: "#F8BFBF",
      200: "#F39595",
      300: "#EF6C6C",
      400: "#EA4343",
      500: "#E61919",
      600: "#B81414",
      700: "#8A0F0F",
      800: "#5C0A0A",
      900: "#2E0505",
    },
    orange: {
      50: "#FAF1EA",
      100: "#F2D7C5",
      200: "#EABD9F",
      300: "#E1A37A",
      400: "#D98954",
      500: "#D16F2E",
      600: "#A75825",
      700: "#7D421C",
      800: "#532C13",
      900: "#2A1609",
    },
    yellow: {
      50: "#F5F3EF",
      100: "#E4DED2",
      200: "#D3C9B6",
      300: "#C2B499",
      400: "#B09F7D",
      500: "#9F8A60",
      600: "#7F6E4D",
      700: "#5F533A",
      800: "#403726",
      900: "#201C13",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Women Awareness</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Box minH="calc(100vh - 350px)">
          <Component {...pageProps} />
        </Box>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
