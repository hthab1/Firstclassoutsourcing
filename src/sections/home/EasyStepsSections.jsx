import React from "react";
//custom components
import CustomSection from "../../components/CustomSection";
import StepsMobile from "../../components/steps/StepsMobile";
import StepsPc from "../../components/steps/StepsPc";

function EasyStepsSections() {
  return (
    <CustomSection
      classNameParent="h-fit"
      classNameChild="w-full py-10 flex flex-col items-center mb-[100px]"
    >
      <h2 className="text-secondary font-semibold text-4xl fontMontserrat text-center max-w-md mt-[70px] mb-8">
        Easy steps to your remedy
      </h2>
      <div className="hidden lg:flex">
        <StepsPc />
      </div>
      <div className="lg:hidden">
        <StepsMobile />
      </div>
    </CustomSection>
  );
}

export default EasyStepsSections;
