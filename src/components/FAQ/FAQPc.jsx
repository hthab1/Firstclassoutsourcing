import React, { useEffect, useState } from "react";
//custom component
import { FAQData } from "../../data/FAQData";
import QuestionPc from "./QuestionPc";

function FAQPc({ className }) {
  const [selected, setSelected] = useState(1);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const answer = FAQData?.find((item) => item?.id === selected)?.answer;
    setDescription(answer);
  }, [selected]);

  return (
    <div className={`hidden lg:flex w-100 mt-10 mb-[40px] ${className}`}>
      <div className="flex flex-col flex-1">
        {FAQData?.map(({ id, question }) => (
          <QuestionPc
            key={id}
            question={question}
            selected={selected === id}
            onClick={() => {
              setSelected(id);
            }}
          />
        ))}
      </div>
      <div className="flex flex-1 p-10 font-darkGray fontOpenSans text-lg">
        {description}
      </div>
    </div>
  );
}

export default FAQPc;
