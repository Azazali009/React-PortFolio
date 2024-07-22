import React from "react";
import MiniLoader from "../dashboard/MiniLoader";
import { Doughnut } from "react-chartjs-2";
import { useDeviceDetector } from "../dashboard/useDeviceDetector";
import Error from "../../ui/Error";
const DoughnutChart = () => {
  const { Devices, isLoadingDevices, isError } = useDeviceDetector();

  // mobiles(android | iphone) count
  const mobilesCount = Devices?.filter(
    (item) => item.device === "mobile",
  )?.length;
  // desktop count
  const desktopCount = Devices?.filter(
    (item) => item.device === "desktop",
  )?.length;

  if (isError) return <Error />;
  return (
    <div className=" flex min-h-[20rem] w-full items-center justify-center rounded-md bg-white px-2 py-4 shadow-lg dark:bg-dashboardBg">
      {isLoadingDevices ? (
        <MiniLoader />
      ) : (
        <Doughnut
          data={{
            labels: ["Mobile", "Desktop", "Tablet"],
            datasets: [
              {
                label: "Device",
                data: [mobilesCount, desktopCount, 100],
                borderRadius: 2,
                borderWidth: 0,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Device Resource",
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default DoughnutChart;
