import React from "react";
// import { motion } from "framer-motion";
import ResumeNavbar from "../component/resume/ResumeNavbar";
import { Outlet } from "react-router-dom";

const Resume = () => {
  return (
    <div className=" min-h-screen bg-gray-300 dark:bg-bodyColor px-2 md:px-6 text-gray-500 dark:text-gray-300 font-primary">
      <div className=" text-center py-12">
        <p className=" text-designColor opacity-95 uppercase text-lg mb-4">
          2+ year of experience
        </p>
        <h2 className=" text-4xl sm:text-6xl font-bold capitalize mb-8">
          My Resume
        </h2>
      </div>
      <ResumeNavbar />
      <Outlet />
    </div>
  );
};

export default Resume;
