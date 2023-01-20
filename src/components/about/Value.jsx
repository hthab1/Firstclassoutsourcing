import React from "react";

function Value({ name, description }) {
  return (
    <div className="flex flex-col max-w-sm">
      <span className="text-secondary fontMontserrat font-semibold text-2xl md:text-4xl mb-4 mt-4 md:mt-0">
        {name}
      </span>
      <p className="text-darkGray text-sm md:text-lg fontOpenSans font-normal">
        {description}
      </p>
    </div>
  );
}

export default Value;
