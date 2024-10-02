import React from "react";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import "./service.css";

const MainContent = () => {
  return (
    <main>
      <section className="main-section">
        <h1>DỊCH VỤ CỦA CHÚNG TÔI</h1>
        <p>
        Dưới đây là các dịch vụ của chúng tôi, chúng tôi sẽ tư vấn thêm nếu bạn cần biết đầy đủ chính sách và thông tin.
        </p>
        <button className="main-btn">Tư vấn ngay</button>
      </section>
      <section className="pricing-section">
        <div className="pricing-cards">
          <PricingCard
            title="STARTER"
            description="Professional Logo For New Business"
            items={[
              "Brand Research",
              "Online Survey",
              "Customer Research",
              "Strategic Consulting",
              "02 Design Concepts",
              "02 Designers Participated",
              "02 Revisions",
              "Brief Online Survey",
              "Logo Meaning Analysis",
              "Logo Original File",
            ]}
          />
          <PricingCard
            title="PRO"
            description="For Small Business, Big Brand"
            items={[
              "Brand Research",
              "Online Survey",
              "Customer Research",
              "Strategic Consulting",
              "02 Design Concepts",
              "02 Designers Participated",
              "02 Revisions",
              "Brief Online Survey",
              "Logo Meaning Analysis",
              "Logo Original File",
            ]}
          />
          <PricingCard
            title="INTERPRISE"
            description="For Big brand, Corporation, Group"
            items={[
              "Brand Research",
              "Online Survey",
              "Customer Research",
              "Strategic Consulting",
              "02 Design Concepts",
              "02 Designers Participated",
              "02 Revisions",
              "Brief Online Survey",
              "Logo Meaning Analysis",
              "Logo Original File",
            ]}
          />
        </div>
      </section>
    </main>
  );
};

const PricingCard = ({ title, description, items }) => {
  return (
    <div className="pricing-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button className="pricing-btn">XEM CHI TIẾT</button>
    </div>
  );
};

export const Certificates = () => {
  return (
    <section className="certificates">
      <h2>Certificate</h2>
      <div>
        <img src="/assets/img/certificate.png" alt="Certificate" />
      </div>
    </section>
  );
};

const Service = () => {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Service;
