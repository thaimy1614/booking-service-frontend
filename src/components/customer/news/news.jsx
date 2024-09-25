/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import "./news.css";

const News = () => {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

// Corrected the function signature to use destructuring
const Card = ({ img, title, description }) => {
  return (
    <div className="card">
      <img src={`/assets/img/` + img} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href="#">See more</a>
    </div>
  );
};

export const NewCards = () => {
  const cardData = [
    {
      img: "new-1.png",
      title: "August 6th every year becomes Vietnam Cyber Security Day",
      description:
        "On September 20, Prime Minister Pham Minh Chinh signed Decision No. 1013/QD-TTg, which designated August 6 every year as Vietnam Cyber ​​Security Day.",
    },
    {
      img: "new-2.png",
      title: "US government removes unnecessary degree requirements for cybersecurity workers",
      description:
        "The US government will eliminate unnecessary degree requirements to prioritize skills-based hiring to meet the demand for 500,000 jobs in the cybersecurity field.",
    },
    {
      img: "new-3.png",
      title: "Warning of targeted cyberattack campaign targeting Vietnam",
      description:
        "The Department of Information Security recommends that agencies and organizations need to check and review information systems in use that may be affected by cyber attacks.",
    },
    {
      img: "new-4.png",
      title: "Many US businesses turn back to paper because of cyber attacks",
      description:
        "Many car dealers are having to deal with paperwork manually after the management system of supplier CDK was hacked.",
    },
    {
      img: "new-5.png",
      title: "Malware victims increase sharply in Vietnam",
      description:
        "The number of accounts exposed by malware increased 31 times in three years, while serious cyber attacks are also increasing in Vietnam.",
    },
    {
      img: "new-6.png",
      title: "Most passwords are cracked by AI in less than 60 seconds",
      description: "Most passwords are cracked by AI in less than 60 seconds.",
    },
  ];

  return (
    <section className="news-section">
      <div className="new-cards">
        {cardData.map((card, index) => (
          <Card
            key={index} // Unique key for each card
            img={card.img}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export const MainContent = () => {
  return (
    <main className="main-news">
      <section className="main-section">
        <h1>SOME NEWS WORTH NOTING TODAY</h1>
      </section>
      <NewCards />
    </main>
  );
};

export default News;
