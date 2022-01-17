import React, { useEffect } from "react";
import { RegisterForm } from "../Components/Resigter/RegisterForm";
const title = "Chat | Register";

export const Register = () => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <div className="h-full md:h-screen w-full login-bg flex flex-col md:flex-row justify-center items-center">
      <RegisterForm />
      <div className="hidden px-0 md:px-5 md:py-5 md:flex w-full flex-col items-start justify-center text-5xl text-white gap-y-10 font-light">
        <p className="w-full lg:w-5/6 line leading-[1.1]">
          Talkshak is a simplest and friendly interface Messagner or <br />
          plateform.
        </p>
        <p className="text-3xl">Login Now And Enjoy!</p>
      </div>
    </div>
  );
};
