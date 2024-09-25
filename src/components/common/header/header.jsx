import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
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
      <NavLink to="/login" className="login-btn">
        Login
      </NavLink>
    </header>
  );
};