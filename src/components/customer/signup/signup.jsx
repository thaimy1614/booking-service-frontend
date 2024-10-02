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
  const [messageType, setMessageType] = useState("success");
  const [successMessage] = useState(
    "SIGNUP SUCCESSFULLY, PLEASE CHECK YOUR EMAIL TO VERIFY ACCOUNT"
  );
  const [failMessage, setFailMessage] = useState("ACCOUNT ALREADY EXISTS");

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
        setLoading(false);
        if (data.result.success != null) {
          if (data.result.success) {
            setMessageType("success");
          } else {
            setMessageType("fail");
          }
          setModalOpen(true);
        }
      })
      .catch((error) => {
        setLoading(false);
        setMessageType(false);
        setFailMessage("Something went wrong, please try again!")
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
              Sign Up
            </div>
          </div>

          <p
            id="success"
            className="message"
            style={{ color: "greenyellow" }}
            hidden
          >
            Please check your email to verify account!
          </p>
          <p id="fail" className="message" style={{ color: "red" }} hidden>
            Account already exists!
          </p>

          <div className="input-container">
            <label>Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          {/* <div className="input-container">
            <label>Confirm Password</label>
            <input  type="password" placeholder="Confirm Password" required />
          </div> */}

          <div className="input-container">
            <label>Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
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
            <label>Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Address"
            />
          </div>
          <div className="input-container">
            <label>Phone Number</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Phone Number"
            />
          </div>

          <button type="submit" className="login-btn-2">
            SIGN UP
          </button>
        </form>
      </div>
      {modalOpen && (
        <MessageModal
          message={messageType === "success" ? successMessage : failMessage}
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
