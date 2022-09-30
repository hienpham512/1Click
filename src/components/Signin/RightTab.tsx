import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import googleIcon from "../../assets/icons/googleLogo.svg";
import facebookIcon from "../../assets/icons/facebookLogo.svg";
interface IRightTabProps {}

const RightTab: React.FC<IRightTabProps> = ({}) => {
  return (
    <div className="bg-white flex-grow rounded-tr-2xl rounded-br-2xl">
      <p className="px-6 pb-6 pt-2 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-pink-700 to bg-red-500">
        SIGNIN
      </p>
      <div className="pl-7 pr-20 flex flex-col space-y-8">
        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Email Address"
            className="font-light text-xl outline-none"
          />
          <div className="h-1 bg-gradient-to-r from-pink-700 to bg-red-500" />
        </div>
        <div className="flex flex-col justify-start w-full">
          <input
            type="password"
            placeholder="Password"
            className="font-light text-xl outline-none"
          />
          <div className="h-1 bg-gradient-to-r from-pink-700 to bg-red-500" />
        </div>
        <button className="w-full flex items-center text-2xl text-white font-light rounded-md py-2 bg-gradient-to-r from-pink-700 to bg-red-500 transition-all ease-in-out hover:translate-x-4 duration-200">
          <p className="w-full flex justify-end">Login</p>
          <div className="w-full flex justify-end">
            <ChevronRightIcon className="h-8" />
          </div>
        </button>
        <>
          <p className="text-lg font-light">
            Don't have an account?{" "}
            <button className="text-transparent font-semibold text-xl bg-clip-text bg-gradient-to-r from-pink-700 to bg-red-500 transition-all ease-in-out hover:-translate-y-1 duration-200">
              Sign up
            </button>
          </p>
        </>
        <div className="flex flex-col space-y-3 text-2xl">
          <button className="w-full space-x-6 px-2 flex items-center bg-blue-400 text-white py-2 rounded-md font-light transition-all ease-in-out hover:translate-x-4 duration-200">
            <img
              src={googleIcon}
              alt="Google"
              className="bg-white p-1 rounded-full w-9"
            />
            <p className=""> Signin with Google</p>
          </button>
          <button className="w-full space-x-6 px-2 flex items-center bg-blue-400 text-white py-2 rounded-md font-light transition-all ease-in-out hover:translate-x-4 duration-200">
            <img
              src={facebookIcon}
              alt="Facebook"
              className="w-9 bg-white p-1 rounded-full"
            />
            <p className="">Signin with Facebook</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightTab;
