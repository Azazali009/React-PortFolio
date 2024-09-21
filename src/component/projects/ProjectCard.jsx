import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, image, description, url }) => {
  return (
    <div className="group rounded-xl bg-gray-200 px-3 py-4 shadow-shadowTwo  duration-300 hover:animate-pulse hover:shadow-none dark:bg-bodyColor dark:shadow-shadowOne dark:hover:shadow-none md:px-6 md:py-6">
      <figure>
        <img
          src={image}
          alt={title}
          className=" h-full w-full rounded-md object-cover object-center duration-300  sm:h-60"
        />
        <figcaption className=" flex justify-between  py-4">
          <Link to={url}>
            <h2 className=" bg-gradient-to-r from-blue-600 to-designColor bg-clip-text text-base font-semibold capitalize text-transparent dark:bg-gradient-to-l sm:text-xl">
              {title}
            </h2>
          </Link>
          <Link className=" hidden sm:block" target={"_blank"} to={url}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6  text-designColor hover:animate-spin"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </Link>
        </figcaption>
      </figure>
      <div>
        <p className=" line-clamp-5 text-sm leading-4 sm:line-clamp-6 sm:text-base sm:leading-6">
          {description}
        </p>
      </div>
      <div className=" mt-4">
        <Link
          target={"_blank"}
          className=" capitalize text-sky-600 underline hover:no-underline"
          to={url}
        >
          read more
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
