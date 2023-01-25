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
          description={`To provide highly skilled and cost-effective Firstclass talent to English-speaking businesses.`}
        />
        <Value
          name="Vision"
          description={`To link the business world with talented people all across the world.`}
        />
        <Value
          name="Value"
          description={`The personal connection we have with each and every client`}
        />
      </div>
    </CustomSection>
  );
}

export default VisionSection;
