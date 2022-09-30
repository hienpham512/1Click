import React from "react";
import LeftTab from "../components/Signin/LeftTab";
import RightTab from "../components/Signin/RightTab";

interface ISigninProps {}

const Signin: React.FC<ISigninProps> = ({}) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center font-poppins">
<<<<<<< HEAD
      <div className="flex w-3/5 h-3/5 rounded-2xl shadow-lg">
=======
      <div className="flex w-4/5 h-4/5 rounded-2xl shadow-lg">
>>>>>>> 0ce5254 (Bishesh/signin (#2))
        <LeftTab />
        <RightTab />
      </div>
    </div>
  );
};

export default Signin;
