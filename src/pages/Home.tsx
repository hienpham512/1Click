import React from "react";
import NavBar from "../components/Home/NavBar";

interface IHome {}
const Home: React.FC<IHome> = () => {
  return (
    <div className="bg-[#FFEBEB] h-screen">
      <NavBar />
    </div>
  );
};

export default Home;
