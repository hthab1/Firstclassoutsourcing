import React from "react";
//packages
import { BsChevronRight } from "react-icons/bs";

function TabMobile({ name, onClick, className }) {
  return (
    <span
      className={`text-white fontInter text-xl flex justify-between items-center font-normal cursor-pointer my-2 ${className}`}
      onClick={onClick}
    >
      <span>{name}</span>
      <div className="text-base" >
        <BsChevronRight />
      </div>
    </span>
  );
}

export default TabMobile;
