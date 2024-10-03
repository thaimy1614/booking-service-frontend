import React, { useEffect, useState } from "react";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import "./service.css";
import Loading from "../../common/loading";

const MainContent = ({services}) => {
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
        {services && services.length > 0 ? (
            services.map((category) => (
              <PricingCard title={category.name} items={category.services} />
            ))
          ) : (
            <p>No services available.</p>
          )}
        </div>
      </section>
    </main>
  );
};

const PricingCard = ({ title, items }) => {
  return (
    <div className="pricing-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button className="pricing-btn">XEM CHI TIẾT</button>
    </div>
  );
};

export const Certificates = () => {
  return (
    <section className="certificates">
      <h2>Chứng Chỉ</h2>
      <div>
        <img src="/assets/img/certificate.png" alt="Certificate" />
      </div>
    </section>
  );
};

const Service = () => {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const response = await fetch(process.env.REACT_APP_API + "/category", {
        method: "GET",
      });
      const data = await response.json();
      setLoading(false);
      if (response.ok) {
        setService(data.result);
        console.log(data.result)
        return data.result;
      } else {
        console.error("Failed to fetch services");
      }
    } catch (error) {
      console.error("Error fetching services:", error);
      setLoading(false);

    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="app">
      <Header />
      {loading && <Loading />}
      <MainContent services={service} />
      <Footer />
    </div>
  );
};

export default Service;
