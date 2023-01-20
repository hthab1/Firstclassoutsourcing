import React, { useEffect } from "react";
//package
import { motion } from "framer-motion";
//custom component
import CustomSection from "../components/CustomSection";
import NextStepsPc from "../components/steps/NextStepsPc";
import NextStepsMobile from "../components/steps/NextStepsMobile";

function ThankyouPage() {
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
            Thank you!
          </span>
          <p className="text-darkGray fontOpenSans text-base md:text-lg font-normal mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            consectetur porta malesuada.
          </p>
          <span className="text-secondary fontOpenSans mt-10 font-semibold text-lg md:text-xl">
            Next steps
          </span>
          <div className="hidden sm:flex">
            <NextStepsPc />
          </div>
          <div className="sm:hidden">
            <NextStepsMobile />
          </div>
        </div>
      </CustomSection>
    </motion.div>
  );
}

export default ThankyouPage;
