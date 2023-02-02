import React from "react";
//package
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
//custom component
import { useStateValue } from "../../StateProvider";

function SocialMedia({ title, image, description }) {
  const { state } = useStateValue();
  return (
    <div
      className={`flex flex-col md:flex-row w-full items-center justify-between my-[70px] mb-[150px]`}
    >
      <img
        src={image}
        alt=""
        className="flex w-full md:w-5/12 h-[400px] object-cover"
      />
      <div className="w-full md:w-5/12">
        <h3 className="text-secondary text-2xl mt-4 md:mt-0 md:text-4xl w-80 font-semibold mb-4 fontMontserrat">
          {title}
        </h3>
        <p className="text-base fontOpenSans mb-4 ">{description}</p>
        <div className="flex gap-4 text-secondary opacity-40 text-2xl md:text-5xl mt-10">
          <a
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer"
            href={state.facebook}
          >
            <FaFacebookF />
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer"
            href={state.linkedIn}
          >
            <FaLinkedin />
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer"
            href={state.instagram}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
