import React from 'react';
import "../css/Home.css"
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src="src\assets\logo.png" />
      </div>
      <ul>
        <li><span><Link to="/" className="nav-link">Home</Link></span></li>
        <li><Link to="/Handyman" className="nav-link">Handyman</Link></li>
        <li><Link to="/Companies" className="nav-link">Companies</Link></li>
        <li><Link to="/AboutUs" className="nav-link">About Us</Link></li>
      </ul>
      <div className="icon-search">
        <div className="custom-search-bar">
          <div className="custom-search-icon">
            <svg width="22" height="22" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <input className="custom-search-input" type="text" placeholder="Search.." />
        </div>
        <div className='icon'>
          <img src="src/assets/user-icon.png" />
        </div>
      </div>     
    </nav>
  );
}