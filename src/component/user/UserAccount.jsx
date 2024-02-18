import React, { useEffect } from "react";
import Userdata from "./Userdata";
import UpdatePassword from "./UpdatePassword";
import { useCurrentUser } from "../authentication/useCurrentUser";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { RotatingTriangles } from "react-loader-spinner";

const UserAccount = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useCurrentUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      toast.error("Login to access this route");
      navigate("/login", { replace: true });
      return;
    }
  }, [isAuthenticated, isLoading, navigate]);
  if (isLoading) {
    return (
      <div className=" flex min-h-screen w-full items-center justify-center">
        <RotatingTriangles />
      </div>
    );
  }
  return (
    <div className="min-h-screen w-full bg-gray-200 font-primary dark:bg-bodyColor">
      <h1 className=" pt-8 text-center text-xl font-bold capitalize text-emerald-500 dark:text-white sm:text-3xl">
        account settings
      </h1>
      <Userdata />
      <UpdatePassword />
    </div>
  );
};

export default UserAccount;
