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
  };

  const isHome = location.pathname === "/";
  const isProducts = location.pathname === "/products";
  const isFeatures = location.pathname === "/features";
  const isAbout = location.pathname === "/about";

  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="navbar">
      <img
        src={theme == "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />
      <ul className="nav-menu">
        {!isHome && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
        {!isProducts && (
          <li>
            <div className="dropdown">
              <li
                className="dropdown"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <span>Products</span>
                {showDropdown && (
                  <div className="dropdown-content">
                    <Link to="/men">Men</Link>
                    <Link to="/ladies">Women</Link>
                  </div>
                )}
              </li>
            </div>
          </li>
        )}
        {!isFeatures && (
          <li>
            <Link to="/features">Features</Link>
          </li>
        )}
        {!isAbout && (
          <li>
            <Link to="/about">About</Link>
          </li>
        )}
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img
          src={theme == "light" ? search_icon_light : search_icon_dark}
          alt=""
        />
      </div>
      <img
        onClick={() => {
          toggle_mode();
        }}
        src={theme == "light" ? toggle_light : toggle_dark}
        alt=""
        className="toggle-icon"
      />
    </div>
  );
};

export default NavBar;
