import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useCurrentUser } from "../component/authentication/useCurrentUser";
import SideBar from "../component/dashboard/SideBar";
import DashboardHeader from "../component/dashboard/DashboardHeader";

const Dashboard = () => {
  const navigate = useNavigate();

  const {
    isAuthenticated,
    isLoading,
    user: { user_metadata: { isAdmin } = {} } = {},
  } = useCurrentUser();

  useEffect(() => {
    if (!isLoading && !isAdmin) return navigate("/");
  }, [isAuthenticated, isAdmin, navigate, isLoading]);

  return (
    <div className="grid min-h-screen grid-cols-[18rem_1fr] bg-dashboardBg font-primary">
      <SideBar />
      <div className="  bg-gray-100 dark:bg-dashboardBg2">
        <DashboardHeader />
        <div className="mx-auto mt-8 w-full space-y-8 pb-4 md:max-w-[95%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
