import React from "react";
import backgroundImage from "../../assets/background.jpg";
interface ISigninProps {}

const Signin: React.FC<ISigninProps> = ({}) => {
  return (
    <div className="border flex items-center justify-center w-screen h-screen">
      <div className="w-1/2 border border-black h-screen">
        <img src={backgroundImage} className="h-screen" />
      </div>
      <div className="w-1/2 border border-black h-screen p-5">
        <button className="px-5 py-1 rounded-md auth-button text-white">
          Button
        </button>
      </div>
    </div>
  );
};

export default Signin;
