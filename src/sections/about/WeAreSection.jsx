import React from "react";
//custom components
import CustomSection from "../../components/CustomSection";

function WeAreSection() {
  return (
    <CustomSection
      classNameParent={`bg-secondary min-h-70vh`}
      classNameChild={`w-full flex flex-col items-center justify-center`}
    >
      <h1 className="text-white fontMontserrat font-bold text-6xl">
        We are Firstclass
      </h1>
      <p className="text-white font-normal fontOpenSans text-lg text-center mt-4 max-w-screen-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad miniLorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ds.
      </p>
    </CustomSection>
  );
}

export default WeAreSection;
