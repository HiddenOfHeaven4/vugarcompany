import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import "./Navbar.css";
import { useSelector } from "react-redux";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const { currentUser } = useSelector((state) => state.user);

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="navbar__logo">
        <Link to="/">
          <h1 className="navbar-heading">R&R Consulting</h1>
        </Link>
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {currentUser && (<li>
          <Link to="/admin/dashboard">Панель админа</Link>
        </li>)}
        <li>
          <Link to="/">Главная страница</Link>
        </li>
        <li>
          <Link to="/properties">Каталог жилья</Link>
        </li>
        <li>
          <Link to="/permanent-residency/ikamet">Помощь с ВНЖ</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={25} style={{ color: "#fff" }} />
        ) : (
          <HiOutlineMenuAlt4 size={25} style={{ color: "#181618" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
