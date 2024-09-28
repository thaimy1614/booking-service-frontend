import React, { useEffect, useState } from "react";
import "./user-info.css";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import { getToken, getUserInfo } from "../../../services/localStorageService";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchUserInfo } from "../login/login";

function UserInfo() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getToken();

    if (accessToken==null) {
      navigate("/login");
    } else {
      const userInfo = getUserInfo();

      if (!userInfo) {
        fetchUserInfo();
      }
      var info = JSON.parse(userInfo);
      setName(info.name);
      setEmail(info.email);
      setAddress(info.address);
      setPhone(info.phone);
    }
  }, [navigate]);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch("http://localhost:8080/api/identity/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json", // Set the content type to JSON
//       },
//       body: JSON.stringify({
//         email: email,
//         password: password,
//         name: name,
//         username: username,
//         address: address,
//         phone: phone,
//       }),
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         if (data.result.success != null) {
//           navigate("/login");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

  return (
    <div className="app">
      <div className="login-page">
        <Header />
        <form component="form" className="container">
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
            Change Information
          </button>
          <NavLink to={"/home"} className="login-btn-2 back-home-btn">
            Back To Home
          </NavLink>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default UserInfo;
