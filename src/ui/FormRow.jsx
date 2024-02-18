import React from "react";

const FormRow = ({ children, lable, error, col }) => {
  return (
    <div
      className={` grid grid-cols-[5rem_1fr] gap-x-8 sm:grid-cols-[10rem_1fr]`}
    >
      <label className=" text-sm font-normal capitalize leading-6 text-zinc-500 dark:text-white sm:text-lg ">
        {lable}:
      </label>
      <div className=" space-y-2">
        {children}
        {error && <p className=" text-xs font-medium text-red-600">{error}</p>}
      </div>

      {/* {error && (
        <p className=" hidden text-xs font-medium text-red-500 sm:block sm:text-base">
          {error}
        </p>
      )} */}
    </div>
  );
};

export default FormRow;
