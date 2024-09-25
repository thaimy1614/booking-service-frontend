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

          <p id="success" className="message" style={{ color: "greenyellow" }} hidden>
            Please check your email to verify account!
          </p>
          <p id="fail" className="message" style={{ color: "red" }} hidden>
            Account already exists!
          </p>

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
          
          <button type="submit" className="login-btn-2">SIGN UP</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
