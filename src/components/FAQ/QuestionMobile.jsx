
import React, { useState } from "react";
//packages
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useSpring, animated, config } from "react-spring";
import useMeasure from "react-use-measure";

function QuestionMobile({ question, answer }) {
  const [dropdown, setDropdown] = useState(false);
//   const arrowAnimation = useSpring({
//     config: config.gentle,
//     from: {
//         transform: "rotate(0deg)",
//       },
//       to: {
//         transform: dropdown ? "rotate(0deg)" : "rotate(-180deg)",
//       },
//   });

  const [measureRef, { height }] = useMeasure();

  const answerAnimation = useSpring({
    config: config.stiff,
    from: {
      height: 0,
    },
    to: {
      height: dropdown ? height : 0,
    },
  });

  return (
    <div
      className={`w-full group flex flex-col items-center cursor-pointer my-2  transition-all relative py-4 border-b-2 overflow-hidden  ${
        dropdown ? "border-primary" : "border-darkGray"
      }`}
      onClick={() => {
        setDropdown(!dropdown);
      }}
    >
      <div className="flex w-full justify-between items-center">
        <span
          className={`transition-all group-hover:right-0 ${
            dropdown ? "text-primary" : "text-darkGray"
          } fontOpenSans text-lg font-normal`}
        >
          {question}
        </span>
        {/* <animated.div
          style={arrowAnimation}
          className={`flex text-xl transition-all ${
            dropdown ? "text-primary" : "text-darkGray"
          }`}
        >
          <BsChevronUp />
        </animated.div> */}
        <span
          className={`flex text-base sm:text-lg md:text-xl transition-all ${dropdown ? "text-primary"  : "text-darkGray"}`}
        >
          {dropdown ? <BsChevronUp /> : <BsChevronDown />}
        </span>
      </div>
      <animated.p style={answerAnimation} className="text-sm sm:text-base fontOpenSans ">
        <div ref={measureRef} className="py-4">
          {" "}
          {answer}
        </div>
      </animated.p>
    </div>
  );
}

export default QuestionMobile;
