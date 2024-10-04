import React, { useEffect, useState } from "react";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import "./service-detail.css";
import Loading from "../../common/loading";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";

const MainContent = ({ service }) => {
  if (!service) {
    return <p>Loading service details...</p>; // Or a loading spinner
  }
  return (
    <main>
      <section className="main-section">
        <h1>{service.name}</h1>
        <p>{service.description}</p>
      </section>
      <section className="main-section">
        <h1>Lợi Ích Của {service.name}</h1>

        {service.benefits.map((benefit, index) => (
          <p key={index}>- {benefit}</p>
        ))}
      </section>
      <section className="main-section">
        <Button className="main-btn-service">
          Tư Vấn Ngay{" "}
          <FontAwesomeIcon icon={faArrowUpRightDots} size="1x" color="black" />
        </Button>
      </section>
    </main>
  );
};

const ServiceDetail = () => {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchCategoryById = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        process.env.REACT_APP_API + `/service/${id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setLoading(false);
      if (response.ok) {
        setService(data.result);
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
      <MainContent service={service} />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
