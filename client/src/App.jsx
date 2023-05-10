import React, { useState } from "react";
import background from "./assets/background.jpg";
import {
  Header,
  Home,
  ServiceCard,
  Questions,
  Footer,
} from "./components/layout";

const App = () => {
  return (
    <div className="relative font-netflix">
      <img src={background} className="w-full absolute -z-30 h-auto" />
      <div
        className="absolute inset-0 opacity-80 h-[160vh] bg-gradient-to-t from-[#01081C] to-[#01081C] -z-20"
        // colored overlay
      ></div>
      <div className=" top-0 left-0 z-50">
        <Header />
        <Home />
        <ServiceCard />
        <Questions />
        <Footer />
      </div>
    </div>
  );
};

export default App;
