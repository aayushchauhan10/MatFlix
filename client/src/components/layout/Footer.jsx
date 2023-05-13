import React from "react";

const Footer = () => {
  return (
    <div className="text-[#B2B4BC] px-24 py-16 bg-[#01081C]">
      <div>
        <h2>
          Questions? Call <span className="underline">009-xyz-zyz</span>
        </h2>
      </div>
      <div className="flex text-[13px] w-[75%] items-start justify-around">
        <div className="py-4">
          <p className="underline leading-7">FAQ</p>
          <p className="underline leading-7">Investor Relations</p>
          <p className="underline leading-7">Privacy</p>
          <p className="underline leading-7">Speed test</p>
        </div>
        <div className="py-4">
          <p className="underline leading-7">Help Centre</p>
          <p className="underline leading-7">Jobs</p>
          <p className="underline leading-7">Cookie Preferences</p>
          <p className="underline leading-7">Legal Notices</p>
        </div>
        <div className="py-4">
          <p className="underline leading-7">Account</p>
          <p className="underline leading-7">Ways to Watch</p>
          <p className="underline leading-7">Corporate Information</p>
          <p className="underline leading-7">Only on Netflix</p>
        </div>
        <div className="py-4">
          <p className="underline leading-7">Media Centre</p>
          <p className="underline leading-7">Terms of Use</p>
          <p className="underline leading-7">Contact Us</p>
        </div>
      </div>
      <div className="text-[14px] pt-7">Matflix India</div>
    </div>
  );
};

export default Footer;
