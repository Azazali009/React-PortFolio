import React, { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Logo from "./Logo";

const Header = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem(
        "theme",
        window.matchMedia("(prefers-color-scheme: dark)").matches,
        "theme"
      );
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  const handleTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <div className=" font-primary bg-gray-200 dark:bg-bodyColor text-lightText flex justify-between shadow-md sticky top-0 z-10 items-center px-1 sm:px-4 h-20 dark:border-gray-800 border-b-2">
      <div className=" flex items-center gap-6">
        <Logo />
        <button
          className={` outline-none border-none w-[70px] rounded-full  flex items-center   transition-all duration-300 ${
            theme === "dark"
              ? "justify-start bg-red-500"
              : "justify-end bg-black"
          } px-2 py-1 `}
          onClick={handleTheme}
        >
          {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
