import { RotatingTriangles } from "react-loader-spinner";
import React from "react";

const PageLoader = () => {
  return (
    <div className=" bg-bodyColor min-h-screen flex items-center justify-center">
      <RotatingTriangles height={50} color="white" />
    </div>
  );
};

export default PageLoader;
