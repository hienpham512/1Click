import React from "react";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import HeartIcon from "@heroicons/react/24/outline/HeartIcon";
import ShoppingBagIcon from "@heroicons/react/24/outline/ShoppingBagIcon";

type INavBar = {};
type ISearchBar = {};

const NavBar: React.FC<INavBar> = () => {
  return (
    <div className="flex items-center space-x-10 px-5 py-1 bg-white drop-shadow-md">
      <img
        className="h-40 w-40"
        src="../../../onClickLogoWithName.png"
        alt="1ClickLogo"
      />
      <SearchBar />
      <div className="flex space-x-10">
        <button>
          <UserIcon className="h-10 w-10" />
          Account
        </button>

        <button>
          <HeartIcon className="h-10 w-10" />
          Favorite
        </button>

        <button>
          <ShoppingBagIcon className="h-10 w-10" />
          Card
        </button>
      </div>
    </div>
  );
};

const SearchBar: React.FC<ISearchBar> = () => {
  return (
    <div>
      <input
        type="text"
        className="h-10 w-80 border border-[#FF2B16] opacity-60 rounded-md p-2"
        placeholder="Search"
      />
    </div>
  );
};

export default NavBar;
