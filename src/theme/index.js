// src/theme/index.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      100: "#E8F1FF", // Lightest shade of navy blue
      500: "#0D3B66", // Navy blue (primary color)
      900: "#091C29", // Darker shade of navy
      gray: "#54636E", // Dark gray with hint of blue for text and accents
    },
  },
  fonts: {
    heading: "Roboto, sans-serif", // You can use any web font you like
    body: "Open Sans, sans-serif",
  },
});

export default customTheme;
