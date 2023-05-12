import React, { useState } from "react";
import { questions } from "../../constants"; // Assuming the questions array is exported from 'data.js'

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-6 text-white bg-[#01081C]">
      <h1 className="font-bold text-[35px] px-24 pt-20 pb-2">
        Frequently Asked Questions
      </h1>
      {questions.map((question, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className="mb-4 mx-24 bg-[#122044] font-netflix  p-6"
        >
          <div className="flex justify-between hover:bg[#223263]  focus:bg-[#223263] active:bg[#223263] items-center cursor-pointer">
            <h2 className="text-[25px]">{question.title}</h2>
            <span>
              {activeIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </span>
          </div>
          <div
            className={`border-t-[1px] border-[#01081C] text-white  ${
              activeIndex === index
                ? "opacity-100 max-h-120 text-[20px]  mt-3"
                : "opacity-0 max-h-0"
            } transition-all duration-300`}
          >
            {/* <hr className="pb-2" /> */}
            {question.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Questions;
