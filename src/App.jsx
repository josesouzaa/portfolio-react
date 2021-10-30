import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalContextProvider from "./context/globalContext";
import About from "./objects/about";
import Contact from "./objects/contact";
import Education from "./objects/education";
import Experience from "./objects/experience";
import Footer from "./objects/footer";
import Header from "./objects/header";
import Intro from "./objects/intro";
import Portfolio from "./objects/portfolio";
import { GlobalStyle } from "./styles/globalstyles";
import theme from "./styles/theme";

function App() {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Intro />
        <About />
        <Education />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </ThemeProvider>
    </GlobalContextProvider>
  );
}

export default App;
