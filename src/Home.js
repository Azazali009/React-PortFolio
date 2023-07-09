import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HomeIcons from "./component/HomeIcons";
import HomeImage from "./component/HomeImage";
import { motion } from "framer-motion";

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
  },
  visible: {
    opacity: 1,
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
      <div className=" py-16 sm:px-4 flex flex-col gap-8 items-center lg:flex-row lg:items-center lg:gap-16">
        {/* Home left side */}

        <motion.div className=" w-full lg:w-1/2 self-start">
          <motion.p
            className="uppercase text-lg font-normal mb-4"
            variants={childVariant}
          >
            welcome to my world
          </motion.p>
          <motion.h1
            className=" dark:text-gray-200  text-3xl md:text-6xl font-bold mb-4 tracking-tighter"
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
            I use react packages for complex UI designs such as framer motion
            and many more packages. I am a full stack developer with stack of
            React and Firebase which is so powerfull and have high performance.
          </motion.p>
          <motion.div variants={childVariant}>
            <HomeIcons />
          </motion.div>
        </motion.div>
        {/* Home Right side */}

        <HomeImage />
      </div>
    </motion.div>
  );
};

export default Home;
