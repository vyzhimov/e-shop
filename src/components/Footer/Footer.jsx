import React from "react";
import { BsSunglasses } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex w-full justify-between  bg-[--main-color] px-[10%] py-3">
      <div className="mr-4 flex items-center">
        <div className="mr-4">
          <p className="text-sm text-[--accent-color]">made by</p>
          <p className="uppercase text-lime-400">Vyzhymov Oleksandr</p>
        </div>
        <address className="flex text-[#fff]">
          <a
            className="nav_link text-3xl"
            href="mailto:vyzhymov.alex@gmail.com"
          >
            <SiGmail />
          </a>
          <a className="nav_link text-3xl" href="https://github.com/vyzhimov">
            <FaGithub />
          </a>
          <a
            className="nav_link text-3xl"
            href="https://www.linkedin.com/in/oleksandr-vyzhymov/"
          >
            <FaLinkedin />
          </a>
        </address>
      </div>
      <div>
        <p className="flex items-center justify-center text-xl">
          <span>
            <BsSunglasses className="mr-2 text-[--third-color]" />
          </span>
          <span className="mr-1 font-logo text-[--accent-color]">E</span>
          <span className="mr-1 font-logo text-[--third-color]">F</span>
          <span className="font-logo text-[--accent-color]">E</span>
        </p>
        <p className="text-[#fff]">&#169; 2023-2024 All rights reserved</p>
      </div>
    </footer>
  );
}
