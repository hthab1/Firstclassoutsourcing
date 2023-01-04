import React from "react";
import CustomSection from "../components/CustomSection";

function HeroSection() {
  return (
    <CustomSection classNameParent={`bg-secondary`} classNameChild={``}>
      <div className="absolute w-full h-full flex flex-row justify-end"></div>
      <div className="text-white font-black fontRaleway text-8xl">
        First Class Outsourcing service for your bussiness
      </div>
    </CustomSection>
  );
}

export default HeroSection;
