import React, { useState } from "react";
import "./forget-password.css";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import Loading from "../../common/loading";
import FormModal from "../../common/form-modal";
import MessageModal from "../../common/message-modal";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isModalOTPOpen, setIsModalOTPOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageModalOpen, setMessageModal] = useState(false);
  const [messageType, setMessageType] = useState(false);
  const [message, setMessage] = useState(
    "Vui lòng kiểm tra email, sau đó nhập OTP"
  );

  const checkOTPFormData = {
    title: "Nhập OTP",
    fields: [
      {
        value: email,
        label: "Email",
        name: "email",
        required: true,
        onChange: (e) => setEmail(e.target.value),
        disable: true,
      },
      {
        value: otp,
        label: "OTP",
        name: "OTP",
        type: "text",
        required: true,
        onChange: (e) => setOtp(e.target.value),
      },
    ],
    submitText: "Nhận Mật Khẩu Mới",
  };

  const handleCheckOTP = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch(process.env.REACT_APP_API + "/identity/forget-password/check-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify({
        email: email,
        otp: otp,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        console.log("Response body:", data);
        if (data.result === true) {
          setIsModalOTPOpen(false);
          setMessageType(true);
          setMessage("Mật khẩu mới đã được cập nhật, vui lòng kiểm tra email!");
          setMessageModal(true);
          return;
        } else {
          setIsModalOTPOpen(true);
          setMessageType(false);
          setMessage("OTP không chính xác, vui lòng thử lại!");
          setMessageModal(true);
        }
      })
      .catch((error) => {
        setIsModalOTPOpen(false);
        setLoading(false);
        setMessageType(false);
        setMessage("Đã có lỗi xảy ra, vui lòng thử lại!");
        setMessageModal(true);
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch(process.env.REACT_APP_API + "/identity/forget-password/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        console.log("Response body:", data);
        if (data.result === true) {
          setMessageType(true);
          setMessage("Vui lòng kiểm tra email, sau đó nhập OTP");
          setIsModalOTPOpen(true);
          setMessageModal(true);
          return;
        } else {
          setMessageType(false);
          setMessage("Email không tồn tại, vui lòng nhập lại chính xác");
          setMessageModal(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setMessageType(false);
        setMessage("Đã có lỗi xảy ra, vui lòng thử lại!");
        setMessageModal(true);
      });
  };

  const handleFormModalClose = () => {
    setIsModalOTPOpen(false);
    setLoading(false);
    setMessageModal(false);
  };
  const handleMessageModalClose = () => {
    setLoading(false);
    setMessageModal(false);
  };

  return (
    <div className="app">
      <div className="login-page">
        <Header />
        {loading && <Loading />}
        <form className="container" component="form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
          </div>

          <button type="submit" className="login-btn-2">
            Get OTP
          </button>
        </form>
      </div>
      <Footer />
      {messageModalOpen && (
        <MessageModal
          message={message}
          open={messageModalOpen}
          handleClose={handleMessageModalClose}
          messageType={messageType}
        />
      )}
      {isModalOTPOpen && (
        <FormModal
          handleClose={handleFormModalClose}
          open={isModalOTPOpen}
          formData={checkOTPFormData}
          onSubmit={handleCheckOTP}
        />
      )}
    </div>
  );
}

export default ForgetPassword;
