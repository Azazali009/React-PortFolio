import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavData } from "./NavData";
import Hamburger from "hamburger-react";
import logo from "../../image/fvrt.jpg";
import HomeIcons from "../HomeIcons";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "framer-motion";

const navbarVariant = {
  hover: {
    scale: 1.2,
    color: "#aaa",
    originX: 0,
    transition: { type: "spring", stiffness: 500 },
  },
};

const moblNavVariant = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};
const Navbar = () => {
  const [showNav, setOpen] = useState(false);
  return (
    <div>
      <nav>
        <ul className=" hidden md:flex gap-4 text-gray-400 text-xl capitalize">
          {NavData.map((item) => {
            return (
              <motion.li
                key={item.id}
                className=" p-4 "
                variants={navbarVariant}
                whileHover="hover"
              >
                <NavLink to={item.link}>{item.name}</NavLink>
              </motion.li>
            );
          })}
        </ul>
      </nav>
      <motion.div
        className="block md:hidden shadow-shadowTwo dark:shadow-shadowOne dark:bg-black rounded-full text-designColor"
        variants={navbarVariant}
        whileHover="hover"
      >
        <Hamburger size={20} toggled={showNav} toggle={setOpen} />
      </motion.div>

      <AnimatePresence>
        {showNav && (
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
                I use react packages for complex UI designs such as framer
                motion and many more packages. I am a full stack developer with
                stack of React and Firebase which is so powerfull and have high
                performance.
              </p>

              <ul className=" text-xl capitalize flex flex-col gap-4 mt-4 items-start">
                {NavData.map((item) => (
                  <motion.li
                    key={item.id}
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
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
