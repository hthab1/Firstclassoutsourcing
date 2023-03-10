import React from "react";

function HeroImage({ src, className }) {
  return (
    <div className="heroImageSize overflow-hidden rounded-3xl ">
      <img
        className={`rounded-3xl opacity-60 object-cover heroImageSize hover:opacity-90 hover:scale-110 transition-all ${className}`}
        src={src}
        alt="hero"
      />
    </div>
  );
}

export default HeroImage;
