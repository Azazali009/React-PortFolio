import React from "react";
import EyeSvg from "../../ui/EyeSvg";

const StatusCard = () => {
  return (
    <div className=" flex min-h-[10rem] flex-col items-start justify-center gap-3 rounded-sm bg-white px-6 shadow-md dark:bg-dashboardBg">
      <div className=" flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-gray-700">
        <EyeSvg />
      </div>
      <div>
        <h2 className=" text-2xl font-semibold text-stone-800 dark:text-white">
          3.46k
        </h2>
        <div className="flex items-center gap-4 ">
          <p className=" text-sm capitalize text-gray-500 dark:text-gray-400">
            total views
          </p>
          <p className=" text-green-600">0.43 &uarr;</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
