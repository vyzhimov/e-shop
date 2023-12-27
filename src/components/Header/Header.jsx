import React from "react";
import { BsSunglasses } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { FaStore } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { BsCart4 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
  return (
    <header className=" w-full  bg-[--main-color] px-[10%] py-3">
      <nav className="flex items-center justify-between">
        <div>
          <div>
            <a
              href="index.html"
              className="flex items-center gap-3 text-4xl text-[#fff]"
            >
              <BsSunglasses className="text-4xl" />
              <p className="font-logo ">
                <span className="tracking-widest text-[--accent-color]">E</span>
                <span className="tracking-widest">F</span>
                <span className="tracking-widest text-[--accent-color]">E</span>
              </p>
            </a>
          </div>
        </div>
        <form className="relative flex w-1/2">
          <input type="text" className="w-full rounded-md p-2" />
          <button
            type="submit"
            className="absolute right-0 flex items-center gap-1 rounded-r-md bg-[#ef950d] px-4 py-2 text-[#fff] hover:bg-[--accent-color] hover:transition-all hover:duration-300"
          >
            <IoMdSearch />
            Find
          </button>
        </form>
        <ul className="flex gap-[20px]">
          <li>
            <a href="store.html" className="nav_link">
              <FaStore className=" text-2xl text-[#fff]" />
            </a>
          </li>
          <li>
            <a href="favorite.html" className="nav_link">
              <GrFavorite className=" text-2xl text-[#fff]" />
            </a>
          </li>
          <li>
            <a href="cart.html" className="nav_link">
              <BsCart4 className="text-2xl text-[#fff]" />
            </a>
          </li>
          <li>
            <a href="account.html" className="nav_link">
              <VscAccount className="text-2xl text-[#fff]" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
