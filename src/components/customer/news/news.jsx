/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import "./news.css";
import { NavLink } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";


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
const Card = ({ id, date, type, img, title, description }) => {
  return (
    <div className="card">
      <img src={`/assets/img/` + img} alt={title} />
      <NavLink to={`/news/${id}`}><h2>{title}</h2></NavLink>
      <div className="card-date">
        <p className="date">
          <CalendarMonthIcon /> {date}
        </p>
        <p className="type">{type}</p>
      </div>
      <p>{description}</p>
      <NavLink to={`/news/${id}`}>Xem thêm</NavLink>
    </div>
  );
};


export const NewCards = () => {
  const cardData = [
    {
      id: 1,
      title: "Chiếm quyền iCloud rồi lừa đảo",
      date: "Aug 23, 2024",
      type: "Hardware security",
      url: "new-1.png",
      content: `
    Theo Công an tỉnh Tiền Giang, trước đó Phòng Cảnh sát hình sự tiếp nhận tin báo từ người dân về việc bị kẻ gian xâm nhập trái phép...
    `,
    },
    {
      id: 2,
      title: "Hơn 11 triệu thiết bị Android có thể bị nhiễm mã độc Necro",
      date: "12:00 | 03/10/2024",
      type: "HACKER / MALWARE",
      url: "new-2.png",
      content: `
    Với khả năng hoạt động ngầm và chiếm quyền kiểm soát hệ thống, mã độc Necro có thể thay đổi URL, cài đặt mã độc mới cho đến khi ...`,
    },
    {
      id: 3,
      title:
        "Mozilla đối mặt với cáo buộc xâm phạm quyền riêng tư của người dùng Firefox",
      date: "12:00 | 03/10/2024",
      type: "HACKER / MALWARE",
      url: "new-3.png",
      content: `
    Mozilla, công ty đứng sau trình duyệt web Firefox đang vướng vào một vụ tranh cãi về quyền riêng tư. Tổ chức phi lợi nhuận Noyb đã đệ...`,
    },
    {
      id: 4,
      title:
        "6 tháng đầu năm Việt Nam ghi nhận 20 sự cố tấn công mạng đặc biệt nghiêm trọng",
      date: "12:00 | 03/10/2024",
      type: "HACKER / MALWARE",
      url: "new-4.png",
      content: `Nhằm hưởng ứng Ngày Chuyển đổi số quốc gia 1010, mới đây, Sở TT&TT TP. Cần Thơ phối hợp cùng Tạp chí điện tử... `,
    },
    {
      id: 5,
      title:
        "CISA cảnh báo lỗ hổng nghiêm trọng Ivanti vTM đang bị khai thác tích cực",
      date: " 04/09/2024",
      type: "HACKER / MALWARE",
      url: "new-5.png",
      content: `
    Lỗ hổng định danh CVE-2024-7593 cho phép kẻ tấn công từ xa không cần xác thực có thể tạo tài khoản quản trị viên trái phép...`,
    },
    {
      id: 6,
      title: "Cảnh giác trước các chiêu thức mới của lừa đảo mạo danh",
      date: "Thứ Tư, 04/09/2024, 07:00",
      type: "Hardware security",
      url: "new-6.png",
      content: `
    Cục An toàn thông tin cho biết, thủ đoạn lừa đảo mới xuất hiện trong tuần qua là mạo danh lừa đảo tuyển dụng ngành hàng không...`,
    },
  ];

  return (
    <section className="news-section">
      <div className="new-cards">
        {cardData.map((card, index) => (
          <Card
            id={card.id}
            key={index}
            img={card.url}
            title={card.title}
            date={card.date}
            description={card.content}
            type={card.type}
          />
        ))}
      </div>
    </section>
  );
};

export const MainContent = () => {
  return (
    <main className="main-news">
      <section className="main-section-news">
        <h1>MỘT SỐ TIN TỨC XIN LƯU Ý HÔM NAY</h1>
      </section>
      <NewCards />
    </main>
  );
};

export default News;
