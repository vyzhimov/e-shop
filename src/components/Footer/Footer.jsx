import React from "react";
import { BsSunglasses } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-main-color flex w-full  justify-between px-[10%] py-3">
      <div className="mr-4 flex items-center">
        <div className="mr-4">
          <p className="text-accent-color text-sm">made by</p>
          <p className="uppercase text-lime-400">Vyzhymov</p>
        </div>
        <address className="text-third-color">
          <ul className="flex gap-2">
            <li>
              <a
                className="nav_link default_transition text-3xl"
                href="mailto:vyzhymov.alex@gmail.com"
              >
                <SiGmail />
              </a>
            </li>
            <li>
              <a
                className="nav_link default_transition text-3xl"
                href="https://github.com/vyzhimov"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                className="nav_link default_transition text-3xl"
                href="https://www.linkedin.com/in/oleksandr-vyzhymov/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </address>
      </div>
      <div>
        <p className="flex items-center justify-center text-xl">
          <span>
            <BsSunglasses className="text-third-color mr-2" />
          </span>
          <span className="text-accent-color mr-1 font-logo">E</span>
          <span className="text-third-color mr-1 font-logo">F</span>
          <span className="text-accent-color font-logo">E</span>
        </p>
        <p className="text-third-color">&#169; 2023-2024 All rights reserved</p>
      </div>
    </footer>
  );
}
