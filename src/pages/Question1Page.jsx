import React, { useEffect, useState } from "react";
//packages
//package
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
//custom component
import CustomSection from "../components/CustomSection";
import { useStateValue } from "../StateProvider";

function Question1Page() {
  const navigate = useNavigate();
  const { state, dispatch } = useStateValue();
  //states
  const [industry, setIndustry] = useState(state?.info?.industry);
  const [error, setError] = useState(false);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleNext = () => {
    if (industry) {
      dispatch({
        type: "SET_INFO",
        info: {
          ...state.info,
          industry: industry,
        },
      });
      navigate("/question2");
    } else {
      setError(true);
    }
  };

  const handleSkip = () => {
    navigate("/question2");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      <CustomSection
        classNameParent="h-100vh bg-white"
        classNameChild="w-full py-1 flex items-center justify-center"
      >
        <div className="flex flex-col w-full max-w-2xl">
          <div
            className="flex items-center justify-end gap-2 text-darkGray text-lg w-full cursor-pointer"
            onClick={() => handleSkip()}
          >
            <span className="fontInter">Skip</span>
            <HiOutlineArrowNarrowRight />
          </div>
          <span className="text-secondary fontMontserrat text-4xl font-semibold mt-4">
            What is your industry?
          </span>
          <p className="text-darkGray fontOpenSans text-lg font-normal mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            consectetur porta malesuada.
          </p>
          <label
            htmlFor=""
            className="fontOpenSans text-secondary text-lg font-normal mt-10"
          >
            Enter your industry:{" "}
          </label>
          <input
            type="text"
            value={industry}
            onChange={(e) => {
              setError(false);
              setIndustry(e.target.value);
            }}
            placeholder="eg.  Education, Digital Agency...."
            className="border w-full p-4 border-quaternary rounded-xl mt-4 fontOpenSans"
          />
          {error && (
            <span className="text-primary fontOpenSans mt-4">
              Please enter your industry first
            </span>
          )}
          <button
            className="w-full group bg-primary border-white border-2 hover:border-darkGray hover:bg-white py-2 flex items-center justify-center rounded-full transition-all mt-10"
            onClick={() => handleNext()}
          >
            <div className="flex items-center justify-end gap-2 text-white group-hover:text-darkGray text-lg transition-all">
              <span className="fontInter">Next</span>
              <HiOutlineArrowNarrowRight />
            </div>
          </button>
        </div>
      </CustomSection>
    </motion.div>
  );
}

export default Question1Page;
