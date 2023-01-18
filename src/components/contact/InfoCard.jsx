import React from "react";

function InfoCard({ title, description, active }) {
  return (
    <div className="flex flex-col items-center gap-2 max-w-md">
      <span
        className={`${
          active ? "text-primary" : "text-darkGray"
        } fontMontserrat text-3xl text-center font-semibold`}
      >
        {title}
      </span>
      <p className="text-darkGray text-lg fontOpenSans text-center">
        {description}
      </p>
    </div>
  );
}

export default InfoCard;
