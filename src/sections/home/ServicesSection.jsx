import React from "react";
//packages
import { useNavigate } from "react-router-dom";
//custom components
import { useStateValue } from "../../StateProvider";
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
  const navigate = useNavigate();
  const { dispatch } = useStateValue();

  const handleGet = (service) => {
    dispatch({
      type: "SET_INFO",
      info: {
        roles: [service],
      },
    });
    navigate("/question1");
  };

  return (
    <CustomSection classNameParent="h-fit" classNameChild="w-full py-10">
      <div className="w-full">
        <span className="text-secondary fontMontserrat font-semibold text-3xl md:text-4xl">
          Designed for your company
        </span>
        <p className="text-base md:text-lg font-normal text-darkGray max-w-lg mt-4 fontOpenSans">
          We take time to understand your business before providing you with
          Firstclass talent tailored for your company
        </p>
        <div className="w-full grid-container-3 items-center gap-1 justify-center mt-8 mb-[40px]">
          <Service
            icon={Digital}
            iconActive={DigitalActive}
            name="Marketing experts"
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur porta malesuada.`}
            onClick={() =>
              handleGet({
                id: 1,
                service: "Marketing experts",
              })
            }
          />
          <Service
            icon={Graphics}
            iconActive={GraphicsActive}
            name="IT experts"
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur porta malesuada.`}
            onClick={() =>
              handleGet({
                id: 2,
                service: "IT experts",
              })
            }
          />
          <Service
            icon={Website}
            iconActive={WebsiteActive}
            sm
            name="Researchers"
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur porta malesuada.`}
            onClick={() =>
              handleGet({
                id: 3,
                service: "Researchers",
              })
            }
          />
          <Service
            icon={Customer}
            iconActive={CustomerActive}
            name="Accountants"
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur porta malesuada.`}
            onClick={() =>
              handleGet({
                id: 4,
                service: "Accountants",
              })
            }
          />
          <Service
            icon={Project}
            iconActive={ProjectActive}
            name="Project Managers"
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur porta malesuada.`}
            onClick={() =>
              handleGet({
                id: 5,
                service: "Project Managers",
              })
            }
          />
          <Service
            icon={Others}
            iconActive={OthersActive}
            name="Others"
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur porta malesuada.`}
            onClick={() =>
              handleGet({
                id: 6,
                service: "Others",
              })
            }
          />
        </div>
      </div>
    </CustomSection>
  );
}

export default ServicesSection;
