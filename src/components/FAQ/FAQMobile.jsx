import React from "react";
//custom component
import { FAQData } from "../../data/FAQData";
import QuestionMobile from "./QuestionMobile";

function FAQMobile({ className }) {
  return (
    <div className={`flex lg:hidden w-100 mt-10 mb-[40px] ${className}`}>
      <div className="flex flex-col flex-1">
        {FAQData?.map(({ id, question, answer }) => (
          <QuestionMobile key={id} question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
}

export default FAQMobile;
