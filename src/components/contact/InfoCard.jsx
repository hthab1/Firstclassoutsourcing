import React from "react";

function InfoCard({ title, description, active }) {
  return (
    <div className="flex flex-col items-start md:items-center mb-4 gap-2 max-w-md">
      {active ? (
        <a
          href={`mailto:${title}`}
          className={`text-primary fontMontserrat text-xl md:text-3xl text-center font-semibold`}
        >
          {title}
        </a>
      ) : (
        <span
          className={`text-darkGray fontMontserrat text-xl md:text-3xl text-center font-semibold`}
        >
          {title}
        </span>
      )}
      <p className="text-darkGray text-sm md:text-lg fontOpenSans md:text-center">
        {description}
      </p>
    </div>
  );
}

export default InfoCard;
