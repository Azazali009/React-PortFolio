import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const iconVariants = {
  hover: {
    scale: 1.2,
    originX: 0,
    color: "#ff014f",
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const HomeIcons = () => {
  return (
    <div>
      <div className="mt-8">
        <motion.h2 className="mb-2 uppercase text-lg font-normal">
          Find me on
        </motion.h2>
        <div className="flex gap-4 text-white">
          <motion.div
            className=" socialIcons"
            variants={iconVariants}
            whileHover="hover"
          >
            <Link
              to={"https://web.facebook.com/profile.php?id=100054485964944"}
            >
              <FacebookOutlinedIcon />
            </Link>
          </motion.div>
          <motion.div
            className=" socialIcons"
            variants={iconVariants}
            whileHover="hover"
          >
            <Link to={"https://twitter.com/Aizykhan11"}>
              <TwitterIcon />
            </Link>
          </motion.div>
          <motion.div
            className="socialIcons"
            variants={iconVariants}
            whileHover="hover"
          >
            <Link to={"https://www.instagram.com/aizykhan009/"}>
              <InstagramIcon />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeIcons;
