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

    const updateUserName = () => {
      if (token) {
        const userInfo = getUserInfo();
        if (userInfo) {
          var name = JSON.parse(userInfo).name;
          name = name.split(" ").pop(); // Show last name
        }
        setNavLink(name);
      } else {
        setNavLink("Đăng Nhập");
      }
    };

    // Call the function initially to set the name on load
    updateUserName();

    // Add an event listener to listen for changes in local storage
    window.addEventListener("storage", updateUserName);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("storage", updateUserName);
    };
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
        <NavLink
          to="/service"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Dịch Vụ
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Tin Tức
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Về Chúng Tôi
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Liên Hệ
        </NavLink>
      </nav>
      <div
        className="user-menu"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavLink
          to={navLink !== "Đăng Nhập" ? "#" : "/login"}
          className="login-btn"
        >
          {navLink}
        </NavLink>

        {/* Dropdown menu */}
        {navLink !== "Đăng Nhập" && dropdownVisible && (
          <div className="dropdown">
            <NavLink to="/user/my-info">Thông tin cá nhân</NavLink>
            <NavLink to="/history">Lịch sử</NavLink>
            <NavLink to="/user/change-password">Đổi mật khẩu</NavLink>
            <NavLink onClick={handleLogout}>
              Đăng xuất <LogoutIcon />
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};
