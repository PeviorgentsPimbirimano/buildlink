import React from 'react';

export default function Footer() {
  return (
<footer class="footer-main">

  <div class="footer-curve">
    <svg viewBox="0 0 900 48" class="footer-curve-svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">

      <path d="M0,48 Q225,0 450,30 Q675,60 900,12 V48 Z" fill="#fff"/>

      <path d="M0,48 Q225,0 450,30 Q675,60 900,12" fill="none" stroke="#ffb400" stroke-width="2.5"/>
    </svg>
  </div>
  <div class="footer-content">
    <div class="footer-columns">

      <div class="footer-col logo-col">
        <img src="buildlink-logo.png" alt="BuildLink Logo" class="footer-logo"/>
        <div class="footer-email">www.buildlink@gmail.com</div>
      </div>

      <div class="footer-col">
        <div class="footer-title">Quick Links</div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Handyman</a></li>
          <li><a href="#">Companies</a></li>
          <li><a href="#">Specialists</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <div class="footer-title">Handyman</div>
        <ul>
          <li><a href="#">Plumber</a></li>
          <li><a href="#">Electrician</a></li>
          <li><a href="#">Builder</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <div class="footer-title">Companies</div>
        <ul>
          <li><a href="#">Construction Companies</a></li>
          <li><a href="#">Electrical Specialists</a></li>
          <li><a href="#">Plumber Specialists</a></li>
          <li><a href="#">Builder Specialists</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-socials">
      <a href="#"><i class="fab fa-linkedin-in"></i> linkedin</a>
      <a href="#"><i class="fab fa-facebook-f"></i> facebook</a>
      <a href="#"><i class="fab fa-instagram"></i> instagram</a>
      <a href="#"><i class="fab fa-twitter"></i> twitter</a>
    </div>
  </div>
</footer>
  );
}