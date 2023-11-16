import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavData } from "./NavData";
import Hamburger from "hamburger-react";

import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import { navbarVariant } from "./navBarVariatns";

const Navbar = () => {
  const [showNav, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <ul className=" hidden md:flex gap-4 text-gray-400 text-xl capitalize">
          {NavData.map((item) => {
            return (
              <motion.li
                key={item.name}
                className=" p-4"
                variants={navbarVariant}
                whileHover="hover"
              >
                <NavLink
                  className=" outline-none rounded-sm focus:ring-2 border-none focus:ring-offset-2 focus:ring-designColor "
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
