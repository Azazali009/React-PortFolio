import React from "react";
import { motion } from "framer-motion";
import { featuredData } from "./component/FeaturedData/FeaturedData";
import FeaturedCard from "./component/FeaturedData/FeaturedCard";

const pageTransitionVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      type: "spring",
      stiffness: 200,
    },
  },
  exit: {
    x: "-100vw",
  },
};

const Features = () => {
  return (
    <motion.div
      className=" bg-gray-300 dark:bg-bodyColor px-2 py-8 sm:px-8 text-white min-h-screen font-primary"
      variants={pageTransitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className=" mb-8">
        <p className=" text-designColor uppercase text-lg ">Features</p>
        <h2 className="text-gray-500 dark:text-lightText font-bold text-5xl capitalize">
          What I Do
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-8 lg:grid-cols-3 lg:gap-x-12">
        {featuredData.map((card) => {
          return <FeaturedCard key={card.id} card={card} />;
        })}
      </div>
    </motion.div>
  );
};

export default Features;
