import React, { useState } from "react";
import "./signup.css";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";

function Signup() {
  const [selectedUser, setSelectedUser] = useState("Customer");

  const handleUserTypeClick = (userType) => {
    setSelectedUser(userType);
  };
  return (
    <div className="app">
      <div className="login-page">
        <Header />
        <div className="container">
          <div className="header-login">
            <div
              className={`user-type ${
                selectedUser === "Customer" ? "active" : ""
              }`}
              onClick={() => handleUserTypeClick("Customer")}
            >
              Sign Up
            </div>
          </div>
          
          <div className="input-container">
            <label>Username</label>
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input type="password" placeholder="Password" required />
          </div>
          <div className="input-container">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <div className="input-container">
            <label>Email</label>
            <input type="text" placeholder="Email" required />
          </div>
          <div className="input-container">
            <label>Address</label>
            <input type="text" placeholder="Address" />
          </div>
          <div className="input-container">
            <label>Phone Number</label>
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="options">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Save password</label>
            </div>
            <div className="forgot-password">Forgot password</div>
          </div>
          <button className="login-btn-2">SIGN UP</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
