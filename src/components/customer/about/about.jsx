import React from "react";
import "./about.css";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";

const ImageWithText = ({ imageUrl, hoverText, className }) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={imageUrl} alt="Example" className="hover-image" />
      <div className="hover-text">{hoverText}</div>
    </div>
  );
};

const Project = () => {
  return (
    <section className="main-section">
      <h1>Giới thiệu</h1>
      <p>
      Bạn đang tìm cách bảo vệ dữ liệu cá nhân, doanh nghiệp? Chúng tôi cung cấp các giải pháp bảo mật toàn diện, từ tư vấn an toàn thông tin đến các dịch vụ kiểm tra lỗ hổng, giúp bạn yên tâm hơn khi sử dụng internet.
      </p>
      <br />
      <p>S-Service xây dựng đội ngũ cán bộ quản lý điều hành tài giỏi, có bản lĩnh. S-Service có đội ngũ chuyên gia với nhiều năm kinh nghiệm thực tiễn.</p>
    </section>
  );
};

export const OurService = () => {
  return (
    <section>
      <h2 className="service-title">Dịch Vụ Của Chúng Tôi</h2>
      <div className="about">
        <div className="image-grid">
          <ImageWithText
            imageUrl="/assets/img/about2.png"
            hoverText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            className="about-img-2"
          />
          <ImageWithText
            imageUrl="/assets/img/about3.png"
            hoverText="Vivamus lacinia odio vitae vestibulum vestibulum."
            className="about-img-3"
          />
          <ImageWithText
            imageUrl="/assets/img/about4.png"
            hoverText="Cras vehicula, mi quis vehicula ornare, eros dolor interdum nulla."
            className="about-img-4"
          />
          <ImageWithText
            imageUrl="/assets/img/about5.png"
            hoverText="Donec bibendum lorem sed consequat auctor."
            className="about-img-5"
          />
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div className="app">
      <Header />
      <Project />
      <h2 className="service-title">Dịch Vụ Của Chúng Tôi</h2>
      <div className="about">
        <div className="image-grid">
          <ImageWithText
            imageUrl="/assets/img/about2.png"
            hoverText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            className="about-img-2"
          />
          <ImageWithText
            imageUrl="/assets/img/about3.png"
            hoverText="Vivamus lacinia odio vitae vestibulum vestibulum."
            className="about-img-3"
          />
          <ImageWithText
            imageUrl="/assets/img/about4.png"
            hoverText="Cras vehicula, mi quis vehicula ornare, eros dolor interdum nulla."
            className="about-img-4"
          />
          <ImageWithText
            imageUrl="/assets/img/about5.png"
            hoverText="Donec bibendum lorem sed consequat auctor."
            className="about-img-5"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
