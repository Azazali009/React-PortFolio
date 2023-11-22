import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";

import { NavData } from "./NavData";
import logo from "../../image/fvrt.jpg";
import { moblNavVariant } from "./navBarVariatns";
import HomeIcons from "../homeData/HomeIcons";

const MobileNav = ({ navbarVariant, setOpen }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <AnimatePresence>
      <motion.div
        className=" absolute z-20 top-0 py-8 px-2 left-0 w-[75%] h-screen bg-gray-300 dark:bg-gray-900 overflow-scroll scrollBar-hide"
        variants={moblNavVariant}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className=" flex flex-col gap-4 text-gray-500 dark:text-gray-400">
          <div className=" flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                className=" w-12 h-12 object-cover rounded-full border-gray-500 border-2"
                src={logo}
                alt="Logo"
              />
              <h1 className="font-bold text-2xl">Aizy</h1>
            </div>
            <motion.button
              variants={navbarVariant}
              whileHover="hover"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </motion.button>
          </div>
          <p className=" text-sm sm:text-md sm:font-medium">
            I use react packages for complex UI designs such as framer motion
            and many more packages. I am a full stack developer with stack of
            React and Firebase which is so powerfull and have high performance.
          </p>

          <ul className=" text-xl capitalize flex flex-col gap-4 mt-4 items-start">
            {NavData.map((item) => (
              <motion.li
                key={item.name}
                variants={navbarVariant}
                whileHover="hover"
                className=" sm:text-lg"
                onClick={() => setOpen(false)}
              >
                <NavLink to={item.link}>{item.name}</NavLink>
              </motion.li>
            ))}
          </ul>

          <HomeIcons />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileNav;
