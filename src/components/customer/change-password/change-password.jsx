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
      setErrorMessage("Mật khẩu mới chưa trùng khớp"); // Set error message
      return;
    } else {
      setErrorMessage(""); // Clear error message if passwords match
    }

    fetch(process.env.REACT_APP_API + "/identity/change-password", {
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
          setErrorMessage("Đổi mật khẩu thành công!");
        } else {
          setErrorMessage(
            "Vui lòng thử lại với mật khẩu chính xác"
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
            <label>Mật khẩu hiện tại</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Old Password"
            />
          </div>
          <div className="input-container">
            <label>Mật khẩu mới</label>
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              placeholder="New Password"
            />
          </div>
          <div className="input-container">
            <label>Nhập lại mật khẩu mới</label>
            <input
              value={reEnter}
              onChange={(e) => setReEnter(e.target.value)}
              type="password"
              placeholder="Re-enter New Password"
            />
          </div>
          <button type="submit" className="login-btn-2">
            Đổi Mật Khẩu
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ChangePassword;
