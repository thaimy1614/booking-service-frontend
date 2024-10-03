import React, { useEffect, useState } from "react";
import "./signup.css";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import { getToken } from "../../../services/localStorageService";
import { useNavigate } from "react-router-dom";
import Loading from "../../common/loading";
import MessageModal from "../../common/message-modal";

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [messageType, setMessageType] = useState(true);
  const [successMessage, setSuccessMessage] = useState(
    "Đăng ký thành công, vui lòng kiểm tra email để xác thực tài khoản!"
  );
  const [failMessage, setFailMessage] = useState("Tài khoản đã tồn tại!");

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
    setLoading(true);
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
        console.log(data)
        setLoading(false);
        switch(data.code){
          case 1000:
            setMessageType(true);
            setSuccessMessage("Đăng ký thành công, vui lòng kiểm tra email để xác thực tài khoản!");
            setModalOpen(true);
            break;
          default:
            setMessageType(false);
            setFailMessage("Username hoặc Email đã tồn tại!");
            setModalOpen(true);
            break;
        }
      })
      .catch((error) => {
        setLoading(false);
        setMessageType(false);
        setFailMessage("Đã có lỗi xảy ra, vui lòng thử lại");
        setModalOpen(true);
        console.log(error);
      });
  };

  const [selectedUser] = useState("Customer");
  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <div className="app">
      <div className="login-page">
        <Header />
        {loading && <Loading />} {/* Show loading component when loading */}
        <form component="form" onSubmit={handleSubmit} className="container">
          <div className="header-login">
            <div
              className={`user-type ${
                selectedUser === "Customer" ? "active" : ""
              }`}
            >
              Đăng Ký
            </div>
          </div>
          <div className="input-container">
            <label>Tên đăng nhập</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Tên đăng nhập"
              required
            />
          </div>
          <div className="input-container">
            <label>Mật khẩu</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Mật khẩu"
              required
            />
          </div>
          {/* <div className="input-container">
            <label>Confirm Password</label>
            <input  type="password" placeholder="Confirm Password" required />
          </div> */}

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
            />
          </div>

          <button type="submit" className="login-btn-2">
            Đăng Ký
          </button>
        </form>
      </div>
      {modalOpen && (
        <MessageModal
          message={messageType ? successMessage : failMessage}
          open={modalOpen}
          handleClose={handleClose}
          messageType={messageType}
        />
      )}
      <Footer />
    </div>
  );
}

export default Signup;
