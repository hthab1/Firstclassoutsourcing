import React from "react";
//packages
import { BsChevronRight } from "react-icons/bs";

function QuestionPc({ question, onClick, selected }) {
  return (
    <div
      className={`w-11/12 group flex items-center cursor-pointer my-2  transition-all relative py-4 border-b-2  ${
        selected ? "border-primary" : "border-darkGray"
      }`}
      onClick={onClick}
    >
      <span
        className={`flex text-primary group-hover:text-quaternary transition-all ${
          selected && "text-quaternary"
        }`}
      >
        <BsChevronRight />
      </span>
      <span
        className={` absolute ml-8 transition-all group-hover:right-0 ${
          selected ? "text-primary right-0" : "text-darkGray"
        } fontOpenSans text-lg font-normal`}
      >
        {question}
      </span>
    </div>
  );
}

export default QuestionPc;
