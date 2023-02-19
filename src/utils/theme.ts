import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  colors: {
    theme: {
      50: "#89cdf1",
      100: "#71c2ee",
      200: "#59b8eb",
      300: "#41aee8",
      400: "#2aa4e5",
      500: "#129AE2",
      600: "#108bcb",
      700: "#0e7bb5",
      800: "#0d6c9e",
      900: "#0b5c88",
    },
  },
  maxWidth: "900px",
  styles: {
    global: {
      body: {
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        background: "gray.100",
      },
      h2: {
        fontSize: "30px",
        fontWeight: "bold",
        borderBottomStyle: "solid",
        borderBottomColor: "gray.300",
        borderBottomWidth: "2px",
        width: "fit-content",
        margin: "30px 0 20px 0",
      },
      h1: {
        fontSize: "40px",
        borderBottomStyle: "solid",
        borderBottomColor: "gray.300",
        borderBottomWidth: "2px",
        width: "fit-content",
        margin: "40px 0 20px 0",
      },
      p: {
        marginBottom: "20px",
        fontSize: "20px",
      },
      i: {
        fontSize: "20px",
      },
    },
  },
});
