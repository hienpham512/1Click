import React from "react";
import appLogo from "../../assets/logo/mainLogo.png";

interface ILeftTabProps {}

const LeftTab: React.FC<ILeftTabProps> = ({}) => {
  return (
<<<<<<< HEAD
    <div className="w-1/2 bg-auth bg-cover bg-center text-white flex flex-col items-center backdrop-blur-3xl justify-center rounded-tl-2xl rounded-bl-2xl">
      <img src={appLogo} alt="1Click" className="w-52" />
      <div className="flex flex-col space-y-2 items-center pb-24">
        <p className="text-4xl font-bold">
          Welcome to <span className="text-black">1Click</span>
        </p>
        <p className="text-black text-xl ">Sign in to continue</p>
=======
    <div className="w-1/2 bg-auth bg-cover bg-center text-white flex flex-col items-center backdrop-blur-3xl justify-start rounded-tl-2xl rounded-bl-2xl">
      <img src={appLogo} alt="1Click" className="w-72 pb-6" />
      <div className="flex flex-col space-y-6 items-center ">
        <p className="text-5xl font-bold">
          Welcome to <span className="text-black">1Click</span>
        </p>
        <p className="text-black text-2xl ">Sign in to continue</p>
>>>>>>> 0ce5254 (Bishesh/signin (#2))
      </div>
    </div>
  );
};

export default LeftTab;
