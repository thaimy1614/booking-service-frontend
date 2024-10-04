import React, { useEffect, useState } from "react";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import "./category-detail.css";
import Loading from "../../common/loading";
import { useParams } from "react-router-dom";

const MainContent = ({ category }) => {
  return (
    <main>
      <section className="main-section">
        <h1>{category.name}</h1>
        <p>
          {category.description}
        </p>
        <h1>{category.name}</h1>
      </section>
      <section className="pricing-section">
        <h1>Chi tiết dịch vụ</h1>
        <div className="pricing-cards">
          {category && category.length > 0 ? (
            category.services.map((service) => (
              <PricingCard title={service.name} items={service.price} />
            ))
          ) : (
            <p>No services available.</p>
          )}
        </div>
      </section>
    </main>
  );
};

const PricingCard = ({ title, price }) => {
  return (
    <div className="pricing-card">
      <h3>
        {title} + {price}
      </h3>

      <button className="pricing-btn">XEM CHI TIẾT</button>
    </div>
  );
};

const CategoryDetail = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchCategoryById = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        process.env.REACT_APP_API + `/category/${id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setLoading(false);
      if (response.ok) {
        setCategory(data.result);
        console.log(data.result);
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
    fetchCategoryById();
  }, []);

  return (
    <div className="app">
      <Header />
      {loading && <Loading />}
      <MainContent category={category} />
      <Footer />
    </div>
  );
};

export default CategoryDetail;
