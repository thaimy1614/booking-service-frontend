import React, { useEffect, useState } from "react";
import "./history.css";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import { getToken } from "../../../services/localStorageService";
import { useNavigate } from "react-router-dom";

const MainHistoryContent = ({ orders, onClick }) => {
  return (
    
      <section className="main-section-history">
        <h1>Lịch Sử</h1>
        <div className="card-container">
          {orders && orders.length > 0 ? (
            orders.map((order) => (
              <HistoryCard
                id={order.id}
                title={order.serviceName}
                price={order.price}
                status={order.status}
                onClick={onClick}
                imageNumber={(order.serviceId%5)+1}
              />
            ))
          ) : (
            <p>No services available.</p>
          )}
        </div>
        </section>

  );
};

function formatCurrency(number) {
  return new Intl.NumberFormat('de-DE').format(number);
}

const HistoryCard = ({ id, title, status, price, onClick, imageNumber }) => {
  return (
      <div className="card">
        <div className="image-section">
          <img 
            src={`/assets/img/order-${imageNumber}.png`}
            alt="Cloud" 
            className="cloud-image"
          />
        </div>
        <div className="text-section">
          <h2>Đơn Hàng {title}</h2>
          <p>1 sản phẩm</p>
          <p>Trạng thái: {status==="DONE"?"Đã hoàn thành":(status==="PENDING"?"Đang thực hiện":"Đã hủy")}</p>
          <p>Thành tiền: {formatCurrency(price)} VND</p>
          <button onClick={() => onClick(id)} className="details-button">Chi tiết</button>
        </div>
      </div>
  );
};


function History() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const accessToken = getToken();

    if (accessToken == null) {
      navigate("/login");
    } else {
      handleFetchOrders();
    }
  }, [navigate]);

  const handleClickHistoryDetail = (id) => {
    navigate("/history/"+id)
  };

  const [orders, setOrders] = useState([]);

  const handleFetchOrders = (event) => {
    fetch(process.env.REACT_APP_API + "/order", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.result)
        if (data.result != null) {
          setOrders(data.result);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  return (
    <div className="app-history">
      <Header />
      <MainHistoryContent orders={orders} onClick={handleClickHistoryDetail} />
      <Footer />
    </div>
  );
}

export default History;
