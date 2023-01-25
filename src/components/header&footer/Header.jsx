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
import { Images } from "../../utilities/Image";

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

  return (
    <div className="w-full bg-secondary flex flex-col items-center z-50 relative">
      <div className="max-w-screen-2xl w-full p-2 px-6 pt-4 flex items-center justify-between ">
        <img
          src={Images.logo}
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
            name="About Us"
            onClick={() => {
              navigate("/about");
            }}
          />
          <Tab
            name="Industries"
            onClick={() => {
              navigate("/");
              dispatch({
                type: "SET_ACTIVE",
                active: "services",
              });
            }}
          />

          <Tab
            name="Why us"
            onClick={() => {
              navigate("/");
              dispatch({
                type: "SET_ACTIVE",
                active: "features",
              });
            }}
          />
          <MainButton
            name="Contact us"
            className="scale-75"
            onClick={() => {
              navigate("/contact");
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
                name="About Us"
                onClick={() => {
                  setDropdown(false);
                  setTimeout(() => {
                    navigate("/about");
                  }, 100);
                }}
              />
              <TabMobile
                name="Industries"
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
                name="Why us"
                onClick={() => {
                  setDropdown(false);
                  setTimeout(() => {
                    navigate("/");
                  }, 100);
                  dispatch({
                    type: "SET_ACTIVE",
                    active: "features",
                  });
                }}
              />
              <TabMobile
                name="Contact us"
                onClick={() => {
                  setDropdown(false);
                  setTimeout(() => {
                    navigate("/contact");
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
