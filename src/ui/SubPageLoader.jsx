import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const SubPageLoader = () => {
  return (
    <div className=" mt-20 flex min-h-screen justify-center bg-gray-200 dark:bg-bodyColor">
      <ThreeCircles height={70} color="#087DC3" />
    </div>
  );
};

export default SubPageLoader;
