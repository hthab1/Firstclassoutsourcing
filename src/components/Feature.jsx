import React from "react";
//packages
import { useNavigate } from "react-router-dom";

function Feature({ button, title, image, description, reverse }) {
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col md:flex-row w-full items-center justify-between my-[60px] ${
        reverse && "md:flex-row-reverse"
      }`}
    >
      <img src={image} alt="" className="flex w-full md:w-5/12 h-[400px] md:h-[300px] object-cover rounded-2xl" />
      <div className="w-full md:w-5/12 mt-6 md:mt-0 ">
        <h3 className="text-secondary text-3xl md:text-4xl md:w-80 font-semibold mb-4 fontMontserrat">
          {title}
        </h3>
        <p className="text-sm md:text-base fontOpenSans mb-4">{description}</p>
        <button
          className="cursor-pointer uppercase p-2 border-primary border-2 px-8 mt-4 fontInter text-primary text-sm md:text-base font-semibold rounded-full hover:bg-primary hover:text-white transition-all "
          onClick={() => {
            navigate("/contact");
          }}
        >
          {button}
        </button>
      </div>
    </div>
  );
}

export default Feature;
