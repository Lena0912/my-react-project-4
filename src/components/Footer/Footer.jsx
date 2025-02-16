import { NavLink } from "react-router-dom";
import css from "./Footer.module.css";
import logo from "/src/img/logo.svg";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div className={css.container}>
        <div className={css.logoSection}>
          <NavLink to="/" className={css.logo}>
            <img src={logo} alt="SvitMaluka Logo" className={css.logoImage} />
          </NavLink>
          <p className={css.description}>
            Надійний партнер у світі якісних товарів.
          </p>
        </div>

        <div className={css.navSection}>
          <h4>Навігація</h4>
          <NavLink to="/" className={css.link}>
            Про компанію
          </NavLink>
          <NavLink to="/about" className={css.link}>
            Клієнтам
          </NavLink>
          <NavLink to="/products" className={css.link}>
            Продукти
          </NavLink>
        </div>

        <div className={css.contactSection}>
          <h4>Контакти</h4>
          <p>Email: info@svitmaluka.com</p>
          <p>Телефон: +38 (067) 710-68-34</p>
        </div>

        <div className={css.socialSection}>
          <h4>Ми в соцмережах</h4>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={css.socialLink}
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={css.socialLink}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <p className={css.copyright}>© 2025 SvitMaluka. Усі права захищено.</p>
    </footer>
  );
};
