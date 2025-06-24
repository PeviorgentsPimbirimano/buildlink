import React from 'react';
import Button from './Button';

 function Team() {
  return (
    <section className='team'>
      <div className="left">
        <img src="src\assets\team-img.png" alt="" />
      </div>
      <div className="right">
        <h2>Meet Our Team</h2>
        <p>At Buildlink Zimbabwe, our dedicated team is committed to connecting you with the best professionals in the industry. With diverse backgrounds in construction, technology, and customer service, we work tirelessly to ensure a seamless experience for our users. Each member brings expertise and passion, making it our mission to foster trust and reliability in every connection. Together, we’re building a community that prioritizes quality and service.</p>
        <div className="team-btn">
          <Button btn={{text: "Learn more"}}/>
        </div>
      </div>
    </section>
  );
}

export default Team