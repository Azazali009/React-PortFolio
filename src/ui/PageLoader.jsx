import { RotatingTriangles } from "react-loader-spinner";
import React from "react";

const PageLoader = () => {
  return (
    <div className=" flex min-h-screen items-center justify-center bg-gray-200 dark:bg-bodyColor">
      <RotatingTriangles height={50} color="white" />
    </div>
  );
};

export default PageLoader;
