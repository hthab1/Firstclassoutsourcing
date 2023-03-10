import React from "react";
//package
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
//custom component
import CustomSection from "../../components/CustomSection";
//assets
// import { useStateValue } from "../../StateProvider";

function TrustedSection() {
  const navigate = useNavigate();
  // const { state } = useStateValue();
  return (
    <CustomSection
      classNameParent="h-fit"
      classNameChild="w-full py-10 flex flex-col items-center mb-[70px]"
    >
      {/* <span className="fontRaleway text-base md:text-xl font-medium text-secondary uppercase text-center">
        TRUSTED BY DIFFERENT BRANDS AND STARTUPS
      </span>
      <div className="flex flex-wrap gap-4 items-center justify-around w-full max-w-screen-lg mt-8 mb-[150px]">
        {state?.clients?.map((client, index) => (
          <img key={index} src={client} className="w-8 h-8 opacity-50 mx-2" alt="" />
        ))}
      </div> */}
      <p className="text-secondary fontRaleway text-2xl md:text-4xl font-medium px-4 text-center max-w-2xl mb-10 mt-[100px]">
        We recruit experts and train them to understand your products, services,
        and company policies.
      </p>
      <div
        className="text-primary cursor-pointer font-light text-base md:text-lg flex items-center gap-4 hover:animate-pulse"
        onClick={() => {
          navigate("/about");
        }}
      >
        <span className="fontInter">Learn More</span>
        <HiOutlineArrowNarrowRight />
      </div>
    </CustomSection>
  );
}

export default TrustedSection;
