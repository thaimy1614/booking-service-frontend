import React, { useEffect, useState } from "react";
import "./login.css";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import { getToken, setToken } from "../../../services/localStorageService";
import { useNavigate } from "react-router-dom";
import { OAuthConfig } from "../../../configurations/configuration";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log("Username:", username);
    console.log("Password:", password);
    fetch("http://localhost:8080/api/identity/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Response body:", data);
        setToken(data.result.token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error)
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
            <div className="forgot-password">Forgot password</div>
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
