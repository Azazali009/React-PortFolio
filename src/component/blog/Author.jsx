import React from "react";
import { Link } from "react-router-dom";

const Author = ({ authorImage, author }) => {
  return (
    <div className="mx-auto w-full px-6 py-12 text-gray-600 dark:text-gray-200 sm:w-[50%] sm:px-0">
      <img
        className=" aspect-square w-32 rounded-full border-2 border-gray-400 object-cover"
        src={authorImage}
        alt={`Author ${author}`}
      />
      <div className=" mt-8 flex flex-wrap justify-between">
        <div className=" flex flex-col gap-2">
          <h1 className=" text-xl font-semibold capitalize sm:text-3xl">
            Written by: <span>{author}</span>{" "}
          </h1>
          <p>80 Followers</p>
          <Link
            className=" text-sm hover:underline sm:text-base"
            to={"https://www.linkedin.com/in/azaz-ali-7209042a6/"}
          >
            https://www.linkedin.com/in/azaz-ali-7209042a6/
          </Link>
        </div>
        <div className=" -order-1 mb-8 sm:order-[0] sm:mb-0">
          <Link
            to={"https://www.linkedin.com/in/azaz-ali-7209042a6/"}
            className=" rounded-full bg-sky-500 px-6 py-1.5 font-semibold text-white transition-all duration-300 hover:bg-sky-600 active:scale-95"
          >
            follow
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Author;
