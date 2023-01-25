import React from "react";
//custom components
import CustomSection from "../../components/CustomSection";

function WeAreSection() {
  return (
    <CustomSection
      classNameParent={`bg-secondary min-h-70vh`}
      classNameChild={`w-full flex flex-col items-center justify-center`}
    >
      <h1 className="text-white fontMontserrat font-bold text-3xl md:text-6xl">
        We are Firstclass
      </h1>
      <p className="text-white font-normal fontOpenSans text-base md:text-lg text-center mt-4 max-w-screen-md">
        We're a company that provides well vetted remote talent from Ethiopia.
        We are striving to be the best in our field, and it's all thanks to the
        incredible relationships we have formed with our clients. Unlike our
        competitors we're invested in developing a personal connection with each
        and every one of our customers
      </p>
    </CustomSection>
  );
}

export default WeAreSection;
