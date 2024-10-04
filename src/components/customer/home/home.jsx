import React from "react";
import "./home.css";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import { OurService } from "../about/about";
import { MainContent } from "../news/news";
import { Certificates } from "../service/service";

const XEffect = () => {
  return (
    <div className="x-container">
      <div className="x-strip strip-1">
        <img src="/assets/img/x.png" alt="Strip 1" />
      </div>
    </div>
  );
};

const MainSection = () => {
  return (
    <main>
      <section className="main-section">
        <h1>
          <img src="/assets/img/big-logo.png" alt="LOGO"></img>
        </h1>
        <p>Xây dựng đội ngũ chuyên gia am hiểu về bảo mật thông tin</p>
        <button
          onClick={() => {
            window.location.href = "/send-request";
          }}
          className="main-btn"
        >
          Bắt Đầu{" "}
          <FontAwesomeIcon icon={faArrowUpRightDots} size="1x" color="white" />
        </button>
      </section>
    </main>
  );
};

const PricingCard = () => {
  return (
    <div className="non-secu">
      <p>
        Để hạn chế vấn đề mất thông tin, dữ liệu, việc vệ sinh máy tính định kỳ
        cũng vô cùng quan trọng để tránh hư hỏng phần cứng hay bất kỳ bộ phận
        nào của máy tính. Chúng tôi sẽ luôn hỗ trợ khách hàng một cách tốt nhất,
        giá có thể được điều chỉnh trong một số trường hợp đặc biệt.
      </p>
      <h2>FEATURES</h2>
      <ul>
        <div className="non-secu-fea">
          <li>Reinstall window</li>
          <span>100.000 VND</span>
        </div>
        <div className="non-secu-fea">
          <li>Clean computer</li>
          <span>150.000 VND</span>
        </div>
      </ul>
      <button
        onClick={() => {
          window.location.href = "/send-request";
        }}
        className="pricing-btn"
      >
        TƯ VẤN NGAY
      </button>
    </div>
  );
};

const NonSecurityService = () => {
  return (
    <main>
      <section className="main-section">
        <h1>Dịch vụ khác</h1>
        <PricingCard />
      </section>
    </main>
  );
};

function Home() {
  return (
    <div className="app">
      <Header />
      <MainSection />
      <XEffect />
      <OurService />
      <MainContent />
      <NonSecurityService />
      <Certificates />
      <Footer />
    </div>
  );
}

export default Home;
