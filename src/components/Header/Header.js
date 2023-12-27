import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaStore } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { BsCart4 } from "react-icons/bs";

export default function Header() {
  return (
    <header className=" w-full  bg-[--main-color] px-[10%] py-3">
      <nav className="flex items-center justify-between">
        <div>
          <div>
            <a href="index.html" className="text-3xl text-[#fff]">
              <h1>Logo</h1>
            </a>
          </div>
        </div>
        <form className="relative flex w-1/2">
          <input type="text" className="w-full rounded-md p-2" />
          <button
            type="submit"
            className="absolute right-0 flex items-center gap-2 rounded-r-md bg-[#ef950d] p-2 text-[#fff] hover:bg-[--accent-color] hover:transition-all hover:duration-300"
          >
            <IoMdSearch />
            Find
          </button>
        </form>
        <ul className="flex gap-[20px]">
          <li>
            <a
              href="store.html"
              className="block  p-2 hover:rounded-md hover:bg-[--accent-color] hover:transition-all hover:duration-300"
            >
              <FaStore className=" text-2xl text-[#fff]" />
            </a>
          </li>
          <li>
            <a
              href="favorite.html"
              className="block  p-2 hover:rounded-md hover:bg-[--accent-color] hover:transition-all hover:duration-300"
            >
              <GrFavorite className=" text-2xl text-[#fff]" />
            </a>
          </li>
          <li>
            <a
              href="cart.html"
              className="block rounded-md  p-2 hover:bg-[--accent-color] hover:transition-all hover:duration-300"
            >
              <BsCart4 className="text-2xl text-[#fff]" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
