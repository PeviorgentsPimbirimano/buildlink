import React from 'react';
import Button from './Button';
import ProfileCard from './ProfileCard';
import '../css/Home.css'

export default function Features() {
  return (
    <section className='features'>
      <div className='container'>
        <h2>Our Services</h2>
        <p>Buildlink Zimbabwe connects you with verified professionals for all your construction, plumbing, and electrical needs. Whether it’s a quick repair or a major project, our platform helps you find, compare, and hire the right experts for quality and reliability.</p>
      </div>
      <div className="container1">
        <ProfileCard
          occupation="Carpenter"
          name="Tashley Park"
          image="/services-img1.png"
          type="Handyman"
        />
        <ProfileCard
          occupation="Specialist"
          name="Mugo Plumbers"
          image="/services-img2.png"
        />
        <ProfileCard
          occupation="Contractors"
          name="APK Construction"
          image="/services-img3.png"
        />
      </div>
      <div className="feature-btn">
        <Button btn={{ text: "View all" }} />
      </div>
    </section>
  );
}