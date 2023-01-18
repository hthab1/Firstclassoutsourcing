import React from "react";
//packages
import { useNavigate } from "react-router-dom";
//assets
import Logo from "../../assets/Logo.svg";
//custom components
import MainButton from "../MainButton";
import Tab from "./Tab";
import { useStateValue } from "../../StateProvider";

function Header() {
  const navigate = useNavigate();
  const { dispatch } = useStateValue();
  return (
    <div className="fixed top-0 w-full bg-secondary flex flex-col items-center z-50">
      <div className="max-w-screen-2xl w-full p-2 px-6 pt-4 flex items-center justify-between ">
        <img
          src={Logo}
          alt="logo"
          className="w-48 cursor-pointer"
          onClick={() => {
            navigate("/");
            dispatch({
              type: "SET_ACTIVE",
              active: "scroll",
            });
          }}
        />
        <div className="flex items-center gap-6">
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
          <MainButton name="Find a talent" className="scale-90" />
        </div>
      </div>
    </div>
  );
}

export default Header;
