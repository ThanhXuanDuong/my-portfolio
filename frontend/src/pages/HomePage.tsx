
import Home from "../sections/Home";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import React from "react";

export default function HomePage(){
    return (
        <>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </>
    )
}