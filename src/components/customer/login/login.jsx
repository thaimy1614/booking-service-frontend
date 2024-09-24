import React, { useState } from "react";
import "./login.css";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";

function App() {
  const [selectedUser, setSelectedUser] = useState("Customer");

  const handleUserTypeClick = (userType) => {
    setSelectedUser(userType);
  };
  return (
    <div className="app">
      <div className="app">
        <Header />
        <div className="container">
          <div className="header">
            <div
              className={`user-type ${
                selectedUser === "Customer" ? "active" : ""
              }`}
              onClick={() => handleUserTypeClick("Customer")}
            >
              Customer
            </div>
            <div
              className={`user-type ${
                selectedUser === "Admin" ? "active" : ""
              }`}
              onClick={() => handleUserTypeClick("Admin")}
            >
              Admin
            </div>
          </div>
          <div className="input-container">
            <label>Email or Username</label>
            <input type="text" placeholder="Email or Username" />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="options">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Save password</label>
            </div>
            <div className="forgot-password">Forgot password</div>
          </div>
          <button className="google-signin">
            <img src="/assets/img/google.png" alt="Google" />
            Sign in with Google
          </button>
          <button className="login-btn">LOG IN</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
