import React from "react";
import { Email } from "./index";

const Home = () => {
  return (
    <div className="text-white h-auto p-14">
      <div>
        <p className="text-[60px] max-w-[65vw] font-bold font-extrabold">
          Unlimited movies, TV shows and more
        </p>
        <p className="text-[25px] font-netflix">
          Watch anywhere. Cancel anytime.
        </p>
      </div>
      <Email />
    </div>
  );
};

export default Home;
