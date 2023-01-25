import React from "react";
//package
import { BsChevronRight } from "react-icons/bs";
import { ArcherElement } from "react-archer";

function StepPc({ title, description, number, id, target, small }) {
  return (
    <div className="flex flex-col items-center justify-start">
      <ArcherElement
        id={id}
        relations={[
          {
            targetId: `${target}`,
            targetAnchor: "left",
            sourceAnchor: "right",
            style: { strokeWidth: 1, endMarker: false },
          },
        ]}
      >
        <div
          className={`flex items-center justify-end relative ${
            small ? "w-20" : "w-28 "
          }`}
        >
          <div className="absolute h-full flex items-center text-xl left-0 arrowPadding text-primary">
            <BsChevronRight />
          </div>
          <div className="h-16 w-16 rounded-full flex items-center justify-center text-3xl font-semibold text-primary border-2 border-primary">
            {number}
          </div>
        </div>
      </ArcherElement>
      <span className="text-secondary text-xl font-semibold fontOpenSans mt-4">
        {title}
      </span>
      <span className="text-secondary text-base text-darkGray font-normal w-5/6 fontOpenSans text-center mt-4">
        {description}
      </span>
    </div>
  );
}

export default StepPc;
