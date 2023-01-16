import React from "react";

function Feature({ button, title, image, description, reverse }) {
  return (
    <div
      className={`flex flex-row w-full items-center justify-between my-[60px] ${
        reverse && "flex-row-reverse"
      }`}
    >
      <img src={image} alt="" className="flex w-5/12 h-[300px] object-cover" />
      <div className="w-5/12">
        <h3 className="text-secondary text-4xl w-80 font-semibold mb-4 fontMontserrat">
          {title}
        </h3>
        <p className="text-base fontOpenSans mb-4">{description}</p>
        <button className="cursor-pointer uppercase p-2 border-primary border-2 px-8 mt-4 fontInter text-primary text-base font-semibold rounded-full hover:bg-primary hover:text-white transition-all ">
          {button}
        </button>
      </div>
    </div>
  );
}

export default Feature;
