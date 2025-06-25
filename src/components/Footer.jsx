import React from 'react';
import '../css/Home.css';

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-content-bottom">
        <div className="footer-columns">
          {/* Logo Column */}
          <div className="footer-logo-section">
            <img src="src/assets/buildlink-logo.png" alt="Buildlink Logo" className="footer-logo-img" />
          </div>
          {/* Quick Links */}
          <div className="footer-links-col">
            <div className="footer-col-title">Quick Links</div>
            <ul>
              <li>Home</li>
              <li>Handyman</li>
              <li>Companies</li>
              <li>Specialists</li>
              <li>About Us</li>
            </ul>
          </div>
          {/* Handyman Links */}
          <div className="footer-links-col">
            <div className="footer-col-title">Handyman</div>
            <ul>
              <li>Plumber</li>
              <li>Electrician</li>
              <li>Builder</li>
            </ul>
          </div>
          {/* Companies Links */}
          <div className="footer-links-col">
            <div className="footer-col-title">Companies</div>
            <ul>
              <li>Construction Companies</li>
              <li>Electrical Specialists</li>
              <li>Plumber Specialists</li>
              <li>Builder Specialists</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom-row">
          <div className="footer-email">www.buildlink@gmail.com</div>
          <div className="footer-socials">
            <a href="#" className="footer-social">
              <img src="src/assets/linkedin-icon.png" alt="linkedin" />
              <span>linkedin</span>
            </a>
            <a href="#" className="footer-social">
              <img src="src/assets/facebook-icon.png" alt="facebook" />
              <span>facebook</span>
            </a>
            <a href="#" className="footer-social">
              <img src="src/assets/instagram-icon.png" alt="instagram" />
              <span>instagram</span>
            </a>
            <a href="#" className="footer-social">
              <img src="src/assets/twitter-icon.png" alt="twitter" />
              <span>twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}