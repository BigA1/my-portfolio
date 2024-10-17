import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <Home />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
