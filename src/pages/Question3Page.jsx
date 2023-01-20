import React, { useEffect, useState } from "react";
//packages
//package
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
//custom component
import CustomSection from "../components/CustomSection";
import { useStateValue } from "../StateProvider";

function Question3Page() {
  const navigate = useNavigate();
  const { state, dispatch } = useStateValue();
  //states
  const [email, setEmail] = useState(state?.info?.email);
  const [name, setName] = useState(state?.info?.name);
  const [emailError, setEmailError] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [nameError, setNameError] = useState(false);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const validateEmail = (email) => {
    const tested = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return tested.test(email);
  };

  const handleDone = () => {
    if (email) {
      if (validateEmail(email)) {
        if (name) {
          dispatch({
            type: "SET_INFO",
            info: {
              ...state.info,
              email: email,
              name: name,
            },
          });
          navigate("/thankyou");
        } else {
          setNameError(true);
        }
      } else {
        setValidationError(true);
      }
    } else {
      setEmailError(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      <CustomSection
        classNameParent="min-h-100vh bg-white py-20"
        classNameChild="w-full py-1 flex items-center justify-center"
      >
        <div className="flex flex-col w-full max-w-2xl">
          <span className="text-secondary fontMontserrat text-4xl font-semibold mt-4">
            Success! Let’s contact
          </span>
          <p className="text-darkGray fontOpenSans text-lg font-normal mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            consectetur porta malesuada.
          </p>
          <label
            htmlFor=""
            className="fontOpenSans text-secondary text-lg font-normal mt-10"
          >
            Email address :
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmailError(false);
              setValidationError(false);
              setEmail(e.target.value);
            }}
            className="border w-full p-4 border-quaternary rounded-xl mt-4 fontOpenSans"
          />
          {emailError && (
            <span className="text-primary fontOpenSans mt-4">
              Please enter your email first
            </span>
          )}
          {validationError && (
            <span className="text-primary fontOpenSans mt-4">
              Please enter a correct email first
            </span>
          )}
          <label
            htmlFor=""
            className="fontOpenSans text-secondary text-lg font-normal mt-4"
          >
            Your name :
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setNameError(false);
              setName(e.target.value);
            }}
            onBlur={() => {
              if (validateEmail(email)) {
                setValidationError(false);
              } else {
                setValidationError(true);
              }
            }}
            className="border w-full p-4 border-quaternary rounded-xl mt-4 fontOpenSans"
          />
          {nameError && (
            <span className="text-primary fontOpenSans mt-4">
              Please enter your name first
            </span>
          )}
          <button
            className="w-full group bg-primary border-white border-2 hover:border-darkGray hover:bg-white py-2 flex items-center justify-center rounded-full transition-all mt-10"
            onClick={() => handleDone()}
          >
            <div className="flex items-center justify-end gap-2 text-white group-hover:text-darkGray text-lg transition-all">
              <span className="fontInter">Done</span>
              <HiOutlineArrowNarrowRight />
            </div>
          </button>
        </div>
      </CustomSection>
    </motion.div>
  );
}

export default Question3Page;
