import React, { useEffect, useState } from "react";
import images from "../Constant/images";
import { Link } from "react-router-dom";
import { navLinks } from "../Constant";
import DarkModeToggle from "./DarkModeToggle";
import Hamburger from "hamburger-react";
import { Box, Drawer } from "@mui/material";

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); //for toggle dark mode
  const [prevScrollPos, setPrevScrollPos] = useState(0); //for navbar visible while scroll down
  const [visible, setVisible] = useState(false); //for navbar visible while scroll down
  const [isOpen, setOpen] = useState(false); //for hamburger

  // Left side drawer
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      className="bg:lightGray_color dark:bg-gray-800 h-full px-2 flex py-6 flex-col"
    >
      <Link
        to="/"
        className="h-16 w-auto flex justify-start items-center overflow-hidden py-2.5 px-4 mb-1"
      >
        <img
          src={isDarkMode ? images.logo_dark : images.logo_light}
          className="h-20 shrink-0   block w-auto"
          alt="logo"
        />
      </Link>
      <ul className="px-4">
        {navLinks.map((li, i) => (
          <li key={i} className="p-3 my-1 group" onClick={() => setOpen(false)}>
            <a key={i} href={li.href}>
              <div className="text-black flex flex-nowrap items-center gap-[10px] cursor-pointer dark:text-white  uppercase text-base transition duration-150 ease-in   group-hover:text-blue-500 font-semibold">
                {li.icon}
                {li.title}
              </div>
              <div className="bg-blue-500  opacity-0  group-hover:opacity-100 transition duration-150 ease-in  p-[1px] rounded-full mt-1 border-blue-500 "></div>
            </a>
          </li>
        ))}
      </ul>
      {/* <Divider /> */}
    </Box>
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos > prevScrollPos && currentScrollPos > 200);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`${
        visible ? "-top-full" : "top-0"
      } app_nav  flex bg-[rgba(255, 255, 255, 0.25)] border-2 border-[rgba(255,255,255,0.2)] dark:border-[rgba(0,0,0,0.2)] padding-x dark:bg-[rgba(0,0,0,0.4)]`}
    >
      <Link
        to="/"
        className="sm:h-14 overflow-hidden center h-12 shrink-0 w-auto"
      >
        <img
          src={isDarkMode ? images.logo_dark : images.logo_light}
          className="object-cover w-full sm:h-[85px] h-[72px]  object-center    block "
          alt="logo"
        />
      </Link>
      <ul className="hidden md:center w-full h-full justify-evenly">
        {navLinks.map((li, i) => (
          <li key={i} className="mx-[18px] lg:px-3 py-3 group h-full lg:mx-8">
            <a key={i} href={li.href}>
              <div className="text-black cursor-pointer dark:text-white  uppercase text-base transition duration-150 ease-in  group-hover:text-blue-500 font-semibold">
                {li.title}
              </div>
              <div className="bg-blue-500  opacity-0  group-hover:opacity-100 transition duration-150 ease-in  p-[1px] rounded-full mt-1 border-blue-500 "></div>
            </a>
          </li>
        ))}
      </ul>

      <div className="wrap_container gap-6 flex-nowrap center">
        {/* Dark mode toggle  */}
        <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        {/* for mobiles devices */}
        <div className="md:hidden ">
          <Hamburger
            color={isDarkMode ? "white" : "black"}
            toggled={isOpen}
            size={30}
            toggle={setOpen}
          />
          <Drawer anchor={"left"} open={isOpen} onClose={() => setOpen(false)}>
            {list("left")}
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
