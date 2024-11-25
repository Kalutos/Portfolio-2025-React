import React from "react";
import "../App.css";
import Description from "../components/Description";
import About from "../components/About";
import Course from "../components/Course";
import Banner from "../components/Banner";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main>
      <Description />
      {/* DESC AREA  */}
      <About />
      {/* ABOUT AREA  */}
      <Course />
      {/* COURSE AREA  */}
      <Banner />
      {/* RECENT PROJECT AREA */}
      <Portfolio />
      {/* PORTFOLIO AREA */}
      <Contact />
      {/* CONTACT AREA */}
    </main>
  );
};

export default Home;
