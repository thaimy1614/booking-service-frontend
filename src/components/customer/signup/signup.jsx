import React, { useEffect, useState } from "react";
import "./signup.css";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import { getToken } from "../../../services/localStorageService";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getToken();

    if (accessToken) {
      navigate("/");
    }
  }, [navigate]);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "/identity/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        username: username,
        address: address,
        phone: phone,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.result.success != null) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [selectedUser, setSelectedUser] = useState("Customer");

  const handleUserTypeClick = (userType) => {
    setSelectedUser(userType);
  };
  return (
    <div className="app">
      <div className="login-page">
        <Header />
        <form component="form" onSubmit={handleSubmit} className="container">
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

          <p
            id="success"
            className="message"
            style={{ color: "greenyellow" }}
            hidden
          >
            Please check your email to verify account!
          </p>
          <p id="fail" className="message" style={{ color: "red" }} hidden>
            Account already exists!
          </p>

          <div className="input-container">
            <label>Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          {/* <div className="input-container">
            <label>Confirm Password</label>
            <input  type="password" placeholder="Confirm Password" required />
          </div> */}

          <div className="input-container">
            <label>Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="input-container">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              required
            />
          </div>
          <div className="input-container">
            <label>Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Address"
            />
          </div>
          <div className="input-container">
            <label>Phone Number</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Phone Number"
            />
          </div>

          <button type="submit" className="login-btn-2">
            SIGN UP
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
