import React, { useEffect } from "react";
import { LoginForm } from "../Components/Login/LoginForm";
const title = "Chat | Login";

export const Login = () => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <div className="h-full md:h-screen login-bg flex justify-around">
      <LoginForm />
      <div className="hidden px-4 w-4/6 md:flex flex-col items-start justify-center text-5xl text-white gap-y-10 font-light">
        <p className="w-full line leading-[1.1]">
          Talkshak is a simplest and friendly interface Messagner or <br/>plateform.
        </p>
        <p className="text-3xl">Login Now And Enjoy!</p>
      </div>
    </div>
  );
};
