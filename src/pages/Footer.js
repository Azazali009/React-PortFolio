import React from "react";
import Logo from "../component/Logo";
import HomeIcons from "../component/HomeIcons";
import Developer from "../component/footerData/Developer";
import ResourceLinks from "../component/footerData/ResourceLinks";

const Footer = ({ setOpenModal }) => {
  const curYear = new Date().getFullYear();
  return (
    <div className=" w-full min-h-screen bg-gray-200 dark:bg-bodyColor dark:text-lightText p-10 font-primary ">
      <div className=" grid grid-cols-1 gap-y-24 sm:grid-cols-2 md:grid-cols-3 sm:justify-items-center dark:border-gray-900 border-gray-300 border-opacity-50 border-t-2 border-b-2 py-32">
        {/* Footer logo */}
        <div className="">
          <Logo />
          <HomeIcons />
        </div>

        {/* Footer Links */}
        <Developer setOpenModal={setOpenModal} />
        <ResourceLinks setOpenModal={setOpenModal} />
      </div>
      <p className=" text-center text-sm sm:text-lg text-gray-500 my-4 mx-auto">
        &copy;{curYear}. All rights reserved by Azaz ali
      </p>
    </div>
  );
};

export default Footer;
