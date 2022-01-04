import React from "react";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatEldeltatrust,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import PriceList from "./components/priceList/PriceList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatEldeltatrust />
      <Features />
      <Possibility />
      <CTA />
      <PriceList />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
