import React from "react";
import Service from "./components/customer/service/service";
import { Route, Routes } from "react-router-dom";
import Login from "./components/customer/login/login";
import Home from "./components/customer/home/home";
import About from "./components/customer/about/about";
import News from "./components/customer/news/news";
import Signup from "./components/customer/signup/signup";
import Authenticate from "./components/common/Authenticate";
import ChangePassword from "./components/customer/change-password/change-password";
import ForgetPassword from "./components/customer/forget-password/forget-password";
import UserInfo from "./components/customer/user-info/user-info";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/authenticate" element={<Authenticate />} />
        <Route path="/user/change-password" element={<ChangePassword />} />
        <Route path="/user/forget-password" element={<ForgetPassword />} />
        <Route path="/user/my-info" element={<UserInfo />} />
      </Routes>
    </div>
  );
};

export default App;
