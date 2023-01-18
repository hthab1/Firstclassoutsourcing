import React from "react";
//custom components
import CustomSection from "../../components/CustomSection";
import MainButton from "../../components/MainButton";
import Mission from "../../components/Mission";

function OurMissionSection() {
  return (
    <CustomSection classNameParent="h-fit " classNameChild="w-full py-20">
      <div className="w-full flex flex-col items-center">
        <Mission
          title="Our Mission"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
          image="https://images.unsplash.com/photo-1638866411782-5f59287c19e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80"
        />
        <h2 className="text-secondary font-semibold fontMontserrat text-4xl text-center w-[500px] mt-[100px]">
          Let’s grow your business together
        </h2>
        <MainButton
          className="mt-[40px] hover:bg-white hover:text-secondary hover:border-secondary"
          name="Find a talent"
        />
      </div>
    </CustomSection>
  );
}

export default OurMissionSection;
