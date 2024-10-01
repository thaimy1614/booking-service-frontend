import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-subscribe">
        <h3>Sign up to receive the latest content from TRACKY</h3>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button className="footer-btn">Consult now</button>
      </div>
      <div className="footer-columns">
        <div className="footer-column">
        <h2>Kết nối tới S-Service</h2>
          <div className="social-icons">
            <br></br>
            <a href="https://www.facebook.com/profile.php?id=61566307315716" target="_blank" rel="noreferrer noopener"><img src="/assets/img/facebook.png" alt="Facebook" /></a>
            <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=sservice.ia@gmail.com&tf=1" target="_blank" rel="noreferrer noopener"><img src="/assets/img/gmail.png" alt="Gmail" /></a>
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
