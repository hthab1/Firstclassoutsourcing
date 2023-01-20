import React from "react";
//packages
import { BsCheck } from "react-icons/bs";

function Role({ selected, onClick, name }) {
  return (
    <div
      className="group cursor-pointer flex items-center gap-4 my-2"
      onClick={onClick}
    >
      <div
        className={`border ${
          selected ? "border-primary" : "border-quaternary"
        } w-6 h-6 rounded-sm group-hover:border-primary flex items-center justify-center text-xl text-primary
        `}
      >
        {selected && <BsCheck />}
      </div>
      <span className="fontOpenSans text-secondary text-lg group-hover:text-primary ">
        {name}
      </span>
    </div>
  );
}

export default Role;
