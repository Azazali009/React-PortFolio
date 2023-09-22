import React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const ModalVariant = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 200,
    },
  },
};

export default function Modal({ children, onClose }) {
  return createPortal(
    <AnimatePresence>
      <div className=" fixed z-50 top-0 left-0 bg-opacity-40 h-screen w-full backdrop-blur-lg flex items-center justify-center">
        <motion.div
          variants={ModalVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className=" flex flex-col gap-4 sm:gap-8 items-end bg-white rounded-md p-3 sm:p-6 w-[90%] sm:w-[50%]"
        >
          <button
            onClick={onClose}
            className=" font-semibold text-2xl leading-none outline-none border-none focus:ring-2 focus:ring-designColor text-gray-400 hover:bg-gray-200 px-3 py-1.5"
          >
            &times;
          </button>
          <div className=" text-sm sm:text-xl text-gray-400 items-start">
            {children}
          </div>
          <button
            className=" px-4 text-lg text-red-50 outline-none border-none focus:ring-2 focus:ring-designColor focus:ring-offset-2 rounded-md bg-red-500 hover:bg-red-600 py-1.5 capitalize font-semibold "
            onClick={onClose}
          >
            cancel
          </button>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
