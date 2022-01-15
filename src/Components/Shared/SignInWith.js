import Google from "../../Assets/Images/google.png";
import Facebook from "../../Assets/Images/facebook.png";
import Twitter from "../../Assets/Images/twitter.png";
import { Link } from "react-router-dom";

import React from "react";

export const SignInWith = () => {
  return (
    <div className="flex flex-col gap-y-4 mt-5">
      <span>Sign in with</span>
      <div className="flex w-32 justify-between">
        <img src={Google} className="w-8 h-8 cursor-pointer" />
        <img src={Facebook} className="w-8 h-8 cursor-pointer" />
        <img src={Twitter} className="w-8 h-8 cursor-pointer" />
      </div>
      <span className="text-sm">
        Don't have account? <br />
        <Link to="/register" className="text-green-500">Create Account</Link>
      </span>
    </div>
  );
};
