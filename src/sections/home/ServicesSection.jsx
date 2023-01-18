import React from "react";
//custom components
import CustomSection from "../../components/CustomSection";
import Service from "../../components/Service";
//assets
import Customer from "../../assets/services/CustomerIcon.svg";
import CustomerActive from "../../assets/services/CustomerActiveIcon.svg";
import Digital from "../../assets/services/DigitalIcon.svg";
import DigitalActive from "../../assets/services/DigitalActiveIcon.svg";
import Graphics from "../../assets/services/GraphicsIcon.svg";
import GraphicsActive from "../../assets/services/GraphicsActiveIcon.svg";
import Others from "../../assets/services/OthersIcon.svg";
import OthersActive from "../../assets/services/OthersActiveIcon.svg";
import Project from "../../assets/services/ProjectIcon.svg";
import ProjectActive from "../../assets/services/ProjectActiveIcon.svg";
import Website from "../../assets/services/WebsiteIcon.svg";
import WebsiteActive from "../../assets/services/WebsiteActiveIcon.svg";

function ServicesSection() {
  return (
    <CustomSection classNameParent="h-fit" classNameChild="w-full py-10">
      <div className="w-full">
        <span className="text-secondary fontMontserrat font-semibold text-4xl">
          Designed for your company
        </span>
        <p className="text-lg font-normal text-darkGray max-w-lg mt-4 fontOpenSans">
          We assemble a team of dedicated professionals that are uniquely
          equipped to meet your needs.
        </p>
        <div className="w-full grid-container-3 items-center gap-1 justify-center mt-8 mb-[40px]">
          <Service
            icon={Digital}
            iconActive={DigitalActive}
            name="Digital Marketing"
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur porta malesuada.`}
          />
          <Service
            icon={Graphics}
            iconActive={GraphicsActive}
            name="Graphic Design"
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur porta malesuada.`}
          />
          <Service
            icon={Website}
            iconActive={WebsiteActive}
            sm
            name="Website Design"
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur porta malesuada.`}
          />
          <Service
            icon={Customer}
            iconActive={CustomerActive}
            name="Customer Support"
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur porta malesuada.`}
          />
          <Service
            icon={Project}
            iconActive={ProjectActive}
            name="Project Managers"
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur porta malesuada.`}
          />
          <Service
            icon={Others}
            iconActive={OthersActive}
            name="Others"
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur porta malesuada.`}
          />
        </div>
      </div>
    </CustomSection>
  );
}

export default ServicesSection;
