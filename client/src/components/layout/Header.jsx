import React from "react";
import logo from "../../assets/netflix.png";
import Buttons from "./Buttons";

const Header = () => {
  return (
    <div>
      <img src={logo} />
      <Buttons />
    </div>
  );
};

export default Header;
