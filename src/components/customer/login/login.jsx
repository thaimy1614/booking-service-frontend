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
import MessageModal from "../../common/message-modal";
import Loading from "../../common/loading";

export const fetchUserInfo = async () => {
  
  try {
    const response = await fetch(process.env.REACT_APP_API + "/user/profile", {
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
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [messageType] = useState(false);
  const [failMessage, setFailMessage] = useState("INCORRECT USERNAME OR PASSWORD!");

  const handleClick = () => {
    setModalOpen(false);
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
    setModalOpen(false);
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        process.env.REACT_APP_API + "/identity/auth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: username,
            password: password,
          }),
        }
      );
      setLoading(false);
      const data = await response.json();
      switch(data.code){
        case 1005:
          setFailMessage("Tài khoản không tồn tại!");
          setModalOpen(true);
          return;
        case 1008:
          setFailMessage("Tên đăng nhập hoặc mật khẩu không chính xác!");
          setModalOpen(true);
          return;
        case 1016:
          setFailMessage("Tài khoản chưa được xác thực, vui lòng kiểm tra email!");
          setModalOpen(true);
          return;
        default:
          break;
      }
      if (response.ok) {
        console.log("Response body:", data);
        setToken(data.result.token); // Save the token to local storage

        // Fetch user info after successful login and wait for the result
        const userInfo = await fetchUserInfo();

        if (userInfo) {
          navigate("/home"); // Navigate to home after fetching user info
        } else {
          console.error("Failed to retrieve user info.");
          setFailMessage("Something went wrong, please try again!")
          setModalOpen(true);
        }
      } else {
        console.error("Login failed", data);
        setModalOpen(true);
      }
    } catch (error) {
      setLoading(false);
      console.error("Login error:", error);
      setFailMessage("Đã có lỗi xảy ra, vui lòng thử lại!")
      setModalOpen(true);
    }
  };

  const [selectedUser, setSelectedUser] = useState("Customer");

  const handleUserTypeClick = (userType) => {
    setSelectedUser(userType);
  };
  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <div className="app">
      <div className="login-page">
        <Header />
        {loading && <Loading />}
        <form className="container" component="form" onSubmit={handleSubmit}>
          <div className="header-login">
            <div
              className={`user-type ${
                selectedUser === "Customer" ? "active" : ""
              }`}
              onClick={() => handleUserTypeClick("Customer")}
            >
              Login
            </div>
            
          </div>

          <div className="input-container">
            <label>Email hoặc Tên đăng nhập</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Email hoặc Tên đăng nhập"
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
          <div className="options">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Lưu mật khẩu</label>
            </div>
            <NavLink to={"/user/forget-password"} className="forgot-password">
              Quên mật khẩu
            </NavLink>
          </div>
          <button className="google-signin" onClick={handleClick}>
            <img src="/assets/img/google.png" alt="Google" />
            Đăng Nhập Với Google
          </button>
          <button type="submit" className="login-btn-2">
            Đăng Nhập
          </button>
          <button
            onClick={() => {
              window.location.href = "/signup";
            }}
            className="login-btn-2"
          >
            Đăng Ký
          </button>
        </form>
      </div>
      {modalOpen && (
        <MessageModal
          message={failMessage}
          open={modalOpen}
          handleClose={handleClose}
          messageType={messageType}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
