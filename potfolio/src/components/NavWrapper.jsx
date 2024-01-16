import React, { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { Box, Divider, Drawer } from "@mui/material";
import { navLinks } from "../Constant";
import { Fullscreen } from "@mui/icons-material";
import { Link } from "react-router-dom";
import images from "../Constant/images";

const NavWrapper = ({isDarkMode, setIsDarkMode}) => {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setIsDarkMode((prev) => !prev);
  }
  function handleClick() {
    toggle();
  }
  function handleKeyDown({ key }) {
    if (key === "Enter") toggle();
  }

  //for dark mode change when toggle change
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkMode);
  }, []);


  return (
    <div className="wrap_container gap-6 flex-nowrap center">
      {/* dark mode toggle */}
   

    
    </div>
  );
};

export default NavWrapper;
