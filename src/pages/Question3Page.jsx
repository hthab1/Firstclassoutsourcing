import React, { useEffect, useState } from "react";
//package
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";
//custom component
import { ConfigUrl } from "../config/ConfigUrl";
import { useStateValue } from "../StateProvider";
import CustomSection from "../components/CustomSection";

const CustomForm = ({ onValidated, message, status }) => {
  const navigate = useNavigate();
  const { state, dispatch } = useStateValue();
  //states
  const [email, setEmail] = useState(state?.info?.email);
  const [name, setName] = useState(state?.info?.name);
  const [emailError, setEmailError] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [nameError, setNameError] = useState(false);

  useEffect(() => {
    if (status === "success") {
      navigate("/thankyou");
    }
  }, [status, dispatch, navigate]);

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
          let roles = "";
          if (state?.info?.roles?.length > 1) {
            state?.info?.roles?.map(({ id, service }) => {
              roles = roles + `${service}, `;
              return roles;
            });
          }
          onValidated({
            MERGE0: email,
            MERGE1: name,
            MERGE2: state?.info?.industry,
            MERGE3: roles,
          });
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
    <div className="w-full flex flex-col">
      <label
        htmlFor=""
        className="fontOpenSans text-secondary text-base md:text-lg font-normal mt-10"
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
        className="fontOpenSans text-secondary text-base md:text-lg font-normal mt-4"
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
        <div className="flex items-center justify-end gap-2 text-white group-hover:text-darkGray text-base md:text-lg transition-all">
          <span className="fontInter">Done</span>
          <HiOutlineArrowNarrowRight />
        </div>
      </button>
    </div>
  );
};

function Question3Page() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
          <span className="text-secondary fontMontserrat text-2xl md:text-4xl font-semibold mt-4">
            Success! Let’s contact
          </span>
          <p className="text-darkGray fontOpenSans text-base md:text-lg font-normal mt-4">
            Please enter your email and full name so that we can get back to you
          </p>
          <MailchimpSubscribe
            url={ConfigUrl.postUrl}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData) => {
                  subscribe(formData);
                }}
              />
            )}
          />
        </div>
      </CustomSection>
    </motion.div>
  );
}

export default Question3Page;
