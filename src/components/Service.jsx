import React from "react";
//package
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Service({ icon, iconActive, name, description, sm }) {
  return (
    <div className="serviceSize group bg-teritiary hover:bg-secondary transition-all cursor-pointer p-10 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="h-16 mb-2 flex items-center">
          <img
            src={icon}
            className={`w-16 h-16 ${sm && "w-14 h-14"} flex group-hover:hidden`}
            alt="icon"
          />
          <img
            src={iconActive}
            className={`w-16 h-16 ${sm && "w-14 h-14"} hidden group-hover:flex`}
            alt="icon"
          />
        </div>
        <span className="text-xl text-secondary font-semibold fontOpenSans group-hover:text-white transition-all mb-4 mt-2">
          {name}
        </span>
        <p className="text-sm text-secondary font-normal fontOpenSans group-hover:text-white transition-all">
          {description}
        </p>
      </div>
      <div className="items-center gap-2 text-primary hidden group-hover:flex text-base transition-all">
        <span className="pb-1 text-sm">Get a talent</span>
        <HiOutlineArrowNarrowRight />
      </div>
    </div>
  );
}

export default Service;
