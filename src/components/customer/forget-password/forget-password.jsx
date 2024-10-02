import React, { useState } from "react";
import "./forget-password.css";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import Loading from "../../common/loading";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOTPOpen, setIsModalOTPOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);


  const handleCheckOTP = (event) => {
    event.preventDefault();
    setLoading(true)
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
        setLoading(false)
        console.log("Response body:", data);
        if (data.result === true) {
          setErrorMessage("Please check your email to get new password"); // Open the modal if passwords don't match
          return;
        } else {
          setErrorMessage(
            "Something went wrong, please try again with correct email!"
          );
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const closeModalOTP = () => {
    setIsModalOTPOpen(false);
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
        setLoading(false)
        console.log("Response body:", data);
        if (data.result === true) {
          setIsModalOTPOpen(true); // Open the modal if passwords don't match
          return;
        } else {
          setErrorMessage(
            "Something went wrong, please try again with correct email!"
          );
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="app">
      <div className="login-page">
        <Header />
        {loading && <Loading />}
        <form className="container" component="form" onSubmit={handleSubmit}>
          {errorMessage && (
            <p className="error-message input-container">{errorMessage}</p>
          )}
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
      {isModalOTPOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModalOTP}>
              &times;
            </span>
            <form
              className="container"
              component="form"
              onSubmit={handleCheckOTP}
            >
              {errorMessage && (
                <p className="error-message input-container">{errorMessage}</p>
              )}
              <div className="input-container">
                <label>Email</label>
                <input value={email} type="text" placeholder="Email" readOnly />
              </div>
              <div className="input-container">
                <label>Nhập OTP</label>
                <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  type="text"
                  placeholder="OTP"
                />
              </div>

              <button type="submit" className="login-btn-2">
                Nhận Mật Khẩu Mới
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgetPassword;
