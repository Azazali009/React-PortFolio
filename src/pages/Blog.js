import React from "react";
import { motion } from "framer-motion";
import { pageTransitionVariants } from "../animation variants/pageTransitionVariants";

const Blog = () => {
  return (
    <motion.div
      className=" bg-gray-200 dark:bg-bodyColor min-h-screen dark:text-lightText text-gray-400 "
      variants={pageTransitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2 className=" sm:text-5xl py-12 text-center capitalize font-bold">
        No blog yet Posted.
      </h2>
    </motion.div>
  );
};

export default Blog;
