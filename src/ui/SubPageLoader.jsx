import React from "react";
import { RotatingLines } from "react-loader-spinner";

const SubPageLoader = () => {
  return (
    <div className=" mt-10 flex min-h-screen justify-center bg-gray-200 dark:bg-bodyColor">
      <RotatingLines height={70} strokeColor="#087DC3" />
    </div>
  );
};

export default SubPageLoader;
