import React from "react";
import Header from "./Header";
import Overview from "./Overview";
import About from "./About";
import Introduction from "./Introduction";
import Objectives from "./Objectives";
import MissionVisionValues from "./MissionVisionValues";
import Gallery from "./Gallery";
import Portfolio from "./Portfolio";
import Goals from "./Goals";
import { ThemeProvider } from "../ThemeContext";
// import { ThemeProvider } from "./ThemeContext";

function ProjectProposal() {
 return (
  <ThemeProvider>
   <div className="bg-black text-white">
    <Header />
    <Overview />
    <About />
    <Introduction />
    <Objectives />
    <MissionVisionValues />
    <Gallery />
    <Portfolio />
    <Goals />
   </div>
  </ThemeProvider>
 );
}

export default ProjectProposal;
