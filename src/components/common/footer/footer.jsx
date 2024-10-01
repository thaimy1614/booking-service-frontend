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
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61566307315716" target="_blank" rel="noreferrer noopener"><img src="/assets/img/facebook.png" alt="Facebook" /></a>
            <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=sservice.ia@gmail.com&tf=1" target="_blank" rel="noreferrer noopener"><img src="/assets/img/gmail.png" alt="Gmail" /></a>
            
            
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
