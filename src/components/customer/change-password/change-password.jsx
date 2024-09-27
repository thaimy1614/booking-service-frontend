import React, { useState } from "react";
import "./change-password.css";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import { useNavigate } from "react-router-dom";

function ChangePassword() {

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reEnter, setReEnter] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify({
        password: password,
        newPassword: newPassword,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Response body:", data);
        if(data.result.success===true){
          setErrorMessage("Change password successfully!");
        }
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <div className="app">
      <div className="login-page">
        <Header />
        <form className="container" component="form" onSubmit={handleSubmit}>
        {errorMessage && <p className="error-message input-container">{errorMessage}</p>}
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
