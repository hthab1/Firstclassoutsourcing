import React from "react";
//packages
import { ArcherContainer } from "react-archer";
//custom component
import StepMobile from "./StepMobile";

function StepsMobile() {
  return (
    <div className="w-full ">
      <ArcherContainer strokeColor="#219AD3" className="w-full">
        <div className="flex flex-col w-full gap-2 justify-between mt-10 mb-10">
          <StepMobile
            id="root"
            target={2}
            number={1}
            title="Contact us"
            description="Shoot us an email, or fill out a form which only takes 2 minutes"
            small
          />
          <StepMobile
            id="2"
            target={3}
            number={2}
            title="Tell us about your needs"
            description="We will get back to you in 24 hours so that you can tell us your needs"
          />
          <StepMobile
            id="3"
            target={4}
            number={3}
            title="Work with experts"
            description="Within days, we'll introduce you to the right expert for your project."
          />
          <StepMobile
            id="4"
            target={5}
            number={4}
            title="Headache gone!"
            description={
              <div className="flex flex-col item-center">
                <span>Hooray!</span>
                <p>Start working with your new team member</p>
              </div>
            }
          />
        </div>
      </ArcherContainer>
    </div>
  );
}

export default StepsMobile;
