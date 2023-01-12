import React from "react";
import {
  Footer,
  Header,
  Blog,
  Possibility,
  WhatGPT3,
  Features,
} from "./containers";
import "./App.css";
import { CTA, Brand, Navbar } from "./components/index";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
