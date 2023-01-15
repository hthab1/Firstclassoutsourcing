import React from "react";
//packages
import { ArcherContainer, ArcherElement } from "react-archer";
//custom component
import StepPc from "./StepPc";

function StepsPc() {
  return (
    <div className="w-full">
      <ArcherContainer strokeColor="#219AD3" className="w-full">
        <div className="flex w-full gap-2 justify-between mt-10 mb-10">
          <ArcherElement
            id="root"
            relations={[
              {
                targetId: "1",
                targetAnchor: "left",
                sourceAnchor: "left",
                style: { strokeWidth: 1, endMarker: false },
              },
            ]}
          >
            <div className="h-16 w-2 rounded-full flex items-center justify-center text-5xl font-semibold text-secondary "></div>
          </ArcherElement>
          <StepPc
            id="1"
            target={2}
            number={1}
            title="Book a call"
            description="Choose time and date that is convenient for you"
           small
          />
          <StepPc
            id="2"
            target={3}
            number={2}
            title="Tell us about your needs"
            description="Schedule a call and tell us how we can help you with"
          />
          <StepPc
            id="3"
            target={4}
            number={3}
            title="Work with experts"
            description="Within days, we'll introduce you to the right expert for your project."
          />
          <StepPc
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

export default StepsPc;
