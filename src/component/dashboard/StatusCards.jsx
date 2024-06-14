import React from "react";
import StatusCard from "./StatusCard";

const StatusCards = () => {
  return (
    <div className="  grid max-w-full grid-cols-4 gap-x-6 ">
      {[...new Array(4)]?.map((_, i) => (
        <StatusCard key={i} />
      ))}
    </div>
  );
};

export default StatusCards;
