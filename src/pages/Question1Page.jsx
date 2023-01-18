import React, { useEffect } from "react";
//packages
//package
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
//custom component
import CustomSection from "../components/CustomSection";

function Question1Page() {
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
        classNameParent="h-100vh bg-white"
        classNameChild="w-full py-1 flex items-center justify-center"
      >
        <div className="flex flex-col w-full max-w-2xl">
          <div className="flex items-center justify-end gap-2 text-darkGray text-lg w-full cursor-pointer">
            <span className="fontInter">Skip</span>
            <HiOutlineArrowNarrowRight />
          </div>
        </div>
      </CustomSection>
    </motion.div>
  );
}

export default Question1Page;
