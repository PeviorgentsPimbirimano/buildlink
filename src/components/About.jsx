import React from 'react';
import Button from '../components/Button';


 function About() {
  return (
    <section className='about'>
      <div className="col-md-1  about-sect1">
        <h2><span>15+</span></h2>
        <p>Years of<br />Experience</p>
      </div>
      <div className="col-md-6 about-sect2">
        <p className='subtitle'><img src="src\assets\about-icon.png" alt="" /> Why choose us?</p>
        <h2>"Your <span>Trusted</span> Source for Skilled <span>Professionals!"</span></h2>
        <p>We aim to simplify the process of finding trustworthy professionals by providing a user-friendly marketplace that prioritizes quality and credibility. Our goal is to foster a community where skilled tradespeople can showcase their expertise and connect with clients who value their services.</p>
        <div className="Snd-pt">
          <div>
            <ul>
              <li><img src="src\assets\about-icon.png" alt="" /> Verified Professionals</li>
              <li><img src="src\assets\about-icon.png" alt="" /> User-Friendly Experience</li>
              <li><img src="src\assets\about-icon.png" alt="" /> Transparent Reviews</li>
              <li><img src="src\assets\about-icon.png" alt="" /> Geolocation Services</li>
            </ul>
          </div>
          <div className='Snd-pt-img'>
            <img src="src\assets\abtIMG.PNG" />
          </div>
        </div>
        <Button btn={{text: "Learn more"}}/>
      </div>
    </section>
  );
}

export default About