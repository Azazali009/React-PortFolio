import React from "react";
import Logo from "../ui/Logo";
import Developer from "../component/footerData/Developer";
import ResourceLinks from "../component/footerData/ResourceLinks";
import HomeIcons from "../component/homeData/HomeIcons";

const Footer = ({ setOpenModal }) => {
  const curYear = new Date().getFullYear();
  return (
    <div className=" min-h-screen w-full bg-gray-200 p-10 font-primary dark:bg-bodyColor dark:text-lightText ">
      <div className=" grid grid-cols-1 gap-y-24 pt-8 sm:grid-cols-2 sm:justify-items-center md:grid-cols-3">
        {/* Footer logo */}
        <div className="">
          <Logo />
          <HomeIcons />
        </div>

        {/* Footer Links */}
        <Developer setOpenModal={setOpenModal} />
        <ResourceLinks setOpenModal={setOpenModal} />
      </div>
      <p className=" mx-auto my-4 text-center text-sm text-gray-500 sm:text-lg">
        &copy;{curYear}. All rights reserved by Azaz ali
      </p>
    </div>
  );
};

export default Footer;
