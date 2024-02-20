import React from "react";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = ({ email, password }) => {
    login(
      { email, password },
      {
        onSuccess: () => {
          navigate("/", { replace: true });
          reset();
        },
      },
    );
  };
  const onError = (err) => {
    console.log(err);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit, onError)}
      className="mx-5 mt-3 w-full space-y-6 rounded-xl px-8 py-10 text-gray-500 shadow-shadowTwo dark:text-white dark:shadow-shadowOne sm:mx-0 sm:max-w-2xl sm:space-y-12
      
      "
    >
      <h2 className=" mb-10 text-center text-lg font-semibold capitalize text-emerald-500 dark:text-emerald-300 sm:mb-16 sm:text-3xl">
        Login to your account
      </h2>

      <FormRow lable="email" error={errors?.email?.message}>
        <input
          type="email"
          placeholder="Enter email"
          className="input-bordered input-info input input-sm w-full bg-white text-gray-800  dark:bg-zinc-800 dark:text-white sm:w-3/4 "
          {...register("email", {
            required: "Field is required.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          disabled={isPending}
        />
      </FormRow>
      <FormRow lable="password" error={errors?.password?.message}>
        <input
          type="password"
          placeholder="Enter password"
          className="input-bordered input-info input input-sm w-full bg-white text-gray-800 dark:bg-zinc-800 dark:text-white sm:w-3/4"
          {...register("password", {
            required: "Field is required.",
          })}
          disabled={isPending}
        />
      </FormRow>
      <div>
        <button
          disabled={isPending}
          type="submit"
          className="sm:text-bas btn-info btn-sm btn w-full text-xs sm:btn-md hover:bg-opacity-75"
        >
          login
        </button>
        <div className="divider text-xs sm:text-base">OR</div>
      </div>
      <div className=" flex justify-between">
        <p className="whitespace-nowrap text-xs font-light sm:text-base">
          Do not have an account?
          <Link
            className="link-hover link ml-1 font-semibold underline  dark:link-info"
            to={"/register"}
          >
            signup
          </Link>
        </p>
        <Link
          className="link-hover link text-xs font-semibold underline dark:link-info sm:text-base"
          to={"/forgot-password"}
        >
          forgot password?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
