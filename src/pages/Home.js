import React from "react";
import HomeIcons from "../component/homeData/HomeIcons";
import HomeImage from "../component/homeData/HomeImage";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

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

const childVariant = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

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

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "UI designer.",
      "Professional coder.",
      "React Developer.",
      "web Designer.",
    ],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 50,
  });
  return (
    <motion.div
      className=" font-primary p-4 sm:p-8 text-gray-500 bg-gray-200 dark:bg-bodyColor dark:text-gray-300 min-h-screen  text-xl font-medium flex 
    justify-center items-center"
      variants={pageTransitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className=" py-16 sm:px-4 flex flex-col gap-8 items-center lg:flex-row lg:items-center lg:gap-16 justify-between">
        {/* Home left side */}

        <motion.div className=" w-full lg:w-1/2 self-start">
          <motion.p
            className="uppercase text-lg font-normal mb-4"
            variants={childVariant}
          >
            welcome to my world
          </motion.p>
          <motion.h1
            className=" dark:text-gray-200  text-3xl md:text-5xl font-bold mb-4 tracking-tighter"
            variants={childVariant}
          >
            Hi, I'm <span className=" text-designColor">Azaz ali</span>
            <motion.p variants={childVariant}>
              a {text}
              <span>
                <Cursor
                  cursorBlinking={false}
                  cursorColor="#ff014f"
                  cursorStyle="✏"
                />
              </span>
            </motion.p>
          </motion.h1>
          <motion.p
            className=" text-lg sm:text-xl mb-4"
            variants={childVariant}
          >
            I am a full stack developer with stack of Next js and
            supabase/MongoDB which is so powerfull and have high usage in
            industry.
          </motion.p>

          <motion.div
            className=" flex sm:flex-row flex-col items-center gap-12"
            variants={childVariant}
          >
            <motion.div>
              <HomeIcons />
            </motion.div>
            <motion.div variants={iconVariants} whileHover={"hover"}>
              <Link
                className=" capitalize dark:bg-designColor px-8 sm:px-16 py-2.5 sm:py-4 rounded dark:text-white shadow-shadowTwo text-gray-500 dark:shadow-none"
                to="/data/cv.pdf"
                target="_blank"
                download
              >
                download cv
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Home Right side */}
        <HomeImage />
      </div>
    </motion.div>
  );
};

export default Home;
