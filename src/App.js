import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Certificates />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <a href="/home">
        <img src="/assets/img/logo.png" alt="Logo" />
      </a>
      <nav className="nav-menu">
        <a href="/service">Service</a>
        <a href="/news">News</a>
        <a href="/about">About us</a>
        <a href="/contact">Contact</a>
      </nav>
      <a href="/login" className="login-btn">
        Login
      </a>
    </header>
  );
};

const MainContent = () => {
  return (
    <main>
      <section className="main-section">
        <h1>BRAND STRATEGY CONSULTING</h1>
        <p>
          Support businesses in developing an overall brand strategy that is
          consistent with their business model.
        </p>
        <button className="main-btn">Consult now</button>
      </section>
      <section className="pricing-section">
        <h2>Brand strategy consulting includes</h2>
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
      <a href="/service/buy" className="pricing-btn">Consult now</a>
    </div>
  );
};

const Certificates = () => {
  return (
    <section className="certificates">
      <h2>Certificate</h2>
      <div>
        <img src="/assets/img/certificate.png" alt="Certificate" />
      </div>
    </section>
  );
};

const Footer = () => {
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
          <h2>Address</h2>
          <br></br>
          <p>VP HCM</p>
          <br></br>
          <p>8th Floor, More Building, 36 Mac Dinh Chi, District 1</p>
          <br></br>
          <div className="social-icons">
            <img src="/assets/img/gmail.png" alt="Gmail" />
            <img src="/assets/img/facebook.png" alt="Facebook" />
          </div>
        </div>
        <div className="footer-column">
          <h2>About Us</h2>
          <br></br>
          <p>About Tracky</p>
          <br></br>
          <p>Tracky Culture</p>
          <br></br>
          <p>Recruitment</p>
          <br></br>
          <p>Human Resources</p>
        </div>
        <div className="footer-column">
          <h2>Services Provided</h2>
          <br></br>
          <p>Brand Consulting</p>
          <br></br>
          <p>Brand Design</p>
          <br></br>
          <p>Digital Brand Identity</p>
          <br></br>
          <p>Packaging and Labeling</p>
          <br></br>
          <p>New Branding</p>
          <br></br>
          <p>Communication Plan</p>
          <br></br>
          <p>Digital Marketing</p>
        </div>
        <div className="footer-column">
          <h2>Project Implementation</h2>
          <br></br>
          <p>Logo</p>
          <br></br>
          <p>Naming / Slogan</p>
          <br></br>
          <p>Identity</p>
          <br></br>
          <p>Web / App</p>
          <br></br>
          <p>Packaging</p>
          <br></br>
          <p>Catalouge / Profile</p>
          <br></br>
          <p>Annual Report</p>
        </div>
      </div>
    </footer>
  );
};

export default App;
