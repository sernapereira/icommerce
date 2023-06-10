import { NavLink } from "react-router-dom";
import style from "./index.module.css";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.nav__ul}>
        <li className={style.nav__li}>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? style.nav__link_active : style.nav__link
            }
          >
            {" "}
            Shopi
          </NavLink>
        </li>
        <li className={style.nav__li}>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? style.nav__link_active : style.nav__link
            }
          >
            {" "}
            All
          </NavLink>
        </li>
        <li className={style.nav__li}>
          <NavLink
            to={"/clothes"}
            className={({ isActive }) =>
              isActive ? style.nav__link_active : style.nav__link
            }
          >
            {" "}
            Clothes
          </NavLink>
        </li>
        <li className={style.nav__li}>
          <NavLink
            to={"/electronics"}
            className={({ isActive }) =>
              isActive ? style.nav__link_active : style.nav__link
            }
          >
            {" "}
            Electronics
          </NavLink>
        </li>
        <li className={style.nav__li}>
          <NavLink
            to={"/furnitures"}
            className={({ isActive }) =>
              isActive ? style.nav__link_active : style.nav__link
            }
          >
            {" "}
            Furnitures
          </NavLink>
        </li>
        <li className={style.nav__li}>
          <NavLink
            to={"/toys"}
            className={({ isActive }) =>
              isActive ? style.nav__link_active : style.nav__link
            }
          >
            {" "}
            Toys
          </NavLink>
        </li>
        <li className={style.nav__li}>
          <NavLink
            to={"/others"}
            className={({ isActive }) =>
              isActive ? style.nav__link_active : style.nav__link
            }
          >
            {" "}
            Others
          </NavLink>
        </li>
      </ul>
      <ul className={style.nav__ul}>
        <li className={style.nav__link_email}>tiendaMax.10@gmail.com</li>
        <li className={style.nav__li}>
          <NavLink
            to={"/my-order"}
            className={({ isActive }) =>
              isActive ? style.nav__link_active : style.nav__link
            }
          >
            {" "}
            My Order
          </NavLink>
        </li>
        <li className={style.nav__li}>
          <NavLink
            to={"/my-account"}
            className={({ isActive }) =>
              isActive ? style.nav__link_active : style.nav__link
            }
          >
            My Account
          </NavLink>
        </li>
        <li className={style.nav__li}>
          <NavLink
            to={"/sign-in"}
            className={({ isActive }) =>
              isActive ? style.nav__link_active : style.nav__link
            }
          >
            {" "}
            Sign In
          </NavLink>
        </li>
        <li className={style.nav__li}>🛒0</li>
      </ul>
    </nav>
  );
};

export default Navbar;
