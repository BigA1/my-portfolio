import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Open Sans, sans-serif",
  },
});

export default customTheme;
