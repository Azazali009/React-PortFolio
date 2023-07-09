import React from "react";
import { motion } from "framer-motion";
import image from "../image/955C20C0-656C-4281-9F84-4BE5F5EFDBBB.JPEG-removebg-preview.png";

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
      className=" relative flex items-center justify-center ml-8"
      variants={parentVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        className=" w-[300px] h-[400px] lg:w-[500px] lg:h-[680px] relative z-10"
        src={image}
        alt=""
        variants={imageVariant}
      />
      <motion.div
        className=" -ml-20 absolute bottom-0 shadow-shadowTwo rounded-lg w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] dark:bg-gradient-to-r from-[#1e2024] to-[#202327] dark:shadow-shadowOne"
        variants={imageBackVariant}
      ></motion.div>
    </motion.div>
  );
};

export default HomeImage;
