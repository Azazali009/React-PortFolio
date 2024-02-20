import React from "react";
import HomeImage from "../component/homeData/HomeImage";

import { motion } from "framer-motion";
import HomeLeft from "../component/homeData/HomeLeft";

const pageTransitionVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
  },
};

const Home = () => {
  return (
    <motion.div
      className=" flex min-h-screen items-center justify-center bg-gray-200 p-4 font-primary text-xl  font-medium text-gray-500 dark:bg-bodyColor 
    dark:text-gray-300 sm:p-8"
      variants={pageTransitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className=" flex flex-col items-center justify-between gap-8 py-16 sm:px-4 lg:flex-row lg:items-center lg:gap-16">
        {/* Home left side */}

        <HomeLeft />
        {/* Home Right side */}
        <HomeImage />
      </div>
    </motion.div>
  );
};

export default Home;
