import React from "react";
import logo from "../../assets/netflix.png";
import Buttons from "./Buttons";

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-12  h-auto">
      <img src={logo} className="w-36 h-32" />
      <Buttons />
    </div>
  );
};

export default Header;
