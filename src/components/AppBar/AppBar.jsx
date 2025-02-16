import { NavLink } from "react-router-dom";
import logo from "/src/img/logo.svg";
import clsx from "clsx";
import css from "./AppBar.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const AppBar = () => {
  return (
    <header className={css.header}>
      <NavLink to="/" className={css.logo}>
        <img src={logo} alt="SvitMaluka Logo" className={css.logoImage} />
      </NavLink>

      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Про компанію
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          Клієнтам
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Products
        </NavLink>
      </nav>
    </header>
  );
};
