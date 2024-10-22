import React, { useState } from "react";
import "./footer.css";
import { SendRequest } from "../request";
import MessageModal from "../message-modal";

export const Footer = () => {
  const [messageModalOpen, setMessageModal] = useState(false);
  const [messageType, setMessageType] = useState(false);
  const [message, setMessage] = useState(
    "Gửi yêu cầu tư vấn thành công, vui lòng kiểm tra email"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleMessageModalClose = () => {
    setMessageModal(false);
  };
  return (
    <footer className="footer">
      <MessageModal
        message={message}
        open={messageModalOpen}
        handleClose={handleMessageModalClose}
        messageType={messageType}
      />
      <div className="footer-subscribe">
        <h3>Đăng ký để nhận nội dung mới nhất từ ​​S-Service</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            SendRequest(
              name,
              email,
              setMessageModal,
              setMessageType,
              setMessage
            );
          }}
        >
          <input
            required
            type="text"
            placeholder="Tên"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button button="submit" className="footer-btn">
            Tư vấn ngay
          </button>
        </form>
      </div>
      <div className="footer-columns">
        <div className="footer-column">
          <h2>Kết nối tới S-Service</h2>
          <div className="social-icons">
            <br></br>
            <a
              href="https://www.facebook.com/profile.php?id=61566307315716"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="/assets/img/facebook.png" alt="Facebook" />
            </a>
            <a
              href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=sservice.ia@gmail.com&tf=1"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="/assets/img/gmail.png" alt="Gmail" />
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
        <div className="footer-column">
          <h2>Về chúng tôi</h2>
          <br></br>
          <p>Giới thiệu</p>
          <br></br>
          <p>Văn hóa S-Service</p>
          <br></br>
          <p>Tuyển dụng</p>
          <br></br>
          <p>Nhân viên</p>
        </div>
        <div className="footer-column">
          <h2>Dịch vụ</h2>
          <br></br>
          <p>Điện toán đám mây</p>
          <br></br>
          <p>Dịch vụ kỹ thuật</p>
          <br></br>
          <p>Dịch vụ dữ liệu</p>
          <br></br>
          <p>Cơ sở hạ tầng CNTT</p>
          <br></br>
          <p>Bảo mật thông tin</p>
        </div>
        <div className="footer-column">
          <h2>Dự án đã thực hiện</h2>
          <br></br>
          <p>Điện toán đám mây</p>
          <br></br>
          <p>Dịch vụ kỹ thuật</p>
          <br></br>
          <p>Dịch vụ dữ liệu</p>
          <br></br>
          <p>Báo cáo thường niên</p>
        </div>
      </div>
    </footer>
  );
};
