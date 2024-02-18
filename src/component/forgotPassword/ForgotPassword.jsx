import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useForgotPassword } from "./useForgotPassword";

const ForgotPassword = () => {
  const { sentLink, isSending } = useForgotPassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email }) => {
    sentLink(email);
  };
  const onError = (err) => {};
  return (
    <div className="min-h-screen w-full flex items-center justify-center dark:bg-bodyColor bg-gray-200 font-primary text-gray-500 dark:text-white">
      <div className="dark:shadow-shadowOne shadow-shadowTwo p-6 rounded-xl">
        <h2 className=" text-2xl font-medium mb-2 text-gray-600 dark:text-white ">
          Reset your password
        </h2>
        <p className=" text-sm w-3/4 dark:text-gray-400 text-gray-500 font-semibold mb-8">
          Type in your email and we'll send you a link to reset your password
        </p>

        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className=" flex flex-col gap-2"
        >
          <label className="dark:text-gray-400 text-gray-600  font-medium capitalize">
            Email
          </label>
          <div className="flex flex-col gap-1">
            <input
              type="email"
              disabled={isSending}
              className=" input input-bordered input-info dark:text-slate-50 text-slate-700  dark:bg-transparent bg-gray-200 input-sm"
              {...register("email", {
                required: "This field is required",
              })}
            />
            <p className="text-sm font-medium text-red-500">
              {errors?.email?.message}
            </p>
          </div>
          <div className="divider"></div>
          <button
            disabled={isSending}
            className=" btn btn-sm btn-success capitalize hover:bg-opacity-70 duration-200"
          >
            sent reset email
          </button>
          <p className=" text-center mt-4 text-sm text-gray-600 font-medium dark:text-gray-300">
            already have an account?
            <Link to={"/login"} className=" link capitalize link-info">
              sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
