import React from "react";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import HeartIcon from "@heroicons/react/24/outline/HeartIcon";
import ShoppingBagIcon from "@heroicons/react/24/outline/ShoppingBagIcon";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";

type INavBar = {};
type ISearchBar = {};

const NavBar: React.FC<INavBar> = () => {
  return (
    <div className="flex items-center px-5 py-1 bg-white drop-shadow-md justify-around">
      <button className="h-40 w-40 hover:opacity-60 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <img src="../../../onClickLogoWithName.png" alt="1ClickLogo" />
      </button>
      <SearchBar />
      <div>
        <button className="h-20 w-20">
          <div className="px-5">
            <UserIcon className="h-10 w-10" />
          </div>

          <p className="font-light">Account</p>
        </button>
        <button className="h-20 w-20">
          <div className="px-5">
            <HeartIcon className="h-10 w-10 p-0.5" />
          </div>

          <p className="font-light">Favorite</p>
        </button>

        <button className="h-20 w-20">
          <div className="px-5">
            <ShoppingBagIcon className="h-10 w-10" />
          </div>

          <p className="font-light">Card</p>
        </button>
      </div>
    </div>
  );
};

const SearchBar: React.FC<ISearchBar> = () => {
  return (
    <div className="flex items-center transition ease-in-out delay-150 hover:scale-x-110 duration-300">
      <input
        type="text"
        className="h-10 w-96 border border-[#FF2B16] rounded-tl-md rounded-bl-md p-2 focus:outline-none focus:border-[#FF2B16]"
        placeholder="Search"
      />
      <button className="h-10 w-12 flex items-center justify-center p-3 bg-[#FF2B16] rounded-tr-md rounded-br-md hover:opacity-60">
        <MagnifyingGlassIcon className="fill-white" />
      </button>
    </div>
  );
};

export default NavBar;
