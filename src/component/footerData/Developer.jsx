import React from "react";
import { Link } from "react-router-dom";
import { developerLinks } from "./FooterLinksData";
import { motion } from "framer-motion";

const Developer = () => {
  return (
    <div>
      <h2 className=" text-2xl text-designColor mb-8 uppercase">Developers</h2>
      <ul className=" flex flex-col gap-4">
        {developerLinks.map((link) => {
          return (
            <motion.li
              whileHover={{ scale: 1.2, originX: 0, color: "#FFA500" }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-lg dark:text-lightText text-gray-500 capitalize font-medium"
              key={link.id}
            >
              <Link>{link.name}</Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default Developer;
