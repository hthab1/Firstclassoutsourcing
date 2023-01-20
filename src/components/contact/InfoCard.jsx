import React from "react";

function InfoCard({ title, description, active }) {
  return (
    <div className="flex flex-col items-start md:items-center mb-4 gap-2 max-w-md">
      <span
        className={`${
          active ? "text-primary" : "text-darkGray"
        } fontMontserrat text-xl md:text-3xl text-center font-semibold`}
      >
        {title}
      </span>
      <p className="text-darkGray text-sm md:text-lg fontOpenSans md:text-center">
        {description}
      </p>
    </div>
  );
}

export default InfoCard;
