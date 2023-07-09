import React from "react";
import logo from "../image/fvrt.jpg";

const Logo = () => {
  return (
    <div className=" flex gap-2 items-center">
      <img
        className=" w-16 h-16 object-cover rounded-full border-gray-500 border-4"
        src={logo}
        alt="Logo"
      />
      <h1 className="font-bold text-gray-500 dark:text-gray-200 text-xl hover:text-designColor transition-all duration-300">
        Aizy
      </h1>
    </div>
  );
};

export default Logo;
