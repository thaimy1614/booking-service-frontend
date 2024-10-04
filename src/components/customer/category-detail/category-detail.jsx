import React, { useEffect, useState } from "react";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import "./category-detail.css";
import Loading from "../../common/loading";
import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";

const MainContent = ({ category }) => {
  if (!category) {
    return <p>Loading category details...</p>; // Or a loading spinner
  }
  return (
    <main>
      <section className="main-section">
        <h1>{category.name}</h1>
        <p>
          {category.description}
        </p>
      </section>
      <section className="main-section">
        <h1>Lợi Ích Của {category.name}</h1>
        
        {category.benefits.map((benefit, index) => (
          <p key={index}>- {benefit}</p>
        ))}

      </section>
      <section className="main-section">
        <h1>Các Dịch Vụ Của {category.name}</h1>
        {category.services.map((service, index) => (
          <NavLink to={"/service/"+service.id}  key={index}>- {service.name}  <FontAwesomeIcon icon={faArrowUpRightDots} size="1x" color="white" /></NavLink>
        ))}
      </section>
    </main>
  );
};


const CategoryDetail = () => {
  const [category, setCategory] = useState(null);
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
