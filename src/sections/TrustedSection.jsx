import React from "react";
import CustomSection from "../components/CustomSection";
import Company from "../assets/trustedCompanies/CompanyIcon.svg";

function TrustedSection() {
  return (
    <CustomSection
      classNameParent="h-fit"
      classNameChild="w-full py-10 flex flex-col items-center"
    >
      <span className="fontRaleway text-xl font-medium text-secondary uppercase">
        TRUSTED BY DIFFERENT BRANDS AND STARTUPS
      </span>
      <div className="flex gap-4 items-center justify-around w-full max-w-screen-lg mt-8 mb-[120px]">
        <img src={Company} className="w-8 h-8 opacity-50" alt="" />
        <img src={Company} className="w-8 h-8 opacity-50" alt="" />
        <img src={Company} className="w-8 h-8 opacity-50" alt="" />
        <img src={Company} className="w-8 h-8 opacity-50" alt="" />
        <img src={Company} className="w-8 h-8 opacity-50" alt="" />
        <img src={Company} className="w-8 h-8 opacity-50" alt="" />
      </div>
      <p className="text-secondary fontRaleway text-5xl font-medium px-4 text-center max-w-screen-lg mb-10">
        We recruit experts and train them to understand your products, services,
        and company policies.
      </p>
      <span className="text-primary cursor-pointer fontInter font-light text-xl flex">Learn More</span>
    </CustomSection>
  );
}

export default TrustedSection;
