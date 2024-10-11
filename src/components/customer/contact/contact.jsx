import React, { useState } from "react";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import "./contact.css";
import MessageModal from "../../common/message-modal";
import { SendRequest } from "../../common/request";

const SupportForm = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phoneNumber: '',
      position: '',
      company: '',
      subject: '',
      details: ''
    });

    const [messageModalOpen, setMessageModal] = useState(false);
  const [messageType, setMessageType] = useState(false);
  const [message, setMessage] = useState(
    "Vui lòng kiểm tra email, sau đó nhập OTP"
  );
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      SendRequest(formData.fullName, formData.email, setMessageModal, setMessageType, setMessage)
      
    };

    const handleMessageModalClose = () => {
      setMessageModal(false);
    };
  
  
    return (
      <div className="form-container">
        <h2>Gửi yêu cầu hỗ trợ</h2>
        <form onSubmit={handleSubmit} className="support-form">
          <label>
            Tên
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
          </label>
          <label>
            Email*
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Số điện thoại*
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </label>
          <label>
            Địa chỉ*
            <input type="text" name="position" value={formData.position} onChange={handleChange} required />
          </label>
          <label>
            Công ty*
            <input type="text" name="company" value={formData.company} onChange={handleChange} required />
          </label>
          <label>
            Chủ thể*
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
          </label>
          <label>
            Chi tiết yêu cầu
            <textarea name="details" value={formData.details} onChange={handleChange} rows="4"></textarea>
          </label>
          <button type="submit">Gửi Yêu Cầu</button>
        </form>
        {messageModalOpen && (
        <MessageModal
          message={message}
          open={messageModalOpen}
          handleClose={handleMessageModalClose}
          messageType={messageType}
        />
      )}
      </div>
    );
  };
  


const MainContent = () => {
  return (
    <main>
      <section className="main-section">
        <h1>Bạn cần hỗ trợ gì?</h1>
        <p>
          Vui lòng cho chúng tôi biết chính xác vấn đề bạn đang gặp phải. Đội hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ.
        </p>
      </section>
      <section className="pricing-section">
        <h2>Quá trình hỗ trợ</h2>
        <img className="process" alt="process" src="/assets/img/process.png"/>
      </section>
      <section className="pricing-section">
        <SupportForm />
      </section>
    </main>
  );
};


const Contact= () => {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Contact;
