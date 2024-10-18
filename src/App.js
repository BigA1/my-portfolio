// src/App.js
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import MyJourneyPost from "./pages/MyJourneyPost"; // Import blog post page
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import customTheme from "./theme";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog/my-journey-as-a-full-stack-developer"
            element={<MyJourneyPost />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
