import React from "react";
import background from "./assets/background.jpg";
import {
  Header,
  Home,
  ServiceCard,
  Questions,
  Footer,
} from "./components/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signup } from "./components/pages";

const App = () => {
  return (
    <div className="relative font-netflix">
      <img src={background} className="w-full absolute -z-30 h-auto" />
      <div className="absolute inset-0 opacity-80 h-[160vh] bg-gradient-to-t from-[#01081C] to-[#01081C] -z-20"></div>
      <div className=" top-0 left-0 z-50">
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/signup" Component={Signup} />
          </Routes>
        </Router>
        <ServiceCard />
        <Questions />
        <Footer />
      </div>
    </div>
  );
};

export default App;
