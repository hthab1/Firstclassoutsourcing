import React from "react";
//package
import { BsChevronDown } from "react-icons/bs";
import { ArcherElement } from "react-archer";

function NextStepMobile({ title, description, number, id, target, small }) {
  return (
    <div className="flex  items-center justify-start mb-10">
      <ArcherElement
        id={id}
        relations={[
          {
            targetId: `${target}`,
            targetAnchor: "bottom",
            sourceAnchor: "top",
            style: { strokeWidth: 1, endMarker: false },
          },
        ]}
      >
        <div
          className={`flex items-center justify-end relative bg-white ${
            small ? "h-20" : "h-28 "
          }`}
        >
          {id !== "root" && (
            <div className="absolute w-full flex items-center justify-center text-xl top-0 arrow2Padding text-primary">
              <BsChevronDown />
            </div>
          )}
          <div className="h-16 w-16 rounded-full flex items-center justify-center bg-white text-3xl font-semibold text-primary border-2 border-primary">
            {number}
          </div>
        </div>
      </ArcherElement>
      <div className="flex flex-col pl-4">
        {/* <span className="text-secondary text-xl font-semibold fontOpenSans mt-4">
          {title}
        </span> */}
        <span className="text-secondary text-lg text-darkGray font-normal fontOpenSans mt-2">
          {description}
        </span>
      </div>
    </div>
  );
}

export default NextStepMobile;
