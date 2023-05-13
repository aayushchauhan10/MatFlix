import React from "react";

const Email = () => {
  return (
    <div className="">
      <p className="text-[20px] mt-10 mb-2">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="bg-[#101013] bg-opacity-80 py-3.5 px-5 w-[25rem] border rounded-[5px] border-[#656363]"
        />
        <button
          type="submit"
          className="ml-4 bg-[#E40915] py-2.5 px-7 text-[22px] hover:bg-[#C11018] font-netflix rounded-[5px]"
        >
          Get Started {">"}
        </button>
      </form>
    </div>
  );
};

export default Email;
