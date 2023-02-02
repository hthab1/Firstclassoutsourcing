import React from "react";
//packages
import { BsChevronRight } from "react-icons/bs";

function QuestionPc({ question, onClick, selected }) {
  return (
    <div
      className={`w-11/12 group flex items-center cursor-pointer my-2  transition-all relative py-4 border-b-2  ${
        selected ? "border-primary" : "border-darkGray"
      }`}
      onMouseOver={onClick}
    >
      <span
        className={`flex text-primary group-hover:text-quaternary transition-all ${
          selected && "text-quaternary"
        }`}
      >
        <BsChevronRight />
      </span>
      <div
        className={`flex flex-1 items-center ${
          selected ? "justify-end" : "justify-start"
        } group-hover:justify-end`}
      >
        <span
          className={`ml-8 transition-all group-hover:right-0 ${
            selected ? "text-primary right-0" : "text-darkGray"
          } fontOpenSans text-lg font-normal`}
        >
          {question}
        </span>
        <div
          className={`flex ${
            selected ? "w-0" : "w-20"
          } group-hover:w-0 transition-all`}
        ></div>
      </div>
    </div>
  );
}

export default QuestionPc;
