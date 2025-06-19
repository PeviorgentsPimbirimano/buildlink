import React from 'react';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src="src\assets\logo.png" />
      </div>
      <ul>
        <li><a href="#"><span>Home</span></a></li>
        <li><a href="#">Handyman</a></li>
        <li><a href="#">Companies</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
      <div className="icon-search">
        <div class="custom-search-bar">
          <div class="custom-search-icon">
            <svg width="22" height="22" fill="none" stroke="black" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <input class="custom-search-input" type="text" placeholder="Search.." />
        </div>
        <div className='icon'>
          <img src="src\assets\user-icon.png" />
        </div>
      </div>     
    </nav>
  );
}