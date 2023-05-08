import React from "react";
import background from "./assets/background.jpg";
import { Header, Home, Footer } from "./components/layout";

const App = () => {
  return (
    <div className="relative">
      <img src={background} className="w-full h-auto" />
      <div
        className="absolute inset-0 bg-[#00091C] opacity-60 z-10"
        // colored overlay
      ></div>
      <div className="absolute top-0 left-0  z-20">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
};

export default App;
