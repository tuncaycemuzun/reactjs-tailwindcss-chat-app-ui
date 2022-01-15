import React, { useEffect } from "react";
import { LoginForm } from "../Components/Login/LoginForm";
const title = "Chat | Login";

export const Login = () => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <div className="h-screen login-bg flex justify-around">
      <LoginForm />
      <div className="w-4/6 flex flex-col items-start justify-center text-5xl text-white gap-y-10 font-light">
        <p className="w-4/6 line leading-[1.1]">
          Talkshak is a simplest and friendly interface Messagner or <br/>plateform.
        </p>
        <p className="text-3xl">Login Now And Enjoy!</p>
      </div>
    </div>
  );
};
