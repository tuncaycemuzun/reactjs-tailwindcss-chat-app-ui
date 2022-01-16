import React from "react";
import Logo from '../../Assets/Images/logo.png'
import {FormInput} from '../Shared/FormInput'; 
import {FiLogIn} from 'react-icons/fi';
import { SignUpWith } from "../Shared/SignUpWith";
import { Link } from "react-router-dom";
const inputs = [
  { icon: "username", placeHolder: "Username" },
  { icon: "email", placeHolder: "Email Address" },
  { icon: "password", placeHolder: "Password" },
];
export const RegisterForm = () => {
  return (
    <div className="w-2/6 flex items-center justify-center">
      <div className="w-4/6 h-[650px] bg-white px-6 py-6 shadow-md flex flex-col items-center">
        <div className="login-bg w-full h-48 flex flex-col items-center justify-center">
          <img src={Logo} className="w-12 h-12" />
          <div className="flex items-center pt-4 w-24 justify-between">
            <FiLogIn className="text-white text-xl" />
            <span className="text-white font-light text-xl">Sign In</span>
          </div>
        </div>
        <div className="flex flex-col w-11/12 p-6 gap-y-3 -m-10 bg-white rounded-md">
          {inputs.map((item, i) => {
            return (
              <FormInput
                key={i}
                placeHolder={item.placeHolder}
                icon={item.icon}
              />
            );
          })}
          <Link className="login-bg mt-5 h-10 rounded-md cursor-pointer hover:shadow-lg hover:transition-shadow text-white font-light text-lg flex items-center justify-center"> Sign Up</Link>
          <SignUpWith/>
        </div>
      </div>
    </div>
  );
};
