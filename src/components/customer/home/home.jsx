import React from "react";
import "./home.css";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots} from '@fortawesome/free-solid-svg-icons'
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
        <h1><img src="/assets/img/big-logo.png" alt="LOGO"></img></h1>
        <p>
        Builds a team of experts knowledge about information security 
        </p>
        <button className="main-btn">GET START <FontAwesomeIcon icon={faArrowUpRightDots} size="1x" color="white" /></button>
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
      <Certificates />
      <Footer />
    </div>
  );
}

export default Home;
