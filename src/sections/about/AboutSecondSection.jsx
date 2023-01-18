import React from "react";
//custom components
import CustomSection from "../../components/CustomSection";

function AboutSecondSection() {
  return (
    <CustomSection
      classNameParent={`h-fit`}
      classNameChild={`w-full flex flex-col items-center justify-center`}
    >
      <h3 className="text-secondary fontRaleway text-4xl font-medium px-4 text-center max-w-2xl my-[150px]">
        We recruit experts and train them to understand your products, services,
        and company policies.
      </h3>
    </CustomSection>
  );
}

export default AboutSecondSection;
