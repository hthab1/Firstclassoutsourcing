import React from "react";
//packages
import { ArcherContainer } from "react-archer";
//custom component
import NextStepMobile from "./NextStepMobile";

function NextStepsMobile() {
  return (
    <div className="w-full ">
      <ArcherContainer strokeColor="#219AD3" className="w-full">
        <div className="flex flex-col w-full gap-2 justify-between mt-10 mb-10">
        <NextStepMobile
            id="root"
            target={1}
            number={2}
            title="Tell us about your needs"
            description="Schedule a call and tell us how we can help you with"
          />
          <NextStepMobile
            id="1"
            target={2}
            number={3}
            title="Work with experts"
            description="Within days, we'll introduce you to the right expert for your project."
          />
          <NextStepMobile
            id="2"
            target={3}
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

export default NextStepsMobile;
