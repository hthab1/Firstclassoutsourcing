import React from "react";
//package
import { BsChevronRight } from "react-icons/bs";
import { ArcherElement } from "react-archer";

function NextStepPc({ title, description, number, id, target, small }) {
  return (
    <div className={`flex flex-col items-start justify-start `}>
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
          className={`flex items-center justify-start relative 
          ${id !== "root" && (small ? "w-20 " : "w-28 justify-end")}
          `}
        >
          {id !== "root" && (
            <div className="absolute h-full flex items-center text-xl left-0 arrowPadding text-primary">
              <BsChevronRight />
            </div>
          )}
          <div className="h-16 w-16 rounded-full flex items-center justify-center text-3xl font-semibold text-primary border-2 border-primary">
            {number}
          </div>
        </div>
      </ArcherElement>
      <div className={`flex flex-col ${id !== "root" && "pl-10"}`}>
        {/* <span className="text-secondary text-xl font-semibold fontOpenSans mt-4">
        {title}
      </span> */}
        <span className="text-secondary text-sm text-darkGray font-normal fontOpenSans mt-4">
          {description}
        </span>
      </div>
    </div>
  );
}

export default NextStepPc;
