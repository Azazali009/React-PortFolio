import React from "react";
import ProjectCard from "../component/projects/ProjectCard";
import { Projects } from "../component/projects/projectData";

const Project = () => {
  return (
    <div className="  min-h-screen bg-gray-200 px-2 pb-12 pt-6 font-primary text-gray-500 dark:bg-bodyColor dark:text-gray-300">
      <div className=" mx-auto flex max-w-6xl flex-col  gap-3 px-3 ">
        <h2 className=" text-xl font-bold capitalize text-designColor sm:text-5xl">
          Showcase of My Work
        </h2>
        <p className=" text-sm leading-6 sm:text-lg">
          {" "}
          Welcome to my project showcase. Here, you'll find a selection of my
          work that highlights my expertise in Modern web development and
          design. I strive to blend creativity and functionality in every
          project.
        </p>
      </div>

      <div className=" mt-4 grid grid-cols-2 gap-x-3 gap-y-9 sm:mt-12 sm:grid-cols-3 sm:gap-x-6">
        {Projects?.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Project;
