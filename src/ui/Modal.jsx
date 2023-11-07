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

// {/* Open the modal using document.getElementById('ID').showModal() method */}
// <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
// <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//   <div className="modal-box">
//     <h3 className="font-bold text-lg">Hello!</h3>
//     <p className="py-4">Press ESC key or click the button below to close</p>
//     <div className="modal-action">
//       <form method="dialog">
//         {/* if there is a button in form, it will close the modal */}
//         <button className="btn">Close</button>
//       </form>
//     </div>
//   </div>
// </dialog>

export default function Modal({ children, onClose }) {
  return createPortal(
    <AnimatePresence>
      <div className=" fixed z-50 top-0 left-0 bg-opacity-40 h-screen w-full backdrop-blur-lg flex items-center justify-center">
        <motion.div
          variants={ModalVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className=" flex flex-col gap-4 sm:gap-8 items-end bg-white rounded-2xl p-3 sm:p-6 w-[90%] sm:w-[50%]"
        >
          <button
            onClick={onClose}
            className=" font-semibold text-2xl leading-none outline-none border-none focus:ring-2 focus:ring-designColor text-gray-400 hover:bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center pb-1"
          >
            <span>&times;</span>
          </button>
          <div className="  text-sm sm:text-lg text-gray-600 ">{children}</div>
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
