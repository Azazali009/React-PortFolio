import React from "react";
import { motion } from "framer-motion";
import { pageTransitionVariants } from "../animation variants/pageTransitionVariants";
import Blogs from "../component/blog/Blogs";

const Blog = () => {
  return (
    <motion.div
      className=" min-h-screen bg-gray-200 text-gray-400 dark:bg-bodyColor dark:text-lightText "
      variants={pageTransitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* <h2 className=" py-12 text-center font-bold capitalize sm:text-5xl">
        No blog yet Posted.
      </h2> */}
      <Blogs />
    </motion.div>
  );
};

export default Blog;
