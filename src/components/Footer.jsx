import React from 'react';
import '../css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="custom-footer">
      <svg
        className="footer-svg-bg"
        viewBox="0 0 1920 70"
        width="100%"
        height="70"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M0,70 
            Q250,0 700,20 
            Q960,30 1220,20 
            Q1670,0 1920,70
            L1920,0 L0,0 Z"
          fill="#010101"
          stroke="#FEB300"
          strokeWidth="4"
        />
      </svg>
      <div className="footer-main-content">
        <div className="footer-logo-and-email">
          <img src="src/assets/logo.png" alt="BuildLink" className="footer-logo" />
          <div className="footer-email">www.buildlink@gmail.com</div>
        </div>
        <div className="footer-links">
          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Handyman</li>
              <li>Companies</li>
              <li>Specialists</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="footer-links-col">
            <h4>Handyman</h4>
            <ul>
              <li>Plumber</li>
              <li>Electrician</li>
              <li>Builder</li>
            </ul>
          </div>
          <div className="footer-links-col">
            <h4>Companies</h4>
            <ul>
              <li>Construction Companies</li>
              <li>Electrical Specialists</li>
              <li>Plumber Specialists</li>
              <li>Builder Specialists</li>
            </ul>
          </div>
        </div>
      </div>
        <div className="footer-social">
          <div className="footer-social-item">
            <FontAwesomeIcon icon={faLinkedin} />
            <span>linkedin</span>
          </div>
          <div className="footer-social-item">
            <FontAwesomeIcon icon={faFacebook} />
            <span>facebook</span>
          </div>
          <div className="footer-social-item">
            <FontAwesomeIcon icon={faInstagram} />
            <span>instagram</span>
          </div>
          <div className="footer-social-item">
            <FontAwesomeIcon icon={faTwitter} />
            <span>twitter</span>
          </div>
        </div>
    </footer>
  );
}