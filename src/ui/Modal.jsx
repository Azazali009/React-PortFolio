import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useOutSideClick } from "../hooks/useOutSideClick";
import { ModalVariant } from "../animation variants/ModalVariant";

export default function Modal({ children, onClose, title }) {
  const ref = useOutSideClick(onClose);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return createPortal(
    <AnimatePresence>
      <div className=" fixed z-50 top-0 left-0 bg-opacity-40 h-screen w-full backdrop-blur-lg flex items-center justify-center">
        <motion.div
          variants={ModalVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          ref={ref}
          className=" no-scrollbar relative flex flex-col max-h-[calc(100vh-5em)] overflow-y-scroll gap-2 sm:gap-8 bg-white rounded-2xl p-6 w-[90%] lg:w-[50%]"
        >
          <button
            onClick={onClose}
            className=" absolute right-1 top-1 font-semibold text-2xl leading-none outline-none border-none focus:ring-2 focus:ring-designColor text-gray-400 hover:bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center pb-1"
          >
            <span>&times;</span>
          </button>
          <h2 className=" font-bold text-zinc-600 capitalize text-xl">
            {title}
          </h2>
          <div className="  text-sm sm:text-lg text-gray-600 ">{children}</div>
          <div className=" self-end">
            <button
              className=" px-4 text-lg text-red-50 outline-none border-none focus:ring-2 focus:ring-designColor focus:ring-offset-2 rounded-md bg-red-500 hover:bg-red-600 py-1.5 capitalize font-semibold "
              onClick={onClose}
            >
              cancel
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
