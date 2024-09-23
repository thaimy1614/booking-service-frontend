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

const About = () => {
  return (
    <div className="app">
      <Header />
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
