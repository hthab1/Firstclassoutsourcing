import React from "react";
//packages
import { useNavigate } from "react-router-dom";
//custom components
import CustomSection from "../../components/CustomSection";
import MainButton from "../../components/MainButton";
//assets
import { Images } from "../../utilities/Image";

function ContactFirstSection() {
  const navigate = useNavigate();
  return (
    <CustomSection
      classNameParent={`bg-secondary min-h-80vh`}
      classNameChild={`w-full flex flex-col items-center justify-center`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <h1 className="text-white font-semibold text-3xl md:text-6xl fontMontserrat">
            Contact FirstClass
          </h1>
          <p className="text-white fontOpenSans text-base md:text-lg max-w-lg mt-4">
            Tell us a little about your bussiness
          </p>
          <div className="flex flex-col mt-10 items-center gap-2 w-fit">
            <MainButton
              name="Get Started"
              onClick={() => {
                navigate("/question1");
              }}
            />
            <span className="text-white text-sm fontOpenSans">
              Takes only 2 minutes
            </span>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <img
            src={Images.contact.hero}
            alt="contact"
            className="rounded-3xl object-cover w-[500px] h-2/3"
          />
        </div>
      </div>
    </CustomSection>
  );
}

export default ContactFirstSection;
