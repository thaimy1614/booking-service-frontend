import React, { useState } from "react";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import "./request.css";

const SupportForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    position: "",
    company: "",
    subject: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Tư vấn qua email</h2>
      <form onSubmit={handleSubmit} className="support-form">
        <label>
          Tên
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email*
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Số điện thoại*
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Địa chỉ*
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Công ty*
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Chủ thể*
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Chi tiết yêu cầu
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </label>
        <button type="submit">Gửi Yêu Cầu</button>
      </form>
      <h2>Tư vấn qua mạng xã hội</h2>
      <div>
        <a
          href="https://www.facebook.com/profile.php?id=61566307315716"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="/assets/img/facebook.png" alt="Facebook" />
        </a>

        <a
          href="https://www.instagram.com/sservice.it?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="/assets/img/instagram.png" alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <main>
      <section className="main-section">
        <h1>Bạn cần tư vấn về dịch vụ?</h1>
        <p>Hãy liên hệ chúng tôi qua các kênh sau</p>
      </section>
      <section className="pricing-section">
        <SupportForm />
      </section>
    </main>
  );
};

const Request = () => {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Request;
