import React from "react";
import CustomSection from "../../components/CustomSection";
import StepsPc from "../../components/steps/StepsPc";
//packages
//custom components


function EasyStepsSections() {
  return (
    <CustomSection
      classNameParent="h-fit"
      classNameChild="w-full py-10 flex flex-col items-center mb-[100px]"
    >
      <h2 className="text-secondary font-semibold text-4xl fontMontserrat text-center max-w-md mt-[70px] mb-8">
        Easy steps to your remedy
      </h2>
      <StepsPc />
    </CustomSection>
  );
}

export default EasyStepsSections;
