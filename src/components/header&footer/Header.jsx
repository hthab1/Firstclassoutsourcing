import React, { useEffect, useState } from "react";
//packages
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
//custom components
import { useStateValue } from "../../StateProvider";
import MainButton from "../MainButton";
import Tab from "./Tab";
import TabMobile from "./TabMobile";
//assets
import Logo from "../../assets/Logo.svg";

function Header() {
  const navigate = useNavigate();
  const { dispatch } = useStateValue();
  //states
  const [dropdown, setDropdown] = useState(false);

  const handleClose = () => {
    setDropdown(false);
    // setTimeout(() => {
    // }, 100);
  };

  useEffect(() => {
    let isSubscribed = true;
    const closeDropdown = (e) => {
      if (!e.path[1].className.includes("menuIcon")) {
        handleClose();
      }
    };
    if (isSubscribed) {
      if (dropdown) {
        document.body.addEventListener("click", closeDropdown);
      }
    }
    return () => {
      isSubscribed = false;
      if (dropdown) {
        document.body.removeEventListener("click", closeDropdown);
      }
    };
  }, [dropdown]);

  console.log(dropdown);

  return (
    <div className="w-full bg-secondary flex flex-col items-center z-50 relative">
      <div className="max-w-screen-2xl w-full p-2 px-6 pt-4 flex items-center justify-between ">
        <img
          src={Logo}
          alt="logo"
          className="w-32 sm:w-40 lg:w-48  cursor-pointer"
          onClick={() => {
            navigate("/");
            dispatch({
              type: "SET_ACTIVE",
              active: "scroll",
            });
          }}
        />
        <div className="hidden md:flex items-center gap-6 ">
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
          <MainButton
            name="Find a talent"
            className="scale-75"
            onClick={() => {
              navigate("/question1");
            }}
          />
        </div>
        <div
          className="flex md:hidden text-white text-2xl cursor-pointer menuIcon"
          onClick={() => setDropdown(!dropdown)}
        >
          {dropdown ? <MdClose /> : <HiOutlineMenu />}
        </div>
      </div>
      {dropdown && (
        <div className="w-full relative">
          {dropdown && (
            <div
              className={`${
                dropdown ? "flex" : "hidden"
              } md:hidden absolute w-full flex-col top-0 px-6 bg-secondary py-4 border border-b-white overflow-hidden`}
            >
              <TabMobile
                name="Our Services"
                onClick={() => {
                  setDropdown(false);
                  setTimeout(() => {
                    navigate("/");
                  }, 100);
                  dispatch({
                    type: "SET_ACTIVE",
                    active: "services",
                  });
                }}
              />
              <TabMobile
                name="About Us"
                onClick={() => {
                  setDropdown(false);
                  setTimeout(() => {
                    navigate("/about");
                  }, 100);
                }}
              />
              <TabMobile
                name="Contact Us"
                onClick={() => {
                  setDropdown(false);
                  setTimeout(() => {
                    navigate("/contact");
                  }, 100);
                }}
              />
              <TabMobile
                name="Find a talent"
                onClick={() => {
                  setDropdown(false);
                  setTimeout(() => {
                    navigate("/question1");
                  }, 100);
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
