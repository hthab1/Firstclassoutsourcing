import React from "react";

function Tab({ name, onClick, className }) {
  return (
    <span
      className={`text-white fontInter text-sm lg:text-base font-normal cursor-pointer ${className}`}
      onClick={onClick}
    >
      {name}
    </span>
  );
}

export default Tab;
