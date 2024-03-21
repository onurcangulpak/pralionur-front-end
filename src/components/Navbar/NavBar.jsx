import React, { useState } from "react";
import "./NavBar.css";
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logo-white.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ theme, setTheme }) => {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    if (!showDropdown) {
      setTimeout(() => {
        setShowDropdown(false);
      }, 8000);
    }
  };

  const isHome = location.pathname === "/";
  const isProducts = location.pathname === "/products";
  const isCreatead = location.pathname === "/createad";
  const isAbout = location.pathname === "/about";

  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="navbar">
      <img src={logo_dark} alt="" className="logo" />
      <ul className="nav-menu">
        {!isHome && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
        {!isProducts && (
          <li className="dropdown">
            <span className="dropdown-toggle" onClick={toggleDropdown}>
              Products
            </span>
            {showDropdown && (
              <div className="dropdown-content">
                <Link to="/men">Men</Link>
                <Link to="/ladies">Women</Link>
                <Link to="/newads">New Ads</Link>
              </div>
            )}
          </li>
        )}
        {!isCreatead && (
          <li>
            <Link to="/createad">Place an Ad</Link>
          </li>
        )}
        {!isAbout && (
          <li>
            <Link to="/about">About</Link>
          </li>
        )}
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search " />
        <img src={search_icon_dark} alt="" />
      </div>
      <img
        onClick={toggle_mode}
        src={toggle_dark}
        alt=""
        className="toggle-icon"
      />
    </div>
  );
};

export default NavBar;
