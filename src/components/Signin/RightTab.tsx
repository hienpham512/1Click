import React from "react";

interface IRightTabProps {}

const RightTab: React.FC<IRightTabProps> = ({}) => {
  return (
<<<<<<< HEAD
    <div className="bg-white flex-grow rounded-tr-2xl rounded-br-2xl px-6">
      <p className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-700 to bg-red-500">
        SIGNIN
      </p>
      <div className="flex flex-col justify-start">
        <input
          type="email"
          placeholder="Email Address"
          className="font-light"
        />
        <div className="h-1 bg-gradient-to-r from-pink-700 to bg-red-500" />
      </div>
      <div className="flex flex-col justify-start">
        <input type="password" placeholder="Password" className="font-light" />
        <div className="h-1 bg-gradient-to-r from-pink-700 to bg-red-500" />
      </div>
      <button className="text-3xl bg-gradient-to-r from-pink-700 to bg-red-500 text-white font-light rounded-md py-2 w-full">
        Login
      </button>
      <div>
        <p className="text-xl font-light">
          Don't have an account?{" "}
          <button className="text-transparent font-semibold text-2xl bg-clip-text bg-gradient-to-r from-pink-700 to bg-red-500">
            Sign up
          </button>
        </p>
      </div>
      <button className="bg-blue-400 text-white w-full py-2 rounded-md font-light text-xl">
        Sigin in with Google
      </button>
      <button className="bg-blue-400 text-white w-full py-2 rounded-md font-light text-xl">
        Sigin in with Facebook
      </button>
=======
    <div className="bg-white flex-grow rounded-tr-2xl rounded-br-2xl">
      Sign in Form
>>>>>>> 0ce5254 (Bishesh/signin (#2))
    </div>
  );
};

export default RightTab;
