import React from 'react';
import './Hero1.css'; // Make sure the CSS path matches your project structure

function Hero1({ Hero }) {
  return (
    <div className="hero1-section">
      <div className="hero1-image-wrapper">
        <img className="hero1-img" src={Hero.img} alt="Teamwork" />
        <div className="hero1-overlay">
          <div className="hero1-top-box">
            <h2>
              Get to <span className="hero1-highlight">know</span> Us
            </h2>
          </div>
          <div className="hero1-content">
            <h1>
              <span className="hero1-quote-mark">“</span>
              Your <span className="hero1-yellow">Trusted</span> Partner in <span className="hero1-yellow">Quality</span> Construction
              <span className="hero1-quote-mark hero1-quote-close">"</span>
            </h1>
            <p>
              "At BuildLink, we are passionate about transforming spaces and delivering quality craftsmanship. With a commitment to excellence and customer satisfaction, our journey began with a vision to provide reliable handyman services. Let us help you build your dreams!"
            </p>
          </div>
          <div className="hero1-scroll-down">
            <span className="hero1-scroll-icon">&#8595;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;