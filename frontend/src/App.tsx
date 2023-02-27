import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme/theme";

function App() {
  return (
      <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <NavBar/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </ThemeProvider>
      </>
  );
}

export default App;
