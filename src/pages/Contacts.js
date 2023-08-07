import React from "react";
import { motion } from "framer-motion";
import ContactImage from "../component/ContactImage";
import ContactForm from "../component/ContactForm";

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
const Contacts = () => {
  return (
    <motion.div
      className=" bg-gray-300 dark:bg-bodyColor min-h-screen sm:p-8 font-primary"
      variants={pageTransitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className=" my-b text-center py-10">
        <p className=" text-designColor uppercase text-lg ">contact</p>
        <h2 className="text-gray-500 dark:text-lightText font-bold text-2xl sm:text-5xl capitalize">
          Contact With Me
        </h2>
      </div>

      <div className=" flex flex-col lg:flex-row items-start dark:text-gray-400 p-2 xl:p-9 gap-16">
        <ContactImage />
        <ContactForm />
      </div>
    </motion.div>
  );
};

export default Contacts;
