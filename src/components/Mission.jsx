import React from "react";
//package
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Mission({ button, title, image, description }) {
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-row w-full items-center justify-between my-[60px]`}
    >
      <div className="w-5/12">
        <h3 className="text-secondary text-4xl w-80 font-semibold mb-4 fontMontserrat">
          {title}
        </h3>
        <p className="text-base fontOpenSans mb-4 ">{description}</p>
        <div
          className="text-primary cursor-pointer font-light text-lg flex items-center gap-4 mt-10 hover:animate-pulse"
          onClick={() => {
            navigate("/about");
          }}
        >
          <span className="fontInter">Learn More</span>
          <HiOutlineArrowNarrowRight />
        </div>
      </div>
      <img src={image} alt="" className="flex w-5/12 h-[300px] object-cover" />
    </div>
  );
}

export default Mission;
