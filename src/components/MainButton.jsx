import React from "react";

function MainButton({ name, onClick, className }) {
  return (
    <div
      className={`bg-primary hover:bg-secondary transition-all border-2 border-primary hover:border-white text-base md:text-xl uppercase font-medium rounded-full p-1 pb-2 px-6 text-white z-10 cursor-pointer ${className} `}
      onClick={onClick}
    >
      {name}
    </div>
  );
}

export default MainButton;
