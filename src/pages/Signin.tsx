import React from "react";
import LeftTab from "../components/Signin/LeftTab";
import RightTab from "../components/Signin/RightTab";

interface ISigninProps {}

const Signin: React.FC<ISigninProps> = ({}) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center font-poppins">
      <div className="flex w-3/5 h-3/5 rounded-2xl shadow-lg">
        <LeftTab />
        <RightTab />
      </div>
    </div>
  );
};

export default Signin;
