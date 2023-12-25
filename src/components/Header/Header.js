import React from "react";
import Container from "../Container";
import css from "./Header.module.css";
import { FaStore } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { BsCart4 } from "react-icons/bs";
import { ReactComponent as Logo } from "../../images/logo.svg";

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css.navbar}>
          <div>
            <div>
              <a href="index.html">
                <Logo className={css.logo} />
              </a>
            </div>
          </div>
          <form className={css.nav_form}>
            <input type="text" className={css.nav_search} />
          </form>
          <ul className={css.menu}>
            <li>
              <a href="store.html" className={css.menu_btn}>
                <FaStore className={css.menu_icon} />
              </a>
            </li>
            <li>
              <a href="favorite.html" className={css.menu_btn}>
                <GrFavorite className={css.menu_icon} />
              </a>
            </li>
            <li>
              <a href="cart.html" className={css.menu_btn}>
                <BsCart4 className={css.menu_icon} />
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
