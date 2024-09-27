import React, { useState } from "react";
import "./change-password.css";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../../services/localStorageService";
import { useEffect } from "react";

function ChangePassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reEnter, setReEnter] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const accessToken = getToken();

  useEffect(() => {
    const accessToken = getToken();

    if (!accessToken) {
      navigate("/login");
    }
  }, [navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newPassword !== reEnter) {
      setErrorMessage("New Password and Re-enter New Password do not match"); // Set error message
      return;
    } else {
      setErrorMessage(""); // Clear error message if passwords match
    }

    fetch("http://localhost:8080/api/identity/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        oldPassword: password,
        newPassword: newPassword,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Response body:", data);
        if (data.result === true) {
          setErrorMessage("Change password successfully!");
        } else {
          setErrorMessage(
            "Something went wrong, please try again with correct password"
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <div className="login-page">
        <Header />
        <form className="container" component="form" onSubmit={handleSubmit}>
          {errorMessage && (
            <p className="error-message input-container">{errorMessage}</p>
          )}
          <div className="input-container">
            <label>Old Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Old Password"
            />
          </div>
          <div className="input-container">
            <label>New Password</label>
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              placeholder="New Password"
            />
          </div>
          <div className="input-container">
            <label>Re-enter New Password</label>
            <input
              value={reEnter}
              onChange={(e) => setReEnter(e.target.value)}
              type="password"
              placeholder="Re-enter New Password"
            />
          </div>
          <button type="submit" className="login-btn-2">
            Change Password
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ChangePassword;
