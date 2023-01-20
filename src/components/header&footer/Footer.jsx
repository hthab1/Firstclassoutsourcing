import React, { useState } from "react";
//packages
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
//custom components
import CustomSection from "../CustomSection";
//assets
import Logo from "../../assets/Logo.svg";
import Tab from "./Tab";
import { useStateValue } from "../../StateProvider";

function Footer() {
  const navigate = useNavigate();
  const { state, dispatch } = useStateValue();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    setSubscribed(true);
    setTimeout(() => {
      window.scrollTo(0, 0);
      window.location.reload();
    }, 1500);
  };

  return (
    <CustomSection
      classNameParent="h-fit bg-secondary "
      classNameChild="w-full py-20"
    >
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <img
              src={Logo}
              alt="logo"
              className="w-32 sm:w-40 lg:w-48 cursor-pointer"
              onClick={() => {
                navigate("/");
                dispatch({
                  type: "SET_ACTIVE",
                  active: "scroll",
                });
              }}
            />
            <span className="mt-4 text-white fontOpenSans base font-normal opacity-60">
              Quality Remote Talent
            </span>
            <p className="mt-4 text-white fontOpenSans base font-normal w-[400px] opacity-60">
              Give time back to your team by utilizing our expert services.
            </p>
          </div>
          <div className="flex gap-6 pt-4">
            <Tab
              name="Our Services"
              onClick={() => {
                navigate("/");
                dispatch({
                  type: "SET_ACTIVE",
                  active: "services",
                });
              }}
            />
            <Tab
              name="About Us"
              onClick={() => {
                navigate("/about");
              }}
            />
            <Tab
              name="Contact Us"
              onClick={() => {
                navigate("/contact");
              }}
            />
          </div>
        </div>
        <div className="w-full flex items-end justify-between mt-[80px] ">
          <div className="flex gap-4 text-white opacity-60 text-xl">
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
              href={state.twitter}
            >
              <FaTwitter />
            </a>
            <a
              className="cursor-pointer"
              target="_blank"
              rel="noreferrer"
              href={state.instagram}
            >
              <FaInstagram />
            </a>
            <a
              className="cursor-pointer"
              target="_blank"
              rel="noreferrer"
              href={state.linkedIn}
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="flex flex-col relative">
            {subscribed && (
              <span className="text-primary absolute left-4 bottom-20">
                Thanks for subscribing!
              </span>
            )}
            <span className="text-white font-bold fontOpenSans text-lg mb-2 pl-4 ">
              Work with us and get results!
            </span>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name=""
                id=""
                className="h-12 items-center flex px-4 w-[300px] bg-subscribeInput fontOpenSans font-semibold text-white text-lg"
              />
              <button
                className="items-center h-12 items-center justify-center px-10 justify-center bg-white font-bold fontOpenSans"
                onClick={() => handleSubscribe()}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </CustomSection>
  );
}

export default Footer;
