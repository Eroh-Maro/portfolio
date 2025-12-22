import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Projects from "../components/Projects";

const home = () => {
  return (
    <div className="homeContainer">
      <Hero />
      <Services />
      <Stats />
      <Projects/>
    </div>
  );
};

export default home;
