import React from "react";
import { BsSunglasses } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { FaStore } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { BsCart4 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
  return (
    <header className=" bg-main-color  w-full px-[10%] py-3">
      <nav className="flex items-center justify-between">
        <div>
          <div>
            <a
              href="index.html"
              className="text-third-color flex items-center gap-3 text-4xl"
            >
              <BsSunglasses className="text-4xl" />
              <p className="font-logo ">
                <span className="text-accent-color tracking-widest">E</span>
                <span className="tracking-widest">F</span>
                <span className="text-accent-color tracking-widest">E</span>
              </p>
            </a>
          </div>
        </div>
        <form className="relative flex w-1/2">
          <input type="text" className="w-full rounded-md p-2" />
          <button
            type="submit"
            className="text-third-color hover:bg-accent-color absolute right-0 flex items-center gap-1 rounded-r-md bg-[#ef950d] px-4 py-2 hover:transition-all hover:duration-300"
          >
            <IoMdSearch />
            Find
          </button>
        </form>
        <ul className="flex gap-[20px]">
          <li>
            <a href="store.html" className="nav_link default_transition">
              <FaStore className=" text-third-color text-2xl" />
            </a>
          </li>
          <li>
            <a href="favorite.html" className="nav_link default_transition">
              <GrFavorite className=" text-third-color text-2xl" />
            </a>
          </li>
          <li>
            <a href="cart.html" className="nav_link default_transition">
              <BsCart4 className="text-third-color text-2xl" />
            </a>
          </li>
          <li>
            <a href="account.html" className="nav_link default_transition">
              <VscAccount className="text-third-color text-2xl" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
