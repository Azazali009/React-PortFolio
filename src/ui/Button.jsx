import React from "react";

const Button = ({ children, onClick, svg = null }) => {
  return (
    <button
      className="flex items-center gap-2 rounded-md bg-sky-600 px-6 py-1.5  font-primary text-lg capitalize text-white duration-300 hover:bg-sky-700"
      onClick={onClick}
    >
      {svg && svg}
      <span className="block">{children}</span>
    </button>
  );
};

export default Button;
