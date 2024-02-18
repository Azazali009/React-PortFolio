import React, { useEffect } from "react";
import LoginForm from "../component/login/LoginForm";
import { useCurrentUser } from "../component/authentication/useCurrentUser";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useCurrentUser();

  useEffect(() => {
    if (isAuthenticated) return navigate("/");
  }, [navigate, isAuthenticated]);
  return (
    <div className=" flex min-h-screen justify-center bg-gray-200 font-primary dark:bg-bodyColor">
      <LoginForm />
    </div>
  );
};

export default Login;
