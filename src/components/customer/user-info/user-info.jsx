import React, { useEffect, useState } from "react";
import "./user-info.css";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import {
  getToken,
  getUserInfo
} from "../../../services/localStorageService";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchUserInfo } from "../login/login";
import MessageModal from "../../common/message-modal";

function UserInfo() {
  const navigate = useNavigate();
  const [messageModalOpen, setMessageModal] = useState(false);
  const [messageType, setMessageType] = useState(false);
  const [message, setMessage] = useState("Đổi thông tin tài khoản thành công!");

  useEffect(() => {
    const accessToken = getToken();

    if (accessToken == null) {
      navigate("/login");
    } else {
      var userInfo = getUserInfo();

      if (!userInfo) {
        fetchUserInfo();
      }
      userInfo = getUserInfo();
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

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({
        email: email,
        name: name,
        address: address,
        phone: phone,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.result != null) {
          setName(data.result.name);
          setAddress(data.result.address);
          setEmail(data.result.email);
          setPhone(data.result.phone);
          setMessageType(true);
          setMessage("Đổi thông tin cá nhân thành công!");
          localStorage.setItem("userInfo", JSON.stringify(data.result));

          // Trigger event for header update
          window.dispatchEvent(new Event("storage"));
          setMessageModal(true);
        } else {
          setMessageType(false);
          setMessage("Đổi thông tin cá nhân thất bại!");
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
  };

  return (
    <div className="app">
      <div className="login-page">
        <Header />
        <form onSubmit={handleSubmit} component="form" className="container">
          <div className="input-container">
            <label>Họ và tên</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Họ và tên"
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
              disabled
            />
          </div>
          <div className="input-container">
            <label>Địa chỉ</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Địa chỉ"
            />
          </div>
          <div className="input-container">
            <label>Số điện thoại</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Số điện thoại"
              disabled
            />
          </div>

          <button type="submit" className="login-btn-2">
            Cập Nhật Thông Tin Cá Nhân
          </button>
          <NavLink to={"/home"} className="login-btn-2 back-home-btn">
            Quay Về Trang Chủ
          </NavLink>
        </form>
      </div>
      {messageModalOpen && (
        <MessageModal
          message={message}
          open={messageModalOpen}
          handleClose={handleMessageModalClose}
          messageType={messageType}
        />
      )}
      <Footer />
    </div>
  );
}

export default UserInfo;
