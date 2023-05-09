import React from "react";
import { Signup } from "../pages";

const Buttons = () => {
  function handleClick() {
    <Signup />;
  }

  return (
    <div className="flex items-center">
      <button
        type="submit"
        className="bg-[#101013] bg-opacity-50 text-white border border-[#656363] shadow-md rounded-[5px] mx-4 px-8 py-0.5"
      >
        English
      </button>
      <button
        className="bg-[#E40915] text-white rounded-[5px] shadow-lg py-1.5 text-[14px] px-3.5 hover:bg-[#C11018]"
        onClick={handleClick}
      >
        Sign In
      </button>
    </div>
  );
};

export default Buttons;
