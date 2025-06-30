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
              {Hero.h2}
            </h2>
          </div>
          <div className="hero1-content">
            <h1>
              <span className="hero1-quote-mark">“</span>
              {Hero.h1}
              <span className="hero1-quote-mark hero1-quote-close">”</span>
            </h1>
            <p>
              {Hero.p}
            </p>
          </div>
          <div className="hero1-scroll-down">
            <svg
              className="hero1-scroll-arrow"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="circle-gradient" x1="0" y1="0" x2="0" y2="56" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFD600" />
                  <stop offset="1" stopColor="#F44336" />
                </linearGradient>
              </defs>
              <circle
                cx="28"
                cy="28"
                r="27"
                stroke="url(#circle-gradient)"
                strokeWidth="2"
                fill="white"
              />
              <g>
                <path
                  d="M28 18V36"
                  stroke="#111"
                  strokeWidth="4"
                  strokeLinecap="square"
                />
                <path
                  d="M22 30L28 36L34 30"
                  stroke="#111"
                  strokeWidth="4"
                  strokeLinecap="square"
                  strokeLinejoin="bevel"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;