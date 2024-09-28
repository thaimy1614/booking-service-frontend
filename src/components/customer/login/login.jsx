import React, { useEffect, useState } from "react";
import "./login.css";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import {
  getToken,
  setToken,
  setUserInfo,
} from "../../../services/localStorageService";
import { NavLink, useNavigate } from "react-router-dom";
import { OAuthConfig } from "../../../configurations/configuration";

export const fetchUserInfo = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_API+"/user/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      setUserInfo(JSON.stringify(data.result));
      return data.result;
    } else {
      console.error("Failed to fetch user info");
    }
  } catch (error) {
    console.error("Error fetching user info:", error);
  }
};

function App() {
  const navigate = useNavigate();

  

  const handleClick = () => {
    const callbackUrl = OAuthConfig.redirectUri;
    const authUrl = OAuthConfig.authUri;
    const googleClientId = OAuthConfig.clientId;

    const targetUrl = `${authUrl}?redirect_uri=${encodeURIComponent(
      callbackUrl
    )}&response_type=code&client_id=${googleClientId}&scope=openid%20email%20profile`;

    console.log(targetUrl);

    window.location.href = targetUrl;
  };

  useEffect(() => {
    const accessToken = getToken();

    if (accessToken) {
      navigate("/");
    }
  }, [navigate]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(process.env.REACT_APP_API+"/identity/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Response body:", data);
        setToken(data.result.token); // Save the token to local storage

        // Fetch user info after successful login and wait for the result
        const userInfo = await fetchUserInfo();

        if (userInfo) {
          navigate("/home"); // Navigate to home after fetching user info
        } else {
          console.error("Failed to retrieve user info.");
        }
      } else {
        console.error("Login failed", data);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const [selectedUser, setSelectedUser] = useState("Customer");

  const handleUserTypeClick = (userType) => {
    setSelectedUser(userType);
  };
  return (
    <div className="app">
      <div className="login-page">
        <Header />
        <form className="container" component="form" onSubmit={handleSubmit}>
          <div className="header-login">
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
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Email or Username"
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="options">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Save password</label>
            </div>
            <NavLink to={"/user/forget-password"} className="forgot-password">Forgot password</NavLink>
          </div>
          <button className="google-signin" onClick={handleClick}>
            <img src="/assets/img/google.png" alt="Google" />
            Sign in with Google
          </button>
          <button type="submit" className="login-btn-2">
            LOG IN
          </button>
          <button
            onClick={() => {
              window.location.href = "/signup";
            }}
            className="login-btn-2"
          >
            SIGN UP
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default App;
