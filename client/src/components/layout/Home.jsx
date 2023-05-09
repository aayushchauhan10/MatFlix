import React from "react";

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
      <div>
        <p className="text-[20px] mt-5 mb-2">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="bg-[#101013] bg-opacity-80 py-3.5 pl-5 pr-[180px] border rounded-[5px] border-[#656363]"
          />
          <button
            type="submit"
            className="ml-4 bg-[#E40915] py-2.5 px-7 text-[22px] hover:bg-[#C11018] font-netflix rounded-[5px]"
          >
            Get Started {">"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
