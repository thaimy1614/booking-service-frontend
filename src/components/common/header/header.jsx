import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <a href="/home">
        <img src="/assets/img/logo.png" alt="Logo" />
      </a>
      <nav className="nav-menu">
        <a href="/service">Service</a>
        <a href="/news">News</a>
        <a href="/about">About us</a>
        <a href="/contact">Contact</a>
      </nav>
      <a href="/login" className="login-btn">
        Login
      </a>
    </header>
  );
};