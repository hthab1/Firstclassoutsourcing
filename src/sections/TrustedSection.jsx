import React from "react";
//package
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
//custom component
import CustomSection from "../components/CustomSection";
//assets
import Company from "../assets/trustedCompanies/CompanyIcon.svg";

function TrustedSection() {
  return (
    <CustomSection
      classNameParent="h-fit"
      classNameChild="w-full py-10 flex flex-col items-center mb-[70px]"
    >
      <span className="fontRaleway text-xl font-medium text-secondary uppercase">
        TRUSTED BY DIFFERENT BRANDS AND STARTUPS
      </span>
      <div className="flex gap-4 items-center justify-around w-full max-w-screen-lg mt-8 mb-[150px]">
        <img src={Company} className="w-8 h-8 opacity-50" alt="" />
        <img src={Company} className="w-8 h-8 opacity-50" alt="" />
        <img src={Company} className="w-8 h-8 opacity-50" alt="" />
        <img src={Company} className="w-8 h-8 opacity-50" alt="" />
        <img src={Company} className="w-8 h-8 opacity-50" alt="" />
        <img src={Company} className="w-8 h-8 opacity-50" alt="" />
      </div>
      <p className="text-secondary fontRaleway text-4xl font-medium px-4 text-center max-w-2xl mb-10">
        We recruit experts and train them to understand your products, services,
        and company policies.
      </p>
      <div className="text-primary cursor-pointer font-light text-lg flex items-center gap-4 hover:animate-pulse">
        <span className="fontInter">Learn More</span>
        <HiOutlineArrowNarrowRight />
      </div>
    </CustomSection>
  );
}

export default TrustedSection;
