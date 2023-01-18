import React from "react";

function Value({ name, description }) {
  return (
    <div className="flex flex-col max-w-sm">
      <span className="text-secondary fontMontserrat font-semibold text-4xl mb-4">
        {name}
      </span>
      <p className="text-darkGray text-lg fontOpenSans font-normal">
        {description}
      </p>
    </div>
  );
}

export default Value;
