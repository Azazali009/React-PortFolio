import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";
import { navbarVariant } from "./navBarVariatns";

import { NavData } from "./NavData";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [showNav, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <ul className=" hidden md:flex gap-6 text-gray-400 text-xl capitalize">
          {NavData.map((item) => {
            return (
              <motion.li
                key={item.name}
                className=" "
                variants={navbarVariant}
                whileHover="hover"
              >
                <NavLink
                  className=" outline-none rounded-sm focus:ring-2  px-2 py-1 border-none focus:ring-designColor  "
                  to={item.link}
                >
                  {item.name}
                </NavLink>
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

      {showNav && <MobileNav navbarVariant={navbarVariant} setOpen={setOpen} />}
    </div>
  );
};

export default Navbar;
