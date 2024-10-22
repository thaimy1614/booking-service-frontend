import React, { useEffect, useState } from "react";
import "./process.css";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import { useParams } from "react-router-dom";
import Loading from "../../common/loading";
import { getToken } from "../../../services/localStorageService";
import { formatCurrency } from "../history/history";
import MessageModal from "../../common/message-modal";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Slide,
} from "@mui/material";
import RatingStar from "../../common/rating-star/rating-star";

const FormModal = ({ open, handleClose, onSubmit, formData }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Slide}
      transitionDuration={500}
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiDialog-paper": {
          padding: "16px",
          borderRadius: "16px",
          backgroundColor: "#fff",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease-in-out",
        },
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          transition: "opacity 0.5s ease-in-out",
        },
      }}
    >
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        {formData.title}
      </DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {formData.fields.map((field, index) =>
            field.type === "rating" ? (
              <div key={index}>
                <label style={{ marginBottom: "8px", display: "block" }}>
                  {field.label}
                </label>
                <RatingStar
                  totalStars={5}
                  rating={field.value}
                  onRating={field.onChange}
                />
              </div>
            ) : (
              <TextField
                value={field.value}
                key={index}
                label={field.label}
                type={field.type || "text"}
                name={field.name}
                fullWidth
                margin="normal"
                required={field.required || false}
                onChange={field.onChange}
                disabled={field.disable || false}
              />
            )
          )}
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", padding: "16px" }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{ marginRight: 2 }}
          >
            Hủy
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "green", color: "white" }}
          >
            {formData.submitText}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const StepOrder = ({ time, stepName, id }) => {
  return (
    <div className="step-container">
      <div className="step-content">
        {time ? (
          <span className="step-time">{time}</span>
        ) : (
          <span className="step-time empty"></span>
        )}

        <img
          className="step-icon"
          alt="process"
          src={`/assets/img/step-${id}.png`}
        />

        <span className="step-name">{stepName}</span>
      </div>
    </div>
  );
};

const Project = ({ order, ratingStaff }) => {
  console.log(order);
  if (!order) {
    return <p>Loading order details...</p>; // Or a loading spinner
  }
  return (
    <section className="main-section-about-process">
      <h1>{order.serviceName}</h1>
      <p>
        <img style={{ width: 50 }} alt="staff" src="/assets/img/staff.png" />{" "}
        Tên nhân viên phụ trách: {order.staffName}.{" "}
        <button
          className="login-btn"
          type="button"
          onClick={() => ratingStaff()}
        >
          Đánh giá
        </button>
      </p>
      <p>
        <img
          style={{ width: 50, position: "relative", top: 10 }}
          alt="price"
          src="/assets/img/price.png"
        />{" "}
        Giá dịch vụ: {formatCurrency(order.price)} VND
      </p>
    </section>
  );
};

const processOrder = [
  {
    id: 1,
    name: "Đã tiếp nhận đơn dịch vụ",
    time: "",
  },
  {
    id: 2,
    name: "Nhân viên kết nối được với khách hàng",
    time: "",
  },
  {
    id: 3,
    name: "Tiến hành xử lí dịch vụ",
    time: "",
  },
  {
    id: 4,
    name: "Đã hoàn thành dịch vụ",
    time: "",
  },
];

const FullProcess = ({ order }) => {
  if (!order) {
    return <p>Loading order details...</p>; // Or a loading spinner
  }

  const stepsToShow = processOrder.filter((item) => item.id <= order.stageId);
  return (
    <section className="main-section-about-process">
      <h1>Tiến độ</h1>
      <div className="about-process">
        <div className="image-grid-process">
          {stepsToShow.map((item) => {
            let time = "";

            if (item.id === 1) {
              time = order.createdDate;
            }

            if (item.id === order.stageId) {
              time = order.updatedDate;
            }

            return (
              <StepOrder
                key={item.id}
                id={item.id}
                stepName={item.name}
                time={time}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  const [isModalOTPOpen, setIsModalOTPOpen] = useState(false);
  const [messageModalOpen, setMessageModal] = useState(false);
  const [messageType, setMessageType] = useState(false);
  const [message, setMessage] = useState(
    "Đánh giá thành công, S - SERVICE xin cảm ơn quý khách"
  );
  const [staffName, setStaffName] = useState(null);
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");

  const checkOTPFormData = {
    title: "Đánh giá nhân viên",
    fields: [
      {
        value: staffName,
        label: "Tên nhân viên",
        name: "staffName",
        required: true,
        onChange: (e) => setStaffName(e.target.value),
        disable: true,
      },

      {
        value: feedback,
        label: "Phản hồi (nếu có)",
        name: "OTP",
        type: "text",
        required: true,
        onChange: (e) => setFeedback(e.target.value),
      },

      {
        label: "Đánh giá chất lượng",
        name: "rating",
        value: rating,
        type: "rating",
        onChange: setRating,
      },
    ],
    submitText: "Đánh giá",
  };

  const showRatingStaff = () => {
    setStaffName(order.staffName);
    setIsModalOTPOpen(true);
  };

  const fetchOrder = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/order/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      const data = await response.json();
      setLoading(false);
      if (response.ok) {
        setOrder(data.result);
        console.log(data.result);
        return data.result;
      } else {
        console.error("Failed to fetch order");
      }
    } catch (error) {
      console.error("Error fetching order:", error);
      setLoading(false);
    }
  };

  const handleRatingStaff = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch(process.env.REACT_APP_API + "/rating-staff", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({
        staffName: staffName,
        rating: rating,
        feedback: feedback,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        console.log("Response body:", data);
        if (data.result) {
          setMessageType(true);
          setMessage("Đánh giá thành công, S - Service xin cảm ơn quý khách");
          setIsModalOTPOpen(true);
          setMessageModal(true);
          return;
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setMessageType(false);
        setMessage("Đã có lỗi xảy ra, vui lòng thử lại!");
        setMessageModal(true);
      });
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const handleFormModalClose = () => {
    setIsModalOTPOpen(false);
    setLoading(false);
    setMessageModal(false);
  };
  const handleMessageModalClose = () => {
    setLoading(false);
    setMessageModal(false);
  };

  return (
    <div className="app">
      <Header />
      {loading && <Loading />}

      <Project ratingStaff={showRatingStaff} order={order} />

      <FullProcess order={order} />
      <Footer />
      {messageModalOpen && (
        <MessageModal
          message={message}
          open={messageModalOpen}
          handleClose={handleMessageModalClose}
          messageType={messageType}
        />
      )}
      {isModalOTPOpen && (
        <FormModal
          handleClose={handleFormModalClose}
          open={isModalOTPOpen}
          formData={checkOTPFormData}
          onSubmit={handleRatingStaff}
        />
      )}
    </div>
  );
};

export default Process;
