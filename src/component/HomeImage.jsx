import React from "react";
import { motion } from "framer-motion";
import image from "../image/azaz.png";

const parentVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

const imageVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
      stiffness: 100,
    },
  },
};

const imageBackVariant = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      type: "spring",
      stiffness: 100,
    },
  },
};
const HomeImage = () => {
  return (
    <motion.div
      className=" relative "
      variants={parentVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        className=" lg:-mt-40 w-[260px] h-[400px] lg:w-[370px] lg:h-[680px] xl:w-[450px] xl:h-[800px] relative z-10"
        src={image}
        alt="Hero image"
        variants={imageVariant}
      />
      <motion.div
        className="  absolute bottom-0 shadow-shadowTwo rounded-lg w-[260px] h-[300px] lg:w-[370px] xl:w-[450px] lg:h-[500px] xl:h-[550px] dark:bg-gradient-to-r from-[#1e2024] to-[#202327] dark:shadow-shadowOne"
        variants={imageBackVariant}
      ></motion.div>
    </motion.div>
  );
};

export default HomeImage;
