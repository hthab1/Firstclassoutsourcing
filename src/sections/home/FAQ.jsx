import React from "react";
//custom components
import CustomSection from "../../components/CustomSection";
import FAQPc from "../../components/FAQ/FAQPc";

function FAQ() {
  return (
    <CustomSection
      classNameParent="h-fit bg-lightGray"
      classNameChild="w-full py-20"
    >
      <h2 className="text-4xl text-secondary font-semibold fontMontserrat w-[300px]">{`Frequently Asked Question (FAQ)`}</h2>
      <FAQPc />
    </CustomSection>
  );
}

export default FAQ;
