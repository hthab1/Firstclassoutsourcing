import React from "react";

function MainButton({ name, onClick, className }) {
  return (
    <div
      className={`bg-primary text-xl uppercase font-medium rounded-full p-1 pb-2 px-6 text-white ${className} `}
      onClick={onClick}
    >
      {name}
    </div>
  );
}

export default MainButton;
