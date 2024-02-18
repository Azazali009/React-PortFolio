import React from "react";
import SignupForm from "../component/register/SignupForm";

const Register = () => {
  return (
    <div className=" flex min-h-screen items-center justify-center bg-gray-200 pt-16 font-primary dark:bg-bodyColor">
      <SignupForm />
    </div>
  );
};

export default Register;
