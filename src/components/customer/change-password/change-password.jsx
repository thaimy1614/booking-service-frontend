import React, { useState } from "react";
import "./change-password.css";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../../services/localStorageService";
import { useEffect } from "react";
import MessageModal from "../../common/message-modal";

function ChangePassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reEnter, setReEnter] = useState("");
  const [messageModalOpen, setMessageModal] = useState(false);
  const [messageType, setMessageType] = useState(false);
  const [message, setMessage] = useState("Đổi mật khẩu thành công!");

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
      setMessageType(false);
      setMessage("Mật khẩu mới không trùng khớp!");
      setMessageModal(true);
      return;
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
          setMessageType(true);
          setMessage("Đổi mật khẩu thành công!");
          setMessageModal(true);
        } else {
          setMessageType(false);
          setMessage("Mật khẩu không chính xác!");
          setMessageModal(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setMessageType(false);
          setMessage("Đã có lỗi xảy ra, vui lòng thử lại!");
          setMessageModal(true);
      });
  };

  const handleMessageModalClose = () => {
    setMessageModal(false);
  }

  return (
    <div className="app">
      <div className="login-page">
        <Header />
        {messageModalOpen && (
        <MessageModal
          message={message}
          open={messageModalOpen}
          handleClose={handleMessageModalClose}
          messageType={messageType}
        />
      )}
        <form className="container" component="form" onSubmit={handleSubmit}>
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
