import React from "react";
import CustomSection from "../components/CustomSection";

function HeroSection() {
  return (
    <CustomSection classNameParent={`bg-secondary`} classNameChild={``} >
        <div className="absolute w-full h-full flex flex-row justify-end"></div>
        <div className="text-white" >hello</div>
    </CustomSection>
  );
}

export default HeroSection;
