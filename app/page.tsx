'use client';
import React from "react";
import Landing from "./components/Home/Landing";
import About from "./components/Home/About";
import Works from './components/Home/Works';
import Contact from './components/Home/Contact';

const HomePage = () => {
  return (
    <>
      <div className="section">
        <Landing />
      </div>
      <div className="section">
        <About />
      </div>
      {/* <div className="section">
        <Works />
      </div>
      <div className="section">
        <Contact />
      </div> */}
    </>
  );
};

export default HomePage;