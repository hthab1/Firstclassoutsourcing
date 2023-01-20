import React, { useEffect, useState } from "react";
//packages
//package
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
//custom component
import CustomSection from "../components/CustomSection";
import { useStateValue } from "../StateProvider";
//data
import { roles } from "../data/roles";
import Role from "../components/questions/Role";

function Question2Page() {
  const navigate = useNavigate();
  const { state, dispatch } = useStateValue();
  //states
  const [selectedRoles, setSelectedRoles] = useState(state?.info?.roles);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleNext = () => {
    if (selectedRoles?.length === 0) {
      setError(true);
    } else {
      dispatch({
        type: "SET_INFO",
        info: {
          ...state.info,
          roles: selectedRoles,
        },
      });
      navigate("/question3");
    }
  };

  const handleSkip = () => {
    navigate("/question3");
  };

  const handleSelect = (id) => {
    setError(false)
    if (selectedRoles?.find((role) => role?.id === id)) {
      let filteredValues = [];
      const filtered = selectedRoles.filter((role) => role?.id !== id);
      filtered.map((role) => {
        if (role?.id) {
          return filteredValues.push(role);
        }
        return true;
      });
      setSelectedRoles(filteredValues);
    } else {
      const selectedRole = roles?.find((role) => role?.id === id);
      setSelectedRoles([...selectedRoles, selectedRole]);
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
          <div
            className="flex items-center justify-end gap-2 text-darkGray text-base md:text-lg w-full cursor-pointer"
            onClick={() => handleSkip()}
          >
            <span className="fontInter">Skip</span>
            <HiOutlineArrowNarrowRight />
          </div>
          <span className="text-secondary fontMontserrat text-2xl md:text-4xl font-semibold mt-4">
            What role would you like to hire?
          </span>
          <p className="text-darkGray fontOpenSans text-base md:text-lg font-normal mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            consectetur porta malesuada.
          </p>
          <label
            htmlFor=""
            className="fontOpenSans text-secondary text-base md:text-lg font-normal mt-10 mb-4"
          >
            Select a role:{" "}
          </label>

          {roles?.map(({ id, service }) => (
            <Role
              selected={selectedRoles?.find((role) => role?.id === id)}
              name={service}
              onClick={() => handleSelect(id)}
            />
          ))}

          {error && (
            <span className="text-primary fontOpenSans mt-4">
              Please select at least one role
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

export default Question2Page;
