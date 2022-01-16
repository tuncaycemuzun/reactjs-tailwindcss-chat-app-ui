import Google from "../../Assets/Images/google.png";
import Facebook from "../../Assets/Images/facebook.png";
import Twitter from "../../Assets/Images/twitter.png";
import { Link } from "react-router-dom";

import React from "react";

export const SignUpWith = () => {
  return (
    <div className="flex flex-col gap-y-4 mt-5">
      <span>Sign in with</span>
      <div className="flex w-32 justify-between">
        <img src={Google} alt="Google" className="w-8 h-8 cursor-pointer" />
        <img src={Facebook} alt="Facebook" className="w-8 h-8 cursor-pointer" />
        <img src={Twitter} alt="Twitter" className="w-8 h-8 cursor-pointer" />
      </div>
      <span className="text-sm">
        Already have account? <br />
        <Link to="/login" className="text-green-500">
          Click Here
        </Link>
      </span>
    </div>
  );
};
