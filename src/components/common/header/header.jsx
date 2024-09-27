import React, { useEffect, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { getToken, getUserInfo } from "../../../services/localStorageService";
import LogoutIcon from "@mui/icons-material/Logout";
import { logOut } from "../../../services/authenticationService";

export const Header = () => {
  const [navLink, setNavLink] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const token = getToken();

    if (token) {
      const userInfo = getUserInfo();
      if (userInfo) {
        var name = JSON.parse(getUserInfo()).name;
        name = name.split(" ").pop();
      }
      setNavLink(name);
    } else {
      setNavLink("Login");
    }
  }, []);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleLogout = (event) => {
    logOut();
    window.location.href = "/login";
  };

  return (
    <header className="header-bar">
      <NavLink to="/home">
        <img src="/assets/img/logo.png" alt="Logo" />
      </NavLink>
      <nav className="nav-menu">
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <div
        className="user-menu"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavLink to={navLink !== "Login" ? "#" : "/login"} className="login-btn">
          {navLink}
        </NavLink>

        {/* Dropdown menu */}
        {navLink !== "Login" && dropdownVisible && (
          <div className="dropdown">
            <NavLink to="/user/user-info">User Info</NavLink>
            <NavLink to="/history">History</NavLink>
            <NavLink onClick={handleLogout}>
              Logout <LogoutIcon />
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};
