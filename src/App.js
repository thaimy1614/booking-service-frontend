import React from "react";
import Service from "./components/customer/service/service";
import { Route, Routes } from "react-router-dom";
import Login from "./components/customer/login/login";
import Home from "./components/customer/home/home";
import About from "./components/customer/about/about";
import News from "./components/customer/news/news";
import Signup from "./components/customer/signup/signup";

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
      </Routes>
    </div>
  );
};

export default App;
