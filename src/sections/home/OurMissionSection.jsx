import React from "react";
//packages
import { useNavigate } from "react-router-dom";
//custom components
import CustomSection from "../../components/CustomSection";
import MainButton from "../../components/MainButton";
import Mission from "../../components/Mission";
//assets
import { Images } from "../../utilities/Image";

function OurMissionSection() {
  const navigate = useNavigate();
  return (
    <CustomSection classNameParent="h-fit " classNameChild="w-full py-20">
      <div className="w-full flex flex-col items-center mb-20">
        <Mission
          title="Our Mission"
          description={`Our mission is to support English speaking businesses with highly qualified and highly cost effective Firstclass talents. `}
          image={Images.ourMission.mission}
        />
        <h2 className="text-secondary font-semibold fontMontserrat text-3xl md:text-4xl text-center md:w-[500px] mt-[100px]">
          Let’s grow your business together
        </h2>
        <MainButton
          className="mt-[40px] hover:bg-white hover:text-secondary hover:border-secondary"
          name="Find a talent"
          onClick={() => {
            navigate("/question1");
          }}
        />
      </div>
    </CustomSection>
  );
}

export default OurMissionSection;
