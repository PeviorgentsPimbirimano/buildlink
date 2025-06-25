import React from 'react';
import Button from './Button';
import '../css/Home.css'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>
          Get <span className="highlight-yellow">Quality</span> Service from <span className="highlight-yellow">Verified</span> Experts!
        </h1>
        <p className="hero-description">
          "Welcome to BuildLink! We turn your visions into reality with our skilled handyman services. From quick repairs to full renovations, our experienced team prioritizes quality and customer satisfaction. Let us handle the heavy lifting—contact us today for a free consultation!"
        </p>
        <Button  btn={{text: "Connect"}}/>
        </div>
    </section>
  );
}