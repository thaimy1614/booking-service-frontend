import React from "react";
import Service from "./components/customer/service/service";
import { Route, Routes } from "react-router-dom";
import Login from "./components/customer/login/login";
import Home from "./components/customer/home/home";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/news" element={<Service />} />
        <Route path="/about" element={<Service />} />
        <Route path="/contact" element={<Service />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
