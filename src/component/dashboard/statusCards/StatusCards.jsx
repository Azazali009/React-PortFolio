import React from "react";
import StatusCard from "./StatusCard";
import { useAllVisitors } from "../../visitor/useAllVisitors";
import { useBlogs } from "../../../component/blog/useBlogs";
import EyeSvg from "../../../ui/EyeSvg";
import StatusCardBookSvg from "../../../ui/StatusCardBookSvg";
import UserSvg from "../../../ui/UserSvg";
import WebsiteSvg from "../../../ui/WebsiteSvg";
import { Projects } from "../../projects/projectData";

const StatusCards = () => {
  // 1) visitor card stats
  const { visitors, isLoadingVisitors } = useAllVisitors();
  const totalVisitors = (visitors?.counter / 1000).toFixed(2) + "k";

  // 2) Blog card stats
  let { count, isLoading } = useBlogs();
  let totalBlogs = count;
  totalBlogs = (totalBlogs * 100) / 1000 + "k";

  // 3 projects cartd stats
  const projects = Projects.length;
  const totalProjects = (projects * 100) / 1000 + "k";
  return (
    <div className="  grid max-w-full grid-cols-4 gap-x-6 ">
      <StatusCard
        svg={<EyeSvg />}
        title={totalVisitors}
        subTitle={"total views"}
        percetageValue={(visitors?.counter / 10000) * 100}
        isLoading={isLoadingVisitors}
      />
      <StatusCard
        title={totalBlogs}
        subTitle={"total blogs"}
        percetageValue={(count / 1000) * 100}
        svg={<StatusCardBookSvg />}
        isLoading={isLoading}
      />
      <StatusCard
        title={"10.3k"}
        subTitle={"total user"}
        percetageValue={(400 / 1000) * 100}
        svg={<UserSvg />}
      />
      <StatusCard
        title={totalProjects}
        subTitle={"total projects"}
        percetageValue={(projects / 1000) * 100}
        svg={<WebsiteSvg />}
      />
    </div>
  );
};

export default StatusCards;
