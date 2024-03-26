import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCurrentUser } from "./useCurrentUser";
import { useLogout } from "../logout/useLogout";

const Auth = () => {
  const { logout, isPending } = useLogout();
  const { user, isLoading, isAuthenticated } = useCurrentUser();

  const name = user?.user_metadata?.name;
  const avatar = user?.user_metadata?.avatar;

  if (isLoading)
    return (
      <div className="hidden gap-3 sm:flex">
        <div className=" h-10 w-20 animate-pulse rounded-lg bg-gray-300"></div>
        <div className=" h-10 w-20 animate-pulse rounded-lg bg-gray-300"></div>
      </div>
    );

  return (
    <div className=" hidden items-center gap-2 md:flex">
      {!isAuthenticated ? (
        <>
          <Link className="btn capitalize dark:btn-neutral" to={"login"}>
            Login
          </Link>
          <Link className="btn-info btn capitalize" to={"register"}>
            signup
          </Link>
        </>
      ) : (
        <>
          <img
            className=" hidden h-8 w-8 rounded-full bg-gray-400 object-cover lg:block"
            src={avatar || "/images.png"}
            alt=""
          />
          <NavLink
            to={"me"}
            className=" rounded-sm border-none px-2 py-1 font-medium capitalize text-blue-500 underline outline-none duration-300 hover:no-underline focus:ring-2 focus:ring-designColor dark:text-gray-300"
          >
            {name}
          </NavLink>
          <button
            onClick={logout}
            disabled={isPending}
            className="btn-error btn capitalize"
          >
            logout
          </button>
        </>
      )}
    </div>
  );
};

export default Auth;
