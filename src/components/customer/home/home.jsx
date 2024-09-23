import React from "react";
import "./home.css";
import Navbar from "../navbar/navbar";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <header className="hero-section">
        <h1>TƯ VẤN CHIẾN LƯỢC THƯƠNG HIỆU</h1>
        <p>
          Hỗ trợ doanh nghiệp phát triển chiến lược thương hiệu tổng thể, phù
          hợp với mô hình kinh doanh.
        </p>
        <button className="consult-button">Tư vấn ngay</button>
      </header>
    </div>
  );
}

export default Home;
