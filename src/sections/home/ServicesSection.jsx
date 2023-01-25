import React from "react";
//packages
import { useNavigate } from "react-router-dom";
//custom components
import { useStateValue } from "../../StateProvider";
import CustomSection from "../../components/CustomSection";
import Service from "../../components/Service";
//assets
import { Images } from "../../utilities/Image";

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
            icon={Images.services.service1}
            iconActive={Images.services.serviceActive1}
            name="Marketing experts"
            description={`Brand marketing experts, Email marketing experts and Digital marketing experts that are skilled in Lead Capturing and Conversion. `}
            onClick={() =>
              handleGet({
                id: 1,
                service: "Marketing experts",
              })
            }
          />
          <Service
            icon={Images.services.service2}
            iconActive={Images.services.serviceActive2}
            name="IT experts"
            description={`Software engineers, developers, and architects with extensive experience in hundreds of technologies.`}
            onClick={() =>
              handleGet({
                id: 2,
                service: "IT experts",
              })
            }
          />
          <Service
            icon={Images.services.service3}
            iconActive={Images.services.serviceActive3}
            sm
            name="Researchers"
            description={`Researchers that are experts in planning and executing experiments, analysing data, writing reports`}
            onClick={() =>
              handleGet({
                id: 3,
                service: "Researchers",
              })
            }
          />
          <Service
            icon={Images.services.service4}
            iconActive={Images.services.serviceActive4}
            name="Accountants"
            description={`Experts that will help you with your cash flow, debtors and improving your record-keeping`}
            onClick={() =>
              handleGet({
                id: 4,
                service: "Accountants",
              })
            }
          />
          <Service
            icon={Images.services.service5}
            iconActive={Images.services.serviceActive5}
            name="Project Managers"
            description={`Digital and technical project managers, and those with experience in a variety of project management tools, frameworks, and styles.`}
            onClick={() =>
              handleGet({
                id: 5,
                service: "Project Managers",
              })
            }
          />
          <Service
            icon={Images.services.service6}
            iconActive={Images.services.serviceActive6}
            name="Others"
            description={`Graphics designers, UI/UX designers, Social media managers and others`}
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
