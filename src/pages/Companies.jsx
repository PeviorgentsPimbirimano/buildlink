import React, { useEffect, useState } from "react";
import '../css/Companies.css'
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import Footer from '../components/Footer'

const employmentTypes = ["Contract", "Part-time", "Full-time"];
const experienceTypes = [
  "0-3 years",
  "3-5 years",
  "5-7 years",
  "7-10 years",
  "10+ years"
];

function Companies(){
  const [employment, setEmployment] = useState("Contract");
  const [experience, setExperience] = useState("0-3 years");

      // true = large image is first, false = swapped
  const [swapped, setSwapped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSwapped((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

    return(
        <>
        <NavBar />
        <div className="Company-hero">
            <div className="company-hero">
                <img src="/Company-hero.png" alt="" />   
            </div>
            <div className="review-row">
                <div className="review-images-left">
                    <img src="/review1.png" className="review-img" alt="user1"/>
                    <img src="/review2.png" className="review-img" alt="user2"/>
                    <img src="/review3.png" className="review-img" alt="user3"/>
                </div>
                <div className="review-info">
                    <div className="review-text">Customer reviews</div>
                    <div className="review-stars">
                        <img src="/stars.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="about-company-section">
                <h2>About AK Construction</h2>
                <p>
                    AK Construction is a leading contracting company with over 15 years of experience
                    dedicated to delivering high-quality construction services. Our team of skilled
                    professionals specializes in residential and commercial projects, ensuring each build
                    meets the highest standards of quality and craftsmanship .
                </p>
            </div>
        </div>
        <section className="our-services-section">
            <div className="services-text">
              <h2>Our Services</h2>
              <div className="services-list">
                <p>
                  <span className="service-highlight contracting">General Contracting:</span> Comprehensive
                  management of your construction projects from start to finish.
                </p>
                <p>
                  <span className="service-highlight remodeling">Renovations and Remodeling:</span> Transforming
                  spaces to meet your vision and needs.
                </p>
                <p>
                  <span className="service-highlight new-construction">New Construction:</span> Building homes and
                  commercial spaces tailored to your specifications.
                </p>
              </div>
            </div>
            <div className={`services-img-wrapper ${swapped ? "swap" : ""}`}>
              <img
                src="/services1.png"
                alt="Construction site"
                className={`services-img-large ${swapped ? "swap" : ""}`}
                style={swapped ? { zIndex: 3 } : { zIndex: 2 }}
              />
              <img
                src="/services2.png"
                alt="Construction tools"
                className={`services-img-small ${swapped ? "swap" : ""}`}
                style={swapped ? { zIndex: 2 } : { zIndex: 3 }}
              />
            </div>
        </section>
        <div className="company-abt">
          <div>
            <img src="/services3.png" alt="" />
          </div>
          <div>
            <h2>Why Choose AK Construction?</h2>
            <p><span className="service-highlight contracting">Expert Team:</span> Our skilled contractors bring expertise and dedication to every project.</p>
            <p><span className="service-highlight contracting">Commitment to Quality:</span> We use only the best materials and practices to ensure lasting results</p>
            <p><span className="service-highlight contracting">Customer Satisfaction:</span> Your vision is our priority; we work closely with you to bring it to life.</p>
          </div>
        </div>
        <div className="gallery">
          <h2>Gallery</h2>
          <div className="gallery-img">
            <img src="/gallery1.png" alt="Gallery Image 1" />
            <img src="/gallery2.png" alt="Gallery Image 2" />
            <img src="/gallery3.png" alt="Gallery Image 3" />
          </div>
        </div>
        <div className="company-btn">
          <Button btn={{text:"View all"}}/>
        </div>
          <section className="post-job-section">
            <div className="post-job-header">
              <h2>
                "You Have a Job for Us? Post it <span className="highlight-here">Here!</span>"
              </h2>
              <div className="post-job-info">
                <strong>Add job information</strong>
                <div className="post-job-desc">
                  {"Let's fill out the job information."}
                </div>
              </div>
            </div>
            <form className="post-job-form">
              <div className="post-job-inputs">
                <div className="post-job-field">
                  <label>Job title</label>
                  <input type="text" placeholder="Job title" />
                </div>
                <div className="post-job-field">
                  <label>Job Category</label>
                  <input type="text" placeholder="Select job category" />
                </div>
                <div className="post-job-field">
                  <label>Location</label>
                  <input type="text" placeholder="Select location" />
                </div>
              </div>
              <div className="post-job-options">
                <div className="post-job-option-group">
                  <div className="post-job-option-label">Employment type</div>
                  <div className="post-job-chips">
                    {employmentTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        className={`post-job-chip${employment === type ? " selected" : ""}`}
                        onClick={() => setEmployment(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="post-job-option-group">
                  <div className="post-job-option-label">Experience type</div>
                  <div className="post-job-chips">
                    {experienceTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        className={`post-job-chip${experience === type ? " selected" : ""}`}
                        onClick={() => setExperience(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </form>
            <div className="post-job-submit-row">
              <button className="post-job-submit-btn">SEND JOB</button>
            </div>
          </section>
          <Footer />
        </>
    );
}

export default Companies;