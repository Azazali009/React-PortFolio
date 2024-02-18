import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { useUpdateUser } from "../user/useUpdateUser";
import toast from "react-hot-toast";

const RecoverPassword = () => {
  const navigate = useNavigate();
  const { update, isUpdating } = useUpdateUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ password }) => {
    update(
      { password },
      {
        onSuccess: () => {
          toast.success("Password reset successfully.");
          navigate("/login");
        },
        onError: (err) => toast.error(err.message),
      }
    );
  };
  const onError = (err) => {};
  return (
    <div className="min-h-screen w-full flex items-center justify-center dark:bg-bodyColor bg-gray-200 font-primary text-gray-500 dark:text-white">
      <div className="dark:shadow-shadowOne shadow-shadowTwo p-6 rounded-xl">
        <h2 className=" text-2xl font-medium mb-2 text-gray-600 dark:text-white ">
          Reset your password
        </h2>
        <p className=" text-sm w-3/4 dark:text-gray-400 text-gray-500 font-semibold mb-8">
          Type in a new secure password and press save to update your password
        </p>

        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className=" flex flex-col gap-2"
        >
          <label className="dark:text-gray-400 text-gray-600  font-medium capitalize">
            new password
          </label>
          <div className="flex flex-col gap-1">
            <input
              type="password"
              disabled={isUpdating}
              className=" input input-bordered input-info dark:text-slate-50 text-slate-700  dark:bg-transparent bg-gray-200 input-sm"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 6,
                  message: "Should be 6 character long!",
                },
              })}
            />
            <p className="text-sm font-medium text-red-500">
              {errors?.password?.message}
            </p>
            <div className="divider"></div>
          </div>
          <button
            disabled={isUpdating}
            className=" btn btn-sm btn-success capitalize hover:bg-opacity-70 duration-200"
          >
            save new password
          </button>
          <p className=" text-center mt-4 text-sm text-gray-600 font-medium dark:text-gray-300">
            already have an account?
            <Link
              disabled={isUpdating}
              to={"/login"}
              className=" link capitalize link-info"
            >
              sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword;
