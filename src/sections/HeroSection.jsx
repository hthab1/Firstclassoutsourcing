import React from "react";
import CustomSection from "../components/CustomSection";
import HeroImage from "../components/HeroImage";
import MainButton from "../components/MainButton";

function HeroSection() {
  return (
    <CustomSection classNameParent={`bg-secondary h-110vh`} classNameChild={`w-full`}>
      <div className="absolute w-full h-full flex flex-row justify-end"></div>
      <div className="absolute w-full h-full flex flex-row items-center justify-end">
        <div className="flex flex-col mx-8 gap-y-6">
          <HeroImage src={require("../assets/hero/Hero1.png")} />
        </div>
        <div className="flex flex-col gap-y-6">
          <HeroImage src={require("../assets/hero/Hero2.png")} />
          <HeroImage src={require("../assets/hero/Hero3.png")} />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center w-full">
        <h1 className="text-white font-black fontRaleway text-6xl lineh15 max-w-xl">
          First Class Outsourcing for your bussiness
        </h1>
        <p className="text-white font-light fontOpenSans text-xl lineh25 mt-10 max-w-xl">
          We deliver excellent customer experience. And you will find a perfect
          match in terms of both skills and cultural fit.
        </p>
        <MainButton className="mt-[70px]" name="Talk to us" />
      </div>
    </CustomSection>
  );
}

export default HeroSection;
