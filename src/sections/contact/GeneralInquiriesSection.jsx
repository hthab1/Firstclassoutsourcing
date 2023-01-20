import React from "react";
//custom components
import CustomSection from "../../components/CustomSection";
import InfoCard from "../../components/contact/InfoCard";
import { useStateValue } from "../../StateProvider";
import SocialMedia from "../../components/contact/SocialMedia";

function GeneralInquiriesSection() {
  const { state } = useStateValue();
  return (
    <CustomSection classNameParent="h-fit" classNameChild="w-full py-20">
      <div className="w-full flex flex-col md:items-center my-[100px] mb-[200px]">
        <h2 className="text-secondary fontMontserrat text-3xl md:text-6xl font-semibold">
          General Inquiries
        </h2>
        <div className="flex flex-col lg:flex-row justify-between mt-10">
          <InfoCard
            title={state.phone}
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
          />
          <InfoCard
            title={state.email}
            active
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
          />
          <InfoCard
            title={state.address}
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
          />
        </div>
      </div>
      <SocialMedia
        title="Social Media"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image={require("../../assets/contact/SocialMediaImage.png")}
      />
    </CustomSection>
  );
}

export default GeneralInquiriesSection;
