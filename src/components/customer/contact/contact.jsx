import React, { useState } from "react";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import "./contact.css";

const SupportForm = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phoneNumber: '',
      position: '',
      company: '',
      subject: '',
      details: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log(formData);
    };
  
    return (
      <div className="form-container">
        <h2>Submit a support request</h2>
        <form onSubmit={handleSubmit} className="support-form">
          <label>
            Full name
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
          </label>
          <label>
            Email*
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Phone number*
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </label>
          <label>
            Position*
            <input type="text" name="position" value={formData.position} onChange={handleChange} required />
          </label>
          <label>
            Company*
            <input type="text" name="company" value={formData.company} onChange={handleChange} required />
          </label>
          <label>
            Subject*
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
          </label>
          <label>
            Request details
            <textarea name="details" value={formData.details} onChange={handleChange} rows="4"></textarea>
          </label>
          <button type="submit">Submit request</button>
        </form>
      </div>
    );
  };
  


const MainContent = () => {
  return (
    <main>
      <section className="main-section">
        <h1>What support do you need?</h1>
        <p>
        Please let us know exactly what issue you are having. Our support team is always ready to help.
        </p>
      </section>
      <section className="pricing-section">
        <h2>Support process</h2>
        <img className="process" alt="process" src="/assets/img/process.png"/>
      </section>
      <section className="pricing-section">
        <SupportForm />
      </section>
    </main>
  );
};


const Contact= () => {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Contact;
