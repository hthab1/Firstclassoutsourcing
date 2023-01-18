import React from "react";
import Value from "../../components/about/Value";
//custom components
import CustomSection from "../../components/CustomSection";

function VisionSection() {
  return (
    <CustomSection
      classNameParent="h-fit bg-lightGray"
      classNameChild="w-full py-20"
    >
      <div className="flex flex-row items-row justify-between flex-wrap my-[60px]">
        <Value
          name="Mission"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
        />
        <Value
          name="Vision"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
        />
        <Value
          name="Value"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
        />
      </div>
    </CustomSection>
  );
}

export default VisionSection;
